"use server";

import { fetchApiClient } from "@/lib/oneentry";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { IOrderData } from "oneentry/dist/orders/ordersInterfaces";

export default async function createOrder(orderData: IOrderData): Promise<string> {
    const apiClient = await fetchApiClient();
    if (!apiClient) {
        throw new Error("Unable to fetch API client");
    }
    const accessToken = cookies().get("access_token")?.value;

    if (!accessToken) {
        throw new Error("Access token is required");
    }

    try {
        const createdOrder = await apiClient.Orders.setAccessToken(accessToken).createOrder("orders", orderData);
        if (!createdOrder?.id) {
            throw new Error("Failed to create order");
        }

        const paymentSession = await apiClient.Payments.setAccessToken(accessToken).createSession(createdOrder.id, "session");
        if (!paymentSession?.paymentUrl) {
            throw new Error("Failed to create payment session");
        }
        return paymentSession.paymentUrl;

    } catch (error) {
        console.error("Error during order and payment processing", error);
        throw new Error("Failed to create order");
    }

}
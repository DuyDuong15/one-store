"use server";

import { fetchApiClient } from "@/lib/oneentry";
import { cookies } from "next/headers";

export const getOrder = async () => {
    try {
        const apiClient = await fetchApiClient();
        const accessToken = cookies().get("access_token")?.value;
        if (!accessToken) {
            throw new Error("Access token is required");
        }
        const orders = await apiClient.Orders.setAccessToken(accessToken).getAllOrdersByMarker("orders");
        return orders;
    } catch (error) {
        console.log(error);
    }
}
"use server";
import { fetchApiClient } from "@/lib/oneentry";
import { cookies } from "next/headers";

interface IErrorResponse {
    statusCode: number;
    message: string;
}

export default async function getUserSession() {
    const apiClient = await fetchApiClient();
    const accessToken = cookies().get("access_token")?.value;

    if (!accessToken) {
        return null;
    }

    try {
        const currentUser = await apiClient.Users.setAccessToken(accessToken).getUser();
        if (!currentUser || !currentUser.id) {
            throw new Error("Invalid user data or missing user Id.");
        }
        return currentUser;
    } catch (err: unknown) {
        if (err instanceof Error && (err as unknown as IErrorResponse).statusCode === 401) {
            return undefined;
        }
        console.error("Failed to retrieve user session:", err);
    }
}
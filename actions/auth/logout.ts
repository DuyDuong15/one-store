"use server";

import { fetchApiClient } from "@/lib/oneentry";
import { cookies } from "next/headers";

interface IErrorResponse {
    statusCode: number;
    timestamp: string;
    message: string;
    pageData: null;
}
export default async function logoutAction() {
    const cookiesStore = cookies();
    const refreshToken = cookies().get("refresh_token")?.value;
    const accessToken = cookies().get("access_token")?.value;

    const apiClient = fetchApiClient();

    if (!refreshToken || !accessToken) {
        return {
            message: "You are not curently logged in"
        }
    }
    try {
        const logoutResponse = (await apiClient).AuthProvider.setAccessToken(accessToken).logout("email", refreshToken);
        if (typeof logoutResponse !== "boolean") {
            const errorReponse = logoutResponse as unknown as IErrorResponse;
            return {
                message: errorReponse.message,
            };
        }
        cookiesStore.delete("refresh_token");
        cookiesStore.delete("access_token");

        cookiesStore.set("refresh_token", "", { maxAge: 0 });
        cookiesStore.set("access_token", "", { maxAge: 0 });

        return { message: "Logout Successfull." };
    } catch (err) {
        console.error("Error during loggout:", err);
        throw new Error("An error occurred while logging out.Please try again.");
    }
}
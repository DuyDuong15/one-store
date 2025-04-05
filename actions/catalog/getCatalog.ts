"use server";

import { fetchApiClient } from "@/lib/oneentry";
import { IPagesEntity } from "oneentry/dist/pages/pagesInterfaces";


export const getCatalogs = async (): Promise<IPagesEntity[]> => {
    try {
        const apiClient = await fetchApiClient();
        const pages = await apiClient.Pages.getRootPages("en_US");
        const catalogPages = pages.filter(
            (page) => page.type === "forCatalogPages"
        );
        return catalogPages.length ? catalogPages : [];
    } catch (error) {
        console.error({ error });
        return [];
    }
}
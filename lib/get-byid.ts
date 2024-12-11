'use server'

import { prisma } from "./prisma";

export const getClientById = async (id: string) => {
    try {
        const result = await prisma.client.findUnique({
            where: { id },
           });
        return result;
    } catch (error) {
        console.log("Error " + error);
        throw new Error("Failed to fetch data");
    }
};
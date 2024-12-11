'use server'

import { prisma } from "./prisma";

export const getAllClients = async () => {
    try {
        const clients = await prisma.client.findMany({
        });
        return clients;
    } catch (error) {
        console.log("Error getting post: " + error);
    }
}
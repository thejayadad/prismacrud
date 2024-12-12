'use server'

import { prisma } from "./prisma";


export async function getPaidClients() {
    try {
        return await prisma.client.findMany({
            where: {
                status: 'paid',
            },
        });
    } catch (error) {
        console.error('Error fetching paid clients:', error);
        return [];
    }
}

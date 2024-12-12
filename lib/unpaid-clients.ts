'use server';

import { prisma } from './prisma';

export async function getUnpaidClients() {
    try {
        return await prisma.client.findMany({
            where: {
                status: 'unpaid',
            },
        });
    } catch (error) {
        console.error('Error fetching unpaid clients:', error);
        return [];
    }
}

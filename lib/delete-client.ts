'use server';

import { revalidatePath } from "next/cache";
import { prisma } from "./prisma";

export const deleteClient = async (formData: FormData) => {
    const id = formData.get("id") as string;

    if (!id) {
        console.error("Error: Missing ID");
        return { message: "ID is required to delete a client" };
    }

    try {
        const data = await prisma.client.findUnique({
            where: { id },
        });

        if (!data) {
            return { message: "No data found" };
        }

        await prisma.client.delete({
            where: { id },
        });

    } catch (error) {
        console.error("Error deleting client: ", error);
        return { message: "Failed to delete client data" };
    }
    revalidatePath("/");

};

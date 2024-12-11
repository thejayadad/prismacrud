'use server';

import { z } from "zod";
import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";

const FormSchema = z.object({
    id: z.string().min(1, "ID is required"),
    name: z.string().min(1, "Name is required"),
    status: z.enum(["paid", "unpaid"], {
        errorMap: () => ({ message: "Status must be either 'paid' or 'unpaid'" }),
    }),
    total: z.preprocess((value) => parseFloat(value as string), z.number().positive("Total must be a positive number")),
});

export const updateClient = async (formData: FormData) => {
    const validatedFields = FormSchema.safeParse(
        Object.fromEntries(formData.entries())
    );

    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { id, name, status, total } = validatedFields.data;

    try {
        await prisma.client.update({
            where: { id },
            data: { name, status, total },
        });
    } catch (error) {
        console.error("Error updating client: ", error);
        return { message: "Failed to update client data" };
    }

    revalidatePath("/");
    return { success: true };
};

'use server';

import { z } from "zod";
import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";

const FormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    status: z.enum(["paid", "unpaid"], { errorMap: () => ({ message: "Status must be either 'paid' or 'unpaid'" }) }),
    total: z.preprocess(
        (value) => {
            const parsedValue = parseFloat(value as string);
            return isNaN(parsedValue) ? undefined : parsedValue; // Return undefined for invalid numbers
        },
        z.number({
            required_error: "Total is required",
            invalid_type_error: "Total must be a number",
        }).positive("Total must be a positive number")
    ),
});

     
export async function createClient(prevState: unknown, formData: FormData) {

    const validatedFields = FormSchema.safeParse(
        Object.fromEntries(formData.entries())
    );

    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors, // Return only fieldErrors
        };
    }

    const { name, status, total } = validatedFields.data;

    console.log("Form Data Parsed Successfully:");
    console.log(`Name: ${name}, Status: ${status}, Total: ${total}`);

    try {
        await prisma.client.create({
            data: {
                name,
                status,
                total
            }
        });
    } catch (error) {
        console.error("Database Error:", error);
        return { error: { message: ["Failed to create client data"] } }; // Return general error
    }

    revalidatePath("/");
    return { success: true };
}

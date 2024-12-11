'use client';

import React from 'react';
import { SubmitButton } from './submit-btn';

interface Client {
    id: string;
    name: string;
    status: "paid" | "unpaid";
    total: number;
}

interface Props {
    client: Client;
    updateAction: (formData: FormData) => Promise<any>;
    deleteAction: (formData: FormData) => Promise<any>;
}

const ClientCard: React.FC<Props> = ({ client, updateAction, deleteAction }) => {
    return (
        <div className="border p-4 rounded shadow-md mb-4">
            <h3 className="text-lg font-semibold">{client.name}</h3>
            <p>Status: {client.status}</p>
            <p>Total: {client.total}</p>

            {/* Update Form */}
            <form action={updateAction} className="mt-2">
                <input type="hidden" name="id" value={client.id} />
                <input
                    name="name"
                    defaultValue={client.name}
                    placeholder="Name"
                    className="border rounded p-2 w-full mb-2"
                />
                <select
                    name="status"
                    defaultValue={client.status}
                    className="border rounded p-2 w-full mb-2"
                >
                    <option value="paid">Paid</option>
                    <option value="unpaid">Unpaid</option>
                </select>
                <input
                    name="total"
                    type="number"
                    defaultValue={client.total}
                    placeholder="Total"
                    className="border rounded p-2 w-full mb-2"
                />
                <SubmitButton defaultText="Update" pendingText="Updating..." />
                </form>

            {/* Delete Form */}
            <form action={deleteAction}  className="mt-2">
                <input type="hidden" name="id" defaultValue={client.id} />
                <SubmitButton defaultText="Delete" pendingText="Deleting..." />

            </form>
        </div>
    );
};

export default ClientCard;

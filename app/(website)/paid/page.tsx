import React from 'react';
import { getPaidClients } from '@/lib/get-paid-clients';

const PaidPage = async () => {
    const paidClients = await getPaidClients();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold text-gray-600 leading-8 mb-4">Paid Clients</h1>

            {paidClients.length === 0 ? (
                <p className="text-gray-500">No clients have paid yet.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {paidClients.map((client) => (
                        <div
                            key={client.id}
                            className="p-4 border rounded shadow-md text-center"
                        >
                            <h2 className="text-lg font-semibold">{client.name}</h2>
                            <p>Total Paid: ${client.total.toFixed(2)}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PaidPage;

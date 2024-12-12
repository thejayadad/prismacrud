import { getUnpaidClients } from '@/lib/unpaid-clients';
import React from 'react';

const UnpaidPage = async () => {
    const unpaidClients = await getUnpaidClients();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold text-gray-600 leading-8 mb-4">Unpaid Clients</h1>

            {unpaidClients.length === 0 ? (
                <p className="text-gray-500">No clients have unpaid balances.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {unpaidClients.map((client) => (
                        <div
                            key={client.id}
                            className="p-4 border rounded shadow-md text-center"
                        >
                            <h2 className="text-lg font-semibold">{client.name}</h2>
                            <p>Total Unpaid: ${client.total.toFixed(2)}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default UnpaidPage;

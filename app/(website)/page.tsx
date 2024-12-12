import Clientform from "@/components/client-form";
import ClientCard from "@/components/client-card";
import { getAllClients } from "@/lib/get-clients";
import { updateClient } from "@/lib/update-client";
import { deleteClient } from "@/lib/delete-client";

export default async function Home() {
    const clients = await getAllClients();

    // Calculate totals
    const totalClients = clients.length;
    const totalPaidClients = clients.filter((client: { status: string; }) => client.status === "paid").length;
    const totalUnpaidClients = clients.filter((client: { status: string; }) => client.status === "unpaid").length;
    const totalPaidAmount = clients
        .filter((client: { status: string; }) => client.status === "paid")
        .reduce((sum: any, client: { total: any; }) => sum + client.total, 0);
    const totalUnpaidAmount = clients
        .filter((client: { status: string; }) => client.status === "unpaid")
        .reduce((sum: any, client: { total: any; }) => sum + client.total, 0);

    return (
        // <div className="container mx-auto p-4">
        //     <h1 className="text-xl font-bold text-gray-600 leading-8 mb-4">Clients</h1>

        //     {/* Summary Cards */}
        //     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        //         <div className="p-4 border rounded shadow-md text-center">
        //             <h2 className="text-lg font-semibold">Total Clients</h2>
        //             <p className="text-2xl">{totalClients}</p>
        //         </div>
        //         <div className="p-4 border rounded shadow-md text-center">
        //             <h2 className="text-lg font-semibold">Total Paid Clients</h2>
        //             <p className="text-2xl">{totalPaidClients}</p>
        //         </div>
        //         <div className="p-4 border rounded shadow-md text-center">
        //             <h2 className="text-lg font-semibold">Total Unpaid Clients</h2>
        //             <p className="text-2xl">{totalUnpaidClients}</p>
        //         </div>
        //         <div className="p-4 border rounded shadow-md text-center bg-green-100">
        //             <h2 className="text-lg font-semibold">Total Paid Amount</h2>
        //             <p className="text-2xl">${totalPaidAmount.toFixed(2)}</p>
        //         </div>
        //         <div className="p-4 border rounded shadow-md text-center bg-red-100">
        //             <h2 className="text-lg font-semibold">Total Unpaid Amount</h2>
        //             <p className="text-2xl">${totalUnpaidAmount.toFixed(2)}</p>
        //         </div>
        //     </div>

        //     {/* Client Form */}
        //     <Clientform />

        //     {/* Client Cards */}
        //     <div className="mt-4">
        //         {clients.map((client) => (
        //             <ClientCard key={client.id} client={client}
        //                 updateAction={updateClient}
        //                 deleteAction={deleteClient}
        //             />
        //         ))}
        //     </div>
        // </div>
        <div>
            homePage
        </div>
    );
}

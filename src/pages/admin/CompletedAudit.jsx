import React from "react";
import Table from "../../components/Table";
import { ArrowLeft, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Component for the Audit column (Title, Subtitle, Avatar)
const AuditCell = ({ name, address, category, iconColor }) => (
    <div className="flex items-center space-x-4">
        {/* Avatar */}
        <div className={`w-10 h-10 flex items-center justify-center rounded-full ${iconColor}`}>
            <span className="text-white text-sm font-bold">🏢</span>
        </div>
        {/* Title & Subtitle */}
        <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-500">{address} - {category}</p>
        </div>
    </div>
);

// Component for Status column (Check icon + text)
const StatusCell = ({ status }) => (
    <div className="flex items-center space-x-2 font-medium">
        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-600">
            <Check className="w-4 h-4 text-white" />
        </div>
        <span>{status}</span>
    </div>
);


const CompletedAudits = () => {
    const navigate = useNavigate();

    // Define table columns
    const columns = [
        { label: "S/N", accessor: "sn" },
        {
            label: "Audit",
            accessor: "audit",
            render: (audit) => <AuditCell {...audit} />
        },
        {
            label: "Status",
            accessor: "status",
            render: (status) => <StatusCell status={status} />
        },
        {
            label: "Action",
            accessor: "action",
            render: (value) => <a href={value} className="text-[#333333] underline">
                See More
            </a>
        }
    ];

    // Define table data
    const data = [
        { sn: 1, audit: { name: "Downtown Corporate", address: "1225 Main Street, Chicago, IL 60601", category: "Commercial", iconColor: "bg-blue-500" }, status: "Completed", action: "#" },
        { sn: 2, audit: { name: "Silicon Valley Tech Hub", address: "1225 Main Street, Chicago, IL 60601", category: "Industrial Sector", iconColor: "bg-yellow-500" }, status: "Completed", action: "#" },
        { sn: 3, audit: { name: "Mercy Regional Hospital", address: "1225 Main Street, Chicago, IL 60601", category: "Healthcare", iconColor: "bg-blue-500" }, status: "Completed", action: "#" },
        { sn: 4, audit: { name: "Green Manufacturing Plant", address: "1225 Main Street, Chicago, IL 60601", category: "Commercial", iconColor: "bg-green-500" }, status: "Completed", action: "#" }
    ];

    return (
        <div className="p-6 bg-[#E8F5E9] min-h-screen">
            <div className="p-4 rounded-md mb-4">
                <button className="flex items-center text-[#333333] hover:text-[#333333]" onClick={() => navigate(-1)}>
                    <ArrowLeft className="mr-2" /> Back
                </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
                <h1 className="text-2xl font-bold mb-4">Completed Audits</h1>
                <Table columns={columns} data={data} theadClass="bg-[#38A169] text-white" />
            </div>
        </div>
    );
};

export default CompletedAudits;

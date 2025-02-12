import React from "react";

const Table = ({ columns, data, theadClass }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full">
                <thead className={theadClass}>
                    <tr>
                        {columns.map((col, index) => (
                            <th
                                key={index}
                                className={`py-2 px-6 text-left border-b border-gray-300 
                    ${index === 1 ? "border-l-4 border-white" : ""}
                    ${index === 0 ? "w-12 text-center" : ""} // Reduce width of S/N column
                `}
                            >
                                {col.label}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className={`${rowIndex === data.length - 1 ? "" : "border-b border-gray-200"}`}>
                            {columns.map((col, colIndex) => (
                                <td key={colIndex} className="py-2 px-4">
                                    {col.render ? col.render(row[col.accessor], row) : row[col.accessor]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;

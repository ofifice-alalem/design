import React from 'react';
import { ArrowUpDown, Eye, Edit3, Phone, Trash2, MoreVertical } from 'lucide-react';

export const Table = ({ columns, data, emptyMessage = "لا توجد سجلات حالياً.", onRowClick, viewMode = 'table', cardClassName }) => {

    if (viewMode === 'grid') {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in zoom-in-95 duration-500">
                {data.map((row, idx) => (
                    <div
                        key={idx}
                        className={`table-card ${cardClassName ? cardClassName(row) : ''}`}
                        onClick={() => onRowClick && onRowClick(row)}
                    >
                        {/* Specular highlight */}
                        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/40 dark:from-white/5 to-transparent pointer-events-none z-0" />

                        {/* Status Glow (if status exists) — Subdued Neon for Success/Pending */}
                        {row.status && (
                            <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full blur-[40px] transition-all duration-500 group-hover:scale-125
                                ${row.status.includes('approved') ? 'status-glow-approved' :
                                    row.status.includes('reject') ? 'status-glow-rejected' :
                                        'status-glow-pending'}`}
                            />
                        )}

                        <div className="flex justify-between items-start mb-5 pb-4 border-b border-gray-100/60 dark:border-white/8 relative z-10">
                            <div className="flex flex-col gap-1">
                                <span className="text-xs font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-widest bg-blue-50 dark:bg-cyan-500/10 px-2 py-0.5 rounded-md self-start border border-blue-100 dark:border-cyan-500/20 shadow-sm">
                                    {row.reqId || row.id}
                                </span>
                                <h4 className="font-extrabold text-gray-800 dark:text-white text-lg tracking-tight mt-2">
                                    {columns.find(c => c.accessor === 'product' || c.accessor === 'user')?.render
                                        ? columns.find(c => c.accessor === 'product' || c.accessor === 'user').render(row)
                                        : (row.product || row.user)}
                                </h4>
                            </div>
                            <div className="p-2 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                                <MoreVertical className="w-4 h-4 text-gray-400" />
                            </div>
                        </div>

                        <div className="space-y-4 relative z-10">
                            {columns.filter(c => !['id', 'product', 'reqId', 'user', 'actions'].includes(c.accessor)).map((col, colIndex) => (
                                <div key={colIndex} className="flex justify-between items-center text-sm">
                                    <span className="text-gray-400 dark:text-gray-400 font-bold text-[11px] uppercase tracking-wider">{col.header}</span>
                                    <div className="font-bold text-gray-700 dark:text-white">
                                        {col.render ? col.render(row) : row[col.accessor]}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {columns.find(c => c.accessor === 'actions') && (
                            <div className="mt-6 pt-4 border-t border-gray-100/60 dark:border-white/8 relative z-10 flex justify-end">
                                <div className="transition-all duration-500">
                                    {columns.find(c => c.accessor === 'actions').render(row)}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="w-full table-wrapper animate-in fade-in duration-500">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="table-header">
                        <tr>
                            {columns.map((col, idx) => (
                                <th
                                    key={idx}
                                    className="px-6 py-5 text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.15em] whitespace-nowrap"
                                >
                                    <div className="flex items-center gap-2 group/th cursor-help">
                                        {col.header}
                                        {col.sortable && <ArrowUpDown className="w-3 h-3 group-hover/th:text-blue-500 dark:group-hover/th:text-cyan-400 transition-colors" />}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100/60 dark:divide-white/5">
                        {data.length > 0 ? (
                            data.map((row, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    onClick={() => onRowClick && onRowClick(row)}
                                    className="table-row-hover group"
                                >
                                    {columns.map((col, colIndex) => (
                                        <td key={colIndex} className="px-6 py-5 text-gray-700 dark:text-gray-100 font-bold relative group-hover:text-blue-700 dark:group-hover:text-cyan-400 transition-colors">
                                            {/* Left indicator bubble */}
                                            {colIndex === 0 && (
                                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-blue-500 dark:bg-cyan-400 rounded-r-full group-hover:h-8 transition-all duration-500 shadow-[0_0_10px_rgba(0,255,255,0.6)]" />
                                            )}
                                            {col.render ? col.render(row) : row[col.accessor]}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={columns.length} className="px-6 py-12 text-center">
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/10">
                                            <MoreVertical className="w-5 h-5 text-gray-300" />
                                        </div>
                                        <p className="text-gray-400 dark:text-gray-500 font-medium italic">{emptyMessage}</p>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

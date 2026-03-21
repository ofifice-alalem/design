import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

export const DynamicRowInput = ({ columns, onChange, minRows = 1 }) => {
    const generateEmptyRow = () =>
        columns.reduce((acc, col) => ({ ...acc, [col.key]: '' }), { id: Date.now() + Math.random() });

    const [rows, setRows] = useState(Array.from({ length: minRows }).map(generateEmptyRow));

    const handleAddRow = () => {
        const updated = [...rows, generateEmptyRow()];
        setRows(updated);
        if (onChange) onChange(updated);
    };

    const handleRemoveRow = (id) => {
        if (rows.length <= minRows) return;
        const updated = rows.filter(row => row.id !== id);
        setRows(updated);
        if (onChange) onChange(updated);
    };

    const handleChange = (id, key, value) => {
        const updated = rows.map(row => row.id === id ? { ...row, [key]: value } : row);
        setRows(updated);
        if (onChange) onChange(updated);
    };

    const canDelete = rows.length > minRows;

    return (
        <div className="w-full bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl border border-white/80 dark:border-white/10 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(31,38,135,0.06),inset_0_0_15px_rgba(255,255,255,0.5)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_0_15px_rgba(255,255,255,0.02)]">

            {/* ── Header row ── */}
            <div className="hidden sm:flex gap-3 px-4 py-3 border-b border-gray-200/60 dark:border-white/8 bg-gray-50/60 dark:bg-white/[0.02]">
                {columns.map(col => (
                    <div key={col.key} className="flex-1 text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                        {col.label || col.placeholder}
                    </div>
                ))}
                {/* delete column spacer */}
                <div className="w-9 shrink-0" />
            </div>

            {/* ── Rows ── */}
            <div className="divide-y divide-gray-100/60 dark:divide-white/5">
                {rows.map((row, index) => (
                    <div key={row.id} className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center px-4 py-3 group hover:bg-white/40 dark:hover:bg-white/[0.03] transition-colors">

                        {/* Row number badge (mobile) */}
                        <span className="sm:hidden text-[10px] font-semibold text-gray-400 dark:text-gray-600 uppercase tracking-wider">
                            صف {index + 1}
                        </span>

                        {/* Inputs */}
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 flex-1 w-full">
                            {columns.map(col => (
                                <div key={col.key} className="flex-1 min-w-0">
                                    {/* Mobile label */}
                                    <label className="sm:hidden text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1 block">
                                        {col.label || col.placeholder}
                                    </label>
                                    <input
                                        type={col.type || 'text'}
                                        placeholder={col.placeholder || ''}
                                        value={row[col.key]}
                                        onChange={e => handleChange(row.id, col.key, e.target.value)}
                                        className="w-full bg-white/80 dark:bg-black/30 text-gray-800 dark:text-gray-200 border border-gray-200/80 dark:border-white/8 rounded-xl px-3.5 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-cyan-400/20 focus:border-blue-400 dark:focus:border-cyan-400/60 hover:border-gray-300 dark:hover:border-white/15 transition-all placeholder-gray-400 dark:placeholder-gray-600 shadow-sm"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* ── Delete badge ── */}
                        <button
                            onClick={() => handleRemoveRow(row.id)}
                            disabled={!canDelete}
                            title={canDelete ? 'حذف الصف' : 'لا يمكن حذف الصف الأخير'}
                            className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 self-end sm:self-auto ${
                                canDelete
                                    ? 'bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-500/25 text-red-500 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-500/20 hover:border-red-300 dark:hover:border-red-500/50 hover:text-red-600'
                                    : 'bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/8 text-gray-300 dark:text-gray-700 cursor-not-allowed'
                            }`}
                        >
                            <Trash2 className="w-3 h-3" />
                            حذف
                        </button>
                    </div>
                ))}
            </div>

            {/* ── Add row button ── */}
            <div className="px-4 py-3 border-t border-gray-200/60 dark:border-white/8 bg-gray-50/40 dark:bg-white/[0.02] flex items-center justify-between">
                <button
                    onClick={handleAddRow}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-cyan-500/10 hover:bg-blue-100 dark:hover:bg-cyan-500/20 border border-blue-200 dark:border-cyan-500/20 rounded-xl transition-all duration-200 hover:shadow-sm"
                >
                    <Plus className="w-4 h-4" />
                    إضافة صف
                </button>
                <span className="text-xs text-gray-400 dark:text-gray-600">
                    {rows.length} {rows.length === 1 ? 'صف' : 'صفوف'}
                </span>
            </div>
        </div>
    );
};

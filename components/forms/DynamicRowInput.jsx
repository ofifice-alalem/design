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
        <div className="w-full form-surface">

            {/* ── Header row ── */}
            <div className="hidden sm:flex gap-3 px-4 py-3 border-b-2 border-gray-200 dark:border-cyan-400/30 bg-gray-50/60 dark:bg-cyan-400/5">
                {columns.map(col => (
                    <div key={col.key} className="flex-1 text-[11px] font-bold text-gray-400 dark:text-cyan-300/90 uppercase tracking-widest">
                        {col.label || col.placeholder}
                    </div>
                ))}
                {/* delete column spacer */}
                <div className="w-9 shrink-0" />
            </div>

            {/* ── Rows ── */}
            <div className="divide-y-0 sm:divide-y divide-gray-200 dark:divide-cyan-400/20">
                {rows.map((row, index) => (
                    <div key={row.id} className="flex flex-col sm:flex-row gap-4 sm:gap-3 items-start sm:items-center px-4 py-5 sm:py-3 group hover:bg-white/40 dark:hover:bg-cyan-400/5 dark:hover:shadow-[inset_0_0_20px_rgba(0,255,255,0.08)] transition-all duration-200 border-b-[3px] sm:border-b-0 border-gray-300 dark:border-cyan-400/30 last:border-b-0 mb-3 sm:mb-0 rounded-lg sm:rounded-none bg-gray-50/30 dark:bg-transparent sm:bg-transparent">

                        {/* Row number badge (mobile) */}
                        <div className="sm:hidden flex items-center justify-between w-full pb-3 border-b-2 border-gray-200 dark:border-cyan-400/25 mb-1">
                            <span className="text-[11px] font-bold text-gray-500 dark:text-cyan-300/80 uppercase tracking-wider bg-gray-100 dark:bg-cyan-400/10 px-3 py-1.5 rounded-lg border-2 border-gray-200 dark:border-cyan-400/30">
                                صف {index + 1}
                            </span>
                        </div>

                        {/* Inputs */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 flex-1 w-full">
                            {columns.map(col => (
                                <div key={col.key} className="flex-1 min-w-0">
                                    {/* Mobile label */}
                                    <label className="sm:hidden text-[11px] font-bold text-gray-600 dark:text-cyan-300/80 uppercase tracking-wider mb-1.5 block">
                                        {col.label || col.placeholder}
                                    </label>
                                    <input
                                        type={col.type || 'text'}
                                        placeholder={col.placeholder || ''}
                                        value={row[col.key]}
                                        onChange={e => handleChange(row.id, col.key, e.target.value)}
                                        className="form-input"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* ── Delete badge ── */}
                        <button
                            onClick={() => handleRemoveRow(row.id)}
                            disabled={!canDelete}
                            title={canDelete ? 'حذف الصف' : 'لا يمكن حذف الصف الأخير'}
                            className="row-delete-btn self-end sm:self-auto"
                        >
                            <Trash2 className="w-3 h-3" />
                            حذف
                        </button>
                    </div>
                ))}
            </div>

            {/* ── Add row button ── */}
            <div className="px-4 py-3 border-t-2 border-gray-200 dark:border-cyan-400/30 bg-gray-50/40 dark:bg-cyan-400/5 flex items-center justify-between">
                <button onClick={handleAddRow} className="row-add-btn">
                    <Plus className="w-4 h-4" />
                    إضافة صف
                </button>
                <span className="text-xs text-gray-400 dark:text-cyan-300/60 font-semibold">
                    {rows.length} {rows.length === 1 ? 'صف' : 'صفوف'}
                </span>
            </div>
        </div>
    );
};

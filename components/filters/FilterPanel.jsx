import React, { useState } from 'react';
import { Filter, X, ChevronDown } from 'lucide-react';
import { DatePicker } from '../ui/DatePicker';
import { Select } from '../ui/Select';

export const FilterPanel = ({ filters, onApply, onReset, inline = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [localValues, setLocalValues] = useState({});

    const handleApply = () => {
        if (onApply) onApply(localValues);
        setIsOpen(false);
    };

    const renderField = (filter) => {
        if (filter.type === 'select') return (
            <Select
                options={filter.options}
                value={localValues[filter.key] || ''}
                onChange={(val) => setLocalValues({ ...localValues, [filter.key]: val })}
                placeholder="Select option..."
            />
        );
        if (filter.type === 'date') return (
            <DatePicker
                value={localValues[filter.key] || ''}
                onChange={(val) => setLocalValues({ ...localValues, [filter.key]: val })}
            />
        );
        return (
            <input
                type={filter.type || 'text'}
                placeholder={filter.placeholder}
                className="form-input"
                onChange={(e) => setLocalValues({ ...localValues, [filter.key]: e.target.value })}
            />
        );
    };

    if (inline) {
        return (
            <div className="filter-inline-wrapper">
                <div className="absolute inset-0 noise-bg opacity-30 dark:opacity-100" />
                <div className="flex flex-wrap items-end gap-5 relative z-10">
                    {filters.map((filter, idx) => (
                        <div key={idx} className="flex flex-col gap-1.5 flex-1 min-w-[200px]">
                            <label className="text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">{filter.label}</label>
                            {renderField(filter)}
                        </div>
                    ))}
                    <div className="flex gap-3 min-w-[200px] h-[46px]">
                        <button onClick={handleApply} className="filter-apply-btn">Apply</button>
                        <button onClick={() => setLocalValues({})} className="filter-reset-btn">Clear</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative group/filter">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`filter-trigger-btn ${isOpen ? 'filter-trigger-btn-active' : ''}`}
            >
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 dark:from-white/10 to-transparent pointer-events-none opacity-0 group-hover/filter:opacity-100 transition-opacity" />
                <Filter className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Filters</span>
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-300 relative z-10 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="filter-dropdown animate-in fade-in zoom-in-95 duration-300">
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/60 dark:from-cyan-500/8 to-transparent rounded-t-2xl pointer-events-none" />
                    <div className="flex justify-between items-center mb-5 pb-3 border-b border-gray-200/80 dark:border-white/10 relative z-10">
                        <h3 className="font-bold text-gray-800 dark:text-white tracking-wide">Refine Results</h3>
                        <button onClick={() => setIsOpen(false)} className="modal-close-btn">
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="space-y-5 relative z-10">
                        {filters.map((filter, idx) => (
                            <div key={idx} className="flex flex-col gap-1">
                                <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{filter.label}</label>
                                {renderField(filter)}
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-3 mt-7 relative z-10">
                        <button onClick={handleApply} className="filter-apply-btn">Apply</button>
                        <button onClick={() => { setLocalValues({}); if (onReset) onReset(); }} className="filter-reset-btn">Reset</button>
                    </div>
                </div>
            )}
        </div>
    );
};

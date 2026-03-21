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

    if (inline) {
        return (
            <div className="w-full glass-panel-vanilla bg-white/40 dark:bg-gray-900/40 rounded-[24px] p-6 relative group overflow-hidden shadow-sm">
                <div className="absolute inset-0 noise-bg opacity-30 dark:opacity-100"></div>
                
                <div className="flex flex-wrap items-end gap-5 relative z-10">
                    {filters.map((filter, idx) => (
                        <div key={idx} className="flex flex-col gap-1.5 flex-1 min-w-[200px]">
                            <label className="text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">{filter.label}</label>
                            {filter.type === 'select' ? (
                                <Select 
                                    options={filter.options}
                                    value={localValues[filter.key] || ''}
                                    onChange={(val) => setLocalValues({...localValues, [filter.key]: val})}
                                    placeholder="Select option..."
                                />
                            ) : filter.type === 'date' ? (
                                <DatePicker 
                                    placeholder={filter.placeholder || "Select Date..."} 
                                    value={localValues[filter.key] || ''} 
                                    onChange={(val) => setLocalValues({...localValues, [filter.key]: val})}
                                />
                            ) : (
                                <input 
                                    type={filter.type || 'text'}
                                    placeholder={filter.placeholder}
                                    className="w-full bg-white/80 dark:bg-black/50 border border-transparent dark:border-white/15 rounded-xl p-3 text-sm font-medium text-gray-800 dark:text-gray-200 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all hover:border-gray-300 shadow-sm dark:placeholder-gray-500"
                                    onChange={(e) => setLocalValues({...localValues, [filter.key]: e.target.value})}
                                />
                            )}
                        </div>
                    ))}
                    <div className="flex gap-3 min-w-[200px] h-[46px]">
                        <button onClick={handleApply} className="flex-1 bg-blue-600/90 text-white rounded-xl py-2 px-4 shadow-[0_4px_15px_rgba(59,130,246,0.3)] hover:shadow-md transition-all font-semibold hover:-translate-y-0.5 dark:bg-cyan-500/20 dark:text-cyan-300 dark:border dark:border-cyan-500/40 dark:hover:shadow-[0_4px_20px_rgba(0,255,255,0.4)]">
                            Apply
                        </button>
                        <button onClick={() => setLocalValues({})} className="flex-1 bg-white hover:bg-gray-100 text-gray-700 rounded-xl py-2 px-4 transition-all font-semibold shadow-sm hover:shadow dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10 dark:border dark:border-white/20">
                            Clear
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative group/filter">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-2 px-5 py-2.5 bg-white/60 dark:bg-gray-800/60 backdrop-blur-2xl border ${isOpen ? 'border-blue-400 dark:border-cyan-400 shadow-[0_4px_20px_rgba(59,130,246,0.3)] dark:shadow-[0_0_25px_rgba(0,255,255,0.4)]' : 'border-white/80 dark:border-white/20'} rounded-xl text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-cyan-300 hover:border-blue-400 dark:hover:border-cyan-400 hover:shadow-[0_4px_15px_rgba(59,130,246,0.2)] dark:hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300 relative overflow-hidden`}
            >
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 dark:from-white/10 to-transparent pointer-events-none opacity-0 group-hover/filter:opacity-100 transition-opacity"></div>
                <Filter className="w-4 h-4 relative z-10" />
                <span className="font-semibold relative z-10">Filters</span>
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-300 relative z-10 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute top-14 left-0 w-80 p-5 bg-white/92 dark:bg-[#050810]/95 backdrop-blur-[50px] border border-white dark:border-white/10 dark:border-t-cyan-500/30 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_0_50px_rgba(0,255,255,0.12),0_20px_60px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)] z-50 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/60 dark:from-cyan-500/8 to-transparent rounded-t-2xl pointer-events-none"></div>
                    <div className="flex justify-between items-center mb-5 pb-3 border-b border-gray-200/80 dark:border-white/10 relative z-10">
                        <h3 className="font-bold text-gray-800 dark:text-white tracking-wide">Refine Results</h3>
                        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-red-500 bg-white/50 dark:bg-white/5 p-1 rounded-md transition-colors hover:bg-red-50 dark:hover:bg-red-500/20">
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="space-y-5 relative z-10">
                        {filters.map((filter, idx) => (
                            <div key={idx} className="flex flex-col gap-1">
                                <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{filter.label}</label>
                                {filter.type === 'select' ? (
                                    <Select 
                                        options={filter.options}
                                        value={localValues[filter.key] || ''}
                                        onChange={(val) => setLocalValues({...localValues, [filter.key]: val})}
                                        placeholder="Select option..."
                                    />
                                ) : filter.type === 'date' ? (
                                    <DatePicker 
                                        placeholder={filter.placeholder || "Select Date..."} 
                                        value={localValues[filter.key] || ''} 
                                        onChange={(val) => setLocalValues({...localValues, [filter.key]: val})}
                                    />
                                ) : (
                                    <input 
                                        type={filter.type || 'text'}
                                        placeholder={filter.placeholder}
                                        className="w-full bg-white/70 dark:bg-black/40 border border-gray-300/50 dark:border-white/15 rounded-xl p-2.5 text-sm font-medium text-gray-800 dark:text-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:focus:border-cyan-400 dark:focus:ring-cyan-400/30 outline-none transition-all hover:bg-white dark:hover:bg-black/60 shadow-sm dark:placeholder-gray-500"
                                        onChange={(e) => setLocalValues({...localValues, [filter.key]: e.target.value})}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-3 mt-7 relative z-10">
                        <button 
                            onClick={handleApply}
                            className="flex-1 bg-blue-600/90 hover:bg-blue-600 text-white dark:bg-cyan-500/20 dark:text-cyan-300 dark:hover:text-cyan-200 dark:border dark:border-cyan-500/40 dark:hover:bg-cyan-500/40 dark:hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] rounded-xl py-2.5 text-sm font-bold transition-all shadow-[0_4px_15px_rgba(59,130,246,0.3)]"
                        >
                            Apply
                        </button>
                        <button 
                            onClick={() => {
                                setLocalValues({});
                                if (onReset) onReset();
                            }}
                            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10 rounded-lg py-2 text-sm font-medium transition-colors border border-transparent dark:border-white/10"
                        >
                            Reset
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

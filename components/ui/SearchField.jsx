import React, { useState } from 'react';
import { Search, X, Command } from 'lucide-react';

export const SearchField = ({ placeholder = "ابدأ البحث هنا...", onChange, className = '' }) => {
    const [query, setQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleClear = () => {
        setQuery('');
        if (onChange) onChange('');
    };

    return (
        <div className={`relative w-full max-w-md group ${className} animate-in fade-in zoom-in-95 duration-500`}>
            <div className={`search-bg ${
                isFocused
                    ? 'ring-2 ring-blue-500/10 dark:ring-cyan-400/10 !border-blue-400 dark:!border-cyan-400 shadow-[0_20px_40px_rgba(59,130,246,0.15)] dark:shadow-[0_0_30px_rgba(0,255,255,0.1)]'
                    : 'hover:border-gray-300 dark:hover:border-white/20'
            }`} />

            {/* Icons Layer */}
            <Search className={`
                absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 transition-all duration-300 z-10
                ${isFocused ? 'text-blue-500 dark:text-cyan-400 scale-110' : 'text-gray-400 dark:text-gray-500'}
            `} />
            
            <input
                type="text"
                value={query}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(e) => {
                    setQuery(e.target.value);
                    if (onChange) onChange(e.target.value);
                }}
                placeholder={placeholder}
                className={`
                    w-full py-3.5 pl-11 pr-16 rounded-2xl text-sm outline-none relative z-10
                    bg-transparent text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600
                    transition-all font-medium
                `}
            />

            {/* Clear Button / Shortcut indicator */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 z-10 transition-all">
                {query ? (
                    <button onClick={handleClear} className="search-clear-btn">
                        <X className="w-4 h-4" />
                    </button>
                ) : (
                    <div className="flex items-center gap-1.5 px-2 py-1 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-lg opacity-40 group-hover:opacity-100 transition-opacity">
                        <Command className="w-3 h-3 text-gray-400 dark:text-gray-500" />
                        <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500">K</span>
                    </div>
                )}
            </div>
            
            {/* Focus glow spotlight (Dark Mode Only) */}
            <div className={`
                absolute inset-0 pointer-events-none transition-opacity duration-700
                bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(0,255,255,0.06),transparent_60%)]
                opacity-0 dark:${isFocused ? 'opacity-100' : 'opacity-0'}
            `} />
        </div>
    );
};

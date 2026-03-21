import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export const Select = ({ value, onChange, options, placeholder = "Select..." }) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selectedOption = options.find(o => o.value === value) || null;

    return (
        <div className="relative w-full" ref={containerRef}>
            <div 
                className="w-full flex items-center justify-between cursor-pointer bg-gradient-to-br from-white/60 to-white/30 text-gray-800 border border-white/60 border-t-white dark:border-white/10 dark:border-t-white/30 dark:from-white/10 dark:to-transparent dark:text-gray-200 rounded-xl p-2.5 text-sm font-medium hover:border-blue-400/80 dark:hover:border-cyan-400 dark:hover:from-white/15 hover:shadow-[0_10px_30px_rgba(59,130,246,0.2),inset_0_0_20px_rgba(255,255,255,0.8)] dark:hover:shadow-[0_0_30px_rgba(0,255,255,0.3),inset_0_0_20px_rgba(0,255,255,0.1)] transition-all shadow-[0_4px_15px_rgba(31,38,135,0.05),inset_0_0_15px_rgba(255,255,255,0.5)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_0_15px_rgba(255,255,255,0.02)] backdrop-blur-3xl group relative z-10"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 dark:from-white/10 to-transparent pointer-events-none rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className={`relative z-10 ${selectedOption ? "text-gray-800 dark:text-gray-200" : "text-gray-500"}`}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <ChevronDown className={`w-4 h-4 relative z-10 text-gray-400 group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>

            {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-full max-h-60 overflow-y-auto bg-white/95 dark:bg-gray-900/95 backdrop-blur-[40px] border border-gray-200/50 dark:border-cyan-500/30 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(0,255,255,0.15)] z-50 animate-in fade-in zoom-in-95 duration-200 p-1.5 custom-scrollbar">
                    {options.map((opt) => (
                        <div 
                            key={opt.value}
                            className={`px-3 py-2.5 rounded-lg text-sm cursor-pointer transition-colors ${
                                value === opt.value 
                                ? "bg-blue-50 text-blue-700 dark:bg-cyan-500/20 dark:text-cyan-300 font-bold" 
                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 font-medium"
                            }`}
                            onClick={() => {
                                if(onChange) onChange(opt.value);
                                setIsOpen(false);
                            }}
                        >
                            {opt.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

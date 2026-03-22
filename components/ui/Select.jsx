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
                className="select-trigger relative group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 dark:from-white/10 to-transparent pointer-events-none rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className={`relative z-10 ${selectedOption ? 'text-gray-800 dark:text-gray-200' : 'text-gray-500'}`}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <ChevronDown className={`w-4 h-4 relative z-10 text-gray-400 group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>

            {isOpen && (
                <div className="select-dropdown animate-in fade-in zoom-in-95 duration-200">
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

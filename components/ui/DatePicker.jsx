import React from 'react';

export const DatePicker = ({ value, onChange }) => {
    // Parse 'YYYY-MM-DD' exactly or give blank pieces
    const parts = value ? value.split('-') : ['', '', ''];
    const year = parts[0] || '';
    const month = parts[1] || '';
    const day = parts[2] || '';

    const handleChange = (y, m, d) => {
        if (onChange) {
            onChange(`${y || ''}-${m || ''}-${d || ''}`);
        }
    }

    const inputClasses = "flex-1 min-w-0 bg-gradient-to-br from-white/60 to-white/30 text-gray-800 border border-white/60 border-t-white dark:border-white/10 dark:border-t-white/30 dark:from-white/10 dark:to-transparent dark:text-gray-200 rounded-xl p-2.5 text-center text-sm font-medium focus:outline-none hover:border-blue-400/80 dark:hover:border-cyan-400 focus:border-blue-500 focus:from-white/80 focus:to-white/50 focus:shadow-[0_10px_30px_rgba(59,130,246,0.2),inset_0_0_20px_rgba(255,255,255,0.8)] dark:focus:border-cyan-400 dark:focus:shadow-[0_0_30px_rgba(0,255,255,0.3),inset_0_0_20px_rgba(0,255,255,0.1)] transition-all shadow-[0_4px_15px_rgba(31,38,135,0.05),inset_0_0_15px_rgba(255,255,255,0.5)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_0_15px_rgba(255,255,255,0.02)] placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-3xl relative z-10 group";

    return (
        <div className="flex items-center gap-2 w-full">
            <input 
                type="text" 
                placeholder="Day" 
                maxLength="2"
                value={day}
                onChange={(e) => handleChange(year, month, e.target.value.replace(/\D/g, ''))}
                className={inputClasses}
            />
            <span className="text-gray-300 dark:text-gray-600 font-light text-xl">/</span>
            <input 
                type="text" 
                placeholder="Mn" 
                maxLength="2"
                value={month}
                onChange={(e) => handleChange(year, e.target.value.replace(/\D/g, ''), day)}
                className={inputClasses}
            />
            <span className="text-gray-300 dark:text-gray-600 font-light text-xl">/</span>
            <input 
                type="text" 
                placeholder="Year" 
                maxLength="4"
                value={year}
                onChange={(e) => handleChange(e.target.value.replace(/\D/g, ''), month, day)}
                className={`flex-1 ${inputClasses}`}
            />
        </div>
    );
};

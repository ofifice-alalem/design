import React, { useState } from 'react';
import { LayoutGrid, List } from 'lucide-react';

export const ViewToggle = ({ onViewChange, defaultView = 'table', className = '' }) => {
    const [view, setView] = useState(defaultView);

    const handleToggle = (newView) => {
        setView(newView);
        if (onViewChange) onViewChange(newView);
    };

    return (
        <div className={`flex items-center p-1 bg-white/40 dark:bg-black/30 backdrop-blur-xl border border-white/80 dark:border-white/10 rounded-xl ${className}`}>
            <button
                onClick={() => handleToggle('table')}
                className={`p-2 rounded-lg transition-all duration-300 flex items-center justify-center ${
                    view === 'table' 
                        ? 'bg-white shadow-sm text-blue-600 dark:bg-white/10 dark:text-cyan-400 dark:shadow-[0_0_10px_rgba(0,255,255,0.2)]' 
                        : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white'
                }`}
            >
                <List className="w-4 h-4" />
            </button>
            <button
                onClick={() => handleToggle('grid')}
                className={`p-2 rounded-lg transition-all duration-300 flex items-center justify-center ${
                    view === 'grid' 
                        ? 'bg-white shadow-sm text-blue-600 dark:bg-white/10 dark:text-cyan-400 dark:shadow-[0_0_10px_rgba(0,255,255,0.2)]' 
                        : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white'
                }`}
            >
                <LayoutGrid className="w-4 h-4" />
            </button>
        </div>
    );
};

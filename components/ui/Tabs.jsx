import React, { useState, useRef, useEffect } from 'react';

export const Tabs = ({ tabs, defaultTab, onChange, className = '' }) => {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const tabRefs = useRef({});

    useEffect(() => {
        const activeNode = tabRefs.current[activeTab];
        if (activeNode) {
            setIndicatorStyle({
                left: activeNode.offsetLeft,
                width: activeNode.offsetWidth,
            });
        }
    }, [activeTab, tabs]);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
        if (onChange) onChange(tabId);
    };

    return (
        <div className={`tabs-wrapper ${className}`}>
            {/* Sliding Indicator Background */}
            <div 
                className="absolute h-[calc(100%-12px)] top-1.5 bg-white dark:bg-white/10 rounded-xl shadow-md dark:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] border border-white/60 dark:border-white/15"
                style={{
                    left: `${indicatorStyle.left}px`,
                    width: `${indicatorStyle.width}px`
                }}
            />

            {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                    <button
                        key={tab.id}
                        ref={el => tabRefs.current[tab.id] = el}
                        onClick={() => handleTabClick(tab.id)}
                        className={`
                            relative z-10 flex items-center gap-2.5 px-6 py-2.5 text-sm font-bold transition-all duration-300 whitespace-nowrap
                            ${isActive 
                                ? 'text-gray-900 dark:text-cyan-400 scale-100' 
                                : 'text-gray-400 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200 hover:scale-105 active:scale-95'}
                        `}
                    >
                        {tab.icon && (
                            <tab.icon className={`
                                w-4 h-4 transition-colors duration-300
                                ${isActive ? 'text-blue-600 dark:text-cyan-400' : 'text-gray-400 dark:text-gray-500'}
                            `} />
                        )}
                        <span>{tab.label}</span>
                        
                        {/* Status indicator dot if needed */}
                        {tab.hasAlert && (
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 dark:bg-red-400 animate-pulse" />
                        )}
                    </button>
                );
            })}
        </div>
    );
};

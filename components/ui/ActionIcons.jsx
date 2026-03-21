import React from 'react';
import { Eye, Edit, Trash2, Phone, Printer, Filter, BarChart2, Users, Store, UserCheck, Info, UploadCloud, Download, History } from 'lucide-react';

const iconsMap = {
    view: Eye,
    edit: Edit,
    delete: Trash2,
    call: Phone,
    print: Printer,
    filter: Filter,
    statistics: BarChart2,
    users: Users,
    stores: Store,
    customers: UserCheck,
    info: Info,
    upload: UploadCloud,
    backup: Download,
    restore: History
};

export const ActionIcon = ({ type, onClick, tooltip }) => {
    const Icon = iconsMap[type];
    
    if (!Icon) return null;

    const stylesMap = {
        delete: {
            bg: 'bg-red-50 dark:bg-red-500/10',
            border: 'border-red-100 dark:border-red-500/20',
            text: 'text-red-500 dark:text-red-400',
            hover: 'hover:bg-red-500 hover:text-white dark:hover:bg-red-500 dark:hover:text-white hover:shadow-[0_4px_15px_rgba(239,68,68,0.4)]',
            tooltipBg: 'bg-red-600'
        },
        view: {
            bg: 'bg-blue-50 dark:bg-cyan-500/10',
            border: 'border-blue-100 dark:border-cyan-500/20',
            text: 'text-blue-500 dark:text-cyan-400',
            hover: 'hover:bg-blue-600 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-black hover:shadow-[0_4px_15px_rgba(59,130,246,0.4)] dark:hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]',
            tooltipBg: 'bg-blue-600 dark:bg-cyan-600'
        },
        edit: {
            bg: 'bg-amber-50 dark:bg-amber-500/10',
            border: 'border-amber-100 dark:border-amber-500/20',
            text: 'text-amber-600 dark:text-amber-400',
            hover: 'hover:bg-amber-500 hover:text-white dark:hover:bg-amber-500 dark:hover:text-black hover:shadow-[0_4px_15px_rgba(245,158,11,0.4)]',
            tooltipBg: 'bg-amber-600'
        },
        call: {
            bg: 'bg-emerald-50 dark:bg-emerald-500/10',
            border: 'border-emerald-100 dark:border-emerald-500/20',
            text: 'text-emerald-600 dark:text-emerald-400',
            hover: 'hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-black hover:shadow-[0_4px_15px_rgba(16,185,129,0.4)]',
            tooltipBg: 'bg-emerald-600'
        },
        default: {
            bg: 'bg-gray-50 dark:bg-white/5',
            border: 'border-gray-200 dark:border-white/10',
            text: 'text-gray-500 dark:text-gray-400',
            hover: 'hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black hover:shadow-[0_4px_15px_rgba(0,0,0,0.1)]',
            tooltipBg: 'bg-gray-800 dark:bg-gray-700'
        }
    };

    const s = stylesMap[type] || stylesMap.default;

    return (
        <div className="relative group/tooltip inline-block">
            <button
                onClick={onClick}
                className={`
                    relative overflow-hidden p-2 rounded-xl transition-all duration-300 
                    backdrop-blur-xl border shadow-sm
                    ${s.bg} ${s.border} ${s.text} ${s.hover}
                    hover:-translate-y-1 active:scale-90
                `}
            >
                {/* Glossy Overlay */}
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/40 dark:from-white/10 to-transparent pointer-events-none opacity-50 group-hover/tooltip:opacity-0 transition-opacity"></div>
                
                <Icon className="w-4.5 h-4.5 relative z-10 transition-transform duration-300 group-hover/tooltip:scale-110" />
            </button>
            
            {/* Tooltip - Premium style */}
            {tooltip && (
                <div className={`
                    absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 
                    text-[10px] font-bold text-white rounded-lg shadow-xl
                    opacity-0 translate-y-2 group-hover/tooltip:opacity-100 group-hover/tooltip:translate-y-0 
                    transition-all duration-300 pointer-events-none whitespace-nowrap z-50
                    ${s.tooltipBg} dark:border dark:border-white/10
                `}>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-[5px] border-transparent border-t-current" style={{ color: 'inherit' }} />
                    {tooltip}
                </div>
            )}
        </div>
    );
};

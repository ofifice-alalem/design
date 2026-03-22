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

    const iconClass = {
        view:    'action-icon-btn action-icon-view',
        edit:    'action-icon-btn action-icon-edit',
        delete:  'action-icon-btn action-icon-delete',
        call:    'action-icon-btn action-icon-call',
    }[type] || 'action-icon-btn action-icon-default';

    const tooltipColor = {
        view: 'bg-blue-600 dark:bg-cyan-600',
        edit: 'bg-amber-600',
        delete: 'bg-red-600',
        call: 'bg-emerald-600',
    }[type] || 'bg-gray-800 dark:bg-gray-700';

    return (
        <div className="relative group/tooltip inline-block">
            <button onClick={onClick} className={iconClass}>
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/40 dark:from-white/10 to-transparent pointer-events-none opacity-50 group-hover/tooltip:opacity-0 transition-opacity" />
                <Icon className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover/tooltip:scale-110" />
            </button>
            {tooltip && (
                <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 text-[10px] font-bold text-white rounded-lg shadow-xl opacity-0 translate-y-2 group-hover/tooltip:opacity-100 group-hover/tooltip:translate-y-0 transition-all duration-300 pointer-events-none whitespace-nowrap z-50 ${tooltipColor} dark:border dark:border-white/10`}>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-[5px] border-transparent border-t-current" style={{ color: 'inherit' }} />
                    {tooltip}
                </div>
            )}
        </div>
    );
};

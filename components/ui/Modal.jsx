import React from 'react';
import { X } from 'lucide-react';

export const Modal = ({ isOpen, onClose, title, children, icon: Icon, theme = "primary" }) => {
    if (!isOpen) return null;

    const themeStyles = {
        primary: {
            panel: "modal-panel-primary",
            glow: "modal-glow-primary",
            icon: "text-blue-600 dark:text-cyan-400",
        },
        danger: {
            panel: "modal-panel-danger",
            glow: "modal-glow-danger",
            icon: "text-red-600 dark:text-red-400",
        },
        warning: {
            panel: "modal-panel-warning",
            glow: "modal-glow-warning",
            icon: "text-orange-600 dark:text-orange-400",
        },
    };

    const s = themeStyles[theme];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="modal-backdrop" onClick={onClose} />

            <div className={s.panel}>
                <div className={s.glow} />

                <div className="flex justify-between items-center px-5 pt-5 pb-4 border-b border-gray-200/80 dark:border-white/10 relative z-10">
                    <div className="flex items-center gap-3">
                        {Icon && (
                            <div className="p-2 rounded-xl bg-white/70 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 shadow-sm">
                                <Icon className={`w-5 h-5 ${s.icon}`} strokeWidth={2} />
                            </div>
                        )}
                        <h3 className="font-bold text-gray-800 dark:text-white tracking-wide">{title}</h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-red-500 bg-white/50 dark:bg-white/5 p-1.5 rounded-lg transition-colors hover:bg-red-50 dark:hover:bg-red-500/20"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                <div className="relative z-10 px-5 py-5">
                    {children}
                </div>
            </div>
        </div>
    );
};

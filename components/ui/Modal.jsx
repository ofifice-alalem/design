import React from 'react';
import { X } from 'lucide-react';

export const Modal = ({ isOpen, onClose, title, children, icon: Icon, theme = "primary" }) => {
    if (!isOpen) return null;

    // Same neon border + shadow logic as the Filter dropdown per theme
    const themeStyles = {
        primary: {
            border:   "border-white dark:border-cyan-500/30",
            shadow:   "shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(0,255,255,0.15)]",
            topGlow:  "from-white/50 dark:from-cyan-500/10",
            icon:     "text-blue-600 dark:text-cyan-400",
        },
        danger: {
            border:   "border-white dark:border-red-500/30",
            shadow:   "shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(239,68,68,0.2)]",
            topGlow:  "from-white/50 dark:from-red-500/10",
            icon:     "text-red-600 dark:text-red-400",
        },
        warning: {
            border:   "border-white dark:border-orange-500/30",
            shadow:   "shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(249,115,22,0.2)]",
            topGlow:  "from-white/50 dark:from-orange-500/10",
            icon:     "text-orange-600 dark:text-orange-400",
        },
    };

    const s = themeStyles[theme];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Same style backdrop as when Filter opens */}
            <div
                className="absolute inset-0 bg-black/20 dark:bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Panel — identical formula to FilterPanel dropdown */}
            <div className={`
                relative w-full max-w-md
                bg-white/90 dark:bg-gray-900/80
                backdrop-blur-[40px]
                border ${s.border}
                rounded-2xl
                ${s.shadow}
                animate-in fade-in zoom-in-95 duration-200
                overflow-hidden
            `}>
                {/* Top gradient glow — same as filter panel */}
                <div className={`absolute inset-x-0 top-0 h-20 bg-gradient-to-b ${s.topGlow} to-transparent rounded-t-2xl pointer-events-none z-0`} />

                {/* Header — same header structure as filter panel */}
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

                {/* Body */}
                <div className="relative z-10 px-5 py-5">
                    {children}
                </div>
            </div>
        </div>
    );
};

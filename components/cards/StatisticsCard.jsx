import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export const StatisticsCard = ({
    title,
    value,
    icon: Icon,
    trend,
    trendValue,
    accent = 'blue'
}) => {

    const accentMap = {
        blue: {
            // Light mode
            cardBg: 'from-blue-50/80 via-white/60 to-white/20',
            borderLight: 'border-blue-100/80 border-t-blue-200/60 shadow-[0_10px_40px_-10px_rgba(59,130,246,0.2),inset_0_0_20px_rgba(255,255,255,0.8)] shadow-blue-500/10',
            iconBgLight: 'bg-blue-500 shadow-[0_4px_15px_rgba(59,130,246,0.4)]',
            iconColorLight: 'text-white',
            sphereLight: 'bg-blue-400/20',
            // Dark mode — Premium Deep Glass
            cardBgDark: 'dark:from-[#080d1a]/80 dark:via-[#050810]/95 dark:to-[#03050a]/90',
            borderDark: 'dark:border-white/10 dark:border-t-white/25',
            iconBgDark: 'dark:bg-blue-500/15 dark:border-blue-500/25',
            iconColorDark: 'dark:text-cyan-400',
            iconGlowDark: 'dark:drop-shadow-[0_0_12px_rgba(0,255,255,0.8)]',
            cardHoverDark: 'dark:hover:border-cyan-400/50 dark:hover:shadow-[0_0_50px_rgba(0,255,255,0.15),0_20px_40px_rgba(0,0,0,0.8)]',
            sphereDark: 'dark:bg-blue-500/15',
        },
        green: {
            cardBg: 'from-emerald-50/80 via-white/60 to-white/20',
            borderLight: 'border-emerald-100/80 border-t-emerald-200/60 shadow-[0_10px_40px_-10px_rgba(16,185,129,0.2),inset_0_0_20px_rgba(255,255,255,0.8)] shadow-emerald-500/10',
            iconBgLight: 'bg-emerald-500 shadow-[0_4px_15px_rgba(16,185,129,0.4)]',
            iconColorLight: 'text-white',
            sphereLight: 'bg-emerald-400/20',
            cardBgDark: 'dark:from-[#061a14]/80 dark:via-[#030a08]/95 dark:to-[#010504]/90',
            borderDark: 'dark:border-white/10 dark:border-t-white/25',
            iconBgDark: 'dark:bg-emerald-500/15 dark:border-emerald-500/25',
            iconColorDark: 'dark:text-emerald-400',
            iconGlowDark: 'dark:drop-shadow-[0_0_12px_rgba(16,185,129,0.8)]',
            cardHoverDark: 'dark:hover:border-emerald-400/50 dark:hover:shadow-[0_0_50px_rgba(16,185,129,0.15),0_20px_40px_rgba(0,0,0,0.8)]',
            sphereDark: 'dark:bg-emerald-500/15',
        },
        red: {
            cardBg: 'from-red-50/80 via-white/60 to-white/20',
            borderLight: 'border-red-100/80 border-t-red-200/60 shadow-[0_10px_40px_-10px_rgba(239,68,68,0.2),inset_0_0_20px_rgba(255,255,255,0.8)] shadow-red-500/10',
            iconBgLight: 'bg-red-500 shadow-[0_4px_15px_rgba(239,68,68,0.4)]',
            iconColorLight: 'text-white',
            sphereLight: 'bg-red-400/20',
            cardBgDark: 'dark:from-[#1a0808]/80 dark:via-[#0a0303]/95 dark:to-[#050101]/90',
            borderDark: 'dark:border-white/10 dark:border-t-white/25',
            iconBgDark: 'dark:bg-red-500/15 dark:border-red-500/25',
            iconColorDark: 'dark:text-red-400',
            iconGlowDark: 'dark:drop-shadow-[0_0_12px_rgba(239,68,68,0.8)]',
            cardHoverDark: 'dark:hover:border-red-400/50 dark:hover:shadow-[0_0_50px_rgba(239,68,68,0.15),0_20px_40px_rgba(0,0,0,0.8)]',
            sphereDark: 'dark:bg-red-500/15',
        },
        purple: {
            cardBg: 'from-purple-50/80 via-white/60 to-white/20',
            borderLight: 'border-purple-100/80 border-t-purple-200/60 shadow-[0_10px_40px_-10px_rgba(168,85,247,0.2),inset_0_0_20px_rgba(255,255,255,0.8)] shadow-purple-500/10',
            iconBgLight: 'bg-purple-500 shadow-[0_4px_15px_rgba(168,85,247,0.4)]',
            iconColorLight: 'text-white',
            sphereLight: 'bg-purple-400/20',
            cardBgDark: 'dark:from-[#13081a]/80 dark:via-[#080310]/95 dark:to-[#04010a]/90',
            borderDark: 'dark:border-white/10 dark:border-t-white/25',
            iconBgDark: 'dark:bg-purple-500/15 dark:border-purple-500/25',
            iconColorDark: 'dark:text-purple-400',
            iconGlowDark: 'dark:drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]',
            cardHoverDark: 'dark:hover:border-purple-400/50 dark:hover:shadow-[0_0_50px_rgba(168,85,247,0.15),0_20px_40px_rgba(0,0,0,0.8)]',
            sphereDark: 'dark:bg-purple-500/15',
        },
    };

    const a = accentMap[accent] || accentMap.blue;

    return (
        <div className={`
            relative overflow-hidden group min-h-[160px] flex flex-col justify-between
            bg-gradient-to-br ${a.cardBg} ${a.cardBgDark}
            backdrop-blur-[60px]
            border ${a.borderLight} ${a.borderDark}
            p-6 rounded-[24px]
            transition-all duration-500
            hover:-translate-y-2 hover:scale-[1.03]
            ${a.cardHoverDark}
        `}>
            {/* Glossy Overlay (Noise) */}
            <div className={`absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] z-0 bg-[url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")]`} />

            {/* Specular top reflection */}
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/70 dark:from-white/[0.04] to-transparent pointer-events-none rounded-t-[24px] z-0" />

            {/* Ambient sphere — top right */}
            <div className={`absolute -right-6 -top-6 w-36 h-36 rounded-full blur-[60px] transition-all duration-500 opacity-80 dark:opacity-30 ${a.sphereLight} ${a.sphereDark} group-hover:scale-150 group-hover:opacity-100 dark:group-hover:opacity-50 z-0`} />

            {/* Top row: title + icon */}
            <div className="flex justify-between items-start z-10 relative">
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-[0.12em] leading-snug">
                    {title}
                </p>

                {Icon && (
                    <div className={`
                        p-2.5 rounded-2xl border border-transparent
                        ${a.iconBgLight}
                        ${a.iconBgDark} dark:border
                        backdrop-blur-sm transition-all duration-300
                        group-hover:scale-110 group-hover:-rotate-3
                    `}>
                        <Icon className={`w-5 h-5 ${a.iconColorLight} ${a.iconColorDark} ${a.iconGlowDark} transition-all`} />
                    </div>
                )}
            </div>

            {/* Value + trend */}
            <div className="z-10 relative mt-3">
                <h3 className={`text-3xl font-black tracking-tight text-gray-900 dark:text-white transition-colors dark:group-hover:text-white`}>
                    {value}
                </h3>

                {trend && (
                    <p className={`text-xs flex items-center gap-1 font-semibold mt-2 w-fit px-2.5 py-1 rounded-full border
                        ${trend === 'up'
                            ? 'text-emerald-700 bg-emerald-100/80 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/20'
                            : 'text-red-700 bg-red-100/80 border-red-200 dark:text-red-400 dark:bg-red-500/10 dark:border-red-500/20'}
                    `}>
                        {trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {trendValue}
                    </p>
                )}
            </div>
        </div>
    );
};

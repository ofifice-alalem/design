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
    const accentConfig = {
        blue:   { cardBorder: 'stat-card-blue',   sphere: 'ambient-sphere-primary -right-6 -top-6', icon: 'bg-blue-500 text-white shadow-[0_4px_15px_rgba(59,130,246,0.4)] dark:bg-blue-500/20 dark:border dark:border-cyan-400/30 dark:text-cyan-400 dark:shadow-[0_0_15px_rgba(0,255,255,0.3)]',   label: 'dark:text-cyan-400/70',   gradient: 'from-blue-50/80 via-white/60 to-white/20 dark:from-blue-950/60 dark:via-[#050810]/90 dark:to-[#020408]/95' },
        green:  { cardBorder: 'stat-card-green',  sphere: 'ambient-sphere-success -right-6 -top-6', icon: 'bg-emerald-500 text-white shadow-[0_4px_15px_rgba(16,185,129,0.4)] dark:bg-emerald-500/20 dark:border dark:border-emerald-400/30 dark:text-emerald-400 dark:shadow-[0_0_15px_rgba(16,185,129,0.3)]', label: 'dark:text-emerald-400/70', gradient: 'from-emerald-50/80 via-white/60 to-white/20 dark:from-emerald-950/60 dark:via-[#030a08]/90 dark:to-[#020408]/95' },
        red:    { cardBorder: 'stat-card-red',    sphere: 'ambient-sphere-danger -right-6 -top-6',  icon: 'bg-red-500 text-white shadow-[0_4px_15px_rgba(239,68,68,0.4)] dark:bg-red-500/20 dark:border dark:border-red-400/30 dark:text-red-400 dark:shadow-[0_0_15px_rgba(239,68,68,0.3)]',         label: 'dark:text-red-400/70',    gradient: 'from-red-50/80 via-white/60 to-white/20 dark:from-red-950/60 dark:via-[#0a0303]/90 dark:to-[#020408]/95' },
        purple: { cardBorder: 'stat-card-purple', sphere: 'ambient-sphere-accent -right-6 -top-6',  icon: 'bg-purple-500 text-white shadow-[0_4px_15px_rgba(168,85,247,0.4)] dark:bg-purple-500/20 dark:border dark:border-purple-400/30 dark:text-purple-400 dark:shadow-[0_0_15px_rgba(168,85,247,0.3)]', label: 'dark:text-purple-400/70', gradient: 'from-purple-50/80 via-white/60 to-white/20 dark:from-purple-950/60 dark:via-[#080310]/90 dark:to-[#020408]/95' },
    };

    const config = accentConfig[accent] || accentConfig.blue;

    return (
        <div className={`glass-card-primary ${config.cardBorder} min-h-[160px] flex flex-col justify-between p-6 rounded-[24px] group hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 bg-gradient-to-br ${config.gradient} dark:bg-[#0a0d14]/80 dark:shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] border`}>
            <div className="noise-texture" />
            <div className="glass-glow-top" />
            <div className={`${config.sphere} group-hover:scale-150 group-hover:opacity-100 dark:opacity-20 dark:group-hover:opacity-40`} />

            <div className="flex justify-between items-start z-10 relative">
                <p className={`text-xs font-bold uppercase tracking-[0.12em] leading-snug text-gray-500 ${config.label}`}>
                    {title}
                </p>

                {Icon && (
                    <div className={`p-2.5 rounded-2xl border border-transparent transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 ${config.icon}`}>
                        <Icon className="w-5 h-5 transition-all" />
                    </div>
                )}
            </div>

            <div className="z-10 relative mt-3">
                <h3 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">
                    {value}
                </h3>

                {trend && (
                    <p className={`text-xs flex items-center gap-1 font-semibold mt-2 w-fit px-2.5 py-1 rounded-full border ${
                        trend === 'up' ? 'badge-success' : 'badge-danger'
                    }`}>
                        {trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {trendValue}
                    </p>
                )}
            </div>
        </div>
    );
};

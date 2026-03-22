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
        blue:   { cardBorder: 'stat-card-blue',   sphere: 'ambient-sphere-primary -right-6 -top-6', icon: 'stat-icon-blue',   label: 'stat-label-blue',   gradient: 'stat-gradient-blue'   },
        green:  { cardBorder: 'stat-card-green',  sphere: 'ambient-sphere-success -right-6 -top-6', icon: 'stat-icon-green',  label: 'stat-label-green',  gradient: 'stat-gradient-green'  },
        red:    { cardBorder: 'stat-card-red',    sphere: 'ambient-sphere-danger -right-6 -top-6',  icon: 'stat-icon-red',    label: 'stat-label-red',    gradient: 'stat-gradient-red'    },
        purple: { cardBorder: 'stat-card-purple', sphere: 'ambient-sphere-accent -right-6 -top-6',  icon: 'stat-icon-purple', label: 'stat-label-purple', gradient: 'stat-gradient-purple' },
    };

    const config = accentConfig[accent] || accentConfig.blue;

    return (
        <div className={`glass-card-primary ${config.cardBorder} ${config.gradient} min-h-[160px] flex flex-col justify-between p-6 rounded-[24px] group hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 dark:bg-[#0a0d14]/80 dark:shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] border`}>
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

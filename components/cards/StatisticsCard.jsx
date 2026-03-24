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
        blue: {
            card: 'stat-card-blue',
            icon: 'stat-icon-blue',
            label: 'stat-label-blue',
            sphere: 'ambient-sphere-primary',
            gradient: 'stat-gradient-blue'
        },
        green: {
            card: 'stat-card-green',
            icon: 'stat-icon-green',
            label: 'stat-label-green',
            sphere: 'ambient-sphere-success',
            gradient: 'stat-gradient-green'
        },
        red: {
            card: 'stat-card-red',
            icon: 'stat-icon-red',
            label: 'stat-label-red',
            sphere: 'ambient-sphere-danger',
            gradient: 'stat-gradient-red'
        },
        purple: {
            card: 'stat-card-purple',
            icon: 'stat-icon-purple',
            label: 'stat-label-purple',
            sphere: 'ambient-sphere-accent',
            gradient: 'stat-gradient-purple'
        }
    };

    const config = accentConfig[accent] || accentConfig.blue;

    return (
        <div className={`${config.card} group`}>
            <div className="noise-texture" />
            <div className="glass-glow-top" />
            <div className={`${config.sphere} -right-6 -top-6 group-hover:scale-150 group-hover:opacity-100 dark:opacity-15 dark:group-hover:opacity-30`} />

            <div className="flex justify-between items-start z-10 relative">
                <div className="space-y-3 flex-1">
                    <p className={`text-base font-bold uppercase tracking-wider ${config.label}`}>
                        {title}
                    </p>
                    <h3 className="text-5xl font-black tracking-tight text-gray-900 dark:text-white">
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

                {Icon && (
                    <div className={`p-3 rounded-2xl transition-all duration-300 group-hover:scale-110 ${config.icon}`}>
                        <Icon className="w-6 h-6" />
                    </div>
                )}
            </div>
        </div>
    );
};

import React from 'react';

export const Button = ({ 
    variant = 'primary', 
    icon, 
    label, 
    onClick, 
    className = '', 
    children,
    ...props 
}) => {
    const baseStyles = "relative flex items-center justify-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 font-medium overflow-hidden group";
    
    const variants = {
        primary: `bg-gradient-to-br from-blue-500/90 to-blue-700/90 text-white backdrop-blur-2xl border border-blue-400/50 border-t-blue-300/80 
                  hover:from-blue-400/90 hover:to-blue-600/90 hover:border-white/80 hover:shadow-[0_10px_30px_rgba(59,130,246,0.6),inset_0_0_15px_rgba(255,255,255,0.5)]
                  dark:from-cyan-500/20 dark:to-blue-600/20 dark:text-cyan-300 dark:border-white/10 dark:border-t-white/30 
                  dark:hover:border-cyan-300 dark:hover:from-cyan-400/30 dark:hover:to-blue-500/30 dark:hover:shadow-[0_0_30px_rgba(0,255,255,0.5),inset_0_0_20px_rgba(0,255,255,0.2)]`,
        danger:  `bg-gradient-to-br from-red-500/10 to-red-600/5 text-red-600 backdrop-blur-2xl border border-red-500/30 border-t-red-400/50
                  hover:from-red-500/20 hover:border-red-500/80 hover:shadow-[0_10px_30px_rgba(239,68,68,0.4),inset_0_0_15px_rgba(239,68,68,0.2)]
                  dark:from-red-500/10 dark:to-red-900/10 dark:text-red-400 dark:border-white/10 dark:border-t-white/30 
                  dark:hover:border-red-400 dark:hover:from-red-500/20 dark:hover:shadow-[0_0_30px_rgba(239,68,68,0.6),inset_0_0_20px_rgba(239,68,68,0.2)]`,
        outline: `bg-gradient-to-br from-white/40 to-white/10 text-gray-800 backdrop-blur-2xl border border-white/60 border-t-white/90 
                  hover:from-white/60 hover:to-white/30 hover:border-blue-400 hover:shadow-[0_10px_30px_rgba(59,130,246,0.2),inset_0_0_20px_rgba(255,255,255,0.8)]
                  dark:from-white/10 dark:to-white/0 dark:text-gray-200 dark:border-white/10 dark:border-t-white/30 
                  dark:hover:border-cyan-400 dark:hover:from-cyan-500/10 dark:hover:shadow-[0_0_30px_rgba(0,255,255,0.3),inset_0_0_20px_rgba(255,255,255,0.1)]`,
        ghost:   `bg-transparent text-gray-600 hover:bg-white/50 backdrop-blur-sm border border-transparent
                  dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white dark:hover:border-white/10 dark:hover:shadow-[inset_0_0_15px_rgba(255,255,255,0.05)]`
    };

    return (
        <button 
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {/* Top glass reflection */}
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            
            {icon && (React.isValidElement(icon) ? icon : React.createElement(icon, { className: `w-4 h-4 flex-shrink-0 ${variant === 'primary' ? 'drop-shadow-md' : ''}` }))}
            {(label || children) && <span>{label || children}</span>}
        </button>
    );
};

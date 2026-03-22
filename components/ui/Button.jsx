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
    const variants = {
        primary: 'btn-primary',
        danger: 'btn-danger',
        outline: `btn-base bg-white/70 text-gray-800 font-semibold backdrop-blur-2xl border border-gray-200 shadow-sm
                  hover:bg-white hover:border-blue-400 hover:text-blue-600 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)]
                  dark:bg-white/5 dark:text-white dark:border-white/15 dark:border-t-white/30
                  dark:hover:border-cyan-400 dark:hover:bg-cyan-500/10 dark:hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]`,
        ghost: `btn-base bg-transparent text-gray-700 font-medium hover:bg-gray-100 hover:text-gray-900 backdrop-blur-sm border border-transparent
                dark:text-gray-200 dark:hover:bg-white/10 dark:hover:text-white dark:hover:border-white/10`
    };

    return (
        <button 
            className={`group ${variants[variant]} ${className}`}
            onClick={onClick}
            {...props}
        >
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            
            {icon && (React.isValidElement(icon) ? icon : React.createElement(icon, { className: `w-4 h-4 flex-shrink-0 ${variant === 'primary' ? 'drop-shadow-md' : ''}` }))}
            {(label || children) && <span>{label || children}</span>}
        </button>
    );
};

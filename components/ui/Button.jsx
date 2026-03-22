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
        outline: 'btn-outline',
        ghost: 'btn-ghost'
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

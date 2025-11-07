import React from 'react';

interface GlassBoxProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

const GlassBox: React.FC<GlassBoxProps> = ({ children, className = "", style, onClick }) => {
    return (
        <div 
            className={`bg-black/10 border-[1px] border-black/15 backdrop-blur-md rounded-xl z-10 w-full ${className}`}
            style={style}
            onClick={onClick}
        >
            {children}
        </div>
    )
}

export default GlassBox;
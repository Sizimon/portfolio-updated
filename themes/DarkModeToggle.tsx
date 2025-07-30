import React, { useRef, useLayoutEffect, useState } from "react";
import { useTheme } from "next-themes";

const DarkModeToggle: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const isDark = theme === "dark";
    const buttonRef = useRef<HTMLButtonElement>(null);
    const ballRef = useRef<HTMLSpanElement>(null);
    const [maxTranslate, setMaxTranslate] = useState(0);

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark");
    };

    useLayoutEffect(() => {
        if (buttonRef.current && ballRef.current) {
            const buttonRect = buttonRef.current.getBoundingClientRect();
            const ballRect = ballRef.current.getBoundingClientRect();
            const style = getComputedStyle(buttonRef.current);
            const paddingLeft = parseFloat(style.paddingLeft);
            const paddingRight = parseFloat(style.paddingRight);
            setMaxTranslate(
                buttonRect.width - ballRect.width - paddingLeft - paddingRight
            );
        }
    }, [isDark]);

    return (
        <button
            ref={buttonRef}
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className={`cursor-pointer
                w-20 h-8 md:w-28 md:h-10 rounded-full flex items-center px-1 md:px-2
                bg-gradient-to-r from-slate-700 via-slate-800 to-yellow-200
                transition-colors duration-500
                relative
                shadow-inner
                group
            `}
        >
            <div className="absolute inset-0 rounded-full pointer-events-none" />
            <span
                ref={ballRef}
                className={`
                    transition-transform duration-500
                    w-7 h-7 md:w-8 md:h-8 rounded-full
                    bg-transparent
                    flex items-center justify-center shadow-lg
                    relative z-10
                `}
                style={{
                    transform: isDark
                        ? "translateX(0)"
                        : `translateX(${maxTranslate}px)`,
                    transition: "transform 0.5s cubic-bezier(.4,2,.6,1)",
                }}
            >
                {isDark ? (
                    // Full Moon
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="block md:w-8 md:h-8 w-7 h-7"
                        fill="none"
                    >
                        <circle cx="12" cy="12" r="9" fill="#ffffff" />
                    </svg>
                ) : (
                    // Sun
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="block md:w-8 md:h-8 w-7 h-7"
                        fill="none"
                    >
                        <circle cx="12" cy="12" r="9" fill="#facc15" />
                        <g stroke="#fbbf24" strokeWidth="1.5">
                            <line x1="12" y1="2" x2="12" y2="5" />
                            <line x1="12" y1="19" x2="12" y2="22" />
                            <line x1="2" y1="12" x2="5" y2="12" />
                            <line x1="19" y1="12" x2="22" y2="12" />
                            <line x1="5.5" y1="5.5" x2="7.5" y2="7.5" />
                            <line x1="16.5" y1="16.5" x2="18.5" y2="18.5" />
                            <line x1="5.5" y1="18.5" x2="7.5" y2="16.5" />
                            <line x1="16.5" y1="7.5" x2="18.5" y2="5.5" />
                        </g>
                    </svg>
                )}
            </span>
        </button>
    );
};

export default DarkModeToggle;
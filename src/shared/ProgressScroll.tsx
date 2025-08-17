'use client';

import React, { useState, useRef, useEffect } from 'react';

export const ProgressScroll: React.FC = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const scrollRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!scrollRef.current) return;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Get the distance already scrolled
            const docHeight = document.documentElement.scrollHeight - window.innerHeight; // Get the total scrollable height of the document
            const progress = (scrollTop / docHeight) * 100; // Calculate the scroll progress in % (distanceScrolled / totalScrollableHeight) * 100
            setScrollProgress(progress); // 0 - 100
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.style.width = `${scrollProgress}%`;
        }
    }, [scrollProgress]);

    return (
        <div ref={scrollRef} className="fixed top-0 left-0 w-full h-1 bg-pop z-100" />
    );
}
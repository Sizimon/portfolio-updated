'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface FloatyHeaderProps {
    letters: string[];
}

const FloatyHeader: React.FC<FloatyHeaderProps> = ({ letters }) => {
    const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
        const currentRefs = letterRefs.current;
        // Timeline for staggered fade-in
        const tl = gsap.timeline();
        tl.fromTo(
            currentRefs,
            { opacity: 0, y: 30, rotation: 0 },
            {
                opacity: 1,
                y: 0,
                rotation: 0,
                stagger: 0.15,
                duration: 0.7,
                ease: "power2.out",
            }
        );

        // After fade-in, start floaty wiggle for each letter
        currentRefs.forEach((el, i) => {
            if (!el) return;
            const duration = Math.random() * 4 + 4; // 4-8s
            const amplitude = Math.random() * 12 + 12; // 12-24px
            gsap.to(el, {
                y: `+=${amplitude * (Math.random() > 0.5 ? 1 : -1)}`,
                rotation: Math.random() * 16 - 8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                duration,
                delay: 0.7 + i * 0.15,
            });
        });

        // Cleanup on unmount
        return () => {
            gsap.killTweensOf(currentRefs);
        };
    }, []);

    return (
        <div className="relative w-full py-[5vh]">
            <div className="grid grid-cols-8 gap-2 w-full md:w-2/4 justify-center items-center mx-auto pb-0 px-8 md:px-0 z-10">
                {letters.map((letter, i) => (
                    <span
                        key={i}
                        ref={el => {letterRefs.current[i] = el}}
                        className="text-pop font-extralight text-4xl md:text-7xl UWQ:text-9xl font-alt inline-block"
                        style={{ opacity: 0, display: 'inline-block' }}
                    >
                        {letter}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default FloatyHeader;
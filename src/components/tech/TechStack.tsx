import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaReact, FaNode, FaJs, FaAws, FaDocker } from "react-icons/fa6";
import { DiPostgresql } from "react-icons/di";

gsap.registerPlugin(ScrollTrigger);

export const HeroTechHeader = ({
    className,
    text,
}: {
    className?: string;
    text: string;
}) => {
    const headerRef = useRef<HTMLHeadingElement | null>(null);
    const [initialPosition, setInitialPosition] = useState<{ x: number, y: number } | null>(null);

    useEffect(() => {
        const updateAnimation = () => {
            const isMobile = window.matchMedia('(max-width: 768px)').matches;
            setInitialPosition({ x: 0, y: 100 });
        };

        updateAnimation();
        window.addEventListener('resize', updateAnimation);

        return () => window.removeEventListener('resize', updateAnimation);
    }, []);

    useEffect(() => {
        if (initialPosition === null || !headerRef.current) return;

        gsap.set(headerRef.current, { x: initialPosition.x, y: initialPosition.y, opacity: 0 });

        gsap.to(headerRef.current, {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: headerRef.current,
                start: "top 90%",
                once: true,
            },
        });
    }, [initialPosition]);

    if (initialPosition === null) return null;

    return (
        <header
            ref={headerRef}
            className={className}
        >
            {text}
        </header>
    );
};

const ICONS = [
    <FaJs key="js" />,
    <FaReact key="react" />,
    <FaNode key="node" />,
    <FaAws key="aws" />,
    <FaDocker key="docker" />,
    <DiPostgresql key="postgres" />,
];

const HeroTechStack = () => {
    const iconRefs = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
        iconRefs.current.forEach((el, i) => {
            if (!el) return;
            gsap.set(el, { opacity: 0, y: 40 });
            gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 0.3,
                delay: i * 0.4,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 95%",
                    once: true,
                },
            });
        });
    }, []);

    // Reset refs on each render
    iconRefs.current = [];

    return (
        <div className="relative flex flex-col items-center justify-center mx-auto px-4 h-lvh w-full bg-foreground">
            {/* Gradient transition at top */}
            <div className="absolute left-0 right-0 top-0 h-32 pointer-events-none z-20 bg-gradient-to-b from-background to-foreground md:h-[200px]" />

            {/* MAIN TECHNOLOGIES DISPLAY */}
            <section className='flex flex-col justify-center text-center p-2'>
                <HeroTechHeader
                    text="My Technologies"
                    className="font-heading text-default uppercase text-4xl md:text-6xl 4k:text-9xl tracking-wider pb-10"
                />
                <div className='grid grid-cols-3 md:grid-cols-6 gap-12'>
                    {ICONS.map((Icon, i) => (
                        <span
                            key={i}
                            ref={el => { iconRefs.current[i] = el; }}
                            className='flex justify-center items-center text-6xl md:text-7xl 4k:text-9xl text-default'
                            style={{ opacity: 0, transform: 'translateY(40px)' }}
                        >
                            {Icon}
                        </span>
                    ))}
                </div>

                {/* Gradient transition at bottom */}
                <div className="absolute left-0 right-0 bottom-0 h-32 pointer-events-none z-20 bg-gradient-to-b from-foreground to-background md:h-[200px]" />
            </section>
        </div>
    );
};

export default HeroTechStack;
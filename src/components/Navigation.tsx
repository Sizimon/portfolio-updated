"use client";
import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { FaRegMehBlank } from "react-icons/fa";
import { GiStack } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdConnectWithoutContact } from "react-icons/md";

const NAV_ITEMS = [
    { icon: <FaRegMehBlank className='w-6 h-6' />, href: "#me", section: "me" },
    { icon: <GiStack className='w-6 h-6' />, href: "#tech-stack", section: "tech-stack" },
    { icon: <AiOutlineFundProjectionScreen className='w-6 h-6' />, href: "#projects", section: "projects" },
    { icon: <MdConnectWithoutContact className='w-6 h-6' />, href: "#contact", section: "contact" }
]

export const Navigation: React.FC = () => {
    const navRef = useRef<HTMLDivElement | null>(null);
    const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
    const borderRef = useRef<HTMLDivElement | null>(null);
    const [active, setActive] = useState<number>(0);

    // Click handler to set active item and scroll to section
    const handleItemClick = (index: number) => {
        setActive(index);
        const sectionId = NAV_ITEMS[index].section;
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Initial animation for navigation
    useEffect(() => {
        if (!navRef.current) return;
        gsap.fromTo(
            navRef.current,
            { opacity: 0 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );
    }, []);

    // Move neon border when active changes
    useEffect(() => {
        const el = itemRefs.current[active];
        const border = borderRef.current;
        if (el && border) {
            const { offsetLeft, offsetWidth } = el;
            gsap.to(border, {
                x: offsetLeft,
                width: offsetWidth,
                duration: 0.35,
                ease: "power2.out",
            });
        }
    }, [active]);

    useEffect(() => {
        const sectionIds = NAV_ITEMS.map(item => item.section);

        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 4; // adjust offset as needed
            let current = 0;
            sectionIds.forEach((id, index) => {
                const section = document.getElementById(id);
                if (section) {
                    const sectionTop = section.offsetTop;
                    if (scrollPosition >= sectionTop) {
                        current = index;
                    }
                }
            });
            setActive(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // set initial state

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            ref={navRef}
            className="fixed mt-4 top-0 left-1/2 -translate-x-1/2 w-4/6 md:w-1/6 p-2 rounded-full bg-zinc-700/40 z-40 border-red-100 border-1 backdrop-blur-sm">
            <ul className="flex space-x-4 justify-evenly z-50">
                <div
                    ref={borderRef}
                    className="absolute bottom-0 h-[4px] rounded-full bg-pop shadow-[0_0_8px_2px_oklch(83.076%_0.22016_128.976),0_0_24px_4px_oklch(83.076%_0.22016_128.976)] transition-all duration-300"
                    style={{
                        left: 0,
                        width: 0,
                        pointerEvents: "none",
                        zIndex: 1,
                    }}
                />
                {NAV_ITEMS.map((item, index) => (
                    <li
                        key={item.href}
                        ref={el => { itemRefs.current[index] = el }}
                        className="relative"
                    >
                        <span
                            onClick={() => handleItemClick(index)}
                            className={`cursor-pointer text-default transition-colors duration-200`}
                        >
                            {item.icon}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
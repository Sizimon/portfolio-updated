"use client";
import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { FaRegMehBlank } from "react-icons/fa";
import { GiStack } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdConnectWithoutContact } from "react-icons/md";

const NAV_ITEMS = [ // Navigation items for the sidebar (customise at will)
    { icon: <FaRegMehBlank className='w-6 h-6 UWQ:w-18 UWQ:h-18' />, href: "#me", section: "me", label: "About Me" },
    { icon: <GiStack className='w-6 h-6 UWQ:w-18 UWQ:h-18' />, href: "#tech-stack", section: "tech-stack", label: "Tech Stack" },
    { icon: <AiOutlineFundProjectionScreen className='w-6 h-6 UWQ:w-18 UWQ:h-18' />, href: "#projects", section: "projects", label: "Projects" },
    { icon: <MdConnectWithoutContact className='w-6 h-6 UWQ:w-18 UWQ:h-18' />, href: "#contact", section: "contact", label: "Contact" }
]

export const Navigation: React.FC = () => {
    const navRef = useRef<HTMLDivElement | null>(null);
    const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
    const borderRef = useRef<HTMLDivElement | null>(null);
    const labelRefs = useRef<Array<HTMLSpanElement | null>>([]);
    const [active, setActive] = useState<number>(0);
    console.log(active)

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
            const { offsetTop, offsetHeight } = el;
            gsap.to(border, {
                y: offsetTop,
                height: offsetHeight + 16,
                x: 0,
                width: '0.25rem',
                duration: 0.35,
                ease: "power2.out",
            });
        }
    }, [active]);


    useEffect(() => {
    let tl = gsap.timeline();

    const labelEl = labelRefs.current[active];
    if (labelEl) {
        const letters = labelEl.querySelectorAll('span');
        tl.fromTo(
            letters,
            { opacity: 0, y: 10 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 3,
                ease: "power2.out"
            }
        );
        tl.to(letters, {
            opacity: 0,
            y: 10,
            stagger: 0.1,
            duration: 1,
            ease: "power2.out"
        });
    }
    // Fade out previous label
    return () => {
        if (labelEl) {
            const letters = labelEl.querySelectorAll('span');
            gsap.to(letters, {
                opacity: 0,
                y: -10,
                stagger: 0.03,
                duration: 0.3,
                ease: "power2.in"
            });
        }
    };
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
            className="fixed mt-4 left-0 top-1/2 -translate-y-1/2 h-2/4 w-10 md:w-12 UWQ:w-36 p-2 rounded-r-full bg-zinc-700/40 z-40 backdrop-blur-sm flex flex-col items-center justify-center">
            <div
                ref={borderRef}
                className="absolute right-0 top-0 w-1 rounded-full bg-pop shadow-[0_0_8px_2px_oklch(70.4%_0.191_22.216),0_0_24px_4px_oklch(70.4%_0.191_22.216)] transition-all duration-300"
                style={{
                    pointerEvents: "none",
                    zIndex: 1,
                }}
            />
            <ul className="flex flex-col justify-evenly items-center h-full relative z-50">
                {NAV_ITEMS.map((item, index) => (
                    <li
                        key={item.href}
                        ref={el => { itemRefs.current[index] = el }}
                        className="relative flex items-center justify-center"
                    >
                        <span
                            onClick={() => handleItemClick(index)}
                            className={`cursor-pointer text-default transition-colors duration-200`}
                        >
                            {item.icon}
                        </span>
                        {active === index && (
                            <span
                                ref={el => { labelRefs.current[index] = el }}
                                className="text-alt font-extralight text-2xl uppercase absolute left-full ml-4 text-pop whitespace-nowrap"
                            >{item.label.split(' ').map((word, i) => (
                                <span key={i} className="inline-block opacity-0">{word}</span>
                            ))}</span>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
'use client';

import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import FloatyHeader from '../../shared/FloatyHeader';
import { projects } from '@/assets/projectList';

const Projects = ({ setModal } : { setModal: React.Dispatch<React.SetStateAction<number>> }) => {
    const [hovered, setHovered] = useState<number | null>(null);
    const bannerRefs = useRef<(HTMLDivElement | null)[]>([]);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
    const bgRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleReadMore = (index: number) => {
        setModal(index + 1);
    };

    // Animate banners with GSAP
    useEffect(() => {
        contentRefs.current.forEach(ref => {
            if (ref) {
                if (ref) gsap.killTweensOf(ref);
            }
        })


        projects.forEach((_, index) => {
            const isHovered = hovered === index;
            gsap.to(bannerRefs.current[index], {
                flexGrow: isHovered ? 3 : 1,
                zIndex: isHovered ? 20 : 10,
                duration: 0.1,
                ease: "power3.inOut"
            });
            gsap.to(bgRefs.current[index], {
                filter: isHovered ? "blur(6px)" : "blur(0px)",
                duration: 0.3,
                ease: "power3.inOut"
            });
            gsap.to(contentRefs.current[index], {
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 40,
                pointerEvents: isHovered ? "auto" : "none",
                duration: 0.5,
                delay: isHovered ? 0.8 : 0,
                ease: "power3.out"
            });
        });
    }, [hovered]);

    return (
        <>
            <section
                id="projects"
                className="w-full flex flex-col items-center justify-center min-h-lvh z-50 px-4 md:px-0 pb-4 md:pb-0">
                {/* Header */}
                <FloatyHeader letters={['P', 'R', 'O', 'J', 'E', 'C', 'T', 'S']} />
                {/* Mobile: Clean vertical cards */}
                <div className="flex flex-col gap-6 w-full max-w-md md:hidden">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="relative h-80 rounded-2xl overflow-hidden shadow-2xl active:scale-95 transition-transform duration-300"
                        >
                            {/* Background Image */}
                            <div 
                                className="absolute inset-0 z-0 bg-cover bg-center brightness-50"
                                style={{
                                    backgroundImage: project.image,
                                }}
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />

                            {/* Content */}
                            <div className="relative z-20 h-full flex flex-col justify-end p-6 text-white">
                                {/* Title */}
                                <h3 className="text-2xl mb-3 text-pop font-alt font-light uppercase tracking-wider leading-tight">
                                    {project.title}
                                </h3>
                                
                                {/* Short Description */}
                                <p className="text-sm mb-6 opacity-90 leading-relaxed">
                                    {project.short}
                                </p>
                                
                                {/* Read More Button */}
                                <div>
                                    <button 
                                        onClick={() => handleReadMore(index)}
                                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-pop/90 text-default font-medium rounded-full active:scale-95 transition-all duration-300 shadow-lg">
                                        <span>Read More</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Subtle Border */}
                            <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none"></div>
                        </div>
                    ))}
                </div>


                {/* Desktop: 2-column 3D cards */}
                <div className="hidden md:grid grid-cols-2 gap-8 w-full max-w-6xl UWQ:max-w-[80lvw] px-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer transform-gpu transition-all duration-700 ease-out hover:scale-105 hover:z-20 shadow-2xl"
                            style={{
                                transformStyle: 'preserve-3d',
                                perspective: '1000px',
                            }}
                        >
                            {/* Background Image */}
                            <div 
                                className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-40"
                                style={{
                                    backgroundImage: project.image,
                                }}
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10 transition-all duration-500 group-hover:from-black/85 group-hover:via-black/30" />

                            {/* Content */}
                            <div className="relative z-20 h-full flex flex-col justify-end p-8 text-white">
                                <div className="transform transition-all duration-500 group-hover:translate-y-[-8px]">
                                    {/* Title */}
                                    <h3 className="text-3xl UWQ:text-4xl mb-4 text-pop font-alt font-light uppercase tracking-wider leading-tight group-hover:text-white transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    
                                    {/* Short Description */}
                                    <p className="text-base UWQ:text-lg mb-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed max-w-sm">
                                        {project.short}
                                    </p>
                                    
                                    {/* Read More Button */}
                                    <div className="transform translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                        <button
                                        onClick={() => handleReadMore(index)}
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-pop/90 hover:bg-pop text-default font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pop/20">
                                            <span>Read More</span>
                                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Enhanced 3D Shadow Effect */}
                            <div className="absolute -inset-6 bg-gradient-to-br from-pop/20 via-sky-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 blur-2xl transform group-hover:scale-110"></div>
                            
                            {/* Subtle Border Glow */}
                            <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-pop/30 transition-colors duration-500 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </section>
        </>

    );
};

export default Projects;
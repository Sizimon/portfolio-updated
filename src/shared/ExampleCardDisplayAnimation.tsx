'use client';

import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { projects } from '@/assets/projectList';

const ExampleAnimationCards = () => {
    const [hovered, setHovered] = useState<number | null>(null);
    const bannerRefs = useRef<(HTMLDivElement | null)[]>([]);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
    const bgRefs = useRef<(HTMLDivElement | null)[]>([]);

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
                className="w-full flex flex-col items-center justify-center min-h-lvh bg-sky-950/80 z-50 px-4 md:px-0 pb-4 md:pb-0">
                {/* Mobile: vertical cards */}
                <div className="flex flex-col gap-6 w-full max-w-md md:hidden">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="relative rounded-lg shadow-lg overflow-hidden"
                            style={{
                                backgroundImage: project.image,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="absolute inset-0 bg-black/80" />
                            <div className="relative z-10 p-6 flex flex-col items-center text-white">
                                <h3 className="text-uwq mb-2 text-pop font-alt font-extralight uppercase">{project.title}</h3>
                                <p className="mb-4 text-center">{project.short}</p>
                                <div className='mb-8'>
                                    <p className="mb-4 text-center text-sm">
                                        {project.description.split('\n').map((line, index) => (
                                            <React.Fragment key={index}>
                                                {line}
                                                <br />
                                            </React.Fragment>
                                        ))}
                                    </p>
                                    <h3 className='text-sm text-pop'><em><strong>Key Features:</strong></em></h3>
                                    {project.features && project.features.length > 0 ? (
                                        <ul className="list-disc list-inside text-sm">
                                            {project.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>No key features available.</p>
                                    )}
                                    <h3 className='text-sm text-pop mt-4'><em><strong>Techstack: </strong><span className='text-white'>{project.techstack}</span></em></h3>
                                </div>
                                <div className="flex gap-4">
                                    <button
                                        className="px-4 py-2 bg-pop text-default rounded-full hover:bg-foreground/80 transition"
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* Desktop: GSAP expanding banners */}
                <div className="hidden md:flex w-full max-w-6xl uwq:max-w-[90lvw] h-[32rem] uwq:h-[48rem] items-stretch justify-center gap-x-4">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            ref={element => { bannerRefs.current[index] = element }}
                            className={`
                            relative flex flex-col justify-center items-center overflow-hidden cursor-default
                            rounded-lg shadow-lg
                            transition-all duration-500
                            flex-1 basis-0 min-w-0
                        `}
                            style={{ minWidth: 0 }}
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            {/* Background image layer with GSAP blur */}
                            <div
                                ref={element => { bgRefs.current[index] = element }}
                                className="absolute inset-0 transition-all duration-500"
                                style={{
                                    backgroundImage: project.image,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    zIndex: 0,
                                }}
                            />
                            {/* Overlay for preview which darkens image if not hovered */}
                            <div className={`absolute inset-0 transition-all duration-500 ${hovered === index ? "bg-black/70" : "bg-black/60 backdrop-blur-2xl"}`} />
                            {/* Preview content */}
                            <div className={`relative z-10 flex flex-col justify-center items-center h-full text-white px-4 ${hovered === index ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                                <p className="text-center uwq:!text-3xl">{project.short}</p>
                            </div>
                            {/* Detailed view overlay if hovered */}
                            <div
                                ref={element => { contentRefs.current[index] = element }}
                                className="absolute inset-0 text-white flex flex-col justify-center items-center py-8 px-16 uwq:px-32 z-20"
                                style={{ opacity: 0, pointerEvents: "none", transform: "translateY(40px)" }}
                            >
                                <div className='mb-2 text-center'>
                                    <h3 className="text-3xl uwq:!text-5xl font-alt font-extralight text-pop uppercase">{project.title}</h3>
                                    <p>{project.short}</p>
                                </div>
                                <div className="flex gap-4">
                                    <button
                                        className="px-4 py-2 bg-pop text-default rounded-full hover:bg-pop/80 transition cursor-pointer"
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>

    );
};

export default ExampleAnimationCards;
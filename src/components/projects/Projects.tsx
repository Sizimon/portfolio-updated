'use client';

import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import FloatyHeader from '../../shared/FloatyHeader';
import Grippendor from '@/assets/Grippy_1.png';
import Noto from '@/assets/noto.png';
import Guruweather from '@/assets/Weather_3.png';

const images = {
    Grippendor: Grippendor.src,
    Noto: Noto.src,
    Guruweather: Guruweather.src,
};

const projects: Array<{
    title: string;
    short: string;
    description: string;
    features: string[];
    builtWith: string;
    image: string;
    demo: string;
    github: string;
}> = [
        {
            title: "Grippendor",
            short: "Discord Community Management Bot",
            description: `
                Built for Discord admins, this bot automates community management with event coordination, RSVP reminders, and intelligent role syncing. 
                It self-cleans its database when users leave or lose roles, and supports customizable dashboards stored in the cloud.
            `,
            features: [
                "Event creation with RSVP tracking and automatic reminders for attendees",
                "Role tracking that syncs with the server: users are auto-removed from the database if their primary role is revoked or they leave the server",
                "Preset & role-based party creation for quick event setups",
                "Customizable server dashboard (banner & icon uploads stored via Cloudinary)"
            ],
            builtWith: "Javascript, React, Node.js (Discord.js/Express), PostgreSQL",
            image: images.Grippendor ? `url(${images.Grippendor})` : "url('/images/default.jpg')",
            demo: "https://szymonsamus.dev/bot-dashboard/",
            github: "https://github.com/Sizimon/attendance-tracker/blob/main/README.md"
        },
        {
            title: "noto()",
            short: "Rich Text Editor & Notekeeping App",
            description: `
                A productivity app built on a custom rich text editor with formatting, embeds, and advanced search. 
                The backend is optimized for efficiency with reduced server calls and API rate limiting for stability. 
                Future plans include AI-assisted summarization and integration with "ClipCurator".
            `,
            features: [
                "Rich text editing with advanced formatting options.",
                "Custom tag creation for better organization",
                "Filtering and categorizing notes via favorites, tags or search",
            ],
            builtWith: "Typescript, Next.js, Node.js (Express), PostgreSQL",
            image: images.Noto ? `url(${images.Noto})` : "url('/images/default.jpg')",
            demo: "https://szymonsamus.dev/noto/",
            github: "https://github.com/Sizimon/noto-frontend/blob/main/README.md"
        },
        {
            title: "Guruweather",
            short: "Weather Forecasting App",
            description: `
                This app uses the OpenWeatherMap API to deliver real-time weather data in a clean, mobile-first interface. 
                It focuses on fast, accurate results with a smooth cross-device experience, with future plans for location alerts and detailed forecasts.
            `,
            features: [
                "Real-time weather updates",
                "Temperature, humidity, and wind speed with user-friendly animations",
                "Third-party API integration",
                "User-friendly design"
            ],
            builtWith: "Javascript, React",
            image: images.Guruweather ? `url(${images.Guruweather})` : "url('/images/default.jpg')",
            demo: "https://szymonsamus.dev/weather-app/",
            github: "https://github.com/user/project3"
        }
    ];

const Projects = () => {
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
                className="w-full px-4 py-8 flex flex-col items-center justify-center min-h-lvh">

                {/* Header */}
                <FloatyHeader letters={['P', 'R', 'O', 'J', 'E', 'C', 'T', 'S']} />

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
                                <h3 className="text-2xl mb-2 text-pop font-alt font-extralight uppercase">{project.title}</h3>
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
                                    <h3 className='text-sm text-pop mt-4'><em><strong>Built With: </strong><span className='text-white'>{project.builtWith}</span></em></h3>
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-pop/80 text-default rounded-full hover:bg-pop/90 transition"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-foreground text-default rounded-full hover:bg-foreground/80 transition"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop: GSAP expanding banners */}
                <div className="hidden md:flex w-full max-w-6xl UWQ:max-w-[50lvw] h-[28rem] UWQ:h-[48rem] items-stretch justify-center gap-x-4">
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
                            <div className={`absolute inset-0 transition-all duration-500 ${hovered === index ? "bg-black/70" : "bg-black/60"}`} />
                            {/* Preview content */}
                            <div className={`relative z-10 flex flex-col justify-center items-center h-full text-white px-4 ${hovered === index ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                                <h3 className="text-2xl text-pop UWQ:text-4xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-center UWQ:text-2xl">{project.short}</p>
                            </div>
                            {/* Detailed view overlay if hovered */}
                            <div
                                ref={element => { contentRefs.current[index] = element }}
                                className="absolute inset-0 text-white flex flex-col justify-center items-center py-8 px-16 UWQ:px-32 z-20"
                                style={{ opacity: 0, pointerEvents: "none", transform: "translateY(40px)" }}
                            >
                                <h3 className="text-3xl UWQ:text-5xl font-alt font-extralight text-pop uppercase mb-2">{project.title}</h3>
                                <div className='mb-8'>
                                    <p className="text-sm UWQ:text-2xl">
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
                                    <h3 className='text-sm text-pop mt-4'><em><strong>Built With: </strong><span className='text-white'>{project.builtWith}</span></em></h3>
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 UWQ:text-3xl bg-pop/80 hover:bg-pop/90 text-default rounded-full transition cursor-pointer"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 UWQ:text-3xl bg-foreground text-default rounded-full hover:bg-foreground/80 transition cursor-pointer"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>

    );
};

export default Projects;
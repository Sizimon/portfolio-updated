'use client'

import React, { useEffect } from 'react';
import { projects } from '@/assets/projectList';

const Modal: React.FC<{ isOpen: number; onClose: () => void; }> = ({ isOpen, onClose }) => {
    const project = projects[isOpen - 1];

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen !== 0) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen !== 0) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    return (
        <div
            className={`fixed w-full h-screen inset-0 z-50 flex items-center justify-center transition-all duration-500 ease-out ${isOpen !== 0
                    ? 'opacity-100 pointer-events-auto backdrop-blur-md bg-black/90'
                    : 'opacity-0 pointer-events-none bg-black/0'
                }`}
            onClick={onClose}
        >
            <div
                className={`relative w-[95vw] h-[90vh] max-w-7xl bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-700 ease-out ${isOpen !== 0
                        ? 'scale-100 translate-y-0 rotate-0'
                        : 'scale-95 translate-y-8 rotate-1'
                    }`}
                onClick={(e) => e.stopPropagation()}
            >
                {project && (
                    <>
                        {/* Header Section with Glass Morphism */}
                        <div className='relative flex flex-col w-full gap-6 border-b border-white/20 p-8 bg-gradient-to-r from-pop/5 to-sky-500/5 backdrop-blur-sm'>
                            <div className='flex flex-col md:flex-row items-start md:items-center gap-6'>
                                <div className='flex-1'>
                                    <h2 className='text-pop text-3xl md:text-5xl UWQ:text-6xl uppercase font-alt font-light tracking-wider leading-tight mb-4'>
                                        {project.title}
                                    </h2>
                                    <p className='text-white/90 text-base md:text-lg leading-relaxed max-w-3xl'>
                                        {project.description}
                                    </p>
                                </div>

                                {/* Video Placeholder */}
                                <div className='w-full md:w-96 h-56 bg-gradient-to-br from-pop/20 to-sky-500/20 rounded-2xl flex items-center justify-center border border-white/10 backdrop-blur-sm'>
                                    <div className='text-center text-white'>
                                        <div className='w-16 h-16 border-4 border-white/60 border-t-pop rounded-full animate-spin mb-4 mx-auto'></div>
                                        <p className='text-sm font-medium'>Loom Video Loading...</p>
                                        <p className='text-xs opacity-70 mt-1'>Project Demo</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row justify-center gap-4'>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className='inline-block mt-2 px-4 py-2 bg-pop/90 hover:bg-pop text-default font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pop/20'>
                                    View Live Demo
                                </a>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className='inline-block mt-2 px-4 py-2 bg-zinc-700/90 border-[1px] border-zinc-700 hover:border-pop text-default font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pop/20'>
                                    View Source Code
                                </a>
                            </div>
                        </div>

                        {/* Content Grid with Enhanced Design */}
                        <div className='flex flex-col md:flex-row w-full h-full overflow-y-auto'>
                            {/* Column 1: Goal & Context */}
                            <div className='flex flex-col w-full md:w-1/4 gap-6 border-r border-white/10 p-8 hover:bg-white/5 transition-colors duration-300'>
                                <div className='flex items-center gap-3 mb-2'>
                                    <div className='w-10 h-10 rounded-full bg-gradient-to-br from-pop to-sky-500 flex items-center justify-center text-white text-xl'>
                                        🎯
                                    </div>
                                    <h3 className='text-pop font-alt text-lg md:text-xl uppercase tracking-wide'>Goal</h3>
                                </div>
                                <div className='text-white/90 text-sm leading-relaxed space-y-4'>
                                    <div className='p-4 bg-white/5 rounded-lg border border-white/10 hover:border-pop/30 transition-colors duration-200'>
                                        <p className='text-pop font-medium mb-2'>Purpose</p>
                                        <p>{project.goal?.purpose || 'Define the main problem this project solves'}</p>
                                    </div>
                                    <div className='p-4 bg-white/5 rounded-lg border border-white/10 hover:border-pop/30 transition-colors duration-200'>
                                        <p className='text-pop font-medium mb-2'>Target</p>
                                        <p>{project.goal?.target || 'Identify the target audience'}</p>
                                    </div>
                                    <div className='p-4 bg-white/5 rounded-lg border border-white/10 hover:border-pop/30 transition-colors duration-200'>
                                        <p className='text-pop font-medium mb-2'>Impact</p>
                                        <p>{project.goal?.impact || 'Describe the expected impact'}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Column 2: Features */}
                            <div className='flex flex-col w-full md:w-1/4 gap-6 border-r border-white/10 p-8 hover:bg-white/5 transition-colors duration-300'>
                                <div className='flex items-center gap-3 mb-2'>
                                    <div className='w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-white text-xl'>
                                        ⚡
                                    </div>
                                    <h3 className='text-yellow-400 font-alt text-lg md:text-xl uppercase tracking-wide'>Features</h3>
                                </div>
                                <div className='space-y-3'>
                                    {project.features?.map((feature, index) => (
                                        <div key={index} className='flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-yellow-400/30 transition-colors duration-200'>
                                            <div className='w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0'></div>
                                            <span className='text-white/90 text-sm leading-relaxed'>{feature}</span>
                                        </div>
                                    )) || <p className='text-white/60 text-sm italic'>No features listed</p>}
                                </div>
                            </div>

                            {/* Column 3: Tech Stack */}
                            <div className='flex flex-col w-full md:w-1/4 gap-6 border-r border-white/10 p-8 hover:bg-white/5 transition-colors duration-300'>
                                <div className='flex items-center gap-3 mb-2'>
                                    <div className='w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white text-xl'>
                                        🛠️
                                    </div>
                                    <h3 className='text-green-400 font-alt text-lg md:text-xl uppercase tracking-wide'>Tech</h3>
                                </div>
                                <div className='space-y-4'>
                                    <div className='p-4 bg-white/5 rounded-lg border border-white/10 hover:border-green-400/30 transition-colors duration-200'>
                                        <p className='text-green-400 font-medium mb-2'>Stack</p>
                                        <p className='text-white/90 text-sm leading-relaxed'>{project.techstack}</p>
                                    </div>
                                    <div className='p-4 bg-white/5 rounded-lg border border-white/10 hover:border-green-400/30 transition-colors duration-200'>
                                        <p className='text-green-400 font-medium mb-2'>Architecture</p>
                                        <p className='text-white/90 text-sm leading-relaxed'>{project.architecture || 'Architecture details not specified'}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Column 4: Challenges */}
                            <div className='flex flex-col w-full md:w-1/4 gap-6 p-8 hover:bg-white/5 transition-colors duration-300'>
                                <div className='flex items-center gap-3 mb-2'>
                                    <div className='w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xl'>
                                        💡
                                    </div>
                                    <h3 className='text-purple-400 font-alt text-lg md:text-xl uppercase tracking-wide'>Challenges</h3>
                                </div>
                                <div className='space-y-4'>
                                    {project.challenges?.map((challenge, index) => (
                                        <div key={index} className='p-4 bg-white/5 rounded-lg border border-white/10 hover:border-purple-400/30 transition-colors duration-200'>
                                            <p className='text-purple-400 font-medium mb-2'>{challenge.problem}</p>
                                            <p className='text-white/80 text-xs leading-relaxed'>{challenge.solution}</p>
                                        </div>
                                    )) || <p className='text-white/60 text-sm italic'>No challenges documented</p>}
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white hover:text-pop transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                >
                    {/* SVG for X (close icon): Regular x & times symbol was no proportionate. */}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                {/* Decorative Gradient Elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-pop/20 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-sky-500/20 to-transparent rounded-full blur-3xl"></div>
            </div>
        </div>
    );
};

export default Modal;
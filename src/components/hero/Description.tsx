import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const HeroDescription = ({
    text,
    className,
}: {
    text: string;
    className?: string;
}) => {
    const [initialPosition, setInitialPosition] = useState<number | null>(null);
    const spanRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const updateInitialPosition = () => {
            const isMobile = window.matchMedia('(max-width: 768px)').matches;
            if (isMobile) {
                setInitialPosition(25);
            } else {
                setInitialPosition(100);
            }
        };

        updateInitialPosition();
        window.addEventListener('resize', updateInitialPosition);

        return () => window.removeEventListener('resize', updateInitialPosition);
    }, []);

    useEffect(() => {
        if (initialPosition === null || !spanRef.current) return;

        // Set initial position and opacity
        gsap.set(spanRef.current, { x: initialPosition, opacity: 0 });

        // Animate to visible when in viewport
        const ctx = gsap.context(() => {
            gsap.to(spanRef.current, {
                x: 0,
                opacity: 1,
                duration: 0.5,
                delay: 0,
                scrollTrigger: {
                    trigger: spanRef.current,
                    start: "top 90%",
                    once: true,
                    // Optional: margin equivalent
                    // markers: true,
                },
            });
        }, spanRef);

        return () => ctx.revert();
    }, [initialPosition]);

    if (initialPosition === null) {
        return null;
    }

    return (
        <span
            ref={spanRef}
            className={className}
            style={{ display: 'inline-block' }}
        >
            {text}
        </span>
    );
};

export default HeroDescription;
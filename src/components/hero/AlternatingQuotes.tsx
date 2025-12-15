import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

export const AlternatingQuotes: React.FC = () => {
    const quoteRefs = useRef<HTMLDivElement | null>(null);
    const [current, setCurrent] = useState(0);

    const QUOTES = [
        'Note to self: Should backup database volumes.',
        'Once wrote a FIX commit message 17 times in a row.',
        'Changed a config file. Broke everything. Put it back. Still broken.',
        'Used == instead of === and spent the next hour gaslighting myself.',
        'Before checking CORS for issues, ensure server is indeed running.',
        'Setting your port 22 inbound rule to 0.0.0.0/0 is a bad idea.',
        'Why Tailwind not working????',
        'Error: Process completed with exit code 1.',
    ];

    useEffect(() => {
        let timeout;

        // Fade in on mount and when quote changes
        gsap.fromTo(
            quoteRefs.current,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 3.5 }
        );

        // Fade out before changing to next quote
        timeout = setTimeout(() => {
            gsap.to(quoteRefs.current, {
                opacity: 0,
                y: -10,
                duration: 1,
                ease: "power2.in",
                onComplete: () => {
                    setCurrent((prev) => (prev + 1) % QUOTES.length);
                }
            });
        }, 10000);

        return () => clearTimeout(timeout);
    }, [current]);

    return (
        <div className="relative flex flex-col mt-8 min-h-[2.5em]">
            <div
                ref={quoteRefs}
                className="text-pop text-center font-alt text-sm md:text-md uwq:!text-xl italic"
            >
                "{QUOTES[current]}" - Szymon Samus
            </div>
        </div>
    );
};
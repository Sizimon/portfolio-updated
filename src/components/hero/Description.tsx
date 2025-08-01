import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroDescription = ({ text, className }: { text: string; className?: string }) => {
    const wordRefs = useRef<Array<HTMLSpanElement | null>>([]);

    useEffect(() => {
        if (!wordRefs.current.length) return;
        gsap.fromTo(
            wordRefs.current,
            { opacity: 0, y: 18 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power2.out',
                stagger: 0.08,
                delay: 2.5,
            }
        );
    }, [text]);

    return (
        <span className={className} style={{ display: 'inline-block', overflow: 'hidden' }}>
            {text.split(' ').map((word, i) => (
                <span
                    key={i}
                    ref={el => { wordRefs.current[i] = el; }}
                    style={{ display: 'inline-block', marginRight: '0.35em', opacity: 0 }}
                >
                    {word}
                </span>
            ))}
        </span>
    );
};

export default HeroDescription;
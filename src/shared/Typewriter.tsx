import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface HeroTypewriterProps {
    text: string;
}

const STAMP_DURATION = 0.025;
const LETTER_DURATION = 0.025;
const DELAY_BETWEEN = 0.05;

const HeroTypewriter: React.FC<HeroTypewriterProps> = ({ text }) => {
    const letterRefs = useRef<Array<HTMLSpanElement | null>>([]);
    const bgRefs = useRef<Array<HTMLSpanElement | null>>([]);

    useEffect(() => {
        gsap.killTweensOf(letterRefs.current);
        gsap.killTweensOf(bgRefs.current);

        const tl = gsap.timeline();

        text.split("").forEach((_, i) => {
            tl
                // Animate background "stamp"
                .to(bgRefs.current[i], {
                    opacity: 1,
                    duration: STAMP_DURATION,
                })
                .to(bgRefs.current[i], {
                    opacity: 0,
                    duration: STAMP_DURATION,
                    delay: DELAY_BETWEEN,
                })
                // Animate letter in
                .to(letterRefs.current[i], {
                    opacity: 1,
                    y: 0,
                    duration: LETTER_DURATION,
                    ease: "power2.out",
                }, "<"); // Start at same time as bg fade out
        });

        return () => {
            tl.kill();
        };
    }, [text]);


    return (
        <h2 className="font-banner text-default uppercase text-3xl md:text-5xl uwq:!text-8xl text-center tracking-wider mb-8">
            {text.split("").map((char, i) => (
                <span key={i} className="relative inline-block">
                    <span
                        ref={el => { bgRefs.current[i] = el; }}
                        className="absolute inset-0 bg-pop opacity-50"
                        style={{ opacity: 0, zIndex: 0, transition: "opacity 0.15s" }}
                    />
                    <span
                        ref={el => { letterRefs.current[i] = el; }}
                        style={{ opacity: 0, position: "relative", zIndex: 1, display: "inline-block" }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </span>
                </span>
            ))}
        </h2>
    );
};

export default HeroTypewriter;
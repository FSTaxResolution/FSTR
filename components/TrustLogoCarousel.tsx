"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const trustLogos = [
    {
        src: "/images/logos/google.png",
        alt: "Google",
    },
    {
        src: "/images/logos/yelp-logo.png",
        alt: "Yelp",
    },
    {
        src: "/images/logos/forbes-black.png",
        alt: "Forbes",
    },
    {
        src: "/images/logos/fortune-black.png",
        alt: "Fortune",
    },
    {
        src: "https://www.fivestartaxresolution.com/wp-content/uploads/2024/07/consumer-alliance-logo-1.webp",
        alt: "Business Consumer Alliance",
    },
    {
        src: "/images/badges/consumeraffairsaccredited.png",
        alt: "Consumer Affairs Accredited",
    },
    {
        src: "https://www.fivestartaxresolution.com/wp-content/uploads/2024/07/SAGE23-Banner-v2-400x224-1.png",
        alt: "Stevie Award Winner",
    },
    {
        alt: "BBB Accredited Business",
        iframe: "https://seal-central-northern-western-arizona.bbb.org/frame/sehzbus/bbb-1000158427.png?chk=8CA7800BC1",
    },
];

const GAP = 48;

const LogoItem = ({ src, alt, iframe }: { src?: string; alt: string; iframe?: string }) => (
    <div className="bg-white p-5 flex items-center justify-center h-24 w-40 shrink-0 select-none">
        {iframe ? (
            <iframe
                src={iframe}
                title={alt}
                style={{ border: 0, height: "38px", width: "100px", display: "block" }}
            />
        ) : (
            <img
                src={src}
                alt={alt}
                className="max-h-full max-w-full object-contain pointer-events-none"
                draggable={false}
            />
        )}
    </div>
);

export default function TrustLogoCarousel() {
    const trackRef = useRef<HTMLDivElement>(null);
    const setARef = useRef<HTMLDivElement>(null);
    const isPaused = useRef(false);
    const rafId = useRef<number>(0);
    const offset = useRef(0);
    const setWidth = useRef(0);
    const [isDragging, setIsDragging] = useState(false);
    const startX = useRef(0);
    const dragOffset = useRef(0);

    useEffect(() => {
        const track = trackRef.current;
        const setA = setARef.current;
        if (!track || !setA) return;

        setWidth.current = setA.offsetWidth + GAP;

        let lastTime = 0;
        const speed = 0.5;

        const tick = (time: number) => {
            if (lastTime === 0) lastTime = time;
            const delta = time - lastTime;
            lastTime = time;

            if (!isPaused.current && setWidth.current > 0) {
                offset.current += speed * (delta / 16);

                if (offset.current >= setWidth.current) {
                    offset.current -= setWidth.current;
                }
            }

            track.style.transform = `translateX(-${offset.current}px)`;
            rafId.current = requestAnimationFrame(tick);
        };

        rafId.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafId.current);
    }, []);

    const handlePointerDown = useCallback((e: React.PointerEvent) => {
        isPaused.current = true;
        setIsDragging(true);
        startX.current = e.clientX;
        dragOffset.current = offset.current;
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    }, []);

    const handlePointerMove = useCallback(
        (e: React.PointerEvent) => {
            if (!isDragging) return;
            const diff = startX.current - e.clientX;
            offset.current = dragOffset.current + diff;

            if (setWidth.current > 0) {
                while (offset.current < 0) offset.current += setWidth.current;
                while (offset.current >= setWidth.current)
                    offset.current -= setWidth.current;
            }
        },
        [isDragging]
    );

    const handlePointerUp = useCallback(() => {
        setIsDragging(false);
        isPaused.current = false;
    }, []);

    return (
        <section className="bg-fst-gray py-section font-sans">
            {/* Header */}
            <div className="max-w-(--width-container) mx-auto px-container-padding mb-12">
                <p className="text-eyebrow tracking-[0.2em] uppercase text-lime font-semibold mb-3">
                    Navigating Financial Challenges with Confidence
                </p>
                <hr className="border-navy/20 mb-6" />
                <div className="grid grid-cols-1 items-start gap-grid-gap lg:grid-cols-[1fr_1fr]">
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }} className="leading-tight">
                        Your Trusted Partner in Tax Resolution
                    </h2>
                    <p className="text-body-text text-body self-end lg:text-right">
                        Trust us to guide you through the complexities of tax regulations and
                        achieve the best possible outcomes for your financial future.
                    </p>
                </div>
            </div>

            {/* Carousel */}
            <div className="max-w-(--width-container) mx-auto overflow-hidden cursor-grab active:cursor-grabbing">
                <div
                    ref={trackRef}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerLeave={handlePointerUp}
                    className="flex gap-12 w-max will-change-transform"
                >
                    {/* Set A */}
                    <div ref={setARef} className="flex gap-12 shrink-0">
                        {trustLogos.map((logo) => (
                            <LogoItem key={logo.alt} {...logo} />
                        ))}
                    </div>
                    {/* Set B — duplicate for seamless loop */}
                    <div className="flex gap-12 shrink-0">
                        {trustLogos.map((logo) => (
                            <LogoItem key={logo.alt} {...logo} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

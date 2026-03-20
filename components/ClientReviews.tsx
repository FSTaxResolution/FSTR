"use client";

import { useRef, useState, useEffect, useCallback } from "react";

/* ── Add new reviews here ── */
const reviews = [
    {
        quote:
            "I was facing a bank levy and was in a total panic. They acted within hours to stop the IRS and protect my assets. Their speed and efficiency are unmatched. They turned a nightmare scenario into a manageable plan. I am so thankful for their expertise and the way they handled my emergency.",
        name: "Daniel McDude",
        source: "Google Review",
    },
    {
        quote:
            "Five Star Tax Resolution helped me settle my $85,000 tax debt for a fraction of what I owed. Their team was professional, responsive, and genuinely cared about my situation. I would recommend them to anyone dealing with IRS problems.",
        name: "Sarah M.",
        source: "Google Review",
    },
    {
        quote:
            "After years of ignoring my tax issues, I finally reached out to Five Star. They made the entire process stress-free and got me into a manageable payment plan. I wish I had called them sooner.",
        name: "James T.",
        source: "Google Review",
    },
    {
        quote:
            "The team at Five Star was incredibly knowledgeable and walked me through every step. They negotiated with the IRS on my behalf and saved me thousands. I can finally sleep at night knowing my tax issues are resolved.",
        name: "Maria L.",
        source: "Google Review",
    },
    {
        quote:
            "I had wage garnishments and didn't know what to do. Five Star stepped in, stopped the garnishment quickly, and set up a plan I could actually afford. They truly changed my life.",
        name: "Robert K.",
        source: "Google Review",
    },
];

const StarIcon = () => (
    <svg
        className="w-4 h-4 fill-navy"
        viewBox="0 0 576 512"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
    </svg>
);

interface Review {
    quote: string;
    name: string;
    source: string;
}

const ReviewCard = ({ review }: { review: Review }) => (
    <div className="border border-navy/10 bg-white p-8 w-96 shrink-0 select-none flex flex-col justify-between">
        <div>
            <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                ))}
            </div>
            <p className="text-body-text text-sm leading-relaxed mb-6">
                &ldquo;{review.quote}&rdquo;
            </p>
        </div>
        <div>
            <p className="font-semibold text-navy text-sm">{review.name}</p>
            <p className="text-body-text/60 text-xs">{review.source}</p>
        </div>
    </div>
);

const GAP = 24;

function ReviewCarousel() {
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
        <div className="overflow-hidden cursor-grab active:cursor-grabbing">
            <div
                ref={trackRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
                className="flex gap-6 w-max will-change-transform"
            >
                {/* Set A */}
                <div ref={setARef} className="flex gap-6 shrink-0">
                    {reviews.map((review) => (
                        <ReviewCard key={review.name} review={review} />
                    ))}
                </div>
                {/* Set B — duplicate for seamless loop */}
                <div className="flex gap-6 shrink-0">
                    {reviews.map((review) => (
                        <ReviewCard key={review.name} review={review} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function ClientReviews() {
    return (
        <section className="bg-fst-gray px-container-padding py-section font-sans">
            <div className="max-w-(--width-container) mx-auto mb-10">
                {/* Header */}
                <p className="text-eyebrow tracking-[0.2em] uppercase text-lime font-semibold mb-3">
                    Testimonial
                </p>
                <hr className="border-navy/20 mb-6" />
                <div className="grid grid-cols-1 items-start gap-grid-gap lg:grid-cols-[1fr_1fr] mb-12">
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }} className="leading-tight">
                        Client Reviews
                    </h2>
                    <p className="text-body-text text-body self-end lg:text-right">
                        The best way to showcase our commitment is through the experiences
                        and stories of those who have partnered with us.
                    </p>
                </div>
            </div>

            {/* Carousel */}
            <div className="max-w-(--width-container) mx-auto">
                <ReviewCarousel />
            </div>
        </section>
    );
}

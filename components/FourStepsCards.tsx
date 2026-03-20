"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
    {
        number: "01",
        eyebrow: "Answer a few questions",
        title: "Initial Consultation & Assessment",
        description: "Understanding your financial situation.",
    },
    {
        number: "02",
        eyebrow: "We use our expertise",
        title: "Tailored Strategy Development",
        description: "Customized tax plan aligned with your goals.",
    },
    {
        number: "03",
        eyebrow: "How we work with you",
        title: "Implementation & Filing",
        description: "Precise filing for optimal results.",
    },
    {
        number: "04",
        eyebrow: "We're with you all the way",
        title: "Ongoing Support & Review",
        description: "Continuous support and periodic reviews.",
    },
];

const TOP_OFFSET = 50;
const STACK_GAP = 18;

function StepCard({
    step,
    index,
    total,
}: {
    step: (typeof steps)[number];
    index: number;
    total: number;
}) {
    const cardRef = useRef<HTMLDivElement>(null);
    const isLast = index === total - 1;

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.92]);

    return (
        <motion.div
            ref={cardRef}
            style={{
                position: "sticky",
                top: TOP_OFFSET + index * STACK_GAP,
                scale: isLast ? 1 : scale,
                transformOrigin: "top center",
            }}
            className="bg-white shadow-sm"
        >
            <div className="relative flex items-center min-h-87.5 px-12 py-16 md:px-20 md:py-20">
                {/* Ghost number */}
                <span
                    className="absolute left-8 top-1/2 -translate-y-1/2 select-none pointer-events-none font-bold leading-none text-white md:left-14"
                    style={{ fontSize: "clamp(140px, 18vw, 220px)", WebkitTextStroke: "2px #082544", WebkitTextFillColor: "white" }}
                    aria-hidden="true"
                >
                    {step.number}
                </span>

                {/* Text content */}
                <div className="ml-auto w-full pl-4 md:w-[58%]">
                    <p className="text-eyebrow tracking-[0.2em] uppercase text-lime font-semibold mb-3">
                        {step.eyebrow}
                    </p>
                    <h4 className="mb-1 leading-snug">
                        {step.title}
                    </h4>
                    <p className="text-body-text text-sm">{step.description}</p>
                </div>
            </div>
        </motion.div>
    );
}

export default function FourStepsCards() {
    return (
        <section className="bg-fst-gray px-container-padding py-section font-sans">
            {/* Header */}
            <div className="max-w-(--width-container) mx-auto mb-10 flex items-start justify-between">
                <div>
                    <p className="text-eyebrow tracking-[0.2em] uppercase text-lime font-semibold mb-3">
                        How we help you through the process
                    </p>
                    <hr className="border-navy/20 mb-6" />
                    <h2
                        className="leading-tight"
                        style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                    >
                        Simplified Tax Relief
                        <br />
                        In 4 Steps
                    </h2>
                </div>
            </div>

            {/* Stacked cards */}
            <div className="max-w-(--width-container) mx-auto flex flex-col gap-10">
                {steps.map((step, i) => (
                    <StepCard
                        key={step.number}
                        step={step}
                        index={i}
                        total={steps.length}
                    />
                ))}
            </div>
        </section>
    );
}

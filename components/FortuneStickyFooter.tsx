"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
);

const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#f5a623">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
);

export default function FortuneStickyFooter({ phone = "866-598-4840" }: { phone?: string }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 170);
        };
        handleScroll(); // check on mount
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div
            className="fixed bottom-0 left-0 w-full z-50 lg:hidden transition-all duration-500 ease-in-out"
            style={{
                fontFamily: "var(--font-graphik-compact)",
                transform: visible ? "translateY(0)" : "translateY(100%)",
                opacity: visible ? 1 : 0,
            }}
        >
            {/* Phone bar */}
            <Link
                href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                className="flex items-center justify-center gap-2 bg-[#289e7d] text-white text-lg font-medium tracking-wide no-underline py-3"
            >
                <PhoneIcon />
                {phone}
            </Link>

            {/* Bottom section */}
            <div className="bg-white px-4 py-3 border-t border-gray-200">
                {/* Logo + rating row */}
                <div className="flex items-center justify-between mb-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/images/logos/oldfivestarlogotransparent.png"
                        alt="Five Star Tax Resolution"
                        className="h-20 w-auto object-contain"
                    />
                    <div className="flex items-stretch rounded-md overflow-hidden border border-gray-200">
                        <div className="bg-[#ededed] flex items-center justify-center px-3 py-2">
                            <span className="text-xl font-bold text-navy">5</span>
                        </div>
                        <div className="bg-white flex flex-col items-center justify-center px-3 py-2 border-l border-gray-300">
                            <span className="text-sm font-medium leading-tight">Excellent</span>
                            <div className="flex gap-0.5 mt-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Get Started button — full width */}
                <Link
                    href="#"
                    onClick={(e) => { e.preventDefault(); scrollToTop(); }}
                    className="w-full bg-[#004459] text-white text-base font-semibold no-underline py-3 rounded-2xl flex items-center justify-center gap-1"
                >
                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}

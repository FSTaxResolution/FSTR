"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
);

const HamburgerIcon = ({ open }: { open: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {open ? (
            <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
            </>
        ) : (
            <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
            </>
        )}
    </svg>
);

const serviceColumns = [
    {
        heading: "Tax Relief",
        items: [
            { label: "Currently Non Collectible", href: "/tax-relief/currently-non-collectible" },
            { label: "IRS Fresh Start Program", href: "/tax-relief/irs-fresh-start-program" },
            { label: "Installment Agreement", href: "/tax-relief/irs-installment-agreement-services" },
            { label: "Penalty Abatement", href: "/tax-relief/how-penalty-abatement-works" },
            { label: "Offer In Compromise", href: "/tax-relief/offer-in-compromise" },
            { label: "Truck Driver Back Taxes", href: "/tax-relief/truck-driver-back-taxes" },
        ],
    },
    {
        heading: "Tax Help",
        items: [
            { label: "IRS Levy", href: "/tax-services/tax-help/irs-tax-levy" },
            { label: "IRS Wage Garnishment", href: "/tax-services/tax-help/stop-irs-wage-garnishment" },
            { label: "Unfiled Tax Returns", href: "/tax-services/tax-help/unfiled-tax-returns-non-filer" },
        ],
    },
    {
        heading: "Business Help",
        items: [
            { label: "Corporate Tax Prep", href: "/tax-services/business-help/corporate-tax-preparation-services" },
        ],
    },
];

export default function Header({ phone = "(866) 902-9123" }: { phone?: string }) {
    const [servicesOpen, setServicesOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    return (
        <nav className="absolute top-0 left-0 w-full z-50 font-sans border-b border-white/10" style={{ backgroundColor: "rgba(8, 37, 68, 0.1)", backdropFilter: "blur(20px)" }}>

            {/* ── DESKTOP (lg+) ── */}
            <div className="hidden lg:block">
                {/* Top row: logo + press logos */}
                <div className="flex items-center justify-between px-12 pt-5 pb-3">
                    <Link href="/">
                        <Image
                            src="/images/logos/fivestartransparent.png"
                            alt="Five Star Tax Resolution"
                            width={160}
                            height={54}
                            className="h-13.5 w-auto object-contain"
                        />
                    </Link>

                    <div className="flex items-start gap-8">
                        <div className="flex flex-col items-center gap-0.5">
                            <span className="text-[10px] font-normal tracking-widest uppercase text-[#b0bec5]">
                                Ranked #1 by
                            </span>
                            <div className="h-grid-gap flex items-center">
                                <Image
                                    src="/images/logos/forbes-white.png"
                                    alt="Forbes"
                                    width={120}
                                    height={30}
                                    className="h-grid-gap w-auto object-contain brightness-0 invert"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-0.5">
                            <span className="text-[10px] font-normal tracking-widest uppercase text-[#b0bec5]">
                                Ranked #1 by
                            </span>
                            <div className="h-grid-gap flex items-center">
                                <Image
                                    src="/images/logos/fortune-white.png"
                                    alt="Fortune"
                                    width={118}
                                    height={27}
                                    className="h-6.75 w-auto object-contain brightness-0 invert"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom row: nav links + CTA */}
                <div className="flex items-center justify-between px-12 pb-4">
                    <div className="flex items-baseline gap-9">
                        {/* Services dropdown */}
                        <div className="relative">
                            <span
                                role="button"
                                tabIndex={0}
                                className="inline-flex items-center gap-1.5 text-white text-xs font-medium tracking-[0.12em] uppercase cursor-pointer transition-opacity duration-200 hover:opacity-75"
                                onClick={() => setServicesOpen((o) => !o)}
                                onKeyDown={(e) => e.key === "Enter" && setServicesOpen((o) => !o)}
                            >
                                Tax Services
                                <span
                                    className={`inline-block w-0 h-0 border-l-4 border-r-4 border-l-transparent border-r-transparent border-t-1.25 border-t-white transition-transform duration-200 ${
                                        servicesOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </span>

                            {servicesOpen && (
                                <div className="absolute top-[calc(100%+14px)] left-0 bg-midnight border-t-2 border-lime shadow-[0_8px_24px_rgba(0,0,0,0.3)] z-50 flex">
                                    {serviceColumns.map((col) => (
                                        <div key={col.heading} className="min-w-52 flex flex-col">
                                            <span className="text-lime text-[10px] font-semibold tracking-[0.16em] uppercase px-container-padding pt-4 pb-2">
                                                {col.heading}
                                            </span>
                                            {col.items.map((item) => (
                                                <Link
                                                    key={item.label}
                                                    href={item.href}
                                                    className="text-[#e0e8ef] text-xs font-normal tracking-[0.08em] uppercase no-underline px-container-padding py-3 border-b border-white/5 last:border-b-0 transition-colors duration-150 hover:bg-[color-mix(in_srgb,var(--color-lime)_12%,transparent)] hover:text-white"
                                                >
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link href="/about" className="text-white text-xs font-medium tracking-[0.12em] uppercase no-underline transition-opacity duration-200 hover:opacity-75">
                            About
                        </Link>
                        <Link href="/resources" className="text-white text-xs font-medium tracking-[0.12em] uppercase no-underline transition-opacity duration-200 hover:opacity-75">
                            Resources
                        </Link>
                        <Link href="/contact" className="text-white text-xs font-medium tracking-[0.12em] uppercase no-underline transition-opacity duration-200 hover:opacity-75">
                            Contact
                        </Link>
                    </div>

                    {/* CTA */}
                    <Link
                        href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                        className="flex items-center gap-2.5 bg-white text-[#1a1a1a] text-xs font-bold tracking-[0.14em] uppercase no-underline px-5.5 py-3 transition-colors duration-200 hover:bg-fst-gray whitespace-nowrap"
                    >
                        <span className="hidden lg:inline">{phone}</span>
                        <PhoneIcon />
                    </Link>
                </div>
            </div>

            {/* ── MOBILE (< lg) ── */}
            <div className="lg:hidden">
                {/* Main bar */}
                <div className="flex flex-col px-5 py-4 gap-2">

                    {/* Top row: both badges side by side */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                            <span className="text-[9px] font-normal tracking-widest uppercase text-[#b0bec5]">
                                Ranked #1 by
                            </span>
                            <Image
                                src="/images/logos/forbes-white.png"
                                alt="Forbes"
                                width={72}
                                height={18}
                                className="w-auto object-contain brightness-0 invert"
                                style={{ height: "18px" }}
                            />
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="text-[9px] font-normal tracking-widest uppercase text-[#b0bec5]">
                                Ranked #1 by
                            </span>
                            <Image
                                src="/images/logos/fortune-white.png"
                                alt="Fortune"
                                width={72}
                                height={17}
                                className="w-auto object-contain brightness-0 invert"
                                style={{ height: "17px" }}
                            />
                        </div>
                    </div>

                    {/* Bottom row: logo left, call + hamburger right */}
                    <div className="flex items-center justify-between">
                        <Link href="/">
                            <Image
                                src="/images/logos/fivestartransparent.png"
                                alt="Five Star Tax Resolution"
                                width={120}
                                height={40}
                                className="w-auto object-contain"
                                style={{ height: "40px" }}
                            />
                        </Link>
                        <div className="flex items-center gap-3">
                            <Link
                                href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                                className="flex items-center gap-2 bg-white text-[#1a1a1a] text-[10px] font-bold tracking-[0.14em] uppercase no-underline px-3.5 py-2 transition-colors duration-200 hover:bg-fst-gray"
                            >
                                Call Now
                                <PhoneIcon />
                            </Link>
                            <button
                                className="text-white p-1"
                                onClick={() => setMenuOpen((o) => !o)}
                                aria-label="Toggle menu"
                            >
                                <HamburgerIcon open={menuOpen} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu drawer */}
                {menuOpen && (
                    <div className="bg-midnight border-t border-white/10 px-5 pb-5">

                        {/* Tax Services accordion */}
                        <button
                            className="w-full flex items-center justify-between text-white text-xs font-medium tracking-[0.12em] uppercase py-4 border-b border-white/10"
                            onClick={() => setMobileServicesOpen((o) => !o)}
                        >
                            Tax Services
                            <span
                                className={`inline-block w-0 h-0 border-l-4 border-r-4 border-l-transparent border-r-transparent border-t-1.25 border-t-white transition-transform duration-200 ${
                                    mobileServicesOpen ? "rotate-180" : ""
                                }`}
                            />
                        </button>

                        {mobileServicesOpen && (
                            <div className="pb-2">
                                {serviceColumns.map((col) => (
                                    <div key={col.heading} className="mt-3">
                                        <span className="text-lime text-[10px] font-semibold tracking-[0.16em] uppercase block mb-1">
                                            {col.heading}
                                        </span>
                                        {col.items.map((item) => (
                                            <Link
                                                key={item.label}
                                                href={item.href}
                                                className="block text-[#e0e8ef] text-xs font-normal tracking-[0.08em] uppercase no-underline py-2.5 border-b border-white/5 last:border-b-0"
                                                onClick={() => setMenuOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        )}

                        <Link href="/about" className="block text-white text-xs font-medium tracking-[0.12em] uppercase no-underline py-4 border-b border-white/10" onClick={() => setMenuOpen(false)}>
                            About
                        </Link>
                        <Link href="/resources" className="block text-white text-xs font-medium tracking-[0.12em] uppercase no-underline py-4 border-b border-white/10" onClick={() => setMenuOpen(false)}>
                            Resources
                        </Link>
                        <Link href="/contact" className="block text-white text-xs font-medium tracking-[0.12em] uppercase no-underline py-4 border-b border-white/10" onClick={() => setMenuOpen(false)}>
                            Contact
                        </Link>

                    </div>
                )}
            </div>
        </nav>
    );
}

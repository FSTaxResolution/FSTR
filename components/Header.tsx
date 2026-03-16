"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const services = [
  { label: "IRS Tax Relief", href: "#" },
  { label: "Offer in Compromise", href: "#" },
  { label: "Installment Agreements", href: "#" },
  { label: "Penalty Abatement", href: "#" },
  { label: "Wage Garnishment Relief", href: "#" },
  { label: "Tax Lien Removal", href: "#" },
];

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="w-full font-sans" style={{ backgroundColor: "rgba(8, 37, 68, 0.1)", backdropFilter: "blur(20px)" }}>
      {/* Top row: logo + press logos */}
      <div className="flex items-center justify-between px-12 pt-5 pb-3">
        <Link href="/">
          <Image
            src="/images/fivestartransparent.png"
            alt="Five Star Tax Resolution"
            width={160}
            height={54}
            className="h-[54px] w-auto object-contain"
          />
        </Link>

        <div className="flex items-start gap-8">
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-[10px] font-normal tracking-widest uppercase text-[#b0bec5]">
              Ranked #1 by
            </span>
            <div className="h-[30px] overflow-hidden flex items-center">
              <Image
                src="/images/forbes-white.png"
                alt="Forbes"
                width={152}
                height={45}
                className="h-[45px] w-auto brightness-0 invert"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-[10px] font-normal tracking-widest uppercase text-[#b0bec5]">
              Featured on
            </span>
            <div className="h-[30px] flex items-center">
              <Image
                src="/images/fortune-white.png"
                alt="Fortune"
                width={118}
                height={27}
                className="h-[27px] w-auto object-contain brightness-0 invert"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row: nav links + CTA */}
      <div className="flex items-center justify-between px-12 pb-4">
        <ul className="flex items-center gap-9 list-none m-0 p-0">
          {/* Services dropdown */}
          <li className="relative">
            <button
              className="flex items-center gap-1.5 text-white text-[12px] font-medium tracking-[0.12em] uppercase cursor-pointer bg-transparent border-none p-0 transition-opacity duration-200 hover:opacity-75"
              onClick={() => setServicesOpen((o) => !o)}
            >
              Tax Services
              <span
                className={`inline-block w-0 h-0 border-l-4 border-r-4 border-l-transparent border-r-transparent border-t-[5px] border-t-white transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute top-[calc(100%+14px)] left-0 bg-[var(--color-midnight)] min-w-[200px] border-t-2 border-[var(--color-lime)] shadow-[0_8px_24px_rgba(0,0,0,0.3)] z-50 flex flex-col">
                {services.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-[#e0e8ef] text-[12px] font-normal tracking-[0.08em] uppercase no-underline px-[18px] py-3 border-b border-white/5 last:border-b-0 transition-colors duration-150 hover:bg-[color-mix(in_srgb,var(--color-lime)_12%,transparent)] hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </li>

          <li>
            <Link href="#" className="text-white text-[12px] font-medium tracking-[0.12em] uppercase no-underline transition-opacity duration-200 hover:opacity-75">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="text-white text-[12px] font-medium tracking-[0.12em] uppercase no-underline transition-opacity duration-200 hover:opacity-75">
              Resources
            </Link>
          </li>
          <li>
            <Link href="#" className="text-white text-[12px] font-medium tracking-[0.12em] uppercase no-underline transition-opacity duration-200 hover:opacity-75">
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <Link
          href="tel:+18005551234"
          className="flex items-center gap-2.5 bg-white text-[#1a1a1a] text-[12px] font-bold tracking-[0.14em] uppercase no-underline px-[22px] py-3 transition-colors duration-200 hover:bg-[var(--color-fst-gray)] whitespace-nowrap"
        >
          Call Now
          <PhoneIcon />
        </Link>
      </div>
    </nav>
  );
}

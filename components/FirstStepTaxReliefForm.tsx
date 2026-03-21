"use client";

import { useState } from "react";
import Link from "next/link";

const taxAmounts = ["$10,000", "$25,000", "$50,000", "$75,000", "$100,000+"];

function formatPhone(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length < 4) return digits;
    if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

interface FirstStepTaxReliefFormProps {
    title?: string;
    description?: string;
    onSubmit?: (data: Record<string, string>) => void;
}

export default function FirstStepTaxReliefForm({
    title = "First Step Tax Relief",
    description = "Get A Complimentary Consultation with Our Licensed Tax Attorney.",
    onSubmit,
}: FirstStepTaxReliefFormProps) {
    const [taxAmount, setTaxAmount] = useState("$10,000");
    const [phone, setPhone] = useState("");

    function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const digits = (data.get("phone") as string).replace(/\D/g, "");
        data.set("phone", digits);
        onSubmit?.(Object.fromEntries(data) as Record<string, string>);
    }

    const inputClass =
        "w-full bg-transparent border-0 border-b border-white/25 px-0 py-2.5 text-white text-body outline-none placeholder:text-white/35 focus:border-lime transition-colors duration-200";

    return (
        <section className="bg-midnight px-container-padding py-section font-sans border-b border-white/10">
            <div className="mx-auto max-w-5xl text-center">

                {/* Eyebrow */}
                <p className="text-eyebrow font-light tracking-[0.18em] uppercase text-lime mb-2.5">
                    Get Started
                </p>
                <hr className="border border-white/15 mb-10" />

                {/* Heading */}
                <h2 className="text-[50px] font-semibold text-white mb-4 whitespace-nowrap">
                    {title}
                </h2>

                {/* Description */}
                <p className="text-body leading-relaxed text-white/70 mb-12 mx-auto">
                    {description}
                </p>

                {/* Box-in-box form */}
                <div className="bg-navy/40 backdrop-blur-xl rounded-2xl p-4 md:p-8 border border-white/5 shadow-2xl">
                    <div className="bg-gradient-to-br from-midnight to-navy p-8 md:p-12 rounded-xl border border-white/10">

                        <div className="mb-10">
                            <p className="text-eyebrow font-semibold text-lime uppercase tracking-[0.2em] mb-3">
                                Qualify for Tax Relief Today
                            </p>
                            <p className="text-white/60 text-sm max-w-lg mx-auto">
                                Complete the form below to see if you qualify for IRS tax relief through our expert legal and financial consultation.
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="flex flex-col gap-8 text-left">

                            {/* Tax amount — full width */}
                            <div>
                                <label className="block text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">
                                    What is the total amount of taxes you owe?
                                </label>
                                <select
                                    name="taxAmount"
                                    value={taxAmount}
                                    onChange={(e) => setTaxAmount(e.target.value)}
                                    required
                                    className="w-full bg-transparent border-0 border-b border-white/25 px-0 py-3 text-white text-body outline-none cursor-pointer focus:border-lime transition-colors duration-200 appearance-none [&>option]:bg-midnight [&>option]:text-white"
                                >
                                    {taxAmounts.map((v) => (
                                        <option key={v} value={v}>{v}</option>
                                    ))}
                                </select>
                            </div>

                            {/* First + Last name */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    required
                                    className={inputClass}
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    required
                                    className={inputClass}
                                />
                            </div>

                            {/* Email + Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    required
                                    className={inputClass}
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone"
                                    value={phone}
                                    onChange={(e) => setPhone(formatPhone(e.target.value))}
                                    pattern="\([0-9]{3}\) [0-9]{3}-[0-9]{4}"
                                    maxLength={14}
                                    title="Please enter a valid 10-digit phone number"
                                    required
                                    className={inputClass}
                                />
                            </div>

                            {/* Submit */}
                            <div className="flex flex-col items-center gap-4 pt-6">
                                <button
                                    type="submit"
                                    className="bg-lime text-midnight px-12 py-5 rounded-lg font-bold uppercase tracking-[0.15em] hover:bg-lime/80 hover:shadow-[0_0_30px_rgba(198,217,52,0.35)] transition-all shadow-xl"
                                >
                                    Submit for Qualification
                                </button>
                                {/* TEMP: preview thank-you page */}
                                <Link
                                    href="/thank-you"
                                    className="text-white/40 text-xs underline hover:text-white/70 transition-colors"
                                >
                                    Preview Thank You Page →
                                </Link>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
}

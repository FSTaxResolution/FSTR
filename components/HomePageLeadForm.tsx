"use client";

import { useState } from "react";

function formatPhone(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length < 4) return digits;
    if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

const taxAmounts = ["$0 - $10,000", "$10,001 - $20,000", "$20,001 - $30,000", "30,001 - $40,000", "50,001 - $75,000", "$75,001 - $100,000", "$100,001 - 200,000", "$200,001 - $300,000", "$400,001 - $500,000", "$500,001 and over"];

export default function HomePageLeadForm() {
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);

    function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        const data = new FormData(e.currentTarget);
        const p = (data.get("phone") as string).replace(/\D/g, "");
        data.set("phone", p);

        // TODO: send `data` to your API or handler here
        console.log(Object.fromEntries(data));
        setLoading(false);
    }

    return (
        <div className="w-full max-w-md bg-navy px-5 py-6 lg:px-8 lg:py-10 text-white font-sans rounded-[14px] shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
            <h2 className="text-lg lg:text-h4 font-semibold leading-snug tracking-tight text-white">
                Qualify for tax relief today!
            </h2>

            <form onSubmit={handleSubmit} className="mt-5 lg:mt-8 space-y-4 lg:space-y-6">
                <div>
                    <label
                        htmlFor="message"
                        className="mb-2 block text-sm text-sky/60"
                    >
                        What is the total amount of taxes you owe to the IRS?
                    </label>
                    <select
                        id="taxAmount"
                        name="taxAmount"
                        defaultValue={taxAmounts[0]}
                        required
                        className="w-full border-0 border-b border-blue-secondary/40 bg-navy px-0 py-2 text-white outline-none focus:border-lime transition-colors duration-200 cursor-pointer"
                    >
                        {taxAmounts.map((v) => (
                            <option key={v} value={v} className="bg-navy text-white">{v}</option>
                        ))}
                    </select>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                        <label
                            htmlFor="firstName"
                            className="mb-2 block text-sm text-sky/60"
                        >
                            Your Name *
                        </label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            className="w-full border-0 border-b border-blue-secondary/40 bg-transparent px-0 py-2 text-white outline-none placeholder:text-sky/30 focus:border-lime transition-colors duration-200"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="lastName"
                            className="mb-2 block text-sm text-sky/60"
                        >
                            Last Name *
                        </label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            className="w-full border-0 border-b border-blue-secondary/40 bg-transparent px-0 py-2 text-white outline-none placeholder:text-sky/30 focus:border-lime transition-colors duration-200"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm text-sky/60"
                        >
                            Email Address *
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="w-full border-0 border-b border-blue-secondary/40 bg-transparent px-0 py-2 text-white outline-none placeholder:text-sky/30 focus:border-lime transition-colors duration-200"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="phone"
                            className="mb-2 block text-sm text-sky/60"
                        >
                            Phone Number *
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(formatPhone(e.target.value))}
                            pattern="\([0-9]{3}\) [0-9]{3}-[0-9]{4}"
                            maxLength={14}
                            title="Please enter a valid 10-digit phone number"
                            className="w-full border-0 border-b border-blue-secondary/40 bg-transparent px-0 py-2 text-white outline-none placeholder:text-sky/30 focus:border-lime transition-colors duration-200"
                        />
                    </div>
                </div>

                {/* Consent */}
                <label className="flex items-start gap-3 cursor-pointer">
                    <input
                        type="checkbox"
                        name="consent"
                        required
                        className="mt-1 h-4 w-4 accent-lime shrink-0"
                    />
                    <span className="text-[10px] leading-relaxed text-sky/50">
                        By checking this box I agree that I am a US Resident over the age 18 and agree to the{" "}
                        <a href="/privacy-policy" className="text-lime hover:text-white transition-colors duration-200 underline">Privacy Policy</a>.
                        I understand that I may receive SMS text, calls and email messages from Five Star Tax Resolution and that message &amp; data rates may apply.
                        I understand these calls may be generated using an automated technology, and that my consent is not required to buy goods/services.
                    </span>
                </label>

                <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-between bg-lime text-midnight px-4 py-3 lg:px-6 lg:py-4 text-xs lg:text-sm font-semibold uppercase tracking-widest rounded-[14px] transition-colors duration-200 hover:bg-lime/80 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? (
                        <span className="flex items-center gap-2">
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Submitting...
                        </span>
                    ) : (
                        <span>Get Free Consultation</span>
                    )}
                </button>
            </form>
        </div>
    );
}

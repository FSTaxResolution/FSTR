"use client";

import { useState } from "react";

const taxAmounts = ["$0 - $10,000", "$10,001 - $20,000", "$20,001 - $30,000", "30,001 - $40,000", "50,001 - $75,000", "$75,001 - $100,000", "$100,001 - 200,000", "$200,001 - $300,000", "$400,001 - $500,000", "$500,001 and over"];

function formatPhone(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length < 4) return digits;
    if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

interface TaxReliefLeadFormProps {
    title?: string;
    description?: string;
    onSubmit?: (data: Record<string, string>) => void;
}

export default function TaxReliefLeadForm({
    title = "Qualify for Tax Relief Today",
    description = "Our expert Tax Attorneys and CPAs are ready to help you navigate your IRS challenges. Complete the form to see if you qualify for IRS tax relief.",
    onSubmit,
}: TaxReliefLeadFormProps) {
    const [taxAmount, setTaxAmount] = useState("$10,000");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        const data = new FormData(e.currentTarget);
        const digits = (data.get("phone") as string).replace(/\D/g, "");
        data.set("phone", digits);
        onSubmit?.(Object.fromEntries(data) as Record<string, string>);
        setLoading(false);
    }

    const inputClass =
        "w-full bg-transparent border-0 border-b border-white/25 px-0 py-2.5 text-white text-body outline-none placeholder:text-white/35 focus:border-lime transition-colors duration-200";

    return (
        <section className="bg-midnight px-container-padding pt-40 lg:pt-52 pb-section font-sans">
            <div className="mx-auto max-w-5xl text-center">

                {/* Heading */}
                <h2 className="text-2xl lg:text-[50px] font-semibold text-white mb-4 lg:whitespace-nowrap lg:w-screen lg:relative lg:left-1/2 lg:-translate-x-1/2">
                    {title}
                </h2>

                {/* Description */}
                <p className="text-sm lg:text-body leading-relaxed text-white/70 mb-12 mx-auto">
                    {description}
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-7 text-left">

                    {/* Tax amount */}
                    <div>
                        <p className="text-white text-body mb-2.5">
                            What is the total amount of taxes you owe?
                        </p>
                        <select
                            name="taxAmount"
                            value={taxAmount}
                            onChange={(e) => setTaxAmount(e.target.value)}
                            required
                            className="w-full bg-midnight border-0 border-b border-white/25 px-0 py-2.5 text-white text-body outline-none cursor-pointer focus:border-lime transition-colors duration-200 [&>option]:bg-midnight [&>option]:text-white"
                        >
                            {taxAmounts.map((v) => (
                                <option key={v} value={v}>{v}</option>
                            ))}
                        </select>
                    </div>

                    {/* First + Last name */}
                    <div className="grid grid-cols-2 gap-8">
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
                    <div className="grid grid-cols-2 gap-8">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
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

                    {/* Consent */}
                    <label className="flex items-start gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            name="consent"
                            required
                            className="mt-1 h-4 w-4 accent-lime shrink-0"
                        />
                        <span className="text-xs leading-relaxed text-white/60">
                            By checking this box I agree that I am a US Resident over the age 18 and agree to the{" "}
                            <a href="/privacy-policy" className="text-lime hover:text-white transition-colors duration-200 underline">Privacy Policy</a>.
                            I understand that I may receive SMS text, calls and email messages from Five Star Tax Resolution and that message &amp; data rates may apply.
                            I understand these calls may be generated using an automated technology, and that my consent is not required to buy goods/services.
                        </span>
                    </label>

                    {/* Submit — centered */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex items-center gap-4 bg-lime text-midnight px-7 py-4 text-sm font-semibold tracking-[0.12em] uppercase rounded-[14px] hover:bg-lime/80 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading && (
                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                            )}
                            {loading ? "Submitting..." : "Submit"}
                        </button>
                    </div>

                </form>
            </div>
        </section>
    );
}

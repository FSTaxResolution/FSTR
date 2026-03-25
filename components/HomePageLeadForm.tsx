"use client";

import { useState } from "react";

function formatPhone(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length < 4) return digits;
    if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export default function HomePageLeadForm() {
    const [phone, setPhone] = useState("");

    function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const phone = (data.get("phone") as string).replace(/\D/g, "");
        data.set("phone", phone);

        // TODO: send `data` to your API or handler here
        console.log(Object.fromEntries(data));
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
                        id="message"
                        name="message"
                        defaultValue="1"
                        required
                        className="w-full border-0 border-b border-blue-secondary/40 bg-navy px-0 py-2 text-white outline-none focus:border-lime transition-colors duration-200 cursor-pointer"
                    >
                        {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                            <option key={n} value={n} className="bg-navy text-white">{n}</option>
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

                <button
                    type="submit"
                    className="flex w-full items-center justify-between bg-lime text-midnight px-4 py-3 lg:px-6 lg:py-4 text-xs lg:text-sm font-semibold uppercase tracking-widest rounded-[14px] transition-colors duration-200 hover:bg-lime/80"
                >
                    <span>Get Free Consultation</span>
                </button>
            </form>
        </div>
    );
}

"use client";

import { useState } from "react";

function formatPhone(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length < 4) return digits;
    if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export default function ComplaintsForm() {
    const [phone, setPhone] = useState("");

    function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const digits = (data.get("phone") as string).replace(/\D/g, "");
        data.set("phone", digits);
        // TODO: send to complaints/relationship management email
        console.log(Object.fromEntries(data));
    }

    const inputClass =
        "w-full bg-transparent border-0 border-b border-white/25 px-0 py-2.5 text-white text-body outline-none placeholder:text-white/35 focus:border-lime transition-colors duration-200";

    return (
        <section className="bg-midnight px-container-padding pt-40 lg:pt-52 pb-section font-sans">
            <div className="mx-auto max-w-5xl text-center">

                {/* Heading */}
                <h2 className="text-2xl lg:text-[50px] font-semibold text-white mb-4 lg:whitespace-nowrap lg:w-screen lg:relative lg:left-1/2 lg:-translate-x-1/2">
                    Relationship Management & Client Support
                </h2>

                {/* Description */}
                <p className="text-sm lg:text-body leading-relaxed text-white/70 mb-12 mx-auto">
                    Your voice matters — We&apos;re Here to listen. At Five Star Tax Resolution, client satisfaction is our top priority. If you&apos;re experiencing any concerns, issues, or need clarity on your case, our Relationship Management Team is here to help.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-7 text-left">

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

                    {/* Message */}
                    <textarea
                        name="message"
                        placeholder="Message"
                        required
                        rows={5}
                        className={`${inputClass} resize-none`}
                    />

                    {/* Submit — centered */}
                    <div className="flex flex-col items-center gap-3">
                        <button
                            type="submit"
                            className="flex items-center gap-4 bg-lime text-midnight px-7 py-4 text-sm font-semibold tracking-[0.12em] uppercase rounded-[14px] hover:bg-lime/80 transition-colors duration-200"
                        >
                            Send
                        </button>
                        <p className="text-sm text-white/60">
                            or call our support line at {" "}
                            <a
                                href="tel:6262104902"
                                className="text-lime hover:text-white transition-colors duration-200 no-underline font-semibold"
                            >
                                (626) 210-4902
                            </a>
                        </p>
                    </div>

                </form>
            </div>
        </section>
    );
}

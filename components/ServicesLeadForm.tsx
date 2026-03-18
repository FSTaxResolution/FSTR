"use client";

import { useState } from "react";

const taxAmounts = ["$10,000", "$25,000", "$50,000", "$75,000", "$100,000+"];

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length < 4) return digits;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

interface ServicesLeadFormProps {
  onSubmit?: (data: Record<string, string>) => void;
}

export default function ServicesLeadForm({ onSubmit }: ServicesLeadFormProps) {
  const [taxAmount, setTaxAmount] = useState("$10,000");
  const [phone, setPhone] = useState("");

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const digits = (data.get("phone") as string).replace(/\D/g, "");
    data.set("phone", digits);
    onSubmit?.(Object.fromEntries(data) as Record<string, string>);
  }

  const inputClass = "w-full bg-transparent border-0 border-b border-white/25 px-0 py-2.5 text-white text-body outline-none placeholder:text-white/35 focus:border-lime transition-colors duration-200";

  return (
    <section className="bg-navy px-20 py-section font-sans">
      <div className="mx-auto max-w-336">

      {/* Eyebrow + rule */}
      <div className="mb-7">
        <p className="text-eyebrow font-light tracking-[0.18em] uppercase text-lime mb-2.5">
          Get Started
        </p>
        <hr className="border border-white" />
      </div>

      {/* Heading */}
      <h2 className="text-h2 font-semibold text-white mb-12">
        Qualify for Tax Relief Today
      </h2>

      {/* Two-column layout */}
      <div className="grid grid-cols-[260px_1fr] gap-20 items-start">

        {/* Left: description */}
        <p className="text-body leading-normal text-white m-0">
          Our expert Tax Attorneys and CPAs are ready to help you navigate your
          IRS challenges. Complete the form to see if you qualify for IRS tax
          relief.
        </p>

        {/* Right: form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-7">

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
              className="w-full bg-navy border-0 border-b border-white/25 px-0 py-2.5 text-white text-body outline-none cursor-pointer focus:border-lime transition-colors duration-200 [&>option]:bg-navy [&>option]:text-white"
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
              placeholder="(XXX) XXX-XXXX"
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              pattern="\([0-9]{3}\) [0-9]{3}-[0-9]{4}"
              maxLength={14}
              title="Please enter a valid 10-digit phone number"
              required
              className={inputClass}
            />
          </div>

          {/* Submit — right aligned */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-4 bg-white text-navy px-7 py-4 text-sm font-semibold tracking-[0.12em] uppercase hover:bg-lime transition-colors duration-200"
            >
              Submit
            </button>
          </div>

        </form>
      </div>
      </div>
    </section>
  );
}

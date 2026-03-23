"use client";

import { useState } from "react";

const faqs = [
    {
        title: "What is tax relief & how does it work?",
        description: "Tax relief refers to resolving unpaid federal or state tax obligations or arranging a manageable way to address what you owe. Professional tax relief services may include negotiating an IRS Offer in Compromise, setting up an installment agreement, requesting penalty abatement, or helping prevent enforcement actions such as tax liens, levies, or wage garnishments. If you have unresolved tax balances, working with experienced tax professionals can help you explore the most appropriate resolution options for your situation.\n\nTax relief works by reviewing your tax and financial situation to determine which IRS-approved resolution options may apply. Tax professionals then work directly with the IRS to help resolve outstanding tax balances or establish a manageable payment arrangement such as an Offer in Compromise, installment agreement, or penalty abatement, while assisting with the prevention of enforcement actions like liens or levies.",
    },
    {
        title: "How Tax Relief Services Work for Individuals and Businesses?",
        description: "After an initial consultation, a licensed tax professional reviews your financial situation, tax history, and any IRS or state notices to identify the most suitable options. These may include negotiating settlements, arranging installment payment plans, requesting penalty reductions, or helping to stop enforcement actions such as wage garnishments, tax liens, or bank levies. The goal is to establish a realistic plan that resolves outstanding tax obligations while protecting your financial well-being.",
    },
    {
        title: "How long does the tax relief process take?",
        description: "Most cases take 1-4 months, depending on the complexity of your IRS situation and the type of resolution being requested.",
    },
    {
        title: "What is an Offer in Compromise and am I eligible?",
        description: "An Offer in Compromise is an IRS program that allows some taxpayers to settle their tax obligation for less than the full amount owed. Eligibility depends on income, expenses, assets, and ability to pay, and approval is determined by the IRS on a case-by-case basis.",
    },
    {
        title: "How much do professional tax relief services typically cost?",
        description: "Costs are influenced by the scope of the tax issue and the level of assistance required, whether for audit representation or resolution efforts. Following a consultation, an upfront pricing outline is generally provided so expectations are clear before services move forward.",
    },
];

function FAQItem({ title, description, open, onToggle }: { title: string; description: string; open: boolean; onToggle: () => void }) {
    return (
        <div className="border-b border-gray-200">
            <button
                className="w-full flex items-center justify-between py-3 px-4 text-left transition-colors duration-200 hover:bg-gray-50"
                onClick={onToggle}
            >
                <span className="text-lg font-semibold text-navy">{title}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className={`text-gray-500 shrink-0 ml-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </button>
            <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: open ? "500px" : "0px", opacity: open ? 1 : 0 }}
            >
                <div className="border-t border-gray-200 mx-4 pt-4 pb-5 text-base text-body-text leading-relaxed flex flex-col gap-4">
                    {description.split("\n\n").map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function FortuneFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="bg-white px-6 lg:px-12 py-6 lg:py-10" style={{ fontFamily: "var(--font-graphik-compact)" }}>
            <div className="mx-auto max-w-360">
                <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-0">FAQs</h2>
                <hr className="border-t-2 border-navy mt-3 mb-2" />

                <div>
                    {faqs.map((faq, i) => (
                        <FAQItem
                            key={faq.title}
                            title={faq.title}
                            description={faq.description}
                            open={openIndex === i}
                            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

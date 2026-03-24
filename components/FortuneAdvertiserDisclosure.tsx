"use client";

import { useState } from "react";

export default function FortuneAdvertiserDisclosure() {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative flex items-center justify-end gap-3" style={{ fontFamily: "var(--font-graphik-compact)" }}>
            <button
                onClick={() => setOpen(true)}
                className="text-sm text-gray-500 underline hover:text-gray-700 transition-colors py-2"
            >
                Advertiser Disclosure
            </button>

            {open && (
                <div className="absolute bottom-full right-0 mb-2 w-72 lg:w-md bg-white border border-gray-300 rounded-lg shadow-lg z-50 p-4">
                    <div className="flex items-start justify-between mb-2">
                        <span className="text-sm font-semibold text-navy">Paid Content</span>
                        <button
                            onClick={() => setOpen(false)}
                            className="text-gray-400 hover:text-gray-600 transition-colors ml-2"
                            aria-label="Close"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                        The Parties acknowledge and agree that (i) the PPC Program Landing Page, and any related webpages as determined by Publisher in its sole and absolute discretion, shall feature a disclosure that states prominently that all Paid Content is &quot;Paid Content&quot;, with an &quot;i&quot; symbol linking to a further explanation, (a &quot;Disclaimer&quot;) and (ii) the placement, formatting and other wording associated with any Disclaimer shall be determined by Publisher in its sole and absolute discretion.
                    </p>
                </div>
            )}
        </div>
    );
}

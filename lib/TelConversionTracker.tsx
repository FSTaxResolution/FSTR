"use client";

import { useEffect } from "react";
import { DEFAULT_PHONE, GOOGLE_SEND_TO, digitsOnly } from "./partners";

/**
 * Listens for clicks on tel: links and fires a Google Ads
 * conversion event when the default phone number is clicked.
 *
 * Place this once in your layout or landing page.
 */
export default function TelConversionTracker() {
    useEffect(() => {
        const defaultDigits = digitsOnly(DEFAULT_PHONE);

        function handleClick(e: MouseEvent) {
            const target = e.target as HTMLElement;
            const link = target.closest?.('a[href^="tel:"]') as HTMLAnchorElement | null;
            if (!link) return;

            const telDigits = digitsOnly(link.getAttribute("href") ?? "");
            if (telDigits !== defaultDigits) return;

            try {
                if (typeof window.gtag === "function" && GOOGLE_SEND_TO) {
                    window.gtag("event", "conversion", { send_to: GOOGLE_SEND_TO });
                }
            } catch {
                // silently fail
            }
        }

        document.addEventListener("click", handleClick, true);
        return () => document.removeEventListener("click", handleClick, true);
    }, []);

    return null;
}

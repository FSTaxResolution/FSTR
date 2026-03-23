"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const ALL_PARAMS = ["transaction_id", "sub1", "sub2", "partner_id"] as const;

export type TrackingParams = {
    transactionId: string;
    partnerId: string;
    sub1: string;
    sub2: string;
};

function getValue(key: string, qs: URLSearchParams): string {
    const stored = typeof window !== "undefined" ? localStorage.getItem(key) : "";
    return qs.get(key) || stored || "";
}

export function useTrackingParams(): TrackingParams {
    const searchParams = useSearchParams();

    // Save all params from URL to localStorage on mount
    useEffect(() => {
        ALL_PARAMS.forEach((key) => {
            const val = searchParams.get(key);
            if (val) localStorage.setItem(key, val);
        });
    }, [searchParams]);

    const qs = new URLSearchParams(
        typeof window !== "undefined" ? window.location.search : ""
    );

    return {
        transactionId: getValue("transaction_id", qs),
        partnerId:     getValue("partner_id", qs),
        sub1:          getValue("sub1", qs),
        sub2:          getValue("sub2", qs),
    };
}

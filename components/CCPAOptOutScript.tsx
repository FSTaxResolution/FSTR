"use client";

import { useEffect } from "react";

export default function CCPAOptOutScript() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.cookielaw.org/consent/906dc33b-1fc3-4b2c-a324-8bc0b7db9050/otSDKStub.js";
        script.type = "text/javascript";
        script.charset = "UTF-8";
        script.setAttribute("data-document-language", "true");
        script.setAttribute("data-domain-script", "906dc33b-1fc3-4b2c-a324-8bc0b7db9050");
        document.head.appendChild(script);

        const wrapper = document.createElement("script");
        wrapper.type = "text/javascript";
        wrapper.text = "function OptanonWrapper() { }";
        document.head.appendChild(wrapper);

        return () => {
            document.head.removeChild(script);
            document.head.removeChild(wrapper);
        };
    }, []);

    return null;
}

"use client";

export default function OneTrustButton() {
    return (
        <button
            id="ot-sdk-btn"
            className="ot-sdk-show-settings"
            style={{ all: "unset", color: "#0070c0", cursor: "pointer", fontSize: "1rem" }}
            onMouseEnter={e => (e.currentTarget.style.textDecoration = "underline")}
            onMouseLeave={e => (e.currentTarget.style.textDecoration = "none")}
        >
            Do Not Sell/Share My Personal Information
        </button>
    );
}

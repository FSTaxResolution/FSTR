import localFont from "next/font/local";
import FortuneHeader from "@/components/FortuneHeader";
import FortuneFooter from "@/components/FortuneFooter";
import FortuneFAQ from "@/components/FortuneFAQ";

const graphikCompact = localFont({
    src: [
        { path: "../../public/fonts/GraphikCompact-Regular-Web.woff2", weight: "400", style: "normal" },
        { path: "../../public/fonts/GraphikCompact-Medium-Web.woff2", weight: "500", style: "normal" },
        { path: "../../public/fonts/GraphikCompact-Semibold-Web.woff2", weight: "600", style: "normal" },
    ],
    variable: "--font-graphik-compact",
});

export const metadata = {
    title: "Fortune Form | Five Star Tax Resolution",
};

export default function FortunePage() {
    return (
        <div className={`${graphikCompact.variable} font-sans text-navy`}>
            <FortuneHeader />

            {/* Title Section */}
            <div className="bg-white text-center px-4 py-4 lg:px-6 lg:py-6" style={{ fontFamily: "var(--font-graphik-compact)" }}>
                <h1 className="text-h3 font-semibold text-gray-900 mb-2">
                    Top Rated Tax Relief Company of 2026
                </h1>
                <p className="text-[30px] font-normal text-gray-600 max-w-2xl mx-auto">
                    Find Trusted Tax Relief Services to Lower What You Owe to the IRS &amp; Maximize Your Savings.
                </p>
            </div>

            <div className="flex justify-center px-4 py-4 lg:px-6 lg:py-6">
                <div
                    style={{
                        width: "100%",
                        maxWidth: "55%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        border: "1px solid var(--color-navy)",
                        margin: 0,
                        padding: 0,
                        overflow: "hidden",
                    }}
                >
                    <iframe
                        src="https://fstrform.netlify.app/wizard"
                        style={{ width: "100%", height: "auto", minHeight: "700px", border: 0, flexGrow: 1 }}
                        sandbox="allow-scripts allow-same-origin"
                    />
                </div>
            </div>
            <FortuneFAQ />
            <div style={{ fontFamily: "var(--font-graphik-compact)" }}>
                <FortuneFooter />
            </div>
        </div>
    );
}

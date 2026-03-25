import localFont from "next/font/local";
import CCPAOptOutScript from "@/components/CCPAOptOutScript";
import FortuneHeader from "@/components/FortuneHeader";
import FortuneFooter from "@/components/FortuneFooter";
import FortuneFAQ from "@/components/FortuneFAQ";
import FortuneStickyFooter from "@/components/FortuneStickyFooter";
import FortuneAdvertiserDisclosure from "@/components/FortuneAdvertiserDisclosure";

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
    robots: { index: false, follow: false },
};

export default function FortunePage() {
    return (
        <div className={`${graphikCompact.variable} font-sans text-navy`}>
            <FortuneHeader />

            {/* Title Section */}
            <div className="bg-white text-center px-4 py-4 lg:px-6 lg:py-6" style={{ fontFamily: "var(--font-graphik-compact)" }}>
                <h1 className="text-3xl lg:text-h3 font-semibold text-gray-900 mb-2">
                    Top Rated Tax Relief Company of 2026
                </h1>
                <p className="text-xl lg:text-[30px] font-normal text-gray-600 max-w-2xl mx-auto">
                    Find Trusted Tax Relief Services to Lower What You Owe to the IRS &amp; Maximize Your Savings.
                </p>
            </div>

            <div className="flex justify-center px-0 lg:px-6 py-0 lg:py-6">
                <div
                    className="w-[95%] lg:max-w-[55%]"
                    style={{
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
            <div className="flex justify-center px-4 lg:px-6 mt-3 lg:mt-4">
                <div className="w-[95%] lg:max-w-[55%] flex items-center justify-end gap-3">
                    <div className="flex items-center gap-2">
                    {/* Money Back Guarantee badge */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/images/badges/moneybackguarantee.png"
                        alt="Money Back Guarantee"
                        className="h-10 lg:h-12 w-auto object-contain"
                    />
                    {/* Desktop BBB seal */}
                    <iframe
                        src="https://seal-central-northern-western-arizona.bbb.org/frame/sehzbum/bbb-1000158427.png?chk=8CA7800BC1"
                        style={{ border: 0, height: "57px", width: "150px", transform: "scale(0.8)", transformOrigin: "left center" }}
                        title="BBB Seal"
                        className="hidden lg:block"
                    />
                    {/* Mobile BBB seal */}
                    <iframe
                        src="https://seal-central-northern-western-arizona.bbb.org/frame/sehzbus/bbb-1000158427.png?chk=8CA7800BC1"
                        style={{ border: 0, height: "38px", width: "100px" }}
                        title="BBB Seal"
                        className="block lg:hidden"
                    />
                    </div>
                    <FortuneAdvertiserDisclosure />
                </div>
            </div>
            <FortuneFAQ />
            <div style={{ fontFamily: "var(--font-graphik-compact)" }}>
                <FortuneFooter />
            </div>
            {/* Spacer for sticky footer height on mobile */}
            <div className="h-48 lg:hidden" />
            <FortuneStickyFooter />
            <CCPAOptOutScript />
        </div>
    );
}

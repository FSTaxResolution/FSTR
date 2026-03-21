import { DEFAULT_PHONE, toTelHref } from "@/lib/partners";

export default function ThankYou() {
    return (
        <main className="min-h-screen flex items-center justify-center pt-40 pb-20 px-6 bg-gradient-to-br from-midnight to-navy relative overflow-hidden font-sans">

            {/* Box-in-box container */}
            <div className="relative z-10 w-full max-w-3xl">
                <div className="bg-white rounded-xl p-1 md:p-2 shadow-2xl">
                    <div className="bg-fst-gray rounded-lg p-8 md:p-16 flex flex-col items-center text-center border border-black/5">

                        {/* Success indicator */}
                        <div className="mb-8 relative">
                            <div className="absolute inset-0 bg-lime/20 blur-2xl rounded-full scale-150" />
                            <div className="relative bg-lime text-midnight w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 1 0-1.06-1.06l-3.93 3.929-1.664-1.664a.75.75 0 0 0-1.06 1.06l2.194 2.195a.75.75 0 0 0 1.06 0l4.46-4.46z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>

                        {/* Heading */}
                        <h1 className="text-h3 font-semibold text-navy tracking-tight leading-tight mb-6">
                            Thank You!{" "}
                            <span className="block text-blue-secondary">
                                We&apos;ve Received Your Request.
                            </span>
                        </h1>

                        {/* Description */}
                        <div className="max-w-xl space-y-4 mb-12">
                            <p className="text-body text-body-text font-medium leading-relaxed">
                                Your submission has been successfully transmitted to our resolution team. We understand the urgency of your tax matter and treat every case with precision.
                            </p>
                            <p className="text-body text-body-text/80 italic">
                                One of our tax specialists will reach out shortly to discuss the specifics of your case and outline your defense strategy.
                            </p>
                        </div>

                        {/* Direct assistance CTA */}
                        <div className="w-full flex flex-col gap-4">
                            <div className="bg-white rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-black/5">
                                <div className="text-left">
                                    <span className="block text-eyebrow font-bold uppercase tracking-widest text-body-text/60 mb-1">
                                        Direct Assistance
                                    </span>
                                    <p className="text-navy font-semibold text-h4 leading-tight">
                                        Need immediate assistance?
                                    </p>
                                </div>
                                <a
                                    href={toTelHref(DEFAULT_PHONE)}
                                    className="bg-lime text-midnight px-8 py-4 rounded-lg font-bold uppercase tracking-[0.12em] hover:bg-lime/80 transition-colors duration-200 shadow-md flex items-center gap-3 whitespace-nowrap"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                                    </svg>
                                    {DEFAULT_PHONE}
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </main>
    );
}

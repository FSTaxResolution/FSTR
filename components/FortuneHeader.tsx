import Image from "next/image";
import Link from "next/link";

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
);

export default function FortuneHeader({ phone = "866-598-4840" }: { phone?: string }) {
    return (
        <header className="bg-white border-b-2 border-black px-6 lg:px-12 py-5 lg:py-4">
            <div className="relative mx-auto max-w-7xl flex items-center justify-between">
                {/* Spacer for centering */}
                <div className="flex-1" />

                {/* Spacer to keep flex layout balanced */}
                <div className="flex-1" />

                {/* Center: Fortune logo — absolute to avoid flex-1 width constraint */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/images/logos/fortune-black.png"
                    alt="Fortune"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-9 lg:h-11 w-auto object-contain"
                />

                {/* Right: Phone CTA */}
                <div className="flex-1 flex justify-end">
                    <Link
                        href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                        className="flex items-center gap-2 bg-[#002338] text-white font-semibold tracking-wide no-underline rounded-[15px] transition-colors duration-200 hover:bg-[#003350] whitespace-nowrap p-3.5 lg:px-7 lg:py-3.5 lg:text-base"
                    >
                        <span className="hidden lg:inline">{phone}</span>
                        <PhoneIcon />
                    </Link>
                </div>
            </div>
        </header>
    );
}

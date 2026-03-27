import Image from "next/image";
import HomePageLeadForm from "./HomePageLeadForm";

const checks = ["Expert Help", "Proven Results", "Ongoing Support"];

export default function HeroSection() {
    return (
        <section className="relative">
            <Image
                src="/images/homeimage.jpg"
                alt=""
                fill
                priority
                className="object-cover"
            />
            <div className="absolute inset-0 bg-midnight/60" />
            <div className="relative z-10 mx-auto w-full max-w-(--width-container) px-container-padding pt-40 pb-section grid grid-cols-1 lg:grid-cols-2 gap-grid-gap items-center min-h-screen">

                <div>
                    <h1 className="lg:whitespace-nowrap text-white">Millions Saved</h1>

                    <p className="text-h3 font-light leading-none text-white mt-2">
                        In Back Taxes
                    </p>

                    <div className="mt-6 lg:mt-10 flex flex-wrap gap-x-4 lg:gap-x-8 gap-y-4 text-sm lg:text-body text-white/80">
                        {checks.map((item) => (
                            <div key={item} className="flex items-center gap-2">
                                <span className="text-lime font-semibold">✓</span>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <p className="mt-4 lg:mt-6 text-sm lg:text-body max-w-xl text-white/80">
                        Strategic tax solutions tailored to your needs. Book a consultation
                        with our experts today.
                    </p>
                </div>

                <div className="flex justify-start lg:justify-end">
                    <HomePageLeadForm />
                </div>

            </div>
        </section>
    );
}

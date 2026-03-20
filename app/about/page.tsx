import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamOfExperts from "@/components/TeamOfExperts";
import FooterLeadForm from "@/components/FooterLeadForm";

export const metadata = {
    title: "About | Five Star Tax Resolution",
};

export default function AboutUs() {
    return (
        <div className="font-sans text-navy">
            <Header />

            {/* HERO */}
            <section className="bg-midnight pt-40 pb-section">
                <div className="max-w-(--width-container) mx-auto px-container-padding">
                    <p className="text-eyebrow tracking-[0.2em] uppercase text-lime font-semibold mb-3">
                        About Us
                    </p>
                    <hr className="border-white/10 mb-6" />
                    <h1 className="text-white" style={{ fontSize: "clamp(3rem, 6vw, 7.75rem)" }}>
                        Who we are
                    </h1>
                </div>
            </section>

            {/* MISSION */}
            <section className="bg-white py-section">
                <div className="max-w-(--width-container) mx-auto px-container-padding">
                    <p className="text-eyebrow tracking-[0.2em] uppercase text-lime font-semibold mb-3">
                        Our Mission
                    </p>
                    <hr className="border-navy/20 mb-6" />
                    <div className="grid grid-cols-1 gap-grid-gap lg:grid-cols-[1fr_1fr] items-start">
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }} className="leading-tight">
                            We Hold Ourselves To High Standards
                        </h2>
                        <p className="text-body-text text-body self-end lg:text-right">
                            Our mission is to resolve tax challenges with integrity and expertise,
                            empowering our clients to move forward with confidence and peace of mind.
                            We are equally committed to educating individuals and businesses about
                            their options, providing the knowledge and tools they need to make informed
                            financial decisions for a stronger future.
                        </p>
                    </div>
                </div>
            </section>

            {/* STATS */}
            {/* <section className="bg-fst-gray py-section">
                <div className="max-w-(--width-container) mx-auto px-container-padding">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-grid-gap text-center">
                        {[
                            { number: "2,500+", label: "Clients Helped" },
                            { number: "85+", label: "Years Combined Experience" },
                            { number: "$1M+", label: "Saved for Clients" },
                            { number: "55+", label: "Five Star Reviews" },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <p className="text-navy font-bold leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
                                    {stat.number}
                                </p>
                                <p className="text-body-text text-sm mt-3 uppercase tracking-widest">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* TEAM */}
            <TeamOfExperts />

            {/* CLIENTS */}
            <section className="bg-fst-gray py-section">
                <div className="max-w-(--width-container) mx-auto px-container-padding">
                    <p className="text-eyebrow tracking-[0.2em] uppercase text-lime font-semibold mb-3">
                        Clients
                    </p>
                    <hr className="border-navy/20 mb-6" />
                    <div className="grid grid-cols-1 gap-grid-gap lg:grid-cols-[1fr_1fr] items-start">
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }} className="leading-tight">
                            Our Clients Come First
                        </h2>
                        <p className="text-body-text text-body self-end lg:text-right">
                            Our clients are at the heart of everything we do. From individuals
                            securing their family&apos;s future to businesses aiming for sustainable
                            growth.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA FORM */}
            <FooterLeadForm />

            <Footer />
        </div>
    );
}

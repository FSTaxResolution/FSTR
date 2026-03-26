import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComplaintsForm from "@/components/ComplaintsForm";

export const metadata = {
    title: "Contact | Five Star Tax Resolution",
};

export default function Contact() {
    return (
        <div className="font-sans text-navy">
            <Header phone="(626) 210-4902" />
            <ComplaintsForm />

            {/* ARTICLE BODY */}
            <section className="bg-white py-section">
                <article className="max-w-6xl mx-auto px-container-padding">

                    <h4 className="mt-5 mb-4">Why Contact Relationship Management?</h4>
                    <p className="mb-5">
                        If you&apos;re currently working with us and have:
                    </p>
                    <ul className="list-disc pl-6 mb-5">
                        <li className="mb-3.5">Concerns about your case status or timeline</li>
                        <li className="mb-3.5">Questions about communication with your assigned representative</li>
                        <li className="mb-3.5">Issues that haven&apos;t been resolved through normal channels</li>
                        <li className="mb-3.5">Feedback — good or bad — about your experience with us</li>
                    </ul>

                    <p className="mb-5">
                        We encourage you to reach out. Our dedicated Relationship Management team works independently from case handling to ensure your voice is heard objectively.
                    </p>

                    <p className="mt-5 mb-1">
                        <strong>Call Us Directly:</strong>{" "}
                        <a href="tel:6262104902" className="text-lime font-semibold no-underline hover:underline">
                            (626) 210-4902
                        </a>
                    </p>
                    <p className="mb-5">
                        Available: Monday–Friday, 9 AM – 5 PM PST
                    </p>

                </article>
            </section>

            <Footer />
        </div>
    );
}

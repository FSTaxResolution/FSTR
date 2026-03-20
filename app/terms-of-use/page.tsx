import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
    title: "Terms of Use | Five Star Tax Resolution",
};

export default function TermsOfUse() {
    return (
        <div className="font-sans text-navy">
            <Header />

            {/* HERO */}
            <section className="bg-midnight pt-40 pb-section">
                <div className="max-w-(--width-container) mx-auto px-container-padding">
                    <p className="text-eyebrow tracking-[0.2em] uppercase text-lime font-semibold mb-3">
                        Legal
                    </p>
                    <hr className="border-white/10 mb-6" />
                    <h1 className="text-white" style={{ fontSize: "clamp(3rem, 6vw, 7.75rem)" }}>
                        Terms of Service
                    </h1>
                </div>
            </section>

            {/* CONTENT */}
            <section className="bg-white py-section">
                <article className="max-w-6xl mx-auto px-container-padding">

                    <p className="mb-5">
                        1. When you opt-in to the service, we will send you an SMS message to confirm your signup.
                    </p>
                    <p className="mb-5">
                        2. This service is used to send you notifications about your tax resolution issues.
                    </p>
                    <p className="mb-5">
                        3. You can cancel this service at any time. Just text &ldquo;STOP&rdquo;. After you send the message &ldquo;STOP&rdquo; to us, we will send you a reply message to confirm that you have been unsubscribed. After this, you will no longer receive messages from us. If you want to join again, just sign up as you did the first time and we will start sending messages to you again.
                    </p>
                    <p className="mb-5">
                        4. If at any time you forget what keywords are supported, just text &ldquo;HELP&rdquo;. After you send the message &ldquo;HELP&rdquo; to us, we will respond with instructions on how to use our service as well as how to unsubscribe.
                    </p>
                    <p className="mb-5">
                        5. Carriers are not liable for delayed or undelivered messages.
                    </p>
                    <p className="mb-5">
                        6. As always, Message and Data Rates May Apply for any messages sent to you from us and to us from you. If you have any questions about your text plan or data plan, it is best to contact your wireless provider. For all questions about the services provided by this SMS program, you can send an email to your company&apos;s support email address.
                    </p>
                    <p className="mb-5">
                        7. If you have any questions regarding privacy, see our <Link href="/privacy-policy" className="text-blue-secondary underline hover:text-navy transition-colors">Privacy Policy</Link>.
                    </p>

                </article>
            </section>

            <Footer />
        </div>
    );
}

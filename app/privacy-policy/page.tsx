import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Privacy Policy | Five Star Tax Resolution",
};

export default function PrivacyPolicy() {
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
                        Privacy Policy
                    </h1>
                </div>
            </section>

            {/* CONTENT */}
            <section className="bg-white py-section">
                <article className="max-w-6xl mx-auto px-container-padding">

                    <p className="mb-5">
                        At Five Star Tax, we respect and work to protect the privacy of our customers and others who have used our websites, products, and services. Our Privacy Policy details how we use and collect your personal information. Personal information defined as any information that identifies you or would enable someone to contact you, which may include your name, email address, phone number and other non-public information that is associated with such data. It does not include aggregate information, anonymous information or any other non-personally identifiable information.
                    </p>

                    <h4 className="mt-10 mb-4">Information Collected</h4>
                    <p className="mb-5">
                        We only use your Personal Information, including your email address, for the purposes you have consented to and as set out in our Privacy Policy. We do keep track of user visits using standard web server traffic logs for our own internal statistics gathering processes.
                    </p>

                    <h4 className="mt-10 mb-4">Use of Information</h4>
                    <p className="mb-5">
                        We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when its release is appropriate to comply with the law, enforce our site policies, or protect our or others&apos; rights, property, or safety.
                    </p>
                    <p className="mb-5">
                        Non-Personal Identifying Information consists of information that is logged and used by us to determine website usage statistics, such as page views and clicks, in order to improve and personalize our website layout, content and services, and for the purpose of advertising and marketing. Five Star Tax may disclose Non-Personal Identifying Information to third parties as aggregate information from registration or other collected information regarding the Five Star Tax Websites including registered users, provided that such information will not include personal identifying information about you except if authorized by you.
                    </p>

                    <h4 className="mt-10 mb-4">Use of Cookies</h4>
                    <p className="mb-5">
                        We may also use &ldquo;cookies&rdquo; that identify you as a return visitor. Cookies are small files that a site or its service provider transfers to your computer&apos;s hard drive through your Web browser (if you allow) that enables the site&apos;s or service provider&apos;s systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember that you have visited our website in the past so that we can tailor information to suit your individual preferences. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.
                    </p>
                    <p className="mb-5">
                        We may also use trusted third-party services that track this information on our behalf.
                    </p>
                    <p className="mb-5">
                        You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since different browsers handle this differently, look at your browser&apos;s Help Menu to learn the correct way to modify your cookies.
                    </p>
                    <p className="mb-5">
                        If you turn cookies off, some of the features that make your site experience more efficient may not function as expected.
                    </p>

                    <h4 className="mt-10 mb-4">Third Parties</h4>
                    <p className="mb-5">
                        Our website uses Google AdWords remarketing services to advertise on third party websites — including Google — to previous visitors to our website. This includes advertisements on the Google search results page or a site in the Google Display Network.
                    </p>
                    <p className="mb-5">
                        Third-party vendors, including Google, use cookies to serve advertisements based on a visitor&apos;s past visits to our website. Any data logged will be used in accordance with our Privacy Policy, and Google&apos;s Privacy Policy. We use non-personal information for statistical analysis, and to help us make our website more useful to our visitors, or for the purposes of advertising and marketing. We may also disclose an aggregated summary of the above information to third parties such as sponsors, advertisers, and our auditors. A user&apos;s information is not used or disclosed for purposes other than those set out herein.
                    </p>

                    <h4 className="mt-10 mb-4">Opting-out</h4>
                    <p className="mb-5">
                        We respect your right to privacy and your decision to choose whether or not to share your information. You may opt-out of Google&apos;s use of cookies by visiting Google&apos;s Ads Settings or the Network Advertising Initiative opt-out page.
                    </p>

                    <h4 className="mt-10 mb-4">External Links</h4>
                    <p className="mb-5">
                        This website may contain links to other sites. Please be aware that Five Star Tax is not responsible for the privacy practices of other such sites. We encourage our visitors to be aware when they leave our site and to read the privacy statements of each and every website that collects personally identifiable information. This privacy statement applies solely to information collected by this website and domain.
                    </p>

                    <h4 className="mt-10 mb-4">Privacy Policy and Changes</h4>
                    <p className="mb-5">
                        This Privacy Policy is subject to change as Five Star Tax continues to modify and improve our practices and policies in order to serve the privacy interests of our users.
                    </p>

                    <h4 className="mt-10 mb-4">Further Questions or Concerns</h4>
                    <p className="mb-5">
                        You may direct any questions or concerns to our Head Office:
                    </p>
                    <p className="mb-5">
                        959 S Coast Dr #225,<br />
                        Costa Mesa, CA 92626
                    </p>
                    <p className="mb-5">
                        Five Star Tax will respond to your questions or concerns as quickly as possible.
                    </p>

                </article>
            </section>

            <Footer />
        </div>
    );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThankYou from "@/components/ThankYou";

export const metadata = {
    title: "Thank You | Five Star Tax Resolution",
    robots: { index: false, follow: false },
};

export default function ThankYouPage() {
    return (
        <div>
            <Header />
            <ThankYou />
            <Footer />
        </div>
    );
}

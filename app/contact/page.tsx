import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComplaintsForm from "@/components/ComplaintsForm";

export const metadata = {
    title: "Contact | Five Star Tax Resolution",
};

export default function Contact() {
    return (
        <div className="font-sans text-navy">
            <Header />
            <ComplaintsForm />
            <Footer />
        </div>
    );
}

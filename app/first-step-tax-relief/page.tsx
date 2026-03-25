import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FirstStepTaxReliefForm from "@/components/FirstStepTaxReliefForm";
import TaxReliefServices from "@/components/TaxReliefServices";
import FourStepsCards from "@/components/FourStepsCards";
import TeamOfExperts from "@/components/TeamOfExperts";
import ClientReviews from "@/components/ClientReviews";
import TrustLogoCarousel from "@/components/TrustLogoCarousel";
import TelConversionTracker from "@/lib/TelConversionTracker";
import { getPartnerPhone } from "@/lib/partners";

export const metadata = {
    title: "First Step Tax Relief | Five Star Tax Resolution",
    robots: { index: false, follow: false },
};

export default async function FirstStepTaxRelief({
    searchParams,
}: {
    searchParams: Promise<{ partner_id?: string }>;
}) {
    const params = await searchParams;
    const phone = await getPartnerPhone(params.partner_id);

    return (
        <div className="font-sans text-navy">
            <Header phone={phone} />
            <TelConversionTracker />

            {/* HERO + LEAD FORM */}
            {/* TODO Change Form */}
            <FirstStepTaxReliefForm
                title="See If You Qualify For Tax Relief Today!"
                description="Get A Complimentary Consultation with Our Licensed Tax Attorney."
                callPhone={phone}
            />
            {/* Expert help, Proven Results + badges TODO */}

            {/* TAX RELIEF SERVICES */}
            <TaxReliefServices />

            {/* TRUST LOGOS */}
            <TrustLogoCarousel />

            {/* TEAM */}
            <TeamOfExperts />

            {/* 4 STEPS */}
            <FourStepsCards />

            {/* CLIENT REVIEWS */}
            <ClientReviews />

            {/* FAQ */}
            {/* TODO */}

            <Footer />
        </div>
    );
}

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TaxReliefServices from "@/components/TaxReliefServices";
import FourStepsCards from "@/components/FourStepsCards";
import TeamOfExperts from "@/components/TeamOfExperts";
import ClientReviews from "@/components/ClientReviews";
import TrustLogoCarousel from "@/components/TrustLogoCarousel";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <HeroSection />
        <TrustLogoCarousel />
        <TaxReliefServices />
        <FourStepsCards />
        <TeamOfExperts />
        <ClientReviews />
      </main>
      <Footer />
    </div>
  );
}

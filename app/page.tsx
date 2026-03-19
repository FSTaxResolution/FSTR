import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TaxReliefServices from "@/components/TaxReliefServices";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <HeroSection />
        <TaxReliefServices />
      </main>
      <Footer />
    </div>
  );
}

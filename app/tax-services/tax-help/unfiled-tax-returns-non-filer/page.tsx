import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TaxReliefLeadForm from "@/components/TaxReliefLeadForm";

export const metadata = {
  title: "Unfiled Returns (Non-Filer) | Five Star Tax Resolution",
};

export default function UnfiledTaxReturnsNonFiler() {
  return (
    <div className="font-sans text-navy">
      <Header />
      <TaxReliefLeadForm
        title="Unfiled Returns (Non-Filer)"
        description="We can file tax returns as far as 2001. We can also get the wage and income documents directly from the IRS in case you don&apos;t have your W-2(s) or 1099(s). Let us sort out any unfiled tax returns from previous years."
      />

      {/* ARTICLE BODY */}
      <section className="bg-white py-section">
        <article className="max-w-6xl mx-auto px-container-padding">

            <p className="mb-5">
                If you&apos;ve fallen behind on filing past tax returns, Five Star Tax Resolution can help you get back in good standing with the IRS quickly and accurately. Our experienced tax professionals can prepare and file returns dating back to 2001, ensuring all required information is submitted correctly.
            </p>
            <p className="mb-5">
                Even if you don&apos;t have your W-2s or 1099s, we can obtain your wage and income transcripts directly from the IRS to reconstruct your filing history. Filing unsubmitted returns helps you stay compliant, avoid potential penalties, and protect your eligibility for refunds or future programs.
            </p>
            <p className="mb-5">
                Whether you&apos;re self-employed, an independent contractor, or a business owner, our team will guide you through each step — from gathering documents to completing filings — so you can move forward with confidence knowing your tax records are fully up to date.
            </p>

            <h4 className="mt-10 mb-4">How the IRS handles Unfiled Tax Returns?</h4>
            <p className="mb-5">
                When tax returns go unfiled, the IRS may take action to collect missing information and enforce compliance. In many cases, the IRS will create what&apos;s called a Substitute for Return (SFR) — a return the agency files on your behalf using only the information reported by employers, banks, or third parties. Because these returns don&apos;t include deductions or credits you may qualify for, they often show a higher balance owed than if you filed yourself.
            </p>
            <p className="mb-5">
                The longer a return remains unfiled, the more likely you are to face penalties, interest, or enforcement actions such as levies or wage garnishments. Filing your own accurate returns — even years later — allows you to claim eligible credits, reduce penalties, and regain compliance with the IRS.
            </p>
            <p className="mb-5">
                At Five Star Tax Resolution, our team can help you reconstruct missing records, retrieve IRS transcripts, and file any unsubmitted returns to bring your account current and protect you from further IRS action.
            </p>
        </article>
      </section>
      <Footer />
    </div>
  );
}

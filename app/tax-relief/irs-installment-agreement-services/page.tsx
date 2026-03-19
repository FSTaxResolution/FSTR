import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TaxReliefLeadForm from "@/components/TaxReliefLeadForm";

export default function IRSInstallmentAgreementServices() {
  return (
    <div className="font-sans text-navy">
      <Header />
      <TaxReliefLeadForm
        title="IRS Installment Agreement Services"
        description="We can help set up a realistic payment plan to pay back the IRS/State. We will attempt to get you the lowest possible installment possible. We will work to prevent garnishments, bank levies or liens from being filed against you or your assets."
      />

      {/* ARTICLE BODY */}
      <section className="bg-white py-section">
        <article className="max-w-6xl mx-auto px-container-padding">

          <h3 className="mt-5 mb-5">See if you qualify for an Installment Agreement</h3>

          <p className="mb-5">
            <strong>Taxpayers can resolve their balance with the Internal Revenue Service (IRS) using an installment payment system. Still, immediate payment is the preferred option, as it avoids the added burden of interest and penalties, which can total 8–10% annually.</strong>
          </p>
          <p className="mb-5">
            An installment agreement becomes useful in situations where a lump-sum payment isn&apos;t possible. There are four main types of installment agreements:
          </p>
          <ul className="list-disc pl-6 mb-5">
            <li className="mb-3.5">Non-streamlined payment</li>
            <li className="mb-3.5">Partial payment</li>
            <li className="mb-3.5">Streamlined payment</li>
            <li className="mb-3.5">Guaranteed payment</li>
          </ul>

          <h4 className="mt-10 mb-4">Guaranteed Installment Agreement</h4>
          <p className="mb-5">
            To qualify for a guaranteed installment agreement, applicants must meet the following conditions:
          </p>
          <ul className="list-disc pl-6 mb-5">
            <li className="mb-3.5">Owe less than $10,000 (excluding penalties and interest)</li>
            <li className="mb-3.5">Not currently be part of an active installment agreement</li>
            <li className="mb-3.5">Have all required tax returns filed and no prior unresolved balances</li>
            <li className="mb-3.5">Be unable to pay the full tax obligation within 120 days</li>
            <li className="mb-3.5">Be willing to pay the full amount within three years</li>
            <li className="mb-3.5">Agree to make minimum monthly payments (calculated by dividing the total owed, including interest and penalties, by 30)</li>
          </ul>
          <p className="mb-5">
            This payment option also prevents the IRS from filing a federal tax lien during the repayment period.
          </p>

          <h4 className="mt-10 mb-4">Who Gets Approved When They Submit an Offer?</h4>
          <p className="mb-5">
            An <strong>Offer in Compromise</strong> is approved when the IRS determines it&apos;s the most likely path to collecting the largest portion of the amount owed. The best way to craft a strong offer is by working with a tax professional who understands the process and has a proven track record of success.
          </p>
          <p className="mb-5">
            Not all professionals are created equal — be sure to find someone experienced with clients in situations similar to yours, whether you&apos;re an individual, freelancer, business owner, or somewhere in between.
          </p>

          <h4 className="mt-10 mb-4">Other Important Information</h4>
          <p className="mb-5">
            If you don&apos;t currently have a federal tax lien, one may be filed during the offer review process. During this time, your normal collection process is paused, and any nonrefundable payments you make count toward your new proposed agreement rather than your old payment plan.
          </p>
          <p className="mb-5">
            The IRS also offers a self-help tool online to give you a better idea of how offers are evaluated and what criteria they use to decide whether to accept a proposed compromise.
          </p>
          <p className="mb-5">
            If you are currently involved in bankruptcy proceedings, the IRS will not approve any offer. That&apos;s because your unpaid taxes may fall under the jurisdiction of the court handling your financial restructuring. You&apos;ll need to fully resolve your bankruptcy before pursuing an offer in compromise.
          </p>

          <h4 className="mt-10 mb-4">What to Expect if Your Offer Is Accepted</h4>
          <p className="mb-5">
            Approval of your offer marks the beginning — not the end — of the process. You&apos;ll need to fully comply with all terms of your agreement to keep it valid. In most cases, the federal tax lien remains in place until your balance is paid in full. So if your agreement involves more than 12 payments, be sure to factor that into your ongoing financial and tax planning.
          </p>

          <h4 className="mt-10 mb-4">Getting the Help You Deserve With Your IRS Balance</h4>
          <p className="mb-5">
            Complex financial matters should never be handled alone. Tax professionals exist to guide you through IRS negotiations and help you make the best decisions based on your situation. If you&apos;re looking to resolve a large balance from the most recent tax year — or from previous years — contact <strong>Five Star Tax Resolution</strong> today. We&apos;ll help you explore your options and determine whether a single, smart compromise can bring you the peace of mind you&apos;ve been waiting for.
          </p>

        </article>
      </section>
      <Footer />
    </div>
  );
}

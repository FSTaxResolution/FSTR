import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TaxReliefLeadForm from "@/components/TaxReliefLeadForm";

export const metadata = {
    title: "Offer In Compromise | Five Star Tax Resolution",
};

export default function OfferInCompromise() {
    return (
        <div className="font-sans text-navy">
            <Header />
            <TaxReliefLeadForm
                title="Offer In Compromise"
                description="An offer in compromise is a program offered by the IRS and most States to help financially troubled taxpayers reduce their tax issues. If you have back taxes and can't afford to pay, the IRS may settle for less than you owe."
            />

            {/* ARTICLE BODY */}
            <section className="bg-white py-section">
                <article className="max-w-6xl mx-auto px-container-padding">

                    <h3 className="mt-5 mb-5">How Does an Offer in Compromise With The IRS Work?</h3>

                    <p className="mb-5">
                        When individuals and businesses do not have the ability to pay a tax amount, the offer in compromise is the IRS&apos;s mechanism for reaching a settlement. It&apos;s not universally approved and there are a lot of requirements that go into obtaining approval if you submit one, but the process is navigable with the right help and the right resources. It&apos;s never necessary to deal with these things alone, so keep reading to learn how to get the help you need.
                    </p>

                    <h4 className="mt-10 mb-4">Getting Started</h4>
                    <p className="mb-5">
                        The first required step to approval is making sure all your filings and payments on existing payment plans are up to date. If your tax paperwork is out of order, the IRS has no way of determining what your total tax obligations are, and without that, it can&apos;t decide what percentage of that amount it expects to reasonably collect. While it&apos;s not required, an optional first step that can help if you are working on ensuring all those filings are in order is hiring a tax professional. Once you make sure all your filings are up to date, you will also need to fulfill the following requirements:
                    </p>
                    <ul className="list-disc pl-6 mb-5">
                        <li className="mb-3.5">Form 433-A or 433-B must be submitted with all the supporting paperwork</li>
                        <li className="mb-3.5">Form 656 must also be completed</li>
                        <li className="mb-3.5">$186 nonrefundable fee</li>
                        <li className="mb-3.5">Nonrefundable payments for each Form 656</li>
                    </ul>
                    <p className="mb-5">
                        The key to approval is properly documenting the assets and expenses you have that prevent you from paying the entire tax amount. You&apos;ll also have to select whether you are opting for a lump sum payment or installments over time. If you opt for installments, you will need to make nonrefundable tax payments while waiting to learn if your offer is approved or not. If it is not approved, those payments will at least reduce the outstanding amount. Your tax professional may also be able to negotiate an offer in compromise the IRS will approve if they reject the first one. There is an appeal process that needs to be initiated within 30 days of a rejection to keep the process open.
                    </p>

                    <h4 className="mt-10 mb-4">Navigating the Repayment Process</h4>
                    <p className="mb-5">
                        If you&apos;re going for an offer letter approval, you need to understand what that entails, because it will impact your company&apos;s finances throughout the year and probably into the next tax year. Depending on how you structure your recovery from your current financial situation, it could impact your finances for longer. Remember, if you have a tax lien, it won&apos;t go away until you&apos;ve satisfied the repayment agreement in full. If you&apos;re making installment payments, this needs to be accounted for.
                    </p>
                    <p className="mb-5">
                        You also need to be prepared to give up any tax return owed during the year your letter is accepted. That money will instead be applied toward your outstanding tax amount. It&apos;s also important to realize certain information from the process will be available to the public via a report that can be requested.
                    </p>

                    <h4 className="mt-10 mb-4">Who Gets Approved When They Submit an Offer?</h4>
                    <p className="mb-5">
                        The offer in compromise is accepted by the IRS when the agency believes it represents the best chance of collecting the largest possible portion of the outstanding amount. The best way to determine what an appropriate offer will be is to work with a tax professional who understands the process and has a track record of getting approvals for clients. Without working with someone who has experience filing these letters for people with financial situations similar to yours, it&apos;s hard to know what your chances of approval will look like. That means more than just finding a professional for advice, it means finding one whose service is built around people like you, whether it&apos;s individuals, businesses, freelancers, or any other niche.
                    </p>

                    <h4 className="mt-10 mb-4">Other Important Information</h4>
                    <p className="mb-5">
                        If you do not currently have an outstanding federal tax lien, one may be filed as part of the review and approval process while you negotiate an offer. The payment and assessment process is also extended during the review period, and your nonrefundable payments take the place of any pre-existing installment plan you might have been paying toward. There&apos;s also a self-help tool online that can help you better understand the process the IRS uses for evaluating these offer applications and deciding what to extend as a compromise.
                    </p>
                    <p className="mb-5">
                        The IRS will not approve offers if you are currently going through bankruptcy proceedings because your tax amount might fall under the purview of the judge ordering your amount restructuring and discharge. Make sure you handle any bankruptcy proceedings before you begin the process of reaching a compromise with the agency.
                    </p>

                    <h4 className="mt-10 mb-4">What to Expect if Your Offer Is Accepted</h4>
                    <p className="mb-5">
                        The acceptance of the offer isn&apos;t the end of things, it&apos;s the beginning of your opportunity to get some resolution. That means you&apos;ll need to be sure to comply with all the stages of the repayment plan to avoid invalidating it. You also need to realize that the federal tax lien will remain until the payment plan is completed, so if it involves more than 12 installments, be ready to accommodate it in future financial and tax planning.
                    </p>

                    <h4 className="mt-10 mb-4">Getting the Help You Deserve</h4>
                    <p className="mb-5">
                        It&apos;s never a good idea to approach complex financial decisions without sound advice from people who really understand the choices you&apos;re weighing. That&apos;s why tax professionals are there, to give you the resources to reach the best possible understanding with the IRS. If you need help negotiating an offer in compromise for the last tax year or for any preceding years, contact <strong>Five Star Tax Resolution</strong> today to find out how you can settle all your outstanding tax amount with one simple compromise.
                    </p>

                </article>
            </section>
            <Footer />
        </div>
    );
}

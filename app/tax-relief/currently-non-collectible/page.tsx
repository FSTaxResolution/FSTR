import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TaxReliefLeadForm from "@/components/TaxReliefLeadForm";

export const metadata = {
    title: "IRS CNC (Currently Non Collectible) Status | Five Star Tax Resolution",
};

export default function CurrentlyNonCollectible() {
    return (
        <div className="font-sans text-navy">
            <Header />
            <TaxReliefLeadForm
                title="IRS CNC (Currently Non Collectible) Status"
                description="The quickest and easiest solution to solve your tax problems. The IRS/State will deem you uncollectible. No garnishments, bank levies or payment plans."
            />


            {/* ARTICLE BODY */}
            <section className="bg-white py-section">
                <article className="max-w-6xl mx-auto px-container-padding">

                    <h3 className="mt-5 mb-5">Resolve unpaid taxes once and for all.</h3>

                    <p className="mb-5">
                        <strong>Do you need the IRS to leave you alone for a while? You can make such a request!</strong> CNC (Currently Not Collectible) is a taxpayer status issued to people who are unable to repay their tax obligations. Once an account is designated as CNC, the IRS places a hold on collection activity. That means no threatening levies, harassing calls, or intimidating soft letters from the IRS. If you&apos;re facing unresolved tax balances, received an Intent to Levy notice, or are currently dealing with wage garnishment, it&apos;s worth reading on.
                    </p>

                    <h4 className="mt-10 mb-4">Who Qualifies for Currently Not Collectible Status?</h4>
                    <p className="mb-5">
                        According to the IRS (see Part 5, Chapter 6, Section 1 of the Internal Revenue Manual), a taxpayer may qualify for CNC status if they can prove significant financial hardship. In particular, applicants must show that they are left with very little income after necessary living expenses — putting them at a genuine economic disadvantage, not just a temporary setback.
                    </p>
                    <p className="mb-5">
                        To determine eligibility, an IRS officer will assess your TPI (Total Positive Income). This refers to all income reported on your tax return, including:
                    </p>
                    <ul className="list-disc pl-6 mb-5">
                        <li className="mb-3.5">Wages and salaries</li>
                        <li className="mb-3.5">Dividends and interest</li>
                        <li className="mb-3.5">Revenue from Schedule C (self-employment)</li>
                        <li className="mb-3.5">Revenue from Schedule F (farming)</li>
                        <li className="mb-3.5">Rental income and other earnings</li>
                    </ul>

                    <p className="mb-5">
                        The IRS will compare your income against national and local living cost standards. These standards fall into four categories:
                    </p>
                    <ol className="list-decimal pl-6 mb-5 space-y-4">
                        <li>
                            <strong>National Standards — Basic Living Expenses:</strong>
                            <p className="mt-2">This includes food, household items, clothing, personal care, and miscellaneous expenses. The IRS allows a deduction of $639 per month for individuals, and up to $1,650 for a family of four.</p>
                        </li>
                        <li>
                            <strong>National Standards — Out-of-Pocket Health Costs:</strong>
                            <p className="mt-2">This includes prescription drugs, medical services, eyeglasses, etc. Allowances include up to $117/month for those 65+ and $49/month for those under 65.</p>
                        </li>
                        <li>
                            <strong>Local Standards — Housing &amp; Utilities:</strong>
                            <p className="mt-2">Covers rent/mortgage, property taxes, gas, water, heating, garbage, etc. These deductions vary by location based on data from the U.S. Census Bureau and other agencies.</p>
                        </li>
                        <li>
                            <strong>Local Standards — Transportation:</strong>
                            <p className="mt-2">This includes car ownership and operational expenses. Up to $485/month may be deducted for a single vehicle, or $970/month for two vehicles. Public transportation deductions may be as high as $189/month.</p>
                        </li>
                    </ol>

                    <p className="mb-5">
                        The IRS will subtract these standard living expenses from your TPI to determine your NDI (Net Disposable Income). If making IRS payments would leave you unable to meet basic living needs, you may qualify for CNC status.
                    </p>

                    <h4 className="mt-10 mb-4">What Happens When You&apos;re Granted CNC Status?</h4>
                    <p className="mb-5">
                        Once the IRS approves your account for CNC, any existing tax levies will be lifted. Enforcement and collection efforts are temporarily suspended. You&apos;ll still receive an annual bill from the IRS, but they won&apos;t aggressively pursue the balance while you&apos;re in CNC status. This means temporary relief from:
                    </p>
                    <ul className="list-disc pl-6 mb-5">
                        <li className="mb-3.5">Wage garnishments</li>
                        <li className="mb-3.5">Frequent collection attempts</li>
                        <li className="mb-3.5">Continuous IRS letters and calls</li>
                        <li className="mb-3.5">Damage to your credit</li>
                        <li className="mb-3.5">Payment pressures</li>
                    </ul>

                    <p className="mb-5">
                        However, it&apos;s important to understand that CNC status doesn&apos;t erase your balance. You&apos;re still responsible for paying what you owe — this status simply gives you breathing room. Your financial situation will be reassessed later to determine if you&apos;re able to begin making payments again.
                    </p>
                    <p className="mb-5">
                        While in CNC, the IRS will continue monitoring your income tax returns. If your earnings increase, your CNC status may be revoked, and you may be asked to resubmit financial documents to re-evaluate your situation.
                    </p>
                    <p className="mb-5">
                        Note that penalties and interest will continue to accrue while your balance remains unpaid. While CNC offers temporary relief, it doesn&apos;t stop the balance from growing.
                    </p>
                    <p className="mb-5">
                        Tax refunds you receive while in CNC status will be automatically applied toward your unpaid taxes. That&apos;s why it&apos;s wise to speak with a tax expert about all your relief options — a potential Offer in Compromise could benefit you depending on your circumstances.
                    </p>

                    <h4 className="mt-10 mb-4">How Long Does CNC Status Last?</h4>
                    <p className="mb-5">
                        CNC status is not permanent. It offers temporary protection based on your financial condition. After assigning CNC, the IRS gives your case a closing code, which determines when it will be reviewed again.
                    </p>
                    <p className="mb-5">
                        In general, the IRS has 10 years to collect on unpaid balances. This is known as the statute of limitations. The 10-year clock starts when the tax is assessed and continues even while you&apos;re in CNC status — unless paused by certain exceptions.
                    </p>

                    <h4 className="mt-10 mb-4">How to Apply for CNC Status</h4>
                    <p className="mb-5">
                        To apply, you&apos;ll need to submit a full financial report to the IRS, including documentation of:
                    </p>
                    <ul className="list-disc pl-6 mb-5">
                        <li className="mb-3.5">Your current income and necessary expenses</li>
                        <li className="mb-3.5">All assets and their fair market value</li>
                    </ul>
                    <p className="mb-5">You should also provide:</p>
                    <ul className="list-disc pl-6 mb-5">
                        <li className="mb-3.5">The last 3 months of bank statements</li>
                        <li className="mb-3.5">Receipts for any out-of-pocket medical costs</li>
                    </ul>
                    <p className="mb-5">
                        This documentation is used to complete Form 433, the financial disclosure form the IRS requires. This form gives the IRS a full view of your financial picture and helps them determine if you qualify.
                    </p>
                    <p className="mb-5">Steps to prepare your documents include:</p>
                    <ul className="list-disc pl-6 mb-5">
                        <li className="mb-3.5">Listing both tangible and intangible assets (property, vehicles, investments, etc.)</li>
                        <li className="mb-3.5">Estimating the fair market value of each asset</li>
                        <li className="mb-3.5">Calculating your total income from the past 90 days</li>
                        <li className="mb-3.5">Categorizing and averaging your expenses over that period</li>
                        <li className="mb-3.5">Comparing your average income to your expenses</li>
                    </ul>

                    <h4 className="mt-10 mb-4">Need Help with the CNC Process?</h4>
                    <p className="mb-5">
                        Applying for CNC status can be overwhelming — but you don&apos;t have to do it alone. At <strong>Five Star Tax Resolution</strong>, our experienced team will guide you through every step and make the strongest case possible on your behalf. From completing forms to representing you with the IRS, we&apos;ll handle it all.
                    </p>
                    <p className="mb-5">
                        <strong>Reach out today</strong> to learn how we can help you find the breathing room you need and take your first steps toward financial peace of mind.
                    </p>

                </article>
            </section>
            <Footer />
        </div>
    );
}

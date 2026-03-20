import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TaxReliefLeadForm from "@/components/TaxReliefLeadForm";

export const metadata = {
    title: "Corporate Tax Preparation Services | Five Star Tax Resolution",
};

export default function CorporateTaxPreparationServices() {
    return (
        <div className="font-sans text-navy">
            <Header />
            <TaxReliefLeadForm
                title="Corporate Tax Preparation Services"
                description="Five Star Tax Resolution has extensive tax experience in preparing S Corp, Limited Liability Company, Partnership, or Sole Proprietor tax returns. Get Help Preparing Your Corporate Taxes Today."
            />

            {/* ARTICLE BODY */}
            <section className="bg-white py-section">
                <article className="max-w-6xl mx-auto px-container-padding">

                    {/* <h3 className="mt-5 mb-5">Get Help Preparing Your Corporate Taxes Today</h3> */}

                    <p className="mb-5">
                        The IRS mandates all corporations to file taxes annually irrespective of whether the corporation turned a profit during the fiscal year. Corporate tax returns are required for companies that have incorporated as C-corporations or S-corporations. The majority of business owners choose these corporate structures because of their many added bonuses such as the ability for the business to pay taxes on profits instead of the owner.
                    </p>
                    <p className="mb-5">
                        C-corporations are required to pay tax on all profits, excluding any deductions. S-corporations on the other hand have the option of choosing to be taxed as a corporation or as a secondary partnership in which the company is classified as a &ldquo;pass-through entity&rdquo; and all earned profits are passed on to the owner and taxes are then collected through his or her personal income tax returns.
                    </p>
                    <p className="mb-5">
                        Corporate tax returns are generally due by March 15th each tax year, but there are some cases where business owners may seek an extension of six months. Any business filing taxes as a corporation with assets in excess of $10 million must file their tax returns online. Our tax accountants at <strong>Five Star Tax Resolution</strong> can file online on behalf of your company, but the tax documentation can only be filed electronically. Corporations can also make installment payments in the months of April, June, September and December.
                    </p>

                    <h4 className="mt-10 mb-4">What Details Are Included on Corporate Tax Returns?</h4>
                    <p className="mb-5">
                        Corporate tax returns outline the income and expenses of a corporation and determine the amount of tax that the corporation will owe to the US government. The report contains multiple schedules detailing facts such as the cost of the sold goods, dividends and expenses, officer compensation, accounting systems used, business details, NAICS classification, balance sheets, and income-loss statements.
                    </p>

                    <h4 className="mt-10 mb-4">What Information Will I Need To File a Corporate Tax Return?</h4>
                    <p className="mb-5">
                        The documentation required to file a corporate tax return includes the business name, address, employee ID number, incorporation date and total assets. The CFO of the corporation will need to provide details on the corporate income such as:
                    </p>
                    <ul className="list-disc pl-6 mb-5">
                        <li className="mb-3.5">Dividends</li>
                        <li className="mb-3.5">Cost of goods sold</li>
                        <li className="mb-3.5">Gross receipts</li>
                        <li className="mb-3.5">Interest</li>
                        <li className="mb-3.5">Rents</li>
                        <li className="mb-3.5">Royalties</li>
                        <li className="mb-3.5">Capital gains</li>
                    </ul>

                    <h4 className="mt-10 mb-4">What Expenses Can I Deduct When Filing My Corporate Tax Return?</h4>
                    <p className="mb-5">
                        Corporations may report large amounts of tax deductible business expenses against income received. The corporation&apos;s accounting officers should be monitoring these expense reports all year round and be prepared to provide full details in the event of a tax audit by the IRS. The deductible expenses may include:
                    </p>
                    <ul className="list-disc pl-6 mb-5">
                        <li className="mb-3.5">Officer compensation</li>
                        <li className="mb-3.5">Other salaries</li>
                        <li className="mb-3.5">Repairs and maintenance</li>
                        <li className="mb-3.5">Rents</li>
                        <li className="mb-3.5">Taxes and licenses</li>
                        <li className="mb-3.5">Interest expenses</li>
                        <li className="mb-3.5">Charitable contributions</li>
                        <li className="mb-3.5">Depreciation</li>
                        <li className="mb-3.5">Advertising</li>
                        <li className="mb-3.5">Pensions and profit sharing plans</li>
                        <li className="mb-3.5">Employee benefit programs</li>
                        <li className="mb-3.5">Domestic production activities</li>
                        <li className="mb-3.5">Other miscellaneous deductions</li>
                    </ul>

                    <h4 className="mt-10 mb-4">Corporate Taxes For Foreign Investors</h4>
                    <p className="mb-5">
                        Corporations that are owned by non-US residents are required to file corporate tax returns as well. Non-US residents operating businesses in the US should seek advice from an international tax advisor before starting a company in the U.S. and when filing corporate taxes. In addition to required filings, non-US residents can own shares in a C-corporation, which can also be subject to double taxation on income at the corporate and personal level for dividends earned by shareholders. As an alternative, LLCs can pass on all the income to the owner, who must then file personal income tax returns with the IRS.
                    </p>
                    <p className="mb-5">
                        The United States offers some of the world&apos;s strongest global markets, but many say it also levies the toughest corporate tax rates for developed countries. There is concern as to whether or not the US corporate tax rate is actually higher, notably once all the exemptions and incentives are taken into account.
                    </p>

                    <h4 className="mt-10 mb-4">Have a Corporate Tax Question?</h4>
                    <p className="mb-5">
                        We can help! <strong>Five Star Tax Resolution</strong> provides world class personalized tax relief and corporate tax preparation services. We offer the tailored experience that you expect from your tax preparation professionals, and we operate remotely so you never need to leave your home or office. Speak with one of our tax professionals today.
                    </p>

                </article>
            </section>
            <Footer />
        </div>
    );
}

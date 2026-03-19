import Link from "next/link";

const services = [
  {
    title: "Tax Relief",
    description:
      "Unable to pay your taxes? Our tax experts will work to find a solution and resolve your tax problems. You don't have to face the IRS alone; let our top-rated tax relief team help you fight the IRS.",
    href: "#",
  },
  {
    title: "Penalty Abatement",
    description:
      "Our Tax Advisors & Tax Attorneys can help you qualify for penalty abatement & lower what you owe – fast.",
    href: "#",
  },
  {
    title: "IRS Fresh Start Program",
    description:
      "Five Star Tax Resolution can help you apply & qualify for the Fresh Start Program to secure the lowest possible settlements & protect your income.",
    href: "/tax-relief/irs-fresh-start-program",
  },
  {
    title: "Stop IRS Wage Garnishment",
    description:
      "Five Star Tax Resolution can help you apply & qualify for the Fresh Start Program to secure the lowest possible settlements & protect your income.",
    href: "#",
  },
  {
    title: "IRS Installment Agreement",
    description:
      "Five Star Tax Resolution can help you apply & qualify for the Fresh Start Program to secure the lowest possible settlements & protect your income.",
    href: "#",
  },
  {
    title: "Offer In Compromise",
    description:
      "Five Star Tax Resolution can help you apply & qualify for the Fresh Start Program to secure the lowest possible settlements & protect your income.",
    href: "#",
  },
];

function TaxIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mb-6"
    >
      <rect
        x="8"
        y="4"
        width="28"
        height="36"
        rx="2"
        stroke="#b0b8c1"
        strokeWidth="1.5"
        fill="none"
      />
      <path d="M28 4 L36 12" stroke="#b0b8c1" strokeWidth="1.5" />
      <path
        d="M28 4 L28 12 L36 12"
        stroke="#b0b8c1"
        strokeWidth="1.5"
        fill="none"
      />
      <text
        x="14"
        y="24"
        fontSize="7"
        fill="#b0b8c1"
        fontFamily="sans-serif"
        fontWeight="600"
        letterSpacing="0.5"
      >
        TAX
      </text>
      <circle cx="26" cy="30" r="6" stroke="#b0b8c1" strokeWidth="1.5" fill="none" />
      <line x1="22" y1="34" x2="30" y2="26" stroke="#b0b8c1" strokeWidth="1.5" />
      <circle cx="23" cy="27" r="1" fill="#b0b8c1" />
      <circle cx="29" cy="33" r="1" fill="#b0b8c1" />
    </svg>
  );
}

function ServiceCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div className="flex flex-col justify-between border border-fst-gray bg-white px-10 py-12 hover:shadow-md transition-shadow duration-200">
      <div>
        <TaxIcon />

        <div className="text-[1.875rem] font-semibold leading-tight text-navy mb-4">
          {title}
        </div>

        <p className="text-body-text mb-8.75">
          {description}
        </p>
      </div>

      <div>
        <Link
          href={href}
          className="flex items-center gap-2 text-navy text-[1.15rem] font-semibold hover:opacity-70 transition-opacity"
        >
          LEARN&nbsp;MORE
          <span className="text-lime font-semibold leading-none">+</span>
        </Link>
      </div>
    </div>
  );
}

export default function TaxReliefServices() {
  return (
    <section className="bg-white px-container-padding py-section">
      <div className="mx-auto max-w-(--width-container)">
        <p className="text-eyebrow tracking-[0.2em] uppercase text-lime font-semibold mb-3">
          What We Offer
        </p>
        <hr className="border-navy/20 mb-6" />
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }} className="leading-tight mb-10">
          Tax Relief Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-grid-gap">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

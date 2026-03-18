import HomePageLeadForm from "./HomePageLeadForm";

const checks = ["Expert Help", "Proven Results", "Ongoing Support"];

export default function HeroSection() {
  return (
    <section className="bg-mist">
      <div className="mx-auto w-full max-w-(--width-container) px-container-padding py-section grid grid-cols-1 lg:grid-cols-2 gap-grid-gap items-center min-h-[calc(100vh-80px)]">

        <div>
          <h1 className="whitespace-nowrap">Millions Saved</h1>

          <p className="text-h3 font-light leading-none text-navy mt-2">
            In Back Taxes
          </p>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-body text-body-text">
            {checks.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-lime font-semibold">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-xl">
            Strategic tax solutions tailored to your needs. Book a consultation
            with our experts today.
          </p>
        </div>

        <div className="flex justify-start lg:justify-end">
          <HomePageLeadForm />
        </div>

      </div>
    </section>
  );
}

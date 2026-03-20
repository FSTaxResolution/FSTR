import Image from "next/image";

const team = [
    {
        name: "Victor A. Latham",
        role: "Senior Tax Attorney",
        image: "/images/headshots/Victor Latham.jpg",
        resume: "/resumes/Victor Latham Resume.pdf",
    },
    {
        name: "Edward Korducki",
        role: "Tax Attorney",
        image: "/images/headshots/Edward Korducki.jpg",
        resume: "/resumes/Edward Korducki Resume.pdf",
    },
    {
        name: "Roger Mingching Chu",
        role: "Tax Attorney",
        image: "/images/headshots/Roger MingChing Chu.jpg",
        resume: "/resumes/Roger MingChing Chu Resume.pdf",
    },
];

export default function TeamOfExperts() {
    return (
        <section className="bg-white px-container-padding py-section font-sans">
            <div className="max-w-(--width-container) mx-auto grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_2.5fr]">
                {/* Left: heading */}
                <div>
                    <p className="text-eyebrow tracking-[0.2em] uppercase text-lime font-semibold mb-3">
                        Our Team
                    </p>
                    <hr className="border-navy/20 mb-6" />
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }} className="leading-tight">
                        Meet our team of experts
                    </h2>
                </div>

                {/* Right: team cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {team.map((member) => (
                        <a
                            key={member.name}
                            href={member.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block aspect-3/4 overflow-hidden"
                        >
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />

                            {/* + icon */}
                            <span className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-white/20 text-white text-base font-bold backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-navy">
                                +
                            </span>

                            {/* Bottom gradient overlay with name/role */}
                            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent px-6 pb-6 pt-20">
                                <p className="text-white font-semibold text-xl leading-snug">
                                    {member.name}
                                </p>
                                <p className="text-sm tracking-[0.15em] uppercase text-white/70 font-medium mt-1.5">
                                    {member.role}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

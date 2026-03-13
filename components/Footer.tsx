import Image from "next/image";
import Link from "next/link";

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const navLinks = [
  { label: "Terms of Service", href: "/terms" },
  { label: "About Us", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact Us", href: "/contact" },
  { label: "Client Support", href: "/support" },
];

const socialLinks = [
  { icon: <FacebookIcon />, href: "https://www.facebook.com/fivestartaxresolution/", label: "Facebook", hoverColor: "hover:text-[#1877F2] hover:border-[#1877F2]" },
  { icon: <LinkedInIcon />, href: "https://www.linkedin.com/company/five-star-tax/", label: "LinkedIn", hoverColor: "hover:text-[#0A66C2] hover:border-[#0A66C2]" },
  { icon: <YouTubeIcon />, href: "https://youtube.com", label: "YouTube", hoverColor: "hover:text-[#FF0000] hover:border-[#FF0000]" },
];

export default function Footer() {
  return (
    <footer className="bg-midnight border-t border-blue-secondary/30 text-sky/60 font-sans">
      <div className="mx-auto w-full max-w-(--width-container) px-container-padding py-section flex justify-between items-start">

        {/* Left: Logo + description + social */}
        <div className="flex flex-col gap-6">
          <Image
            src="/images/fivestartransparent.png"
            alt="Five Star Tax Resolution"
            width={180}
            height={60}
          />

          <p className="text-sm leading-relaxed text-sky/60 max-w-70">
            Professional tax resolution services dedicated to helping you navigate
            complex tax situations with confidence and integrity.
          </p>

          <div className="flex gap-3">
            {socialLinks.map(({ icon, href, label, hoverColor }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className={`w-9 h-9 rounded-full border border-blue-secondary/40 flex items-center justify-center text-sky/60 transition-colors duration-200 ${hoverColor}`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right group: Nav + Contact */}
        <div className="flex gap-24 items-start">
          {/* Center: Nav links */}
          <nav className="flex flex-col gap-5">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-[15px] text-sky/60 hover:text-lime transition-colors duration-200 no-underline"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[13px] font-semibold tracking-[0.14em] text-white uppercase m-0">
              Contact Us
            </h3>

            <div className="flex flex-col gap-4">
              <a
                href="tel:866-902-9123"
                className="flex items-center gap-3.5 text-[15px] text-sky/60 hover:text-lime transition-colors duration-200 no-underline"
              >
                <div className="w-9 h-9 rounded-full border border-blue-secondary/40 bg-navy flex items-center justify-center shrink-0">
                  <PhoneIcon />
                </div>
                866-902-9123
              </a>

              <a
                href="mailto:hello@fivestartaxresolution.com"
                className="flex items-center gap-3.5 text-[15px] text-sky/60 hover:text-lime transition-colors duration-200 no-underline"
              >
                <div className="w-9 h-9 rounded-full border border-blue-secondary/40 bg-navy flex items-center justify-center shrink-0">
                  <MailIcon />
                </div>
                hello@fivestartaxresolution.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-secondary/30 mx-auto w-full max-w-(--width-container) px-container-padding py-5">
        <p className="text-xs tracking-[0.06em] text-sky/30 uppercase m-0">
          Copyright © 2025 Five Star Tax Resolution, All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

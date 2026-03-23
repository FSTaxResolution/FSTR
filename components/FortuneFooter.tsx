import Link from "next/link";

export default function FortuneFooter() {
    return (
        <footer className="bg-white py-8 px-6 text-center" style={{ fontFamily: "var(--font-graphik-compact)" }}>
            <p className="text-base font-semibold text-gray-800 mb-3">
                &copy; 2026 Fortune Media. All Rights Reserved.
            </p>
            <p className="text-base text-gray-700 mb-3">
                Use of this site constitutes acceptance of our{" "}
                <Link href="https://fortune.com/terms-of-use/" className="text-[#0070c0] hover:underline">Terms of Use</Link>
                {" "}and{" "}
                <Link href="https://fortune.com/privacy-policy/" className="text-[#0070c0] hover:underline">Privacy Policy</Link>
                {" "}|{" "}
                <Link href="https://fortune.com/privacy-policy/#ca-notice" className="text-[#0070c0] hover:underline">CA Notice at Collection and Privacy Notice</Link>
                {" "}|{" "}
                <Link href="/privacy-policy#do-not-sell" className="text-[#0070c0] hover:underline">Do Not Sell/Share My Personal Information</Link>
            </p>
            <p className="text-base text-gray-700 max-w-425 mx-auto">
                FORTUNE is a trademark of Fortune Media IP Limited, registered in the U.S. and other countries. FORTUNE may receive compensation for some links to products and services on this website. Offers may be subject to change without notice. S&amp;P Index data is the property of Chicago Mercantile Exchange Inc. and it&apos;s licensors. All rights reserved.{" "}
                <Link href="https://www.ice.com/privacy-security-center/terms-of-use" className="text-[#0070c0] hover:underline">Terms &amp; Conditions</Link>
                . Powered and implemented by{" "}
                <Link href="https://www.interactivedata.com/idms" className="text-[#0070c0] hover:underline" target="_blank" rel="noopener noreferrer">Interactive Data Managed Solutions</Link>
                .
            </p>
        </footer>
    );
}

import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
    title: "Five Star Tax Resolution",
    description: "Strategic tax solutions tailored to your needs.",
    // TODO: Uncomment and remove robots to allow crawling after verification
    // verification: {
    //     google: "VgPSljf0vsTuZQ4nFLbgOpZT-rHr_fObry-Cc360B4U",
    // },
    robots: {
        index: false,
        follow: false,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
                {/* Ahrefs Analytics */}
                {/* Uncomment when going live */}
                {/* <Script src="https://analytics.ahrefs.com/analytics.js" data-key="n/zHuNbcPK6hhMiIVilz1Q" strategy="afterInteractive" /> */}
            </body>
        </html>
    );
}

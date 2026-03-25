import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Five Star Tax Resolution",
    description: "Strategic tax solutions tailored to your needs.",
    //TODO: Uncomment and remove robots to allow crawling after verification
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
            </body>
        </html>
    );
}

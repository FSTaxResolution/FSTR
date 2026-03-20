import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Five Star Tax Resolution",
    description: "Strategic tax solutions tailored to your needs.",
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

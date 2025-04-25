
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Send Us Money - Fast & Secure Money Transfers to Brazil",
  description: "Send money from the U.S. to Brazil faster, more securely, and with lower fees — powered by blockchain technology.",
  keywords: "money transfer, remittance, send money to Brazil, blockchain payments, international transfers",
  authors: [{ name: "Send Us Money LLC" }],
  creator: "Send Us Money LLC",
  publisher: "Send Us Money LLC",
  openGraph: {
    title: "Send Us Money - Fast & Secure Money Transfers to Brazil",
    description: "Send money from the U.S. to Brazil faster, more securely, and with lower fees — powered by blockchain technology.",
    url: "https://sendusmoney.us",
    siteName: "Send Us Money",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Send Us Money logo with text: Trust in Every Transaction, Convenience in Your Hands",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Send Us Money - Fast & Secure Money Transfers to Brazil",
    description: "Send money from the U.S. to Brazil faster, more securely, and with lower fees — powered by blockchain technology.",
    images: ["/twitter-image.jpg"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
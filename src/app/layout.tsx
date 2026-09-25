import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "[Business Name] | Premium Solar Installation in Islamabad & Rawalpindi",
  description: "Get professional solar installation services and solar systems on installments in Islamabad and Rawalpindi. Cash and installment plans available.",
  keywords: "Solar Installation Islamabad, Solar Installation Rawalpindi, Solar Systems on Installments, 5kW Solar, 10kW Solar",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "[Business Name] | Premium Solar Installation",
    description: "Expert solar installation in Islamabad & Rawalpindi with flexible installment plans.",
    url: '/',
    siteName: '[Business Name]',
    locale: 'en_PK',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-white text-zinc-900 selection:bg-emerald-100 selection:text-emerald-900`}>
        <Header />
        <main className="flex-grow flex flex-col w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

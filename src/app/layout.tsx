import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "[Business Name] | Premium Solar Installation in Islamabad & Rawalpindi",
  description: "Get professional solar installation services and solar systems on installments in Islamabad and Rawalpindi.",
  keywords: "Solar Installation Islamabad, Solar Installation Rawalpindi, Solar Systems on Installments, 5kW Solar, 10kW Solar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-white text-zinc-900`}>
        {/* Foundation Header Placeholder */}
        <header className="w-full bg-white border-b py-4 px-6 md:px-12 flex justify-between items-center shadow-sm">
          <div className="font-bold text-xl text-green-600">[Business Name]</div>
          <nav className="hidden md:flex gap-6 font-medium text-sm">
            <a href="/" className="hover:text-green-600 transition">Home</a>
            <a href="/solar-installation-islamabad" className="hover:text-green-600 transition">Islamabad</a>
            <a href="/solar-installation-rawalpindi" className="hover:text-green-600 transition">Rawalpindi</a>
            <a href="/solar-on-installments" className="hover:text-green-600 transition">Installments</a>
            <a href="/get-free-quote" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">Get a Quote</a>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex flex-col">
          {children}
        </main>

        {/* Foundation Footer Placeholder */}
        <footer className="w-full bg-zinc-900 text-zinc-400 py-8 px-6 md:px-12 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} [Business Name]. Serving Islamabad and Rawalpindi.</p>
        </footer>
      </body>
    </html>
  );
}

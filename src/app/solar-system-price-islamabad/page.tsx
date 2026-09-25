import Link from 'next/link';
import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Solar System Price in Islamabad | Quotes & Installments",
  description: "Request current quotes for solar system prices in Islamabad. Pricing depends on 5kW, 10kW, 15kW, hybrid, and on-grid requirements. Cash and installment options.",
  keywords: "solar system price Islamabad, solar panel price Islamabad, solar system on installments Islamabad",
  alternates: { canonical: '/solar-system-price-islamabad' },
  openGraph: {
    title: "Solar System Price in Islamabad | Quotes & Installments",
    description: "Request current quotes for solar system prices in Islamabad. Pricing depends on 5kW, 10kW, 15kW, hybrid, and on-grid requirements. Cash and installment options.",
    url: '/solar-system-price-islamabad',
    siteName: '[Business Name]',
    type: 'website',
  },
};

export default function PricingPage() {
  const pricingCards = [
    { title: "5kW Solar System", desc: "Suitable for moderate residential use." },
    { title: "10kW Solar System", desc: "Suitable for higher residential requirements." },
    { title: "15kW Solar System", desc: "Suitable for large homes and commercial properties." },
    { title: "Hybrid Systems", desc: "Includes battery storage for backup." },
    { title: "On-Grid Systems", desc: "Connected to the grid, generally without batteries." }
  ];

  return (
    <div className="w-full flex flex-col bg-zinc-50">
      
      {/* 1. HERO */}
      <section className="w-full bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: 'Solar System Price in Islamabad', href: '/solar-system-price-islamabad' }]} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Solar System Price in Islamabad</h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed">
            Because every property is unique, final prices depend on system size, equipment selection, installation requirements, and your chosen payment method. 
          </p>
          <Link href="#quote" className="bg-emerald-600 text-white font-bold px-8 py-4 rounded-md hover:bg-emerald-700 transition">
            Request Current Quote
          </Link>
        </div>
      </section>

      {/* 2. PRICING FACTORS */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-zinc-900 mb-8">What Influences the Final Price?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['System Size (kW)', 'Panel & Inverter Selection', 'Battery Requirements', 'Mounting Structure', 'Protection Equipment', 'Installation Requirements', 'Site Conditions', 'Payment Option'].map((factor, i) => (
              <div key={i} className="p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-700 font-medium text-sm">
                {factor}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRICING CARDS */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900 mb-10 text-center">System Configurations in Islamabad</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingCards.map((card, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm flex flex-col items-center text-center hover:shadow-md transition">
                <h3 className="text-2xl font-bold text-zinc-900 mb-3">{card.title}</h3>
                <p className="text-zinc-600 mb-8 flex-grow">{card.desc}</p>
                <div className="text-lg font-semibold text-emerald-700 bg-emerald-50 w-full py-3 rounded-md mb-6">
                  Price: Request Current Quote
                </div>
                <Link href="/get-quote" className="w-full bg-zinc-900 text-white font-semibold py-3 rounded-md hover:bg-zinc-800 transition">
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PAYMENT OPTIONS */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="border-l-4 border-zinc-900 pl-6">
            <h3 className="text-2xl font-bold mb-4 text-zinc-900">Cash Purchase</h3>
            <p className="text-zinc-600 leading-relaxed">Customers can request a quotation for upfront purchase. The quoted cash price is based on the finalized hardware and installation requirements for your Islamabad property.</p>
          </div>
          <div className="border-l-4 border-emerald-600 pl-6">
            <h3 className="text-2xl font-bold mb-4 text-zinc-900">Installment Option</h3>
            <p className="text-zinc-600 leading-relaxed">Installment availability, eligibility, down payment amounts, schedule, and final terms are confirmed during the quotation process after reviewing your requirements.</p>
          </div>
        </div>
      </section>

      {/* 5. QUOTE FORM */}
      <section id="quote" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Request Your Islamabad Quote</h2>
            <p className="text-zinc-400">Fill out the form below to receive accurate, customized pricing.</p>
          </div>
          <div className="text-zinc-900">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* 6. INTERNAL LINKS */}
      <section className="w-full py-8 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/solar-installation-islamabad" className="text-zinc-400 hover:text-white transition">Solar Installation Islamabad</Link>
          <Link href="/5kw-solar-system" className="text-zinc-400 hover:text-white transition">5kW Systems</Link>
          <Link href="/10kw-solar-system" className="text-zinc-400 hover:text-white transition">10kW Systems</Link>
          <Link href="/15kw-solar-system" className="text-zinc-400 hover:text-white transition">15kW Systems</Link>
          <Link href="/hybrid-solar-system" className="text-zinc-400 hover:text-white transition">Hybrid Solar</Link>
          <Link href="/on-grid-solar-system" className="text-zinc-400 hover:text-white transition">On-Grid Solar</Link>
          <Link href="/solar-on-installments" className="text-zinc-400 hover:text-white transition">Installments</Link>
        </div>
      </section>

    </div>
  );
}

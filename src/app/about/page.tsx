import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "About Our Solar Installation Services in Islamabad & Rawalpindi",
  description: "Learn about our professional solar installation services for residential and commercial customers in Islamabad and Rawalpindi. Cash and installment options available.",
  keywords: "solar company Islamabad, solar installation Islamabad, solar company Rawalpindi, solar installation Rawalpindi",
  alternates: { canonical: '/about' },
  openGraph: {
    title: "About Our Solar Installation Services",
    description: "Learn about our solar services in Islamabad & Rawalpindi.",
    url: '/about',
    siteName: '[Business Name]',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col bg-white">
      
      {/* 1. HERO */}
      <section className="w-full bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8 text-center border-b-8 border-emerald-600">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: 'About', href: '/about' }]} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            About Our Solar Installation Services
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            We help residential and commercial customers in Islamabad and Rawalpindi explore and arrange solar installation based on their actual electricity requirements and property.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/get-quote" className="bg-emerald-600 text-white font-bold px-8 py-4 rounded-md hover:bg-emerald-700 transition">
              Get Your Free Solar Quote
            </Link>
            <a href="https://wa.me/[WHATSAPP_NUMBER]" className="border border-zinc-600 bg-zinc-800 text-white font-bold px-8 py-4 rounded-md hover:bg-zinc-700 transition flex items-center justify-center gap-2">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto flex flex-col gap-6 text-lg text-zinc-700 leading-relaxed">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4 text-center">Dedicated Solar Focus</h2>
          <p>
            Our business focuses entirely on providing professional solar installation services to customers across Islamabad and Rawalpindi. We believe that switching to solar should be a clear, straightforward process tailored to your unique energy needs.
          </p>
          <p>
            When you request a quotation, you can discuss your specific electricity requirements and property conditions. From there, the optimal system configuration is determined based on those requirements and site conditions.
          </p>
          <p>
            We accommodate diverse financial preferences. Customers can discuss cash/upfront purchases or ask about available installment payment options. Final pricing and terms are always confirmed during the quotation process.
          </p>
        </div>
      </section>

      {/* 3. SOLAR SERVICES WE PROVIDE */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900 mb-12 text-center">Solar Services We Provide</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Residential Solar Installation", link: "/solar-installation-islamabad" },
              { name: "Commercial Solar Installation", link: "/solar-installation-rawalpindi" },
              { name: "5kW Solar Systems", link: "/5kw-solar-system" },
              { name: "10kW Solar Systems", link: "/10kw-solar-system" },
              { name: "15kW Solar Systems", link: "/15kw-solar-system" },
              { name: "Hybrid Solar Systems", link: "/hybrid-solar-system" },
              { name: "On-Grid Solar Systems", link: "/on-grid-solar-system" },
              { name: "Solar Consultation & Quote", link: "/get-quote" },
              { name: "Cash / Upfront Purchase", link: "/get-quote" },
              { name: "Installment Options", link: "/solar-on-installments" }
            ].map((service, i) => (
              <Link key={i} href={service.link} className="bg-zinc-50 border border-zinc-200 p-4 rounded-lg text-center font-semibold text-sm text-zinc-700 hover:border-emerald-500 hover:bg-emerald-50 transition flex items-center justify-center min-h-[80px]">
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW WE WORK */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              "Understand Your Requirements",
              "Review Your Property & Electricity Needs",
              "Prepare Your Solar Recommendation",
              "Confirm System & Payment Option",
              "Installation & Handover"
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 bg-zinc-800 rounded-xl border border-zinc-700 relative pt-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-emerald-500 text-zinc-950 font-bold rounded-full flex items-center justify-center border-4 border-zinc-900">
                  {i + 1}
                </div>
                <h4 className="font-semibold">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY START WITH A QUOTE */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-zinc-900 mb-8">Why Customers Can Start With a Quote</h2>
          <p className="text-lg text-zinc-600 mb-8">
            A precise quotation is the most critical step because solar system requirements differ significantly based on multiple factors:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-sm font-medium text-zinc-700">
            {['Electricity consumption', 'Monthly bill', 'Daytime/nighttime usage', 'Property type', 'Available installation area', 'Desired system type', 'Battery requirements', 'Equipment configuration'].map((factor, i) => (
              <div key={i} className="bg-zinc-50 p-3 rounded border border-zinc-200">{factor}</div>
            ))}
          </div>
          <Link href="/get-quote" className="inline-block bg-emerald-600 text-white font-bold px-8 py-4 rounded-md hover:bg-emerald-700 transition">
            Request a Free Quote
          </Link>
        </div>
      </section>

      {/* 6. SERVING LOCATIONS */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900 mb-12 text-center">Serving Islamabad & Rawalpindi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200 text-center">
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Islamabad</h3>
              <p className="text-zinc-600 mb-6 flex-grow">
                We provide end-to-end solar installation services for residential and commercial properties throughout Islamabad.
              </p>
              <Link href="/solar-installation-islamabad" className="bg-zinc-900 text-white font-semibold py-3 px-6 rounded-md hover:bg-zinc-800 transition block">
                Solar Installation in Islamabad
              </Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200 text-center">
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Rawalpindi</h3>
              <p className="text-zinc-600 mb-6 flex-grow">
                Our installation team serves homeowners and businesses across Rawalpindi with reliable solar setups.
              </p>
              <Link href="/solar-installation-rawalpindi" className="bg-zinc-900 text-white font-semibold py-3 px-6 rounded-md hover:bg-zinc-800 transition block">
                Solar Installation in Rawalpindi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CASH OR INSTALLMENTS */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900 mb-12 text-center">Cash or Installments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-zinc-900 pl-6 bg-zinc-50 p-6 rounded-r-xl">
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Pay in Cash</h3>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                Customers can request an upfront or cash quotation based on their confirmed configuration requirements.
              </p>
              <Link href="/get-quote" className="text-zinc-900 font-bold underline hover:text-emerald-600 transition">
                Request Cash Quote
              </Link>
            </div>
            <div className="border-l-4 border-emerald-500 pl-6 bg-emerald-50 p-6 rounded-r-xl">
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Pay in Installments</h3>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                Customers can request available installment information. Eligibility, down payment, payment schedule, duration, and final terms are confirmed during quotation.
              </p>
              <Link href="/get-quote" className="text-emerald-700 font-bold underline hover:text-emerald-900 transition">
                Ask About Installments
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-emerald-700 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Get Started Today</h2>
          <p className="text-xl text-emerald-100 mb-10">
            Tell us about your property, electricity usage, and solar requirements. We'll use the information to prepare a quotation based on your requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/get-quote" className="bg-white text-emerald-800 font-bold px-8 py-4 rounded-md hover:bg-zinc-100 transition shadow-sm">
              Get Free Solar Quote
            </Link>
            <a href="https://wa.me/[WHATSAPP_NUMBER]" className="border border-emerald-400 bg-emerald-800 text-white font-bold px-8 py-4 rounded-md hover:bg-emerald-900 transition flex items-center justify-center gap-2">
              Chat on WhatsApp
            </a>
            <a href="tel:[PHONE_NUMBER]" className="border border-emerald-400 text-white font-bold px-8 py-4 rounded-md hover:bg-emerald-600 transition">
              Call Now
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: "Contact Us | Solar Company Islamabad & Rawalpindi",
  description: "Contact our solar installation team for services in Islamabad and Rawalpindi. Request a free solar quote, ask about system sizes, or discuss installment options.",
  keywords: "solar company Islamabad, solar company Rawalpindi, solar installation contact, solar quote Islamabad, solar quote Rawalpindi",
  alternates: { canonical: '/contact' },
  openGraph: {
    title: "Contact Us | Solar Company Islamabad & Rawalpindi",
    description: "Contact us for solar installation quotes in Islamabad & Rawalpindi.",
    url: '/contact',
    siteName: '[Business Name]',
    type: 'website',
  },
};

export default function ContactPage() {
  const faqs = [
    { question: "How can I request a solar quotation?", answer: "You can request a quotation by filling out the quote form on our website or by contacting us via WhatsApp or Phone." },
    { question: "Do you provide solar installation in Islamabad?", answer: "Yes, we provide solar installation services across Islamabad subject to site assessment." },
    { question: "Do you provide solar installation in Rawalpindi?", answer: "Yes, we serve residential and commercial properties in Rawalpindi." },
    { question: "Can I pay in cash?", answer: "Yes, you can request an upfront cash quotation based on your preferred system." },
    { question: "Can I request installment information?", answer: "Yes, customers can request details on installment availability. Final terms are confirmed during the quotation." },
    { question: "Do I need to know my required system size?", answer: "No, our team will help assess your required system size based on your electricity bills and usage patterns." },
    { question: "Can I send my electricity bill?", answer: "Yes, providing a recent electricity bill helps us generate an accurate system recommendation." },
    { question: "Do you provide residential and commercial solar installation?", answer: "Yes, we provide solutions for both homes and businesses." }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <div className="w-full flex flex-col bg-zinc-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* 1. HERO */}
      <section className="w-full bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8 text-center border-b-8 border-emerald-600">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: 'Contact Us', href: '/contact' }]} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Have questions about solar installation, system sizes, pricing, or payment options? Contact us or request a free quotation.
          </p>
        </div>
      </section>

      {/* 2. CONTACT OPTIONS */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="https://wa.me/[WHATSAPP_NUMBER]?text=Hello,%20I%20would%20like%20information%20about%20solar%20installation%20in%20Islamabad/Rawalpindi." target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-xl shadow-md border border-zinc-100 flex flex-col items-center text-center hover:-translate-y-1 transition duration-300">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            </div>
            <h3 className="font-bold text-zinc-900 mb-2 text-xl">Chat on WhatsApp</h3>
            <p className="text-zinc-600">[WHATSAPP_NUMBER]</p>
          </a>
          <a href="tel:[PHONE_NUMBER]" className="bg-white p-8 rounded-xl shadow-md border border-zinc-100 flex flex-col items-center text-center hover:-translate-y-1 transition duration-300">
            <div className="w-14 h-14 bg-zinc-100 text-zinc-700 rounded-full flex items-center justify-center mb-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            </div>
            <h3 className="font-bold text-zinc-900 mb-2 text-xl">Call Us</h3>
            <p className="text-zinc-600">[PHONE_NUMBER]</p>
          </a>
          <a href="mailto:[BUSINESS_EMAIL]" className="bg-white p-8 rounded-xl shadow-md border border-zinc-100 flex flex-col items-center text-center hover:-translate-y-1 transition duration-300">
            <div className="w-14 h-14 bg-zinc-100 text-zinc-700 rounded-full flex items-center justify-center mb-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <h3 className="font-bold text-zinc-900 mb-2 text-xl">Email Us</h3>
            <p className="text-zinc-600">[BUSINESS_EMAIL]</p>
          </a>
        </div>
      </section>

      {/* 3. QUOTE FORM / GET QUOTE SECTION */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-zinc-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900 mb-6">Need a formal quotation?</h2>
          <p className="text-zinc-600 text-lg mb-8 max-w-2xl mx-auto">Instead of a simple message, provide your detailed property information using our dedicated quote form for faster assessment.</p>
          <Link href="/get-quote" className="inline-block bg-zinc-900 text-white font-bold px-10 py-4 rounded-md hover:bg-zinc-800 transition shadow-sm">
            Get Your Free Solar Quote
          </Link>
        </div>
      </section>

      {/* 4. BEFORE YOU CONTACT US & SERVICE AREA */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm">
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">Before You Contact Us</h3>
            <p className="text-zinc-600 mb-6">To help us assist you efficiently, you can prepare the following information:</p>
            <ul className="space-y-3 text-zinc-700">
              <li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div> Approximate monthly electricity bill</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div> Property type (Home / Commercial)</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div> City and Area</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div> Preferred system size (if known)</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div> Preferred payment method (Cash/Installments)</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div> A copy of your recent electricity bill (if available)</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm flex flex-col justify-center text-center">
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">Service Area</h3>
            <div className="text-emerald-600 bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <p className="text-zinc-600 text-lg leading-relaxed">
              Solar installation services are strictly focused on <strong className="text-zinc-900">Islamabad</strong> and <strong className="text-zinc-900">Rawalpindi</strong>, Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* 5. SOLAR SERVICES LINKS */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900 mb-10 text-center">Explore Our Solar Services</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Solar Installation Islamabad", href: "/solar-installation-islamabad" },
              { label: "Solar Installation Rawalpindi", href: "/solar-installation-rawalpindi" },
              { label: "5kW Solar System", href: "/5kw-solar-system" },
              { label: "10kW Solar System", href: "/10kw-solar-system" },
              { label: "15kW Solar System", href: "/15kw-solar-system" },
              { label: "Hybrid Solar System", href: "/hybrid-solar-system" },
              { label: "On-Grid Solar System", href: "/on-grid-solar-system" },
              { label: "Solar System Price Islamabad", href: "/solar-system-price-islamabad" },
              { label: "Solar System Price Rawalpindi", href: "/solar-system-price-rawalpindi" },
              { label: "Solar on Installments", href: "/solar-on-installments" }
            ].map((link, i) => (
              <Link key={i} href={link.href} className="px-5 py-2.5 bg-zinc-100 text-zinc-700 rounded-full font-medium hover:bg-emerald-50 hover:text-emerald-700 transition border border-zinc-200">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900 mb-10 text-center">Frequently Asked Questions</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-emerald-700 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Ready to Discuss Your Solar Requirements?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/get-quote" className="bg-white text-emerald-800 font-bold px-8 py-4 rounded-md hover:bg-zinc-100 transition shadow-sm">
              Get Your Free Quote
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

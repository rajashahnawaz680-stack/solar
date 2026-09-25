import Link from 'next/link';
import type { Metadata } from 'next';

import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: "Solar Installation Islamabad & Rawalpindi | Solar KCKY",
  description: "Explore professional solar installation for your home or business in Islamabad and Rawalpindi. Cash and installment options available.",
  keywords: "Solar Installation Islamabad, Solar Installation Rawalpindi, Solar Company Islamabad, Solar Company Rawalpindi, Solar System Islamabad, Solar System Rawalpindi, Solar on Installments Islamabad, Solar on Installments Rawalpindi",
  alternates: { canonical: '/' },
  openGraph: {
    title: "Solar Installation in Islamabad & Rawalpindi",
    description: "Expert solar installation with cash and installment payment options in Islamabad and Rawalpindi.",
    url: '/',
    siteName: 'Solar KCKY',
    type: 'website',
  },
};

export default function Home() {
  const faqs = [
    { question: "How do I get a solar quotation?", answer: "You can easily request a quotation by filling out our free quote form online, messaging us on WhatsApp, or calling us. Our team will review your requirements and provide a customized proposal." },
    { question: "Do you provide solar installation in Islamabad?", answer: "Yes, we offer comprehensive solar installation services across Islamabad, subject to service availability and site assessment." },
    { question: "Do you provide solar installation in Rawalpindi?", answer: "Yes, our installation teams actively serve residential and commercial customers throughout Rawalpindi." },
    { question: "Can I purchase a solar system on installments?", answer: "Yes, we offer installment plans. Final eligibility, monthly payment schedules, and terms are confirmed during the quotation and approval process." },
    { question: "Can I pay for the system in cash?", answer: "Absolutely. We offer cash and upfront purchase options for all our solar systems based on your finalized quotation." },
    { question: "Which solar system size do I need?", answer: "The right system size depends on your monthly electricity consumption, property type, and energy goals. We typically recommend 5kW, 10kW, or 15kW systems based on a detailed assessment of your electricity bill." },
    { question: "Do I need to provide my electricity bill?", answer: "Providing your recent electricity bill is highly recommended. It allows our team to accurately size the solar system to meet your exact power requirements." },
    { question: "Do you install residential solar systems?", answer: "Yes, we provide end-to-end solar solutions designed specifically for homes, including on-grid and hybrid systems." },
    { question: "Do you install commercial solar systems?", answer: "Yes, we serve businesses with commercial-grade solar installations tailored to reduce dependency on grid electricity." },
    { question: "How does the installation process work?", answer: "The process begins with a site assessment, followed by system planning and quotation. Once the payment terms are finalized, we proceed with equipment selection, professional installation, and final testing before handover." },
  ];

  return (
    <div className="w-full flex flex-col bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full bg-zinc-950 py-24 md:py-32 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center overflow-hidden">
        {/* Abstract Background Placeholder for Solar Imagery */}
        
        
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <span className="text-emerald-400 font-semibold tracking-widest uppercase text-sm mb-6 border border-emerald-500/30 px-4 py-1.5 rounded-full bg-emerald-500/10">
            Serving Islamabad & Rawalpindi
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8">
            Solar Installation in <span className="text-emerald-500">Islamabad & Rawalpindi</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mb-12 leading-relaxed">
            Explore professional solar installation solutions tailored for your home and business. We offer both upfront cash purchases and flexible installment options, subject to confirmed terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <Link href="#quote" className="bg-emerald-600 text-white font-bold px-8 py-4 rounded-md hover:bg-emerald-700 transition text-lg w-full sm:w-auto text-center shadow-lg shadow-emerald-900/20">
              Get Your Free Solar Quote
            </Link>
            <a href="https://wa.me/03125634911?text=Hello,%20I%20am%20interested%20in%20solar%20installation%20in%20Islamabad/Rawalpindi.%20I%20would%20like%20to%20know%20about%20cash%20and%20installment%20options." target="_blank" rel="noopener noreferrer" className="bg-zinc-800 text-white font-bold px-8 py-4 rounded-md hover:bg-zinc-700 border border-zinc-700 transition text-lg flex items-center justify-center gap-3 w-full sm:w-auto">
              <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Chat on WhatsApp
            </a>
          </div>
          <div className="mt-8 text-zinc-400 font-medium">
            Or call us directly at <a href="tel:03125634911" className="text-white hover:text-emerald-400 transition">03125634911</a>
          </div>
        </div>
      </section>

      {/* 2. CASH + INSTALLMENT OPTIONS */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Flexible Purchase Options</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">Choose the payment method that best suits your financial goals and requirements.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Cash Card */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-zinc-200 flex flex-col h-full">
              <div className="w-14 h-14 bg-zinc-100 text-zinc-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Pay in Cash</h3>
              <p className="text-zinc-600 leading-relaxed mb-8 flex-grow">
                Customers can request a quotation for their selected solar system and proceed with an upfront payment according to the confirmed quotation and agreed payment terms.
              </p>
              <Link href="/get-quote" className="inline-flex justify-center items-center bg-zinc-900 text-white font-semibold px-6 py-3 rounded-md hover:bg-zinc-800 transition">
                Get Cash Quote
              </Link>
            </div>
            
            {/* Installment Card */}
            <div className="bg-emerald-50 p-10 rounded-2xl shadow-sm border border-emerald-100 flex flex-col h-full">
              <div className="w-14 h-14 bg-emerald-600 text-white rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Pay in Installments</h3>
              <p className="text-zinc-600 leading-relaxed mb-8 flex-grow">
                Customers can request information about available solar installment options. Final eligibility, payment schedules, down payments, and other terms are confirmed during the quotation process.
              </p>
              <Link href="/solar-on-installments" className="inline-flex justify-center items-center bg-emerald-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-emerald-700 transition shadow-sm">
                Explore Installments
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CONSIDER SOLAR */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Why Consider Solar Energy?</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">Educational insights on switching to solar for your property.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Reduce Grid Dependence", desc: "Generate your own electricity and reduce your reliance on traditional grid power." },
              { title: "Clean Energy Generation", desc: "Harness solar energy to generate electricity efficiently using modern technology." },
              { title: "Flexible System Options", desc: "Choose from On-Grid, Hybrid, and various kW capacities tailored to your needs." },
              { title: "Residential & Commercial", desc: "Professional solutions designed for both homes and large business properties." },
              { title: "Cash & Installment Purchasing", desc: "Flexible buying options including upfront cash payments and structured installments." },
              { title: "Professional Installation", desc: "End-to-end technical assessment, equipment selection, and careful installation." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-zinc-50 border border-zinc-100 rounded-xl">
                
                <h3 className="text-xl font-bold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SOLAR SYSTEM OPTIONS */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Solar System Options</h2>
              <p className="text-lg text-zinc-600 max-w-2xl">Explore our standard system sizes and topologies.</p>
            </div>
            <Link href="/get-quote" className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center gap-1">
              Need a custom size? Get a Quote <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { size: "5kW", link: "/5kw-solar-system", suitable: "Small homes & minimal appliances" },
              { size: "10kW", link: "/10kw-solar-system", suitable: "Medium homes & standard usage" },
              { size: "15kW", link: "/15kw-solar-system", suitable: "Large homes & commercial spaces" }
            ].map((sys, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition flex flex-col">
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">{sys.size} Solar System</h3>
                <p className="text-zinc-600 mb-6 flex-grow">A reliable solar setup. Suitable for: <span className="font-medium text-zinc-800">{sys.suitable}</span>.</p>
                <Link href={sys.link} className="text-center w-full py-3 bg-zinc-100 text-zinc-800 font-semibold rounded-md hover:bg-zinc-200 transition">
                  View Details
                </Link>
              </div>
            ))}
            
            <div className="bg-zinc-900 text-white p-8 rounded-xl shadow-sm flex flex-col lg:col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-2">Hybrid Solar System</h3>
              <p className="text-zinc-400 mb-6 flex-grow">Includes battery storage support for usage during grid outages.</p>
              <Link href="/hybrid-solar-system" className="text-center w-full py-3 bg-emerald-600 text-white font-semibold rounded-md hover:bg-emerald-700 transition">
                View Hybrid Systems
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm flex flex-col lg:col-span-2 md:col-span-2">
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">On-Grid Solar System</h3>
              <p className="text-zinc-600 mb-6 flex-grow">Connects directly to the grid without battery storage, often used for net-metering setups where applicable.</p>
              <Link href="/on-grid-solar-system" className="text-center w-full md:w-auto px-6 py-3 bg-zinc-100 text-zinc-800 font-semibold rounded-md hover:bg-zinc-200 transition self-start">
                View On-Grid Systems
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SOLAR INSTALLATION SERVICES */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-zinc-900 mb-10">Our Services</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Residential Solar Installation", link: "/solar-installation-islamabad" },
              { name: "Commercial Solar Installation", link: "/solar-installation-rawalpindi" },
              { name: "Solar Panel Installation", link: "/about" },
              { name: "On-Grid Solar Systems", link: "/on-grid-solar-system" },
              { name: "Hybrid Solar Systems", link: "/hybrid-solar-system" },
              { name: "Solar System Quotation", link: "/get-quote" },
              { name: "Solar on Installments", link: "/solar-on-installments" }
            ].map((service, i) => (
              <Link key={i} href={service.link} className="px-6 py-3 rounded-full border border-zinc-200 text-zinc-700 font-medium hover:border-emerald-500 hover:text-emerald-700 hover:bg-emerald-50 transition">
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ISLAMABAD + RAWALPINDI SERVICE AREAS */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Solar Installation in Islamabad & Rawalpindi</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">Dedicated local service and support across the twin cities.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-zinc-800 border border-zinc-700 p-10 rounded-2xl flex flex-col items-center text-center">
              <svg className="w-12 h-12 text-emerald-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <h3 className="text-2xl font-bold mb-4">Islamabad</h3>
              <p className="text-zinc-300 mb-8 leading-relaxed">
                We provide professional solar installation services for residential and commercial customers across Islamabad, subject to service availability.
              </p>
              <Link href="/solar-installation-islamabad" className="bg-white text-zinc-900 font-bold px-6 py-3 rounded-md hover:bg-zinc-200 transition w-full">
                Solar Installation Islamabad
              </Link>
            </div>
            <div className="bg-zinc-800 border border-zinc-700 p-10 rounded-2xl flex flex-col items-center text-center">
              <svg className="w-12 h-12 text-emerald-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <h3 className="text-2xl font-bold mb-4">Rawalpindi</h3>
              <p className="text-zinc-300 mb-8 leading-relaxed">
                We provide professional solar installation services for residential and commercial customers across Rawalpindi, subject to service availability.
              </p>
              <Link href="/solar-installation-rawalpindi" className="bg-white text-zinc-900 font-bold px-6 py-3 rounded-md hover:bg-zinc-200 transition w-full">
                Solar Installation Rawalpindi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HOW IT WORKS */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">How It Works</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">Our clear, 5-step process from inquiry to installation.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Tell Us About Your Property", desc: "Submit basic information and electricity usage." },
              { step: "02", title: "Review Your Requirements", desc: "Our team carefully reviews your submitted information." },
              { step: "03", title: "Receive Your Solar Quote", desc: "Receive a system proposal based on confirmed requirements." },
              { step: "04", title: "Choose Cash or Installment", desc: "Select the applicable payment option based on terms." },
              { step: "05", title: "Installation", desc: "After confirmation, the installation process is scheduled." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm relative pt-12">
                <div className="absolute top-0 left-6 -translate-y-1/2 w-12 h-12 bg-emerald-600 text-white font-bold text-xl rounded-full flex items-center justify-center border-4 border-zinc-50">
                  {item.step}
                </div>
                <h4 className="font-bold text-zinc-900 mb-2">{item.title}</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FREE SOLAR QUOTE SECTION */}
      <section id="quote" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Get Your Free Solar Quote</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">Tell us about your electricity usage and property, and our team can help you explore a suitable solar solution.</p>
          </div>
          
          
        </div>
      </section>

      {/* 9. WHATSAPP CTA */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-emerald-50 border-b border-emerald-100 flex justify-center">
        <div className="max-w-4xl w-full bg-white rounded-2xl shadow-sm border border-emerald-200 p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 mb-2">Have Questions About Solar?</h2>
            <p className="text-zinc-600 text-lg">Our team is ready to answer your questions via WhatsApp.</p>
          </div>
          <a href="https://wa.me/03125634911?text=Hello,%20I%20am%20interested%20in%20solar%20installation%20in%20Islamabad/Rawalpindi.%20I%20would%20like%20to%20know%20about%20cash%20and%20installment%20options." target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-emerald-600 text-white font-bold px-8 py-4 rounded-md hover:bg-emerald-700 transition shadow-md flex items-center gap-3">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* 10. INSTALLATION PROCESS */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Professional Installation Process</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">A structured approach to ensure safe and proper solar setup.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {['Site Assessment', 'System Planning', 'Equipment Selection', 'Installation', 'Testing & Handover'].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 border border-zinc-100 rounded-xl bg-zinc-50">
                <div className="w-10 h-10 bg-zinc-200 text-zinc-600 font-bold rounded-full flex items-center justify-center mb-4">{idx + 1}</div>
                <h4 className="font-bold text-zinc-900">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. PROJECTS / WORK */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Our Solar Projects</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">A glimpse into our recent installations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 
              DEVELOPER NOTE:
              Insert verified project data and real images here. 
              Do not use fake project sizes or locations.
            */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl overflow-hidden shadow-sm border border-zinc-200">
                <div className="w-full h-48 bg-zinc-200 flex items-center justify-center text-zinc-400">
                  [Project Image Placeholder]
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-zinc-900 mb-2">[Project Name / Size]</h4>
                  <p className="text-zinc-600 text-sm">[Factual project description and location placeholder]</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. TRUST SECTION */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="text-emerald-600 font-bold text-xl mb-2">Islamabad & Rawalpindi</span>
              <span className="text-zinc-600 text-sm">Dedicated Service Area</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-emerald-600 font-bold text-xl mb-2">Cash & Installments</span>
              <span className="text-zinc-600 text-sm">Flexible Options</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-emerald-600 font-bold text-xl mb-2">Quote-Based</span>
              <span className="text-zinc-600 text-sm">Custom System Recommendations</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-emerald-600 font-bold text-xl mb-2">Customer Support</span>
              <span className="text-zinc-600 text-sm">Professional Assistance</span>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FAQ SECTION */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* 14. FINAL CTA */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Explore Solar for Your Property?</h2>
          <p className="text-xl text-zinc-400 mb-10">Request a quotation for your home or business in Islamabad or Rawalpindi.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            <Link href="/get-quote" className="bg-emerald-600 text-white font-bold px-8 py-4 rounded-md hover:bg-emerald-700 transition text-lg w-full sm:w-auto">
              Get Your Free Solar Quote
            </Link>
            <a href="https://wa.me/03125634911" target="_blank" rel="noopener noreferrer" className="border border-zinc-600 text-white font-bold px-8 py-4 rounded-md hover:bg-zinc-800 transition text-lg w-full sm:w-auto flex items-center justify-center gap-2">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

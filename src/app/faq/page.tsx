import Link from 'next/link';

export const metadata = {
  title: 'Frequently Asked Questions | SUNORA ENERGY',
  description: 'Comprehensive answers regarding solar system sizing, installation, on-grid vs hybrid, pricing, and maintenance in Islamabad and Rawalpindi.'
};

export default function FAQPage() {
  const faqs = [
    {
      category: "System Sizing & Types",
      questions: [
        { q: "What is the difference between On-Grid and Hybrid?", a: "On-grid systems are connected directly to the utility grid and do not use batteries; they are highly cost-effective but turn off during load shedding. Hybrid systems include battery storage, allowing you to have power during outages." },
        { q: "How do I know if I need a 5kW or 10kW system?", a: "A 5kW system is typically sufficient for standard homes running basic appliances and maybe 1-2 ACs. A 10kW system is ideal for larger homes or small offices running multiple ACs and heavy loads. Our calculator provides a quick estimate based on your bill." }
      ]
    },
    {
      category: "Installation & Service",
      questions: [
        { q: "Where do you provide installation services?", a: "We primarily serve Islamabad and Rawalpindi, covering major areas like DHA, Bahria Town, and all central sectors." },
        { q: "How long does installation take?", a: "Once the site assessment and design are finalized, the physical installation of standard residential systems typically takes 2-4 days depending on the property layout." }
      ]
    },
    {
      category: "Pricing & Payments",
      questions: [
        { q: "Do you offer installment plans?", a: "Yes, we support both upfront cash payments and installment options where supported. Please indicate your preference in the quote form to discuss available plans." },
        { q: "Are there hidden costs?", a: "No. Our proposals outline all costs upfront including equipment, mounting hardware, wiring, and installation labor." }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B0F0E] mb-6 tracking-tight">Frequently Asked Questions</h1>
          <p className="text-xl text-slate-600">Everything you need to know about transitioning to solar.</p>
        </div>

        <div className="space-y-16">
          {faqs.map((group, i) => (
            <div key={i}>
               <h2 className="text-2xl font-bold text-[#0B0F0E] mb-6 border-b border-slate-200 pb-3">{group.category}</h2>
               <div className="space-y-4">
                 {group.questions.map((faq, j) => (
                   <details key={j} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 cursor-pointer group">
                     <summary className="font-bold text-lg text-[#0B0F0E] flex justify-between items-center outline-none">
                       {faq.q}
                       <svg className="w-5 h-5 text-[#9dbf2c] transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                     </summary>
                     <p className="mt-4 text-slate-600 leading-relaxed">{faq.a}</p>
                   </details>
                 ))}
               </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-[#0B0F0E] rounded-3xl p-10 text-white shadow-xl">
           <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
           <p className="text-slate-300 mb-8">Our solar experts are ready to discuss your specific requirements.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="/get-quote" className="bg-[#B8D83D] text-[#0B0F0E] font-bold px-8 py-3 rounded-xl hover:bg-[#9dbf2c] transition-colors">Request a Quote</Link>
             <a href="https://wa.me/923125634911" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold px-8 py-3 rounded-xl hover:bg-[#20b858] transition-colors flex items-center justify-center">
               WhatsApp Us
             </a>
           </div>
        </div>
      </div>
    </main>
  );
}

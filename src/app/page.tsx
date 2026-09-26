import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* 2. HERO SECTION */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center overflow-hidden bg-[#0B0F0E]">
        <img src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=1920&q=80" alt="Modern rooftop solar in Islamabad" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F0E] via-[#0B0F0E]/80 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16">
           <div className="max-w-3xl">
             <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">Power Your Home With Smarter Solar</h1>
             <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
               Customized solar solutions designed around your actual electricity usage. Cash and installment options available. Serving Rawalpindi & Islamabad.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 mb-12">
               <Link href="/quote" className="bg-[#B8D83D] text-[#0B0F0E] font-bold px-8 py-4 rounded-xl hover:bg-[#9dbf2c] transition-colors shadow-lg text-center text-lg">
                 Get My Solar Plan
               </Link>
               <a href="https://wa.me/923125634911" target="_blank" rel="noopener noreferrer" className="bg-[#183C32] text-white border border-[#1c473b] font-bold px-8 py-4 rounded-xl hover:bg-[#1c473b] transition-colors text-center text-lg flex items-center justify-center">
                 <svg className="w-5 h-5 mr-2 text-[#B8D83D]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/></svg>
                 Chat on WhatsApp
               </a>
             </div>
             
             {/* 3. TRUST/VALUE POINTS */}
             <div className="flex flex-wrap gap-4 text-sm text-gray-300 font-medium">
                <span className="flex items-center"><svg className="w-4 h-4 mr-2 text-[#B8D83D]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg> Custom System Design</span>
                <span className="flex items-center"><svg className="w-4 h-4 mr-2 text-[#B8D83D]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg> Cash & Installment Options</span>
                <span className="flex items-center"><svg className="w-4 h-4 mr-2 text-[#B8D83D]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg> Professional Consultation</span>
                <span className="flex items-center"><svg className="w-4 h-4 mr-2 text-[#B8D83D]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg> Rawalpindi & Islamabad</span>
             </div>
           </div>
        </div>
      </section>

      {/* 4. WHY SOLAR */}
      <section className="py-24 bg-[#F5F6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-extrabold text-[#0B0F0E] mb-4">Why More Homeowners Are Switching to Solar</h2>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto">Protect yourself from rising utility costs with a professionally designed solar energy system.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {title: 'Lower Electricity Costs', desc: 'Use solar generation to reduce dependence on expensive grid electricity.'},
                {title: 'Energy Independence', desc: 'Generate more of your own electricity from your rooftop.'},
                {title: 'Backup Options', desc: 'Choose a system designed around your backup requirements.'},
                {title: 'Flexible Payment', desc: 'Choose between cash payment and available installment options.'}
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
                   <div className="w-12 h-12 bg-[#B8D83D]/20 text-[#183C32] rounded-xl flex items-center justify-center mb-6">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                   </div>
                   <h3 className="text-xl font-bold text-[#0B0F0E] mb-3">{item.title}</h3>
                   <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 5. SOLAR SOLUTIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-extrabold text-[#0B0F0E] mb-4">Solar Solutions</h2>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto">Professional solar architectures designed for specific energy requirements.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {title: 'Residential Solar', desc: 'For homes, villas and residential properties.', img: 'https://images.unsplash.com/photo-1509391366360-51590d6350f5?auto=format&fit=crop&w=800&q=80', href: '/quote'},
                {title: 'Commercial Solar', desc: 'For offices, shops, businesses and commercial buildings.', img: 'https://images.unsplash.com/photo-1508514177221-188b1c77eca2?auto=format&fit=crop&w=800&q=80', href: '/quote'},
                {title: 'Hybrid Solar', desc: 'For customers who need solar generation plus backup.', img: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80', href: '/quote'},
                {title: 'Solar + Battery', desc: 'For backup and energy-storage requirements.', img: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80', href: '/quote'},
                {title: 'Net Metering Assistance', desc: 'Help customers understand and proceed with the relevant process.', img: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80', href: '/quote'},
                {title: 'Solar Consultation', desc: 'Customized guidance based on electricity usage, roof and budget.', img: 'https://images.unsplash.com/photo-1584279585671-06797cc2fbf5?auto=format&fit=crop&w=800&q=80', href: '/quote'}
              ].map((item, i) => (
                <Link key={i} href={item.href} className="group block relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-[320px]">
                  <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E]/90 via-[#0B0F0E]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{item.desc}</p>
                    <span className="text-[#B8D83D] font-bold text-sm tracking-wider uppercase group-hover:text-white transition-colors">Explore Solution &rarr;</span>
                  </div>
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* 6. INTERACTIVE SELECTOR */}
      <section className="py-24 bg-[#0B0F0E] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
           <h2 className="text-4xl font-extrabold mb-8">What are you trying to achieve?</h2>
           <div className="flex flex-wrap justify-center gap-4 mb-12">
             <button className="px-6 py-3 rounded-full border border-gray-700 hover:border-[#B8D83D] hover:text-[#B8D83D] transition-colors font-medium">Reduce my electricity bill</button>
             <button className="px-6 py-3 rounded-full border border-gray-700 hover:border-[#B8D83D] hover:text-[#B8D83D] transition-colors font-medium">Reduce grid dependency</button>
             <button className="px-6 py-3 rounded-full border border-gray-700 hover:border-[#B8D83D] hover:text-[#B8D83D] transition-colors font-medium">Get backup during outages</button>
             <button className="px-6 py-3 rounded-full border border-gray-700 hover:border-[#B8D83D] hover:text-[#B8D83D] transition-colors font-medium">Power my business</button>
           </div>
           <div className="bg-[#183C32] p-8 rounded-3xl border border-[#1c473b] max-w-2xl mx-auto">
              <p className="text-xl mb-6 text-gray-200">Based on your selection, a customized consultation is the next step to design the perfect architecture.</p>
              <Link href="/quote" className="inline-block bg-[#B8D83D] text-[#0B0F0E] font-bold px-8 py-4 rounded-xl hover:bg-[#9dbf2c] transition-colors shadow-lg">Build My Solar Plan</Link>
           </div>
        </div>
      </section>

      {/* 8. CASH VS INSTALLMENT */}
      <section className="py-24 bg-[#F5F6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-extrabold text-[#0B0F0E] mb-4">Choose the Payment Option That Works for You</h2>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto">We offer flexible approaches to help you transition to solar energy smoothly.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 flex flex-col">
                 <h3 className="text-3xl font-extrabold text-[#0B0F0E] mb-6">CASH PAYMENT</h3>
                 <ul className="space-y-4 mb-8 flex-grow">
                   <li className="flex items-start"><svg className="w-6 h-6 text-[#B8D83D] mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg> <span className="text-gray-600">Direct purchase option</span></li>
                   <li className="flex items-start"><svg className="w-6 h-6 text-[#B8D83D] mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg> <span className="text-gray-600">Customized system quotation</span></li>
                   <li className="flex items-start"><svg className="w-6 h-6 text-[#B8D83D] mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg> <span className="text-gray-600">System designed according to requirements</span></li>
                 </ul>
                 <Link href="/quote" className="w-full block text-center bg-[#0B0F0E] text-white font-bold px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors">Request Cash Quote</Link>
              </div>
              <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 flex flex-col relative overflow-hidden">
                 <div className="absolute top-0 right-0 bg-[#B8D83D] text-[#0B0F0E] text-xs font-bold px-4 py-1 rounded-bl-xl">POPULAR</div>
                 <h3 className="text-3xl font-extrabold text-[#0B0F0E] mb-6">INSTALLMENT PLAN</h3>
                 <ul className="space-y-4 mb-8 flex-grow">
                   <li className="flex items-start"><svg className="w-6 h-6 text-[#B8D83D] mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg> <span className="text-gray-600">Flexible payment option</span></li>
                   <li className="flex items-start"><svg className="w-6 h-6 text-[#B8D83D] mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg> <span className="text-gray-600">Customized according to eligibility</span></li>
                   <li className="flex items-start"><svg className="w-6 h-6 text-[#B8D83D] mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg> <span className="text-gray-600">Discuss your requirements with our team</span></li>
                 </ul>
                 <Link href="/quote" className="w-full block text-center bg-[#B8D83D] text-[#0B0F0E] font-bold px-8 py-4 rounded-xl hover:bg-[#9dbf2c] transition-colors shadow-md">Ask About Installments</Link>
              </div>
           </div>
        </div>
      </section>

      {/* 11. HOW IT WORKS / SOLAR PROCESS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-extrabold text-[#0B0F0E] mb-4">A Transparent Solar Process</h2>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto">From consultation to activation, we handle everything professionally.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {num: '01', title: 'Tell Us Your Requirements', desc: 'Share your electricity usage, property details and goals.'},
                {num: '02', title: 'Site & Requirement Review', desc: 'Understand the roof, load and solar requirements.'},
                {num: '03', title: 'Customized Solar Plan', desc: 'Prepare the recommended system and quotation.'},
                {num: '04', title: 'Installation & Support', desc: 'Move forward with installation and relevant support.'}
              ].map((step, i) => (
                <div key={i} className="relative text-center">
                   <div className="w-16 h-16 mx-auto bg-[#F5F6F1] text-[#183C32] rounded-full flex items-center justify-center font-extrabold text-2xl border-4 border-white shadow-lg mb-6 z-10 relative">{step.num}</div>
                   <h3 className="font-bold text-xl text-[#0B0F0E] mb-2">{step.title}</h3>
                   <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 16. PLANNING CONSULTATION CTA */}
      <section className="py-24 bg-[#183C32] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-4xl font-extrabold mb-6">Planning Your Solar Setup?</h2>
           <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">We don&apos;t sell generic boxes. We engineer custom architectures for homes and businesses in Islamabad & Rawalpindi.</p>
           <Link href="/quote" className="inline-block bg-[#B8D83D] text-[#0B0F0E] font-bold px-10 py-4 rounded-xl hover:bg-[#9dbf2c] transition-colors shadow-xl">Start My Solar Consultation</Link>
        </div>
      </section>

      {/* 13. FAQ */}
      <section className="py-24 bg-[#F5F6F1]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
           <h2 className="text-4xl font-extrabold text-[#0B0F0E] text-center mb-12">Frequently Asked Questions</h2>
           <div className="space-y-4">
             {[
               {q: 'How do I know what size solar system I need?', a: 'Your system size is determined by analyzing your monthly electricity bill, available roof space, and backup goals during our consultation process.'},
               {q: 'Can I pay in installments?', a: 'Yes, we offer flexible installment options for eligible solar projects. Contact us to discuss your specific plan.'},
               {q: 'Do you serve Rawalpindi and Islamabad?', a: 'Yes, we provide dedicated engineering, installation, and maintenance services across Rawalpindi, Islamabad, and surrounding areas.'}
             ].map((faq, i) => (
               <details key={i} className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer">
                 <summary className="font-bold text-[#0B0F0E] list-none flex justify-between items-center">
                   {faq.q}
                   <span className="text-[#B8D83D] group-open:rotate-180 transition-transform"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></span>
                 </summary>
                 <p className="text-gray-600 mt-4 leading-relaxed">{faq.a}</p>
               </details>
             ))}
           </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}

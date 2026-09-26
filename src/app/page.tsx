import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F6F1] font-sans text-[#0B0F0E]">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden bg-[#0B0F0E]">
        <img src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=1920&q=80" alt="Turn Your Rooftop Into Your Own Power Source" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F0E] via-[#0B0F0E]/80 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
           <div className="max-w-3xl">
             <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
               Turn Your Rooftop Into Your Own Power Source
             </h1>
             <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
               Explore a solar solution designed around your electricity usage, property and energy goals — with cash and installment options available.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 mb-10">
               <Link href="/quote" className="bg-[#B8D83D] text-[#0B0F0E] font-bold px-8 py-4 rounded-xl hover:bg-[#9dbf2c] transition-colors shadow-lg text-center text-lg">
                 Build My Solar Plan
               </Link>
               <a href="https://wa.me/923125634911" target="_blank" rel="noopener noreferrer" className="bg-transparent border border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-[#0B0F0E] transition-all text-center text-lg flex items-center justify-center">
                 <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/></svg>
                 Talk on WhatsApp
               </a>
             </div>
             
             <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400 font-medium tracking-wide uppercase">
                <span>Residential</span>
                <span className="text-[#B8D83D]">&bull;</span>
                <span>Commercial</span>
                <span className="text-[#B8D83D]">&bull;</span>
                <span>Cash & Installment Options</span>
                <span className="text-[#B8D83D]">&bull;</span>
                <span>Rawalpindi & Islamabad</span>
             </div>
           </div>
        </div>
      </section>

      {/* 2. IS SOLAR RIGHT FOR YOU? */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl md:text-5xl font-extrabold mb-12">First, Tell Us What You Want From Solar</h2>
           <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['Reduce Electricity Bills', 'Backup During Outages', 'Reduce Grid Dependence', 'Power a Business', 'I Need Expert Guidance'].map((goal, idx) => (
                <Link key={idx} href="/quote" className="group px-8 py-6 rounded-2xl border-2 border-gray-100 bg-[#F5F6F1] hover:border-[#B8D83D] hover:bg-white transition-all text-lg font-bold text-gray-600 hover:text-[#0B0F0E] shadow-sm hover:shadow-md">
                   {goal}
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* 3. SOLAR GOALS (Editorial) */}
      <section className="py-24 bg-[#F5F6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Solar Should Be Designed Around Your Life — Not Just a System Size</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group">
                 <img src="https://images.unsplash.com/photo-1509391366360-51590d6350f5?auto=format&fit=crop&w=800&q=80" alt="Home Solar" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3">HOME</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">Comfortable home energy powered directly by your rooftop.</p>
                    <Link href="/solar-solutions/residential" className="text-[#B8D83D] font-bold tracking-wide uppercase text-sm border-b-2 border-[#B8D83D] pb-1 hover:text-[#0B0F0E] hover:border-[#0B0F0E] transition-colors">Learn More</Link>
                 </div>
              </div>
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group">
                 <img src="https://images.unsplash.com/photo-1508514177221-188b1c77eca2?auto=format&fit=crop&w=800&q=80" alt="Business Solar" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3">BUSINESS</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">Reliable commercial power to protect your operational margins.</p>
                    <Link href="/solar-solutions/commercial" className="text-[#B8D83D] font-bold tracking-wide uppercase text-sm border-b-2 border-[#B8D83D] pb-1 hover:text-[#0B0F0E] hover:border-[#0B0F0E] transition-colors">Learn More</Link>
                 </div>
              </div>
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group">
                 <img src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80" alt="Backup Solar" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3">BACKUP</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">Energy when the grid goes down, keeping critical appliances running.</p>
                    <Link href="/services/battery-storage" className="text-[#B8D83D] font-bold tracking-wide uppercase text-sm border-b-2 border-[#B8D83D] pb-1 hover:text-[#0B0F0E] hover:border-[#0B0F0E] transition-colors">Learn More</Link>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. SOLAR SOLUTIONS (Two-Column) */}
      <section className="py-24 bg-white border-y border-gray-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
            {/* Residential */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=1000&q=80" alt="Residential Solar" className="w-full h-[500px] object-cover" />
               </div>
               <div>
                  <h2 className="text-4xl font-extrabold mb-6">Residential Solar</h2>
                  <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                     Transform your home&apos;s energy profile with a custom rooftop solar architecture. 
                  </p>
                  <ul className="space-y-3 mb-8">
                     <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-[#B8D83D] rounded-full mr-3"></span> Electricity usage assessment</li>
                     <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-[#B8D83D] rounded-full mr-3"></span> System planning</li>
                     <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-[#B8D83D] rounded-full mr-3"></span> Optional backup integration</li>
                     <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-[#B8D83D] rounded-full mr-3"></span> Professional consultation</li>
                  </ul>
                  <Link href="/solar-solutions/residential" className="inline-block bg-[#0B0F0E] text-white font-bold px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors">Explore Residential Solar</Link>
               </div>
            </div>
            {/* Commercial */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="order-2 lg:order-1">
                  <h2 className="text-4xl font-extrabold mb-6">Commercial Solar</h2>
                  <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                     Protect your business margins from rising utility costs with robust commercial-scale solar systems.
                  </p>
                  <ul className="space-y-3 mb-8">
                     <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-[#B8D83D] rounded-full mr-3"></span> High-capacity rooftop integration</li>
                     <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-[#B8D83D] rounded-full mr-3"></span> Operational load analysis</li>
                     <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-[#B8D83D] rounded-full mr-3"></span> ROI and payback modeling</li>
                     <li className="flex items-center text-gray-700"><span className="w-2 h-2 bg-[#B8D83D] rounded-full mr-3"></span> Scalable architectures</li>
                  </ul>
                  <Link href="/solar-solutions/commercial" className="inline-block bg-[#0B0F0E] text-white font-bold px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors">Explore Commercial Solar</Link>
               </div>
               <div className="rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
                  <img src="https://images.unsplash.com/photo-1548614606-52b4451f994b?auto=format&fit=crop&w=1000&q=80" alt="Commercial Solar" className="w-full h-[500px] object-cover" />
               </div>
            </div>
         </div>
      </section>

      {/* 5. SYSTEM COMPONENTS */}
      <section className="py-24 bg-[#0B0F0E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-extrabold mb-4">Understand Your Solar System</h2>
             <p className="text-xl text-gray-400">Click a component to learn how it powers your property.</p>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {['Solar Panels', 'Inverter', 'Mounting Structure', 'Protection', 'Battery', 'Monitoring'].map((comp, idx) => (
                 <Link key={idx} href="/how-it-works" className="bg-[#183C32] border border-[#1c473b] p-6 rounded-2xl text-center hover:bg-[#B8D83D] hover:text-[#0B0F0E] transition-colors group">
                    <h4 className="font-bold">{comp}</h4>
                    <span className="text-xs font-medium uppercase tracking-widest text-[#B8D83D] group-hover:text-[#0B0F0E] mt-2 block opacity-0 group-hover:opacity-100 transition-opacity">Learn More</span>
                 </Link>
              ))}
           </div>
        </div>
      </section>

      {/* 6. ELECTRICITY BILL CONSULTATION */}
      <section className="py-24 bg-[#F5F6F1]">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-extrabold mb-6">Your Electricity Bill Is the Starting Point</h2>
            <p className="text-lg text-gray-600 mb-12">Select your average monthly bill to begin sizing your custom solar architecture.</p>
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
               <div className="flex flex-wrap justify-center gap-4 mb-8">
                 {['Under Rs 15,000', 'Rs 15,000–30,000', 'Rs 30,000–50,000', 'Rs 50,000+', 'Not Sure'].map((bill, i) => (
                   <div key={i} className="px-6 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 text-gray-600 font-bold hover:border-[#B8D83D] hover:text-[#0B0F0E] cursor-pointer transition-colors">{bill}</div>
                 ))}
               </div>
               <Link href="/quote" className="inline-block bg-[#B8D83D] text-[#0B0F0E] font-bold px-12 py-4 rounded-xl hover:bg-[#9dbf2c] transition-colors shadow-lg">
                 Build My Solar Plan
               </Link>
            </div>
         </div>
      </section>

      {/* 7. CASH VS INSTALLMENT */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-extrabold text-[#0B0F0E] mb-4">Choose the Payment Approach That Fits You</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              <div className="bg-[#F5F6F1] p-10 rounded-3xl shadow-sm border border-gray-200 flex flex-col">
                 <h3 className="text-3xl font-extrabold text-[#0B0F0E] mb-6">CASH</h3>
                 <p className="text-lg font-medium text-gray-700 mb-6">Purchase your customized solar solution directly.</p>
                 <ul className="space-y-4 mb-8 flex-grow">
                   <li className="flex items-center"><span className="w-2 h-2 bg-[#0B0F0E] rounded-full mr-3"></span> <span className="text-gray-600">Customized proposal</span></li>
                   <li className="flex items-center"><span className="w-2 h-2 bg-[#0B0F0E] rounded-full mr-3"></span> <span className="text-gray-600">System designed around requirements</span></li>
                   <li className="flex items-center"><span className="w-2 h-2 bg-[#0B0F0E] rounded-full mr-3"></span> <span className="text-gray-600">Consultation before final quotation</span></li>
                 </ul>
                 <Link href="/quote" className="w-full block text-center bg-[#0B0F0E] text-white font-bold px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors">Request Cash Quote</Link>
              </div>
              <div className="bg-[#183C32] text-white p-10 rounded-3xl shadow-xl border border-[#1c473b] flex flex-col relative">
                 <h3 className="text-3xl font-extrabold text-white mb-6">INSTALLMENT</h3>
                 <p className="text-lg font-medium text-gray-300 mb-6">Explore a payment plan based on your requirements.</p>
                 <ul className="space-y-4 mb-8 flex-grow">
                   <li className="flex items-center"><span className="w-2 h-2 bg-[#B8D83D] rounded-full mr-3"></span> <span className="text-gray-300">Discuss eligibility</span></li>
                   <li className="flex items-center"><span className="w-2 h-2 bg-[#B8D83D] rounded-full mr-3"></span> <span className="text-gray-300">Customized proposal</span></li>
                   <li className="flex items-center"><span className="w-2 h-2 bg-[#B8D83D] rounded-full mr-3"></span> <span className="text-gray-300">Payment-plan discussion</span></li>
                 </ul>
                 <Link href="/quote" className="w-full block text-center bg-[#B8D83D] text-[#0B0F0E] font-bold px-8 py-4 rounded-xl hover:bg-[#9dbf2c] transition-colors">Ask About Installments</Link>
              </div>
           </div>
           <div className="text-center">
             <p className="text-gray-600 font-medium mb-4">Want to compare both options?</p>
             <Link href="/quote" className="inline-block border-2 border-[#0B0F0E] text-[#0B0F0E] font-bold px-8 py-3 rounded-xl hover:bg-[#0B0F0E] hover:text-white transition-colors">Compare My Options</Link>
           </div>
        </div>
      </section>

      {/* 8. WHY OUR APPROACH */}
      <section className="py-24 bg-[#0B0F0E] text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold mb-16 text-center">Why Our Approach Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
               {[
                 {title: 'Requirement-Based Planning', desc: 'We start with your electricity needs.'},
                 {title: 'Clear Communication', desc: 'Understand the system before making a decision.'},
                 {title: 'Flexible Payment Discussion', desc: 'Cash and installment options can be discussed.'},
                 {title: 'Local Focus', desc: 'Serving Rawalpindi & Islamabad.'},
                 {title: 'Visual System Planning', desc: 'Understand the major components of your solar setup.'},
                 {title: 'Direct Support', desc: 'Reach us directly through phone or WhatsApp.'}
               ].map((item, idx) => (
                  <div key={idx} className="border-t border-gray-700 pt-6">
                     <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                     <p className="text-gray-400">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 9. HOW IT WORKS TIMELINE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-4xl font-extrabold text-center mb-16 text-[#0B0F0E]">How the Process Works</h2>
           <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                {num: '01', title: 'Tell Us Your Requirements'},
                {num: '02', title: 'Review Your Electricity Usage'},
                {num: '03', title: 'Discuss Your Solar Options'},
                {num: '04', title: 'Receive Customized Proposal'},
                {num: '05', title: 'Move Forward With Installation'}
              ].map((step, i) => (
                 <div key={i} className="text-center relative">
                    <div className="text-5xl font-extrabold text-[#F5F6F1] mb-4 stroke-text-dark">{step.num}</div>
                    <div className="w-4 h-4 bg-[#B8D83D] rounded-full mx-auto mb-4 relative z-10"></div>
                    <h3 className="font-bold text-[#0B0F0E]">{step.title}</h3>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* 10. SOLAR EDUCATION */}
      <section className="py-24 bg-[#F5F6F1]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-center mb-16 text-[#0B0F0E]">Understanding Your Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <Link href="/solar-solutions/on-grid" className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-gray-200">
                  <h3 className="text-2xl font-bold text-[#0B0F0E] mb-4">ON-GRID SOLAR</h3>
                  <p className="text-gray-600 mb-6">What it means and when it may be suitable for your property.</p>
                  <span className="text-[#B8D83D] font-bold border-b border-[#B8D83D]">Read More</span>
               </Link>
               <Link href="/solar-solutions/hybrid" className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-gray-200">
                  <h3 className="text-2xl font-bold text-[#0B0F0E] mb-4">HYBRID SOLAR</h3>
                  <p className="text-gray-600 mb-6">Solar generation plus reliable backup capabilities.</p>
                  <span className="text-[#B8D83D] font-bold border-b border-[#B8D83D]">Read More</span>
               </Link>
               <Link href="/services/battery-storage" className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-gray-200">
                  <h3 className="text-2xl font-bold text-[#0B0F0E] mb-4">BATTERY STORAGE</h3>
                  <p className="text-gray-600 mb-6">How battery backup can support energy availability when you need it.</p>
                  <span className="text-[#B8D83D] font-bold border-b border-[#B8D83D]">Read More</span>
               </Link>
            </div>
         </div>
      </section>

      {/* 11. NO PROJECTS SECTION -> PLANNING CONSULTATION CTA */}
      <section className="relative py-32 bg-[#0B0F0E] flex items-center justify-center">
         <img src="https://images.unsplash.com/photo-1509391366360-51590d6350f5?auto=format&fit=crop&w=1920&q=80" alt="Solar Consultation" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" />
         <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E] via-transparent to-[#0B0F0E]/50"></div>
         <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Planning Your Solar Setup?</h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
               Every property has different electricity needs. Start with your requirements and let us help you understand the right direction.
            </p>
            <Link href="/quote" className="inline-block bg-[#B8D83D] text-[#0B0F0E] font-bold px-10 py-4 rounded-xl hover:bg-[#9dbf2c] transition-colors shadow-xl">
               Start My Solar Consultation
            </Link>
         </div>
      </section>

      {/* 12. FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
           <h2 className="text-4xl font-extrabold text-[#0B0F0E] text-center mb-12">Frequently Asked Questions</h2>
           <div className="space-y-4">
             {[
               {q: 'How do I know what solar system I need?', a: 'Your system size is determined by analyzing your electricity usage, roof space, and backup goals during our consultation process.'},
               {q: 'Can I pay in cash?', a: 'Yes, we provide direct cash purchase options based on a finalized custom quotation.'},
               {q: 'Can I pay through installments?', a: 'Yes, we offer flexible installment options. We can discuss your eligibility and available plans.'},
               {q: 'Do I need battery backup?', a: 'Battery backup is optional but recommended if you experience frequent load shedding or power outages.'},
               {q: 'Can solar help during load shedding?', a: 'Yes, if you choose a Hybrid Solar setup with battery backup, your critical appliances can remain powered.'},
               {q: 'What information is needed for a quotation?', a: 'We need your average monthly electricity bill, property location, and backup preferences.'},
               {q: 'Do you provide residential solutions?', a: 'Yes, we specialize in rooftop solar for homes and villas.'},
               {q: 'Do you provide commercial solutions?', a: 'Yes, we design robust solar architectures for businesses and commercial buildings.'},
               {q: 'Do you serve Rawalpindi and Islamabad?', a: 'Yes, these are our primary service areas.'},
               {q: 'How do I contact you?', a: 'You can call or WhatsApp us at 03125634911, or email us at rajashahnawaz680@gmail.com.'}
             ].map((faq, i) => (
               <details key={i} className="group bg-[#F5F6F1] p-6 rounded-2xl shadow-sm border border-gray-200 cursor-pointer">
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

      {/* 13. FINAL CTA */}
      <section className="relative py-32 bg-[#0B0F0E] overflow-hidden">
         <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8D83D]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
         <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Let&apos;s Find the Right Solar Direction for Your Property.</h2>
            <p className="text-xl text-gray-300 mb-10">Tell us about your electricity usage, property and payment preference.</p>
            <div className="flex justify-center gap-4">
               <Link href="/quote" className="bg-[#B8D83D] text-[#0B0F0E] font-bold px-10 py-4 rounded-xl hover:bg-[#9dbf2c] transition-colors shadow-lg">Build My Solar Plan</Link>
               <a href="https://wa.me/923125634911" target="_blank" rel="noopener noreferrer" className="bg-transparent border border-white text-white font-bold px-10 py-4 rounded-xl hover:bg-white hover:text-[#0B0F0E] transition-colors shadow-lg">WhatsApp Us</a>
            </div>
         </div>
      </section>

      {/* 14. CONTACT */}
      <section className="py-24 bg-white border-t border-gray-100">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-extrabold text-[#0B0F0E] mb-12">Contact Solar Panel</h2>
            <div className="flex flex-wrap justify-center gap-8 text-gray-600 mb-12">
               <div className="flex flex-col items-center">
                  <svg className="w-8 h-8 text-[#183C32] mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  <span className="font-bold">03125634911</span>
               </div>
               <div className="flex flex-col items-center">
                  <svg className="w-8 h-8 text-[#183C32] mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  <span className="font-bold">rajashahnawaz680@gmail.com</span>
               </div>
               <div className="flex flex-col items-center">
                  <svg className="w-8 h-8 text-[#183C32] mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  <span className="font-bold">Rawalpindi & Islamabad</span>
               </div>
            </div>
            <div className="flex justify-center gap-4">
               <a href="tel:03125634911" className="bg-[#0B0F0E] text-white font-bold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors">Call</a>
               <a href="https://wa.me/923125634911" className="bg-[#25D366] text-white font-bold px-8 py-3 rounded-xl hover:bg-[#20b858] transition-colors">WhatsApp</a>
               <a href="mailto:rajashahnawaz680@gmail.com" className="bg-gray-200 text-[#0B0F0E] font-bold px-8 py-3 rounded-xl hover:bg-gray-300 transition-colors">Email</a>
            </div>
         </div>
      </section>

    </main>
  );
}

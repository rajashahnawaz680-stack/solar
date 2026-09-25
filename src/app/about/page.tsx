import Link from 'next/link';

export const metadata = {
  title: 'About Solar KCKY & Our Process | Solar Installation Islamabad & Rawalpindi',
  description: 'Learn about Solar KCKY, our professional solar installation journey, and what you can expect from our dedicated clean energy team.'
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      
      {/* Hero */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <img src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1920&q=80" alt="About Solar KCKY" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
           <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">About Solar KCKY</h1>
           <p className="text-xl md:text-2xl text-slate-300">Dedicated solar professionals serving Islamabad and Rawalpindi.</p>
        </div>
      </section>

      {/* Why Solar KCKY */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Why Solar KCKY?</h2>
             <p className="text-lg text-slate-600 max-w-2xl mx-auto">We provide tailored engineering and dedicated support for every project in the twin cities.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               { title: "Local Islamabad & Rawalpindi Service", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" },
               { title: "Residential & Commercial Solutions", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
               { title: "Site-Based Assessment", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
               { title: "Multiple System Options", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" },
               { title: "Cash & Installment Options", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
               { title: "Professional Installation & Support", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" }
             ].map((feat, i) => (
               <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:border-amber-400 hover:shadow-md transition-all flex items-start">
                  <div className="w-12 h-12 bg-amber-400/10 rounded-xl flex items-center justify-center border border-amber-400/20 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feat.icon} /></svg>
                  </div>
                  <h3 className="font-bold text-slate-900 pt-2">{feat.title}</h3>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* What You Can Expect (Trust Section) */}
      <section className="py-24 bg-slate-900 text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">What You Can Expect</h2>
               <p className="text-lg text-slate-300 max-w-2xl mx-auto">We prioritize transparency, safety, and long-term reliability over rapid deployments.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
               <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 text-center">
                  <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-400">
                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Authentic Equipment</h3>
                  <p className="text-slate-400">We utilize only verified, industry-standard equipment without substituting for unverified hardware.</p>
               </div>
               <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 text-center relative transform md:-translate-y-4">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-amber-400 rounded-t-3xl"></div>
                  <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-400 mt-2">
                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Transparent Pricing</h3>
                  <p className="text-slate-400">Clear quotations detailing system sizing and capabilities without hidden installation fees.</p>
               </div>
               <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 text-center">
                  <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-400">
                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Post-Installation Support</h3>
                  <p className="text-slate-400">Reliable local support in Islamabad and Rawalpindi to ensure your system operates continuously.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Your Solar Journey */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Your Solar Journey</h2>
             <p className="text-lg text-slate-600">The clear, professional six-step process to energy independence.</p>
           </div>
           
           <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2"></div>
              
              {[
                { step: "01", title: "Tell Us About Your Property", desc: "Share your location and energy requirements via our secure quote form." },
                { step: "02", title: "Site Assessment", desc: "Our technicians review your roof space, orientation, and electrical setup." },
                { step: "03", title: "System Design & Proposal", desc: "We engineer a system tailored to your exact needs and provide a clear proposal." },
                { step: "04", title: "Payment & Confirmation", desc: "Finalize cash or installment options and secure your installation date." },
                { step: "05", title: "Professional Installation", desc: "Certified deployment of panels, inverters, and secure mountings." },
                { step: "06", title: "Testing & Handover", desc: "Comprehensive system testing, grid synchronization, and final handover." },
              ].map((item, index) => (
                 <div key={item.step} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-16 h-16 absolute left-0 md:left-1/2 rounded-full bg-slate-900 border-4 border-slate-50 flex items-center justify-center -translate-x-1/2 z-10 text-amber-400 font-extrabold shadow-lg">
                      {item.step}
                    </div>
                    <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                       <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-amber-400 transition-all">
                          <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                          <p className="text-slate-600">{item.desc}</p>
                       </div>
                    </div>
                 </div>
              ))}
           </div>

           <div className="mt-16 text-center">
             <Link href="/get-quote" className="inline-block bg-amber-400 text-slate-900 font-bold px-10 py-5 rounded-xl hover:bg-amber-500 transition-colors shadow-lg">
               Start Your Journey Now
             </Link>
           </div>
        </div>
      </section>
    </main>
  );
}

import Link from 'next/link';

export const metadata = {
  title: '5kW Solar System | Solar KCKY',
  description: 'Standard residential capacity optimized for average household consumption.'
};

export default function SolutionPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      
      {/* Hero Banner */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <img src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1920&q=80" alt="5kW Solar System" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
           <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">5kW Solar System</h1>
           <p className="text-xl md:text-2xl text-slate-300 mb-10 drop-shadow-md">Standard residential capacity optimized for average household consumption.</p>
           <Link href="/get-quote" className="inline-block bg-amber-400 text-slate-900 font-bold px-10 py-4 rounded-xl hover:bg-amber-500 transition-colors shadow-xl text-lg">
             Get Free Solar Quote
           </Link>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Solution Overview</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Our 5kw solar system services are engineered to provide maximum efficiency and reliability for properties in Islamabad and Rawalpindi. We utilize verified, industry-standard equipment to ensure long-term performance and robust energy independence.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Core Benefits & Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start"><svg className="w-5 h-5 text-amber-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg><div><h4 className="font-bold text-slate-900 mb-1">Perfect for Small Homes</h4><p className="text-sm text-slate-600">Supports standard daily appliances.</p></div></div>
     <div className="flex items-start"><svg className="w-5 h-5 text-amber-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg><div><h4 className="font-bold text-slate-900 mb-1">Cost Effective</h4><p className="text-sm text-slate-600">Excellent ROI for standard usage.</p></div></div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">How It Works</h2>
              <div className="space-y-6">
                 <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-xl mr-6 shadow-md">1</div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Site Assessment</h3>
                      <p className="text-slate-600">We analyze your energy consumption and property structure to design the optimal 5kw solar system.</p>
                    </div>
                 </div>
                 <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-xl mr-6 shadow-md">2</div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Professional Installation</h3>
                      <p className="text-slate-600">Our certified technicians deploy the system safely, ensuring full structural integrity and optimal alignment.</p>
                    </div>
                 </div>
                 <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-xl mr-6 shadow-md">3</div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Commissioning & Support</h3>
                      <p className="text-slate-600">The system is activated, tested, and handed over with complete operational guidance and support.</p>
                    </div>
                 </div>
              </div>
            </div>
            
            
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
             <div className="bg-slate-900 rounded-3xl p-8 sticky top-32 shadow-2xl border border-slate-800 text-center">
                <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3 shadow-lg">
                   <svg className="w-8 h-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Switch?</h3>
                <p className="text-slate-300 mb-8">Get a customized quotation for your 5kw solar system today.</p>
                <Link href="/get-quote" className="block w-full bg-amber-400 text-slate-900 font-bold py-4 rounded-xl hover:bg-amber-500 transition-colors mb-4 shadow-lg">
                  Request Custom Quote
                </Link>
                <a href="https://wa.me/923125634911" target="_blank" rel="noopener noreferrer" className="block w-full bg-[#25D366] text-white font-bold py-4 rounded-xl hover:bg-[#20b858] transition-colors shadow-lg flex justify-center items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  WhatsApp Us
                </a>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}

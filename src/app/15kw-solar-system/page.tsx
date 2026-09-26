import Link from 'next/link';
import InstallationTimeline from '@/components/InstallationTimeline';

export const metadata = {
  title: '15kW Solar System | SUNORA ENERGY',
  description: 'Commercial-grade capacity engineered for large properties and business operations.'
};

export default function SolutionPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      
      {/* Hero Banner */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-[#0B0F0E]">
        <img src="https://images.unsplash.com/photo-1548614606-52b4451f994b?auto=format&fit=crop&w=1920&q=80" alt="Large home or commercial property solar 15kw" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
           {/* Breadcrumbs */}
           <div className="flex items-center justify-center space-x-2 text-sm text-slate-300 mb-6 font-medium">
             <Link href="/" className="hover:text-[#B8D83D] transition-colors">Home</Link>
             <span>/</span>
             <Link href="/projects" className="hover:text-[#B8D83D] transition-colors">Systems</Link>
             <span>/</span>
             <span className="text-[#B8D83D]">15kW System</span>
           </div>
           
           <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">15kW Solar System</h1>
           <p className="text-xl md:text-2xl text-slate-300 mb-10 drop-shadow-md">Commercial-grade capacity engineered for large properties and business operations.</p>
           
           <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
             <Link href="/get-quote" className="bg-[#B8D83D] text-[#0B0F0E] font-bold px-10 py-4 rounded-xl hover:bg-[#9dbf2c] transition-colors shadow-xl text-lg w-full sm:w-auto">
               Get a Free Quote
             </Link>
             <a href="https://wa.me/923125634911" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold px-10 py-4 rounded-xl hover:bg-[#20b858] transition-colors shadow-xl text-lg w-full sm:w-auto flex justify-center items-center">
               <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
               WhatsApp Us
             </a>
           </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-20">
            
            {/* System Overview */}
            <div>
              <h2 className="text-3xl font-bold text-[#0B0F0E] mb-6 border-b border-slate-100 pb-4">System Overview</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Our 15kW solar solutions are meticulously engineered to provide maximum efficiency and reliability for properties across the twin cities. By utilizing verified, industry-standard equipment, we ensure robust energy independence.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {/* Visual Specification Cards */}
                 <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-[#0B0F0E] text-[#B8D83D] rounded-lg flex items-center justify-center mr-4 shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0B0F0E] text-lg mb-1">Suitable Applications</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">Designed for commercial sites, large villas, and facilities with high baseline energy demands.</p>
                    </div>
                 </div>
                 <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-[#0B0F0E] text-[#B8D83D] rounded-lg flex items-center justify-center mr-4 shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0B0F0E] text-lg mb-1">Key Features</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">Massive generation potential to protect business margins against tariff hikes.</p>
                    </div>
                 </div>
              </div>
            </div>

            {/* Configuration / Specifications */}
            <div>
              <h2 className="text-3xl font-bold text-[#0B0F0E] mb-6 border-b border-slate-100 pb-4">Configuration & Specifications</h2>
              <div className="bg-[#0B0F0E] rounded-3xl p-8 border border-[#183C32] shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#B8D83D]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <p className="text-slate-300 text-lg leading-relaxed relative z-10">
                  Because every property has unique energy loads and structural constraints, we do not use pre-packaged kits. All specifications (including exact panel counts, inverter capacities, and battery arrays) are custom-engineered during the Site Assessment phase using highly verified and tested global brands. 
                </p>
              </div>
            </div>

            {/* Installation Process */}
            <InstallationTimeline />

            {/* FAQ */}
            <div>
              <h2 className="text-3xl font-bold text-[#0B0F0E] mb-6 border-b border-slate-100 pb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                 <details className="group bg-slate-50 rounded-2xl border border-slate-200 cursor-pointer">
                    <summary className="flex justify-between items-center font-bold text-lg text-[#0B0F0E] p-6 list-none">
                       Does this include Net Metering?
                       <span className="transition group-open:rotate-180">
                         <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                       </span>
                    </summary>
                    <p className="text-slate-600 px-6 pb-6 leading-relaxed">
                       Yes, where applicable and supported by the local grid, net metering processing can be handled alongside your 15kW installation to maximize ROI.
                    </p>
                 </details>
                 <details className="group bg-slate-50 rounded-2xl border border-slate-200 cursor-pointer">
                    <summary className="flex justify-between items-center font-bold text-lg text-[#0B0F0E] p-6 list-none">
                       Can I upgrade the capacity later?
                       <span className="transition group-open:rotate-180">
                         <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                       </span>
                    </summary>
                    <p className="text-slate-600 px-6 pb-6 leading-relaxed">
                       Our architectures are designed with scalability in mind. Providing your inverter and roof space allow for it, expanding your system is highly feasible.
                    </p>
                 </details>
              </div>
            </div>
            
          </div>

          {/* Sticky Sidebar CTA */}
          <div className="lg:col-span-1">
             <div className="bg-[#0B0F0E] rounded-3xl p-8 sticky top-32 shadow-2xl border border-[#183C32] text-center">
                <div className="w-16 h-16 bg-[#B8D83D] rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3 shadow-lg">
                   <svg className="w-8 h-8 text-[#0B0F0E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Switch?</h3>
                <p className="text-slate-300 mb-8">Get a customized quotation for your 15kW solar system today.</p>
                <Link href="/get-quote" className="block w-full bg-[#B8D83D] text-[#0B0F0E] font-bold py-4 rounded-xl hover:bg-[#9dbf2c] transition-colors mb-4 shadow-lg">
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

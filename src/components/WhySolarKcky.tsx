import Link from 'next/link';

export default function WhySolarKcky() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Large Image */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
             <img src="https://images.unsplash.com/photo-1508514177221-188b1c77eca2?auto=format&fit=crop&w=1200&q=80" alt="Professional Solar Installation" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
             {/* Small badge */}
             <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl flex items-center">
                <div className="w-12 h-12 bg-[#B8D83D] rounded-full flex items-center justify-center mr-4">
                   <svg className="w-6 h-6 text-[#0B0F0E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <span className="block font-extrabold text-[#0B0F0E] text-lg">SUNORA ENERGY</span>
                  <span className="block text-slate-600 text-sm">Professional Solar Services</span>
                </div>
             </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B0F0E] mb-8 tracking-tight leading-tight">
              Solar Solutions Built Around Your Property
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed border-l-4 border-[#B8D83D] pl-6">
              We provide tailored solar energy systems designed to meet the exact energy demands of homes and businesses across the capital territory. No pre-packaged kits—just verified engineering and reliable deployment.
            </p>
            
            <div className="space-y-6 mb-12">
               <div className="flex items-start">
                  <div className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center shrink-0 mr-4 mt-1">
                     <svg className="w-5 h-5 text-[#9dbf2c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B0F0E] text-lg">Residential & Commercial Solutions</h4>
                  </div>
               </div>
               <div className="flex items-start">
                  <div className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center shrink-0 mr-4 mt-1">
                     <svg className="w-5 h-5 text-[#9dbf2c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B0F0E] text-lg">Islamabad & Rawalpindi Service</h4>
                  </div>
               </div>
               <div className="flex items-start">
                  <div className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center shrink-0 mr-4 mt-1">
                     <svg className="w-5 h-5 text-[#9dbf2c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B0F0E] text-lg">Multiple Solar System Options</h4>
                  </div>
               </div>
               <div className="flex items-start">
                  <div className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center shrink-0 mr-4 mt-1">
                     <svg className="w-5 h-5 text-[#9dbf2c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B0F0E] text-lg">Professional Installation & Support</h4>
                  </div>
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link href="/contact" className="w-full sm:w-auto bg-[#0B0F0E] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#183C32] transition-colors shadow-lg text-center">
                Talk to SUNORA ENERGY &rarr;
              </Link>
              <Link href="/projects" className="w-full sm:w-auto bg-slate-50 text-[#0B0F0E] border border-slate-200 font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors text-center">
                Explore Our Projects &rarr;
              </Link>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}

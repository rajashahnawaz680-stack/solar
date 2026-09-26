import Link from 'next/link';
import LocationsSelector from '@/components/LocationsSelector';
import SolarSolutions from '@/components/SolarSolutions';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F6F1]">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center overflow-hidden bg-[#0B0F0E]">
        <img src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=1920&q=80" alt="Modern rooftop solar" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F0E] via-[#0B0F0E]/80 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
           <div className="max-w-3xl">
             <span className="inline-block px-4 py-2 rounded-full bg-[#183C32] text-[#B8D83D] font-bold text-sm tracking-wider uppercase mb-6">SMART SOLAR FOR MODERN PAKISTAN</span>
             <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">Power Your Home.<br/>Business. Future.</h1>
             <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed">Professionally designed solar, battery and energy solutions for homes and businesses in Islamabad and Rawalpindi.</p>
             
             <div className="flex flex-col sm:flex-row gap-4 mb-8">
               <Link href="/quote" className="bg-[#B8D83D] text-[#0B0F0E] font-bold px-8 py-4 rounded-xl hover:bg-[#9dbf2c] transition-colors shadow-lg text-center text-lg">
                 Get a Free Solar Assessment
               </Link>
               <a href="https://wa.me/923125634911" target="_blank" rel="noopener noreferrer" className="bg-[#183C32] text-white border border-[#1c473b] font-bold px-8 py-4 rounded-xl hover:bg-[#1c473b] transition-colors text-center text-lg flex items-center justify-center">
                 <svg className="w-5 h-5 mr-2 text-[#B8D83D]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/></svg>
                 Talk on WhatsApp
               </a>
             </div>
             <p className="text-sm text-gray-400 font-medium tracking-wide">Residential • Commercial • Hybrid • Battery • Maintenance</p>
           </div>
        </div>
      </section>

      {/* 2. QUICK ACTIONS */}
      <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Link href="/solar-solutions/residential" className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all group border border-gray-100 flex flex-col items-start hover:-translate-y-1">
               <div className="w-12 h-12 bg-[#B8D83D]/20 text-[#183C32] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#B8D83D] transition-colors"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg></div>
               <h3 className="font-bold text-[#0B0F0E] text-lg mb-2">Install Solar</h3>
               <p className="text-sm text-gray-500 mb-4 flex-grow">Design a custom system for your property.</p>
               <span className="text-[#183C32] font-bold text-sm group-hover:text-[#B8D83D]">&rarr;</span>
            </Link>
            <Link href="/services/battery-storage" className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all group border border-gray-100 flex flex-col items-start hover:-translate-y-1">
               <div className="w-12 h-12 bg-[#B8D83D]/20 text-[#183C32] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#B8D83D] transition-colors"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div>
               <h3 className="font-bold text-[#0B0F0E] text-lg mb-2">Add Battery Backup</h3>
               <p className="text-sm text-gray-500 mb-4 flex-grow">Eliminate load shedding instantly.</p>
               <span className="text-[#183C32] font-bold text-sm group-hover:text-[#B8D83D]">&rarr;</span>
            </Link>
            <Link href="/services/solar-repair-maintenance" className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all group border border-gray-100 flex flex-col items-start hover:-translate-y-1">
               <div className="w-12 h-12 bg-[#B8D83D]/20 text-[#183C32] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#B8D83D] transition-colors"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg></div>
               <h3 className="font-bold text-[#0B0F0E] text-lg mb-2">Repair & Maintain</h3>
               <p className="text-sm text-gray-500 mb-4 flex-grow">Fix existing system faults or clean panels.</p>
               <span className="text-[#183C32] font-bold text-sm group-hover:text-[#B8D83D]">&rarr;</span>
            </Link>
            <Link href="/quote" className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all group border border-gray-100 flex flex-col items-start hover:-translate-y-1">
               <div className="w-12 h-12 bg-[#B8D83D]/20 text-[#183C32] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#B8D83D] transition-colors"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg></div>
               <h3 className="font-bold text-[#0B0F0E] text-lg mb-2">Get a Solar Quote</h3>
               <p className="text-sm text-gray-500 mb-4 flex-grow">Calculate costs and get custom engineering.</p>
               <span className="text-[#183C32] font-bold text-sm group-hover:text-[#B8D83D]">&rarr;</span>
            </Link>
         </div>
      </section>

      {/* 3. SOLAR SOLUTIONS */}
      <SolarSolutions />

      {/* 4. LOCATIONS */}
      <LocationsSelector />

      {/* 5. FINAL CTA */}
      <FinalCTA />

    </main>
  );
}

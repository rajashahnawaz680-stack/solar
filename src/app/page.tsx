import Link from 'next/link';
import Calculator from '@/components/Calculator';
import FeaturedProjects from '@/components/FeaturedProjects';
import LocationsSelector from '@/components/LocationsSelector';
import WhatWeDo from '@/components/WhatWeDo';
import WhySolarKcky from '@/components/WhySolarKcky';
import FinalCTA from '@/components/FinalCTA';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-slate-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1920&q=80" 
            alt="Modern house with rooftop solar panels" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-32 flex flex-col items-center text-center">
          
          <span className="inline-block py-1.5 px-4 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20 text-sm font-bold tracking-wide uppercase mb-8 shadow-sm">
            {/* Service line */}
            On-Grid &bull; Hybrid &bull; Residential &bull; Commercial &bull; Battery Solutions
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight max-w-4xl drop-shadow-md">
            Power Your Home With <span className="text-amber-400">Smarter Solar</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-3xl leading-relaxed drop-shadow-sm font-medium">
            Premium solar solutions for homes and businesses across Islamabad & Rawalpindi.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 mb-16 w-full sm:w-auto">
            <Link href="/get-quote" className="bg-amber-400 text-slate-900 font-bold px-8 py-4 md:px-10 md:py-5 rounded-xl hover:bg-amber-500 transition-all text-lg shadow-xl hover:shadow-amber-400/20 hover:-translate-y-1 w-full sm:w-auto">
              Get Free Solar Quote
            </Link>
            <a href="https://wa.me/923125634911?text=Hello%2C%20I%20am%20interested%20in%20solar%20installation.%20I%20would%20like%20to%20discuss%20my%20requirements%20and%20get%20a%20quotation." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold px-8 py-4 md:px-10 md:py-5 rounded-xl hover:bg-[#20b858] transition-all text-lg shadow-xl hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              WhatsApp Us
            </a>
          </div>
          
          {/* Subtle Trust Panel */}
          <div className="w-full max-w-4xl mt-8">
             <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between shadow-2xl">
                <div className="text-white font-bold text-lg mb-6 md:mb-0 md:mr-8 text-center md:text-left flex-shrink-0">
                  Solar Solutions Designed<br/>Around Your Energy Needs
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 w-full justify-around">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-amber-400/10 flex items-center justify-center flex-shrink-0 border border-amber-400/20">
                         <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <span className="text-slate-300 text-sm font-medium">Site Assessment</span>
                   </div>
                   
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-amber-400/10 flex items-center justify-center flex-shrink-0 border border-amber-400/20">
                         <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                      </div>
                      <span className="text-slate-300 text-sm font-medium">System Design</span>
                   </div>
                   
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-amber-400/10 flex items-center justify-center flex-shrink-0 border border-amber-400/20">
                         <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                      </div>
                      <span className="text-slate-300 text-sm font-medium">Professional Installation</span>
                   </div>
                </div>
             </div>
          </div>
          
        </div>
      </section>

      {/* 1. WHAT WE DO */}
      <WhatWeDo />

      {/* 2. SOLAR POTENTIAL CALCULATOR */}
      <Calculator />

      {/* 3. WHY SOLAR */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1509391366360-51590d6350f5?auto=format&fit=crop&w=1200&q=80" alt="Solar Home" loading="lazy" className="object-cover w-full h-full" />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">Why More Homeowners Are Switching to Solar</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-400/10 rounded-full flex items-center justify-center border border-amber-400/20 mr-4">
                    <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Reduce Grid Dependence</h3>
                    <p className="text-slate-600">Lower your monthly electricity bills and protect yourself from rising grid energy costs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-400/10 rounded-full flex items-center justify-center border border-amber-400/20 mr-4">
                    <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Clean Energy</h3>
                    <p className="text-slate-600">Reduce your carbon footprint by generating your own clean, renewable energy directly from the sun.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-400/10 rounded-full flex items-center justify-center border border-amber-400/20 mr-4">
                    <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Flexible System Options</h3>
                    <p className="text-slate-600">From pure grid-tie systems to full hybrid battery backups, tailor your system to your lifestyle.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-400/10 rounded-full flex items-center justify-center border border-amber-400/20 mr-4">
                    <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Residential & Commercial Solutions</h3>
                    <p className="text-slate-600">Scalable technology that powers everything from small homes to large industrial facilities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* NEW: SOLAR SOLUTIONS SHOWCASE */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Solar Solutions Designed Around Your Energy Needs</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Explore residential, commercial, on-grid and hybrid solar solutions for properties across Islamabad and Rawalpindi.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
             {/* 1. Residential Solar */}
             <Link href="/solar-installation-islamabad" className="group relative rounded-3xl overflow-hidden shadow-lg h-96 md:h-[500px] border border-slate-200 block cursor-pointer">
                <img src="https://images.unsplash.com/photo-1509391366360-51590d6350f5?auto=format&fit=crop&w=1200&q=80" alt="Residential Solar" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90"></div>
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                   <span className="text-amber-400 font-bold uppercase tracking-wider text-sm mb-2">Home Solutions</span>
                   <h3 className="text-4xl font-extrabold text-white mb-3">Residential Solar</h3>
                   <p className="text-slate-300 mb-6 max-w-md">Complete rooftop solar installations designed to drastically reduce home utility bills.</p>
                   <span className="inline-block border-b-2 border-amber-400 text-white font-bold pb-1 self-start group-hover:text-amber-400 transition-colors">Explore Solution &rarr;</span>
                </div>
             </Link>

             {/* 2. Commercial Solar */}
             <Link href="/solar-installation-rawalpindi" className="group relative rounded-3xl overflow-hidden shadow-lg h-96 md:h-[500px] border border-slate-200 block cursor-pointer">
                <img src="https://images.unsplash.com/photo-1508514177221-188b1c77eca2?auto=format&fit=crop&w=1200&q=80" alt="Commercial Solar" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90"></div>
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                   <span className="text-amber-400 font-bold uppercase tracking-wider text-sm mb-2">Business Solutions</span>
                   <h3 className="text-4xl font-extrabold text-white mb-3">Commercial Solar</h3>
                   <p className="text-slate-300 mb-6 max-w-md">Heavy-duty architectures engineered to protect margins and provide reliable power.</p>
                   <span className="inline-block border-b-2 border-amber-400 text-white font-bold pb-1 self-start group-hover:text-amber-400 transition-colors">Explore Solution &rarr;</span>
                </div>
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
             {/* 3. 5kW System */}
             <Link href="/5kw-solar-system" className="group relative rounded-3xl overflow-hidden shadow-md h-80 border border-slate-200 block cursor-pointer">
                <img src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80" alt="5kW Solar System" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/10"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                   <h3 className="text-2xl font-extrabold text-white mb-2">5kW System</h3>
                   <p className="text-slate-300 text-sm mb-4">Perfect for standard residential properties.</p>
                   <span className="text-amber-400 text-sm font-bold group-hover:text-white transition-colors">Details &rarr;</span>
                </div>
             </Link>

             {/* 4. 10kW System */}
             <Link href="/10kw-solar-system" className="group relative rounded-3xl overflow-hidden shadow-md h-80 border border-slate-200 block cursor-pointer">
                <img src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80" alt="10kW Solar System" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/10"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                   <h3 className="text-2xl font-extrabold text-white mb-2">10kW System</h3>
                   <p className="text-slate-300 text-sm mb-4">Ideal for larger homes and multiple ACs.</p>
                   <span className="text-amber-400 text-sm font-bold group-hover:text-white transition-colors">Details &rarr;</span>
                </div>
             </Link>

             {/* 5. 15kW System */}
             <Link href="/15kw-solar-system" className="group relative rounded-3xl overflow-hidden shadow-md h-80 border border-slate-200 block cursor-pointer">
                <img src="https://images.unsplash.com/photo-1548614606-52b4451f994b?auto=format&fit=crop&w=800&q=80" alt="15kW Solar System" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/10"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                   <h3 className="text-2xl font-extrabold text-white mb-2">15kW System</h3>
                   <p className="text-slate-300 text-sm mb-4">Designed for commercial sites and large villas.</p>
                   <span className="text-amber-400 text-sm font-bold group-hover:text-white transition-colors">Details &rarr;</span>
                </div>
             </Link>
             
             {/* 6. Hybrid System */}
             <Link href="/hybrid-solar-system" className="group relative rounded-3xl overflow-hidden shadow-md h-80 border border-slate-200 block cursor-pointer">
                <img src="https://images.unsplash.com/photo-1620803453880-977759567ac8?auto=format&fit=crop&w=800&q=80" alt="Hybrid Solar System" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/10"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                   <h3 className="text-2xl font-extrabold text-white mb-2">Hybrid System</h3>
                   <p className="text-slate-300 text-sm mb-4">Solar + Battery storage for load shedding.</p>
                   <span className="text-amber-400 text-sm font-bold group-hover:text-white transition-colors">Details &rarr;</span>
                </div>
             </Link>

             {/* 7. On-Grid System */}
             <Link href="/on-grid-solar-system" className="group relative rounded-3xl overflow-hidden shadow-md h-80 border border-slate-200 block cursor-pointer">
                <img src="https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&w=800&q=80" alt="On-Grid Solar System" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/10"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                   <h3 className="text-2xl font-extrabold text-white mb-2">On-Grid System</h3>
                   <p className="text-slate-300 text-sm mb-4">Maximum ROI using grid connection without batteries.</p>
                   <span className="text-amber-400 text-sm font-bold group-hover:text-white transition-colors">Details &rarr;</span>
                </div>
             </Link>
          </div>
        </div>
      </section>

      {/* 6. LOCATIONS SELECTOR */}
      <LocationsSelector />

      {/* 7. FEATURED SOLAR PROJECTS */}
      <FeaturedProjects />

      {/* FAQ Block injected safely if exists */}
      

      {/* 8. FINAL CTA */}
      <FinalCTA />
    </main>
  );
}

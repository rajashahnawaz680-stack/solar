import Link from 'next/link';

export default function FeaturedProjects() {
  const projects = [
    {
      id: 'residential-solar',
      title: 'Residential Solar Installation',
      category: 'Home Solution',
      img: 'https://images.unsplash.com/photo-1509391366360-51590d6350f5?auto=format&fit=crop&w=1200&q=80',
      location: 'Islamabad'
    },
    {
      id: 'commercial-solar',
      title: 'Commercial Solar Installation',
      category: 'Business Solution',
      img: 'https://images.unsplash.com/photo-1508514177221-188b1c77eca2?auto=format&fit=crop&w=800&q=80',
      location: 'Rawalpindi'
    },
    {
      id: 'rooftop-solar',
      title: 'Rooftop Solar Installation',
      category: 'System Design',
      img: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80',
      location: 'Islamabad'
    },
    {
      id: 'hybrid-system',
      title: 'Hybrid Solar System',
      category: 'Battery Backup',
      img: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=1200&q=80',
      location: 'Bahria Town'
    },
    {
      id: 'on-grid-system',
      title: 'On-Grid Solar System',
      category: 'Grid Tied',
      img: 'https://images.unsplash.com/photo-1548614606-52b4451f994b?auto=format&fit=crop&w=800&q=80',
      location: 'DHA Islamabad'
    },
    {
      id: 'solar-equipment',
      title: 'Solar Equipment Installation',
      category: 'Inverter Setup',
      img: 'https://images.unsplash.com/photo-1620803453880-977759567ac8?auto=format&fit=crop&w=800&q=80',
      location: 'Rawalpindi'
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Featured Solar Projects</h2>
            <p className="text-lg text-slate-600">
              Explore solar installations and solutions designed for homes, businesses and different energy requirements.
            </p>
          </div>
          <Link href="/projects" className="inline-block text-slate-900 font-bold border-b-2 border-amber-400 pb-1 hover:text-amber-500 transition-colors whitespace-nowrap">
            View All Projects &rarr;
          </Link>
        </div>

        {/* Asymmetric Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 lg:auto-rows-[300px]">
          
          {/* 1. Large Featured Card (Col Span 2, Row Span 2) */}
          <Link href={`/projects/${projects[0].id}`} className="group relative block w-full h-[400px] md:h-full md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer">
            <img src={projects[0].img} alt={projects[0].title} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/60 transition-colors duration-500"></div>
            
            {/* Hover Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
               <span className="text-amber-400 font-bold uppercase tracking-wider text-xs mb-2">{projects[0].category}</span>
               <h3 className="text-3xl font-extrabold text-white mb-2">{projects[0].title}</h3>
               <div className="flex items-center text-slate-300 text-sm mb-4">
                 <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                 {projects[0].location}
               </div>
               <span className="inline-block border-b border-amber-400 text-white font-bold pb-0.5 self-start">View Project &rarr;</span>
            </div>
          </Link>

          {/* 2. Medium Card (Col Span 1, Row Span 1) */}
          <Link href={`/projects/${projects[1].id}`} className="group relative block w-full h-[300px] md:h-full md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer">
            <img src={projects[1].img} alt={projects[1].title} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/70 transition-colors duration-500"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
               <span className="text-amber-400 font-bold uppercase tracking-wider text-xs mb-1">{projects[1].category}</span>
               <h3 className="text-xl font-bold text-white mb-2 leading-tight">{projects[1].title}</h3>
               <span className="text-white text-sm font-bold border-b border-amber-400 pb-0.5 self-start">View Project &rarr;</span>
            </div>
          </Link>

          {/* 3. Medium Card (Col Span 1, Row Span 1) */}
          <Link href={`/projects/${projects[2].id}`} className="group relative block w-full h-[300px] md:h-full md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer">
            <img src={projects[2].img} alt={projects[2].title} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/70 transition-colors duration-500"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
               <span className="text-amber-400 font-bold uppercase tracking-wider text-xs mb-1">{projects[2].category}</span>
               <h3 className="text-xl font-bold text-white mb-2 leading-tight">{projects[2].title}</h3>
               <span className="text-white text-sm font-bold border-b border-amber-400 pb-0.5 self-start">View Project &rarr;</span>
            </div>
          </Link>

          {/* 4. Wide Card (Col Span 2, Row Span 1) */}
          <Link href={`/projects/${projects[3].id}`} className="group relative block w-full h-[300px] md:h-full md:col-span-2 md:row-span-1 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer">
            <img src={projects[3].img} alt={projects[3].title} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/60 transition-colors duration-500"></div>
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
               <span className="text-amber-400 font-bold uppercase tracking-wider text-xs mb-2">{projects[3].category}</span>
               <h3 className="text-2xl font-bold text-white mb-2">{projects[3].title}</h3>
               <span className="text-white text-sm font-bold border-b border-amber-400 pb-0.5 self-start">View Project &rarr;</span>
            </div>
          </Link>

          {/* 5. Medium Card */}
          <Link href={`/projects/${projects[4].id}`} className="group relative block w-full h-[300px] md:h-full md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer">
            <img src={projects[4].img} alt={projects[4].title} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/70 transition-colors duration-500"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
               <span className="text-amber-400 font-bold uppercase tracking-wider text-xs mb-1">{projects[4].category}</span>
               <h3 className="text-xl font-bold text-white mb-2 leading-tight">{projects[4].title}</h3>
               <span className="text-white text-sm font-bold border-b border-amber-400 pb-0.5 self-start">View Project &rarr;</span>
            </div>
          </Link>

          {/* 6. Medium Card */}
          <Link href={`/projects/${projects[5].id}`} className="group relative block w-full h-[300px] md:h-full md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer">
            <img src={projects[5].img} alt={projects[5].title} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/70 transition-colors duration-500"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
               <span className="text-amber-400 font-bold uppercase tracking-wider text-xs mb-1">{projects[5].category}</span>
               <h3 className="text-xl font-bold text-white mb-2 leading-tight">{projects[5].title}</h3>
               <span className="text-white text-sm font-bold border-b border-amber-400 pb-0.5 self-start">View Project &rarr;</span>
            </div>
          </Link>

        </div>

        {/* Global CTA */}
        <div className="mt-20 bg-slate-50 rounded-3xl p-10 border border-slate-200 text-center flex flex-col items-center">
           <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">Want a Similar Solar Solution?</h3>
           <p className="text-slate-600 mb-8 max-w-xl">Our engineers are ready to design and implement a high-yield solar architecture customized for your property.</p>
           <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
             <Link href="/get-quote" className="bg-amber-400 text-slate-900 font-bold px-10 py-4 rounded-xl hover:bg-amber-500 transition-colors shadow-sm w-full sm:w-auto text-center">
               Get Free Quote
             </Link>
             <a href="https://wa.me/923125634911" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold px-10 py-4 rounded-xl hover:bg-[#20b858] transition-colors shadow-sm w-full sm:w-auto flex items-center justify-center">
               <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
               WhatsApp Us
             </a>
           </div>
        </div>

      </div>
    </section>
  );
}

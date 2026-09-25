import Link from 'next/link';

export default function FeaturedProjects() {
  const projects = [
    {
      id: 'residential-solar',
      title: 'Residential Solar Installation',
      category: 'Residential',
      img: 'https://images.unsplash.com/photo-1509391366360-51590d6350f5?auto=format&fit=crop&w=1200&q=80',
      location: 'Islamabad',
      layout: 'left' // Large left
    },
    {
      id: 'commercial-solar',
      title: 'Commercial Solar Installation',
      category: 'Commercial',
      img: 'https://images.unsplash.com/photo-1508514177221-188b1c77eca2?auto=format&fit=crop&w=800&q=80',
      location: 'Rawalpindi',
      layout: 'right-top' // Right stack
    },
    {
      id: 'rooftop-solar',
      title: 'Rooftop Solar Installation',
      category: 'Rooftop',
      img: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80',
      location: 'Islamabad',
      layout: 'right-bottom' // Right stack
    },
    {
      id: 'hybrid-solar-system',
      title: 'Hybrid Solar System',
      category: 'Hybrid',
      img: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80',
      location: 'Islamabad',
      layout: 'full' // Large horizontal
    },
    {
      id: 'on-grid-solar-system',
      title: 'On-Grid Solar System',
      category: 'On-Grid',
      img: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80',
      location: 'Rawalpindi',
      layout: 'bottom-half' // Half width
    },
    {
      id: 'solar-equipment-installation',
      title: 'Solar Equipment Setup',
      category: 'Equipment Setup',
      img: 'https://images.unsplash.com/photo-1584279585671-06797cc2fbf5?auto=format&fit=crop&w=800&q=80',
      location: 'Islamabad',
      layout: 'bottom-half' // Half width
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Featured Solar Projects</h2>
            <p className="text-xl text-slate-600">Explore solar installations and solutions designed for homes, businesses and different energy requirements.</p>
          </div>
          <Link href="/projects" className="inline-flex items-center text-slate-900 font-bold hover:text-amber-500 transition-colors shrink-0">
            View All Projects <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Top Left: Large Featured (1) */}
          <Link href={`/projects/${projects[0].id}`} className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 lg:col-span-8 h-[400px] lg:h-[600px] block">
            <img src={projects[0].img} alt={projects[0].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
               <div className="flex items-center space-x-3 mb-4 text-amber-400 text-sm font-bold tracking-wider uppercase">
                 <span>{projects[0].category}</span>
                 <span className="w-1 h-1 bg-amber-400 rounded-full"></span>
                 <span>{projects[0].location}</span>
               </div>
               <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">{projects[0].title}</h3>
               <span className="inline-flex items-center text-white border-b-2 border-amber-400 pb-1 font-medium group-hover:text-amber-400 transition-colors">View Project &rarr;</span>
            </div>
          </Link>

          {/* Top Right: Stacked (2 and 3) */}
          <div className="lg:col-span-4 flex flex-col gap-6 h-auto lg:h-[600px]">
            {[projects[1], projects[2]].map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`} className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex-1 h-[300px] lg:h-auto block">
                <img src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                   <div className="flex items-center space-x-2 mb-2 text-amber-400 text-xs font-bold tracking-wider uppercase">
                     <span>{project.category}</span>
                     <span className="w-1 h-1 bg-amber-400 rounded-full"></span>
                     <span>{project.location}</span>
                   </div>
                   <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                   <span className="text-white text-sm font-medium group-hover:text-amber-400 transition-colors">View Project &rarr;</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Middle: Horizontal (4) */}
          <Link href={`/projects/${projects[3].id}`} className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 lg:col-span-12 h-[350px] block">
            <img src={projects[3].img} alt={projects[3].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end lg:justify-center lg:items-start lg:pl-16">
               <div className="flex items-center space-x-3 mb-4 text-amber-400 text-sm font-bold tracking-wider uppercase">
                 <span>{projects[3].category}</span>
                 <span className="w-1 h-1 bg-amber-400 rounded-full"></span>
                 <span>{projects[3].location}</span>
               </div>
               <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">{projects[3].title}</h3>
               <span className="inline-flex items-center bg-amber-400 text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-white transition-colors">View Project &rarr;</span>
            </div>
          </Link>

          {/* Bottom: Two Halves (5 and 6) */}
          {[projects[4], projects[5]].map((project) => (
             <Link key={project.id} href={`/projects/${project.id}`} className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 lg:col-span-6 h-[300px] block">
               <img src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
               <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex items-center space-x-3 mb-3 text-amber-400 text-sm font-bold tracking-wider uppercase">
                    <span>{project.category}</span>
                    <span className="w-1 h-1 bg-amber-400 rounded-full"></span>
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <span className="text-white font-medium border-b-2 border-transparent group-hover:border-amber-400 transition-colors">View Project &rarr;</span>
               </div>
             </Link>
          ))}

        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import { projectsData } from '@/lib/projects';

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Featured Solar Projects</h2>
          <p className="text-lg text-slate-600 max-w-2xl mb-8">
            Explore our premium solar installations showcasing residential and commercial clean energy solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projectsData.map((project) => (
            <Link href={`/projects/${project.id}`} key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col transform hover:-translate-y-1 block">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-200">
                <img src={project.src} alt={project.alt} loading="lazy" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white/95 text-slate-900 font-bold px-6 py-2 rounded-full shadow-lg text-sm flex items-center">
                    <svg className="w-4 h-4 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    View Project
                  </span>
                </div>
                <div className="absolute top-4 left-4 bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <div className="flex items-center text-sm text-slate-500 mb-4 gap-4">
                  {project.location !== "Unknown" && (
                    <span className="flex items-center"><svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>{project.location}</span>
                  )}
                  {project.capacity !== "Unknown" && (
                    <span className="flex items-center"><svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>{project.capacity}</span>
                  )}
                </div>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">{project.desc}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center">
           <Link href="/projects" className="inline-flex items-center font-bold text-amber-500 hover:text-amber-600 text-lg transition-colors border-b-2 border-transparent hover:border-amber-500 pb-1">
             View All Projects <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
           </Link>
        </div>
      </div>
    </section>
  );
}

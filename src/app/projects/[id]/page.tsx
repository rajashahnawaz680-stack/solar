import Link from 'next/link';
import { projectsData } from '@/lib/projects';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return projectsData.map((p) => ({
    id: p.id,
  }));
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projectsData.find(p => p.id === params.id);
  
  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Project Hero Image */}
      <div className="w-full h-[50vh] md:h-[60vh] relative bg-[#0B0F0E]">
         <img src={project.src} alt={project.alt} className="w-full h-full object-cover opacity-80" />
         <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent"></div>
         <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-7xl mx-auto w-full">
            <div className="inline-block bg-[#B8D83D] text-[#0B0F0E] font-bold px-4 py-1.5 rounded-full text-sm mb-4">
              {project.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-md">
              {project.title}
            </h1>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
               <h2 className="text-2xl font-bold text-[#0B0F0E] mb-4 border-b border-slate-100 pb-2">Project Overview</h2>
               <p className="text-slate-600 text-lg leading-relaxed">{project.overview}</p>
            </section>
            
            <section>
               <h2 className="text-2xl font-bold text-[#0B0F0E] mb-4 border-b border-slate-100 pb-2">Installation Details</h2>
               <p className="text-slate-600 text-lg leading-relaxed mb-6">
                 This project demonstrates a meticulous approach to solar integration, prioritizing both energy efficiency and aesthetic integrity. Standardized procedures ensure optimal tilt, secure mounting, and clean cable management, adhering strictly to safety and performance standards.
               </p>
               <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="text-lg font-bold text-[#0B0F0E] mb-3">Key Features</h3>
                  <ul className="space-y-3">
                    {project.features.map((feat, i) => (
                      <li key={i} className="flex items-start">
                         <svg className="w-5 h-5 text-[#9dbf2c] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                         <span className="text-slate-700">{feat}</span>
                      </li>
                    ))}
                  </ul>
               </div>
            </section>
            
            <section>
               <h2 className="text-2xl font-bold text-[#0B0F0E] mb-4 border-b border-slate-100 pb-2">Project Summary</h2>
               <p className="text-slate-600 text-lg leading-relaxed">{project.suitableFor}</p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
             <div className="bg-[#0B0F0E] rounded-3xl p-8 sticky top-32 shadow-2xl border border-[#183C32]">
                <h3 className="text-xl font-bold text-white mb-6">Project Information</h3>
                
                <div className="space-y-4 mb-8">
                  {project.systemType !== "Unknown" && (
                  <div className="border-b border-[#183C32] pb-4">
                    <span className="block text-slate-400 text-sm mb-1">System Type</span>
                    <span className="block text-white font-medium">{project.systemType}</span>
                  </div>
                  )}
                  {project.capacity !== "Unknown" && (
                  <div className="border-b border-[#183C32] pb-4">
                    <span className="block text-slate-400 text-sm mb-1">Capacity</span>
                    <span className="block text-white font-medium">{project.capacity}</span>
                  </div>
                  )}
                  {project.location !== "Unknown" && (
                  <div className="border-b border-[#183C32] pb-4">
                    <span className="block text-slate-400 text-sm mb-1">Location</span>
                    <span className="block text-white font-medium">{project.location}</span>
                  </div>
                  )}
                </div>

                <div className="pt-2">
                   <h4 className="text-white font-bold mb-4">Get a Similar Solar Solution</h4>
                   <Link href="/get-quote" className="block w-full bg-[#B8D83D] text-[#0B0F0E] font-bold text-center py-4 rounded-xl hover:bg-[#9dbf2c] transition-colors mb-3 shadow-lg">
                     Request a Quote
                   </Link>
                   <a href="https://wa.me/923125634911?text=Hello%2C%20I%20am%20interested%20in%20a%20solar%20installation%20similar%20to%20your%20projects.%20I%20would%20like%20to%20discuss%20my%20requirements." target="_blank" rel="noopener noreferrer" className="block w-full bg-[#25D366] text-white font-bold text-center py-4 rounded-xl hover:bg-[#20b858] transition-colors shadow-lg flex justify-center items-center">
                     <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                     WhatsApp Us
                   </a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}

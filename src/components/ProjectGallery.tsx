'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const projects = [
    {
      id: 0,
      title: "Residential Solar Installation",
      desc: "Professional rooftop solar solutions designed for residential energy requirements.",
      overview: "This solution involves a complete evaluation of household energy consumption and the deployment of a highly efficient rooftop solar array to offset grid dependency.",
      features: ["Custom rooftop mounting", "Residential inverter integration", "Optimized panel layout"],
      suitableFor: "Ideal for homeowners looking to reduce monthly electricity bills and secure energy independence.",
      src: "https://images.unsplash.com/photo-1509391366360-51590d6350f5?auto=format&fit=crop&w=1200&q=80",
      alt: "Residential rooftop solar panel installation"
    },
    {
      id: 1,
      title: "Commercial Solar Installation",
      desc: "Solar installation solutions designed for commercial and business properties.",
      overview: "A scalable, high-capacity solar infrastructure tailored for businesses. Focuses on maximum yield to offset heavy daytime commercial power loads.",
      features: ["High-capacity commercial panels", "Heavy-duty racking systems", "Commercial grid-tie inverters"],
      suitableFor: "Suitable for factories, offices, and large commercial spaces aiming for ESG goals and operational cost reduction.",
      src: "https://images.unsplash.com/photo-1508514177221-188b1c77eca2?auto=format&fit=crop&w=1200&q=80",
      alt: "Commercial rooftop solar installation"
    },
    {
      id: 2,
      title: "Rooftop Solar Installation",
      desc: "Clean and professional solar panel installation for suitable rooftop spaces.",
      overview: "Standardized rooftop installation utilizing available space efficiently. Engineered to maintain roof integrity while maximizing sun exposure.",
      features: ["Leak-proof mounting hardware", "Clean cable management", "Weather-resistant components"],
      suitableFor: "Perfect for any property with unobstructed south-facing or flat roof space.",
      src: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80",
      alt: "Professional rooftop solar panels"
    },
    {
      id: 3,
      title: "Solar Equipment Setup",
      desc: "Professional placement and setup of solar equipment and supporting components.",
      overview: "Precision installation of critical solar infrastructure, including inverters, safety disconnects, and distribution panels.",
      features: ["Professional wiring", "Safety switch integration", "Space-optimized layout"],
      suitableFor: "Crucial for all solar setups requiring reliable power conversion and safe electrical routing.",
      src: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80",
      alt: "Solar inverter and equipment installation"
    },
    {
      id: 4,
      title: "Hybrid Solar System",
      desc: "Hybrid solar solutions combining solar generation with backup capability.",
      overview: "An advanced system that generates solar power and stores excess energy in a battery bank, ensuring power availability during grid outages.",
      features: ["Battery storage integration", "Smart hybrid inverter", "Automatic failover protection"],
      suitableFor: "Highly recommended for areas experiencing frequent power load-shedding or blackouts.",
      src: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=1200&q=80",
      alt: "Hybrid solar system installation"
    },
    {
      id: 5,
      title: "On-Grid Solar System",
      desc: "Solar systems designed for properties connected to the electrical grid.",
      overview: "A highly cost-effective setup that synchronizes directly with the national grid. Allows for net-metering where excess generated power is exported.",
      features: ["Grid synchronization", "Net-metering ready", "No battery maintenance required"],
      suitableFor: "Best for urban areas with stable grid connections looking for maximum ROI and bill reduction.",
      src: "https://images.unsplash.com/photo-1548614606-52b4451f994b?auto=format&fit=crop&w=1200&q=80",
      alt: "On-grid solar panel installation"
    }
  ];

  return (
    <section className="py-24 bg-zinc-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-6 tracking-tight">Our Solar Projects</h2>
          <p className="text-xl text-zinc-600">
            Explore solar installation solutions for residential and commercial properties.
          </p>
        </div>

        {/* 6-card 3-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-zinc-200 flex flex-col transform hover:-translate-y-1"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-200">
                <img 
                  src={project.src} 
                  alt={project.alt}
                  loading="lazy"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white/95 text-zinc-900 font-bold px-6 py-2 rounded-full shadow-lg text-sm flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{project.title}</h3>
                <p className="text-zinc-600 text-base leading-relaxed">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Below Projects */}
        <div className="bg-white border border-zinc-200 rounded-2xl p-10 md:p-12 text-center max-w-4xl mx-auto shadow-sm">
          <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Want Solar for Your Property?</h3>
          <p className="text-zinc-600 mb-8 text-lg md:text-xl max-w-2xl mx-auto">Tell us about your solar requirements and our team can discuss the right solution for your property.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/get-quote" className="bg-emerald-600 text-white font-bold px-8 py-4 rounded-md hover:bg-emerald-700 transition w-full sm:w-auto shadow-sm text-lg">
              Request a Quote
            </Link>
            <a href="https://wa.me/923125634911?text=Hello%2C%20I%20am%20interested%20in%20solar%20installation.%20I%20would%20like%20to%20discuss%20my%20requirements%20and%20get%20a%20quotation." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold px-8 py-4 rounded-md hover:bg-[#20b858] transition w-full sm:w-auto shadow-sm flex items-center justify-center text-lg">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Detailed Project Modal */}
      {selectedProject !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-zinc-950/98 flex items-center justify-center p-4 md:p-8 backdrop-blur-md overflow-y-auto" 
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-6xl bg-white rounded-2xl overflow-hidden shadow-2xl my-auto flex flex-col md:flex-row" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900 bg-white/80 hover:bg-zinc-100 p-2 rounded-full transition z-10 shadow-sm"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {/* Modal Image Side */}
            <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full bg-zinc-100">
               <img 
                 src={projects[selectedProject].src} 
                 alt={projects[selectedProject].alt}
                 className="absolute inset-0 w-full h-full object-cover"
               />
               {/* Controls if we wanted gallery navigation inside the modal */}
               <button 
                 className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-zinc-900/50 hover:bg-emerald-600 p-2 rounded-full transition"
                 onClick={(e) => { e.stopPropagation(); setSelectedProject((selectedProject - 1 + projects.length) % projects.length); }}
                 aria-label="Previous"
               >
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
               </button>
               <button 
                 className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-zinc-900/50 hover:bg-emerald-600 p-2 rounded-full transition"
                 onClick={(e) => { e.stopPropagation(); setSelectedProject((selectedProject + 1) % projects.length); }}
                 aria-label="Next"
               >
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
               </button>
            </div>

            {/* Modal Content Side */}
            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto max-h-[80vh] flex flex-col">
               <span className="text-emerald-600 font-bold text-sm tracking-widest uppercase mb-2">Project Details</span>
               <h3 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-6">{projects[selectedProject].title}</h3>
               
               <div className="mb-8">
                 <h4 className="text-xl font-bold text-zinc-900 mb-3">Project Overview</h4>
                 <p className="text-zinc-600 leading-relaxed">{projects[selectedProject].overview}</p>
               </div>

               <div className="mb-8">
                 <h4 className="text-xl font-bold text-zinc-900 mb-3">Key Features</h4>
                 <ul className="space-y-2">
                   {projects[selectedProject].features.map((feature, idx) => (
                     <li key={idx} className="flex items-start">
                       <svg className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                       <span className="text-zinc-600">{feature}</span>
                     </li>
                   ))}
                 </ul>
               </div>

               <div className="mb-10 bg-zinc-50 p-6 rounded-xl border border-zinc-100">
                 <h4 className="text-lg font-bold text-zinc-900 mb-2">Why This Solar Solution?</h4>
                 <p className="text-zinc-600">{projects[selectedProject].suitableFor}</p>
               </div>

               <div className="mt-auto border-t border-zinc-200 pt-8">
                 <h4 className="text-lg font-bold text-zinc-900 mb-4">Request Your Solar Quote</h4>
                 <div className="flex flex-col sm:flex-row gap-4">
                   <Link href="/get-quote" onClick={() => setSelectedProject(null)} className="flex-1 bg-zinc-900 text-white font-bold py-4 px-6 rounded-md hover:bg-zinc-800 transition text-center shadow-sm">
                     Request a Quote
                   </Link>
                   <a href="https://wa.me/923125634911?text=Hello%2C%20I%20am%20interested%20in%20solar%20installation.%20I%20would%20like%20to%20discuss%20my%20requirements%20and%20get%20a%20quotation." target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#25D366] text-white font-bold py-4 px-6 rounded-md hover:bg-[#20b858] transition text-center shadow-sm flex items-center justify-center">
                     WhatsApp Us
                   </a>
                 </div>
               </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

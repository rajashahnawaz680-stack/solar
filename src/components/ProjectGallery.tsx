'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Esc key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    if (selectedImage !== null) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const projects = [
    {
      id: 0,
      title: "Residential Solar Installation",
      desc: "Professional rooftop solar installation designed for residential energy needs.",
      src: "https://images.unsplash.com/photo-1509391366360-51590d6350f5?auto=format&fit=crop&w=800&q=80",
      alt: "Residential rooftop solar panel installation"
    },
    {
      id: 1,
      title: "Commercial Solar Installation",
      desc: "Solar installation solutions for commercial and business properties.",
      src: "https://images.unsplash.com/photo-1508514177221-188b1c77eca2?auto=format&fit=crop&w=800&q=80",
      alt: "Commercial building solar panels"
    },
    {
      id: 2,
      title: "Rooftop Solar Installation",
      desc: "Clean rooftop solar panel installation with professional equipment placement.",
      src: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80",
      alt: "Technicians installing solar panels on rooftop"
    },
    {
      id: 3,
      title: "Solar Equipment Setup",
      desc: "Professional placement of solar panels and associated inverter equipment.",
      src: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80",
      alt: "Professional solar equipment and inverter setup"
    },
    {
      id: 4,
      title: "Hybrid Solar System",
      desc: "Hybrid solar installation combining grid access with battery backup capabilities.",
      src: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80",
      alt: "Hybrid solar panel installation on a clear day"
    },
    {
      id: 5,
      title: "On-Grid Solar System",
      desc: "Modern on-grid solar installation connected securely to electrical infrastructure.",
      src: "https://images.unsplash.com/photo-1548614606-52b4451f994b?auto=format&fit=crop&w=800&q=80",
      alt: "Clean modern on-grid solar installation"
    }
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % projects.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + projects.length) % projects.length);
    }
  };

  return (
    <section className="py-24 bg-zinc-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-6 tracking-tight">Our Solar Projects</h2>
          <p className="text-xl text-zinc-600">
            Explore examples of professional solar installations for residential and commercial properties.
          </p>
        </div>

        {/* 3-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer border border-zinc-200 flex flex-col"
              onClick={() => setSelectedImage(project.id)}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                <Image 
                  src={project.src} 
                  alt={project.alt} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/95 text-zinc-900 font-bold px-6 py-2 rounded-full shadow-sm text-sm">View Project</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">{project.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Below Projects */}
        <div className="bg-white border border-zinc-200 rounded-xl p-10 md:p-12 text-center max-w-4xl mx-auto shadow-sm">
          <h3 className="text-3xl font-bold text-zinc-900 mb-4">Want Solar for Your Property?</h3>
          <p className="text-zinc-600 mb-8 text-lg max-w-2xl mx-auto">Tell us about your solar requirements and our team can discuss the right solution for your property.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/get-quote" className="bg-emerald-600 text-white font-bold px-8 py-4 rounded-md hover:bg-emerald-700 transition w-full sm:w-auto shadow-sm">
              Request a Quote
            </Link>
            <a href="https://wa.me/03125634911?text=Hello,%20I%20am%20interested%20in%20solar%20installation.%20I%20would%20like%20to%20discuss%20my%20requirements%20and%20get%20a%20quotation." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold px-8 py-4 rounded-md hover:bg-[#20b858] transition w-full sm:w-auto shadow-sm flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-[100] bg-zinc-950/95 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white bg-zinc-800/80 hover:bg-emerald-600 p-3 rounded-full transition z-[110]"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          <button 
            className="absolute left-2 md:left-8 text-white bg-zinc-800/80 hover:bg-emerald-600 p-3 md:p-4 rounded-full transition z-[110]"
            onClick={handlePrev}
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>

          <div className="relative w-full max-w-5xl h-[60vh] md:h-[80vh] mx-12 md:mx-24 flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
             <div className="relative w-full h-full">
                <Image 
                  src={projects[selectedImage].src} 
                  alt={projects[selectedImage].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
             </div>
             <div className="absolute bottom-[-60px] md:bottom-[-80px] w-full text-center">
                <h3 className="text-white text-lg md:text-2xl font-bold">{projects[selectedImage].title}</h3>
                <p className="text-zinc-400 text-sm md:text-base mt-1">{projects[selectedImage].desc}</p>
             </div>
          </div>

          <button 
            className="absolute right-2 md:right-8 text-white bg-zinc-800/80 hover:bg-emerald-600 p-3 md:p-4 rounded-full transition z-[110]"
            onClick={handleNext}
            aria-label="Next image"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      )}
    </section>
  );
}

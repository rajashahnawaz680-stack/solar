import Link from 'next/link';

export default function WhatWeDo() {
  const services = [
    {
      title: 'Residential Solar Installation',
      desc: 'Complete rooftop solar solutions designed for modern homes to drastically cut utility bills.',
      href: '/solar-installation-islamabad',
      img: 'https://images.unsplash.com/photo-1509391366360-51590d6350f5?auto=format&fit=crop&w=800&q=80',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
      )
    },
    {
      title: 'Commercial Solar Installation',
      desc: 'Heavy-duty commercial solar architectures engineered to protect business margins and ensure reliability.',
      href: '/solar-installation-rawalpindi',
      img: 'https://images.unsplash.com/photo-1508514177221-188b1c77eca2?auto=format&fit=crop&w=800&q=80',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
      )
    },
    {
      title: 'Solar Panel Installation',
      desc: 'Professional end-to-end installation by certified technicians following global engineering standards.',
      href: '/about',
      img: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      )
    },
    {
      title: 'On-Grid Solar Systems',
      desc: 'Maximum return on investment using direct grid connections to power your property instantly.',
      href: '/on-grid-solar-system',
      img: 'https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&w=800&q=80',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      )
    },
    {
      title: 'Hybrid Solar Systems',
      desc: 'Intelligent solar setups combined with robust battery storage to protect against grid failures.',
      href: '/hybrid-solar-system',
      img: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
      )
    },
    {
      title: 'Solar System Quotation',
      desc: 'Get a comprehensive, customized solar engineering proposal and financial breakdown.',
      href: '/get-quote',
      img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">What We Do</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Providing end-to-end solar engineering, installation, and maintenance for residential and commercial energy independence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <Link key={idx} href={svc.href} className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all h-[400px] block cursor-pointer">
              <img src={svc.img} alt={svc.title} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/10 group-hover:via-slate-900/80 transition-all duration-500"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="bg-amber-400 w-14 h-14 rounded-full flex items-center justify-center mb-6 transform group-hover:-translate-y-2 transition-transform duration-500 shadow-lg">
                  {svc.icon}
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-3 transform group-hover:-translate-y-2 transition-transform duration-500">{svc.title}</h3>
                <p className="text-slate-300 text-sm mb-6 max-w-sm opacity-90 transform group-hover:-translate-y-2 transition-transform duration-500 line-clamp-3">
                  {svc.desc}
                </p>
                <span className="inline-block text-amber-400 font-bold uppercase tracking-wider text-sm border-b border-amber-400 self-start pb-0.5 group-hover:-translate-y-2 transition-transform duration-500">
                  Explore &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

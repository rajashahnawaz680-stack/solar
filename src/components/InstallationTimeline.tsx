import Link from 'next/link';

export default function InstallationTimeline() {
  const steps = [
    {
      num: '01',
      title: 'Tell Us About Your Property',
      desc: 'Provide basic details about your location and energy requirements.',
      icon: (
        <svg className="w-6 h-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
      )
    },
    {
      num: '02',
      title: 'Site Assessment',
      desc: 'Our engineers conduct a physical or remote evaluation of your roof and electrical layout.',
      icon: (
        <svg className="w-6 h-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
      )
    },
    {
      num: '03',
      title: 'System Planning',
      desc: 'We design the optimal solar architecture tailored to your specific energy needs.',
      icon: (
        <svg className="w-6 h-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
      )
    },
    {
      num: '04',
      title: 'Equipment Selection',
      desc: 'Sourcing verified, high-efficiency solar panels and inverters for maximum yield.',
      icon: (
        <svg className="w-6 h-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
      )
    },
    {
      num: '05',
      title: 'Professional Installation',
      desc: 'Expert mounting, wiring, and integration by certified solar technicians.',
      icon: (
        <svg className="w-6 h-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      )
    },
    {
      num: '06',
      title: 'Testing & Handover',
      desc: 'System is activated, rigorously tested, and officially handed over for use.',
      icon: (
        <svg className="w-6 h-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      )
    }
  ];

  return (
    <div className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">From Consultation to Installation</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Our streamlined process ensures a seamless transition to solar energy.</p>
      </div>
      
      {/* Mobile Vertical Timeline */}
      <div className="lg:hidden space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
        {steps.map((step, idx) => (
          <div key={idx} className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-amber-400 text-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">
              {step.num}
            </div>
            <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center mb-3">
                 <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-3">{step.icon}</div>
                 <h3 className="font-bold text-slate-900 text-lg">{step.title}</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Horizontal Timeline */}
      <div className="hidden lg:block relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
        <div className="grid grid-cols-6 gap-4 relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className={`flex flex-col items-center ${idx % 2 === 0 ? 'justify-end pb-12' : 'justify-start pt-12 mt-auto'}`}>
              
              {/* Content Box */}
              <div className={`w-full bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-sm relative ${idx % 2 === 0 ? 'mb-8' : 'mt-8 order-last'}`}>
                 <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-4">{step.icon}</div>
                 <h3 className="font-bold text-slate-900 mb-2 leading-tight">{step.title}</h3>
                 <p className="text-slate-600 text-xs leading-relaxed">{step.desc}</p>
                 {/* Connecting Line */}
                 <div className={`absolute left-1/2 w-0.5 bg-slate-200 h-8 -translate-x-1/2 ${idx % 2 === 0 ? '-bottom-8' : '-top-8'}`}></div>
              </div>

              {/* Number Node */}
              <div className="w-12 h-12 rounded-full border-4 border-white bg-amber-400 text-slate-900 shadow-md flex items-center justify-center font-extrabold z-20 absolute top-1/2 -translate-y-1/2">
                {step.num}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-16">
         <Link href="/get-quote" className="inline-block bg-slate-900 text-white font-bold px-8 py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg">
           Start Your Solar Project &rarr;
         </Link>
      </div>
    </div>
  );
}
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return [
    { slug: 'solar-installation-guide-islamabad' },
    { slug: '5kw-vs-10kw-solar-system' },
    { slug: 'on-grid-vs-hybrid' }
  ];
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const titles: Record<string, string> = {
    'solar-installation-guide-islamabad': 'The Ultimate Guide to Solar Installation in Islamabad',
    '5kw-vs-10kw-solar-system': '5kW vs 10kW Solar System: Which is Right For Your Home?',
    'on-grid-vs-hybrid': 'On-Grid vs Hybrid Solar: Making the Smart Choice'
  };

  const title = titles[params.slug];
  if (!title) notFound();

  return (
    <main className="min-h-screen bg-white pt-24 pb-24">
      
      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
         <span className="text-amber-500 font-bold uppercase tracking-wider text-sm mb-4 block">Knowledge Center</span>
         <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">{title}</h1>
         <div className="flex items-center justify-center gap-4 text-slate-500 text-sm font-medium">
           <span>Updated Sept 2026</span>
           <span>&bull;</span>
           <span>5 min read</span>
         </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
         <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-2xl bg-slate-900">
            <img src="https://images.unsplash.com/photo-1509391366360-51590d6350f5?auto=format&fit=crop&w=1200&q=80" alt={title} className="w-full h-full object-cover" />
         </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
         <article className="prose prose-lg prose-slate max-w-none">
           <p className="lead text-xl text-slate-600 mb-8 font-medium">
             Transitioning to solar energy requires careful planning. Whether you are aiming for grid independence or substantial bill reduction, choosing the correct architecture is paramount.
           </p>
           <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Understanding Your Energy Needs</h2>
           <p className="text-slate-600 mb-6">
             Before selecting a system, it is vital to calculate your peak energy consumption. Review your summer electricity bills to determine the maximum units consumed. A professional site assessment will map this consumption against your available roof space.
           </p>
           <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Professional Installation Matters</h2>
           <p className="text-slate-600 mb-6">
             High-quality panels mean very little if installed poorly. Ensuring proper structural mounting, optimized south-facing tilt, and heavy-duty wiring are the hallmarks of a system designed to last decades without degradation.
           </p>
         </article>

         {/* CTA inside article */}
         <div className="mt-16 bg-slate-900 rounded-3xl p-10 text-center text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Ready for a Professional Assessment?</h3>
            <p className="text-slate-300 mb-8">Let our experts analyze your property and recommend the perfect setup.</p>
            <Link href="/get-quote" className="inline-block bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-amber-500 transition-colors">Request Free Quote</Link>
         </div>
      </div>
    </main>
  );
}

import Link from 'next/link';

export const metadata = {
  title: 'Solar Knowledge Center & Blog | SUNORA ENERGY',
  description: 'Expert articles and guides on solar installations, system sizing, and clean energy in Islamabad and Rawalpindi.'
};

export default function BlogPage() {
  const articles = [
    { slug: 'solar-installation-guide-islamabad', title: 'The Ultimate Guide to Solar Installation in Islamabad', category: 'Installation', date: 'Sept 2026', read: '5 min', img: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80' },
    { slug: '5kw-vs-10kw-solar-system', title: '5kW vs 10kW Solar System: Which is Right For Your Home?', category: 'System Sizing', date: 'Aug 2026', read: '4 min', img: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80' },
    { slug: 'on-grid-vs-hybrid', title: 'On-Grid vs Hybrid Solar: Making the Smart Choice', category: 'Technology', date: 'Jul 2026', read: '6 min', img: 'https://images.unsplash.com/photo-1548614606-52b4451f994b?auto=format&fit=crop&w=800&q=80' }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B0F0E] mb-6 tracking-tight">Solar Knowledge Center</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Expert insights, guides, and updates to help you navigate your transition to clean energy.</p>
        </div>

        {/* Featured Article */}
        <Link href={`/blog/${articles[0].slug}`} className="block group mb-16 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100">
           <div className="grid grid-cols-1 lg:grid-cols-2">
             <div className="relative h-64 lg:h-full overflow-hidden bg-slate-200">
                <img src={articles[0].img} alt={articles[0].title} className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700" />
             </div>
             <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4 text-sm font-bold">
                  <span className="text-[#9dbf2c] uppercase tracking-wide">{articles[0].category}</span>
                  <span className="text-slate-400">&bull;</span>
                  <span className="text-slate-400">{articles[0].read} Read</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#0B0F0E] mb-4 group-hover:text-amber-600 transition-colors">{articles[0].title}</h2>
                <p className="text-slate-600 text-lg mb-8 line-clamp-3">Everything you need to know about deploying a rooftop solar array in the capital. We cover climate factors, optimal tilt angles, and structural considerations specific to Islamabad homes.</p>
                <span className="text-[#0B0F0E] font-bold flex items-center border-b-2 border-slate-900 inline-block self-start pb-1">
                  Read Article <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
             </div>
           </div>
        </Link>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {articles.slice(1).map(art => (
             <Link href={`/blog/${art.slug}`} key={art.slug} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col transform hover:-translate-y-1">
               <div className="relative h-56 w-full overflow-hidden bg-slate-200">
                 <img src={art.img} alt={art.title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute top-4 left-4 bg-white/95 text-[#0B0F0E] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                   {art.category}
                 </div>
               </div>
               <div className="p-6 flex-1 flex flex-col">
                 <div className="text-xs text-slate-400 font-medium mb-3 flex items-center justify-between">
                   <span>{art.date}</span>
                   <span>{art.read} Read</span>
                 </div>
                 <h3 className="text-xl font-bold text-[#0B0F0E] mb-3 group-hover:text-amber-600 transition-colors">{art.title}</h3>
               </div>
             </Link>
           ))}
        </div>
      </div>
    </main>
  );
}

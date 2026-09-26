import Link from 'next/link';

export default function SolarSolutions() {
  const solutions = [
    {
      title: 'Residential Solar',
      desc: 'Complete rooftop solar solutions designed for modern homes.',
      href: '/projects/residential-solar',
      img: 'https://images.unsplash.com/photo-1509391366360-51590d6350f5?auto=format&fit=crop&w=1200&q=80',
      colSpan: 'md:col-span-2 md:row-span-2'
    },
    {
      title: 'Commercial Solar',
      desc: 'Heavy-duty commercial solar architectures engineered to protect business margins.',
      href: '/projects/commercial-solar',
      img: 'https://images.unsplash.com/photo-1508514177221-188b1c77eca2?auto=format&fit=crop&w=800&q=80',
      colSpan: 'md:col-span-1 md:row-span-1'
    },
    {
      title: '5kW Solar System',
      desc: 'Standard capacity optimized for average household consumption.',
      href: '/5kw-solar-system',
      img: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80',
      colSpan: 'md:col-span-1 md:row-span-1'
    },
    {
      title: '10kW Solar System',
      desc: 'High capacity residential system designed to offset high-load appliances.',
      href: '/10kw-solar-system',
      img: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=1200&q=80',
      colSpan: 'md:col-span-2 md:row-span-1'
    },
    {
      title: '15kW Solar System',
      desc: 'Commercial-grade capacity engineered for large properties.',
      href: '/15kw-solar-system',
      img: 'https://images.unsplash.com/photo-1548614606-52b4451f994b?auto=format&fit=crop&w=800&q=80',
      colSpan: 'md:col-span-1 md:row-span-1'
    },
    {
      title: 'Hybrid Solar System',
      desc: 'Reliable battery backup solutions for uninterrupted energy.',
      href: '/hybrid-solar-system',
      img: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80',
      colSpan: 'md:col-span-1 md:row-span-1'
    },
    {
      title: 'On-Grid Solar System',
      desc: 'Grid-connected systems utilizing net metering processing.',
      href: '/on-grid-solar-system',
      img: 'https://images.unsplash.com/photo-1584279585671-06797cc2fbf5?auto=format&fit=crop&w=800&q=80',
      colSpan: 'md:col-span-1 md:row-span-1'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B0F0E] mb-6 tracking-tight">Solar Solutions Designed Around Your Energy Needs</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Explore solar solutions for homes, businesses and different energy requirements across Islamabad and Rawalpindi.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {solutions.map((item, idx) => (
            <Link key={idx} href={item.href} className={`group block relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${item.colSpan}`}>
              <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm mb-6 max-w-sm line-clamp-2">{item.desc}</p>
                <div className="inline-flex items-center text-[#B8D83D] font-bold text-sm tracking-wider uppercase group-hover:text-white transition-colors">
                  Explore Solution &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';

export default function Projects() {
  return (
    <div className="min-h-screen bg-soft py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-mainText mb-4">Solar Projects Across Islamabad & Rawalpindi</h1>
          <p className="text-subText">View our completed installations and engineering work.</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-borderC p-12 text-center">
          <p className="text-subText mb-6">Real project gallery is currently being updated. Check back soon for detailed installation photos and system specifications.</p>
          <Link href="/get-a-quote" className="inline-block bg-gold text-primary font-bold px-8 py-3 rounded-xl hover:bg-yellow-500 transition-colors">
            Request a Quote Instead
          </Link>
        </div>
      </div>
    </div>
  );
}

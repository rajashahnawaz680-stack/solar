import Link from 'next/link';

export default function LocalSEO() {
  return (
    <div className="min-h-screen bg-soft py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold text-mainText mb-4 capitalize">Solar Company in {'rawalpindi'}</h1>
        <p className="text-subText mb-8">Premium solar engineering and installation services tailored for {'rawalpindi'} residents and businesses.</p>
        <Link href="/get-a-quote" className="inline-block bg-gold text-primary font-bold px-8 py-3 rounded-xl hover:bg-yellow-500 transition-colors">
          Get a Quote for Your Property
        </Link>
      </div>
    </div>
  );
}

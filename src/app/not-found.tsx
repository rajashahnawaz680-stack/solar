import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[60vh] bg-zinc-50 px-4 text-center">
      <div className="w-20 h-20 bg-zinc-200 text-zinc-600 rounded-full flex items-center justify-center mb-6">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">Page Not Found</h1>
      <p className="text-lg text-zinc-600 mb-8 max-w-lg">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <Link href="/" className="bg-zinc-900 text-white font-bold px-8 py-4 rounded-md hover:bg-zinc-800 transition">
          Return Home
        </Link>
        <Link href="/get-quote" className="bg-emerald-600 text-white font-bold px-8 py-4 rounded-md hover:bg-emerald-700 transition">
          Get Free Quote
        </Link>
      </div>
      <div className="text-zinc-500 flex flex-wrap justify-center gap-4 text-sm">
        <Link href="/solar-installation-islamabad" className="hover:text-emerald-600 transition">Solar Islamabad</Link>
        <Link href="/solar-installation-rawalpindi" className="hover:text-emerald-600 transition">Solar Rawalpindi</Link>
        <Link href="/solar-on-installments" className="hover:text-emerald-600 transition">Installments</Link>
        <Link href="/contact" className="hover:text-emerald-600 transition">Contact Us</Link>
      </div>
    </div>
  );
}

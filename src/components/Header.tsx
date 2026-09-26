'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    ['Home', '/'],
    ['Solar Packages', '/solar-packages'],
    ['Solutions', '/solar-solutions/residential'],
    ['Installation', '/solar-installation'],
    ['How It Works', '/how-it-works'],
    ['FAQ', '/faq'],
    ['Contact', '/contact'],
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B0F0E]/95 backdrop-blur-md shadow-2xl py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-[#B8D83D] rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-[#0B0F0E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <span className="text-white font-extrabold text-xl tracking-tight">Solar Panel</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map(([label, href]) => (
            <Link key={label} href={href}
              className={`text-sm font-medium transition-colors ${label === 'Solar Packages' ? 'text-[#B8D83D] font-bold' : 'text-slate-300 hover:text-[#B8D83D]'}`}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="https://wa.me/923125634911" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-white hover:text-[#25D366] transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/></svg>
            WhatsApp
          </a>
          <Link href="/get-quote" className="bg-[#B8D83D] text-[#0B0F0E] text-sm font-bold py-2.5 px-6 rounded-xl hover:bg-[#9dbf2c] transition-all shadow-lg">
            Get Solar Quote
          </Link>
        </div>

        <button className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#0B0F0E] border-t border-[#183C32]">
          <div className="px-4 py-6 space-y-1 max-h-[80vh] overflow-y-auto">
            {navLinks.map(([label, href]) => (
              <Link key={label} href={href} onClick={() => setMenuOpen(false)}
                className={`block font-medium py-3 px-3 rounded-xl transition-colors ${label === 'Solar Packages' ? 'text-[#B8D83D] font-bold bg-[#183C32]/40' : 'text-slate-200 hover:bg-white/10 hover:text-[#B8D83D]'}`}>
                {label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3 border-t border-[#183C32] mt-4">
              <Link href="/get-quote" onClick={() => setMenuOpen(false)}
                className="w-full bg-[#B8D83D] text-[#0B0F0E] text-center font-bold py-3.5 rounded-xl">
                Get Solar Quote
              </Link>
              <a href="https://wa.me/923125634911" target="_blank" rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white text-center font-bold py-3.5 rounded-xl flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/></svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

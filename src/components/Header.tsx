'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location, setLocation] = useState('Islamabad');
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    ['Home', '/'],
    ['Solar Solutions', '/solar-solutions'],
    ['Services', '/services'],
    ['Projects', '/projects'],
    ['Solar Calculator', '/calculator'],
    ['About Us', '/about'],
    ['FAQ', '/faq'],
    ['Contact', '/contact'],
  ];

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-primary text-gray-300 text-xs py-2 px-4 border-b border-secondary hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            📍 Serving Islamabad & Rawalpindi
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+92325634911" className="hover:text-gold transition-colors">📞 0325 634911</a>
            <a href="mailto:rajashahnawaz680@gmail.com" className="hover:text-gold transition-colors">✉ rajashahnawaz680@gmail.com</a>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-primary shadow-xl py-3' : 'bg-primary py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
              <span className="font-extrabold text-primary text-xl">S</span>
            </div>
            <span className="text-white font-extrabold text-xl tracking-tight hidden sm:block">SOLAR<span className="text-gold">PRO</span></span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(([label, href]) => (
              <Link key={label} href={href} className="text-sm font-semibold text-gray-300 hover:text-gold transition-colors">
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <select 
              value={location} 
              onChange={(e) => setLocation(e.target.value)}
              className="bg-secondary text-white text-sm font-semibold border-none rounded-lg px-3 py-2 outline-none cursor-pointer focus:ring-1 focus:ring-gold"
            >
              <option value="Islamabad">📍 Islamabad</option>
              <option value="Rawalpindi">📍 Rawalpindi</option>
            </select>
            <Link href="/get-a-quote" className="bg-gold text-primary text-sm font-bold py-2.5 px-6 rounded-lg hover:bg-yellow-500 transition-colors">
              Get a Quote
            </Link>
          </div>

          <button className="lg:hidden text-white p-2 rounded-lg" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-primary border-t border-secondary mt-3">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map(([label, href]) => (
                <Link key={label} href={href} onClick={() => setMenuOpen(false)} className="block text-gray-300 font-medium py-3 hover:text-gold">
                  {label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-secondary flex flex-col gap-4">
                <select 
                  value={location} 
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-secondary text-white w-full text-sm font-semibold rounded-lg px-3 py-3 outline-none"
                >
                  <option value="Islamabad">📍 Islamabad</option>
                  <option value="Rawalpindi">📍 Rawalpindi</option>
                </select>
                <Link href="/get-a-quote" className="w-full bg-gold text-primary text-center font-bold py-3 rounded-lg">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

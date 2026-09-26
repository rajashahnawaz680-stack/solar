import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-400 pt-20 pb-12 border-t border-secondary mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                <span className="font-extrabold text-primary text-xl">S</span>
              </div>
              <span className="text-white font-extrabold text-xl tracking-tight">SOLAR<span className="text-gold">PRO</span></span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">Premium solar technology and modern engineering for residential and commercial properties.</p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Solar Solutions</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/solar-solutions/on-grid" className="hover:text-gold">On-Grid Solar</Link></li>
              <li><Link href="/solar-solutions/hybrid" className="hover:text-gold">Hybrid Solar</Link></li>
              <li><Link href="/solar-solutions/off-grid" className="hover:text-gold">Off-Grid Solar</Link></li>
              <li><Link href="/solar-solutions/commercial" className="hover:text-gold">Commercial Solar</Link></li>
              <li><Link href="/solar-solutions/battery" className="hover:text-gold">Battery Storage</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-gold">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-gold">Projects</Link></li>
              <li><Link href="/calculator" className="hover:text-gold">Solar Calculator</Link></li>
              <li><Link href="/faq" className="hover:text-gold">FAQ</Link></li>
              <li><Link href="/get-a-quote" className="hover:text-gold">Get a Quote</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-gold">📍</span>
                <span>Islamabad & Rawalpindi</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold">📞</span>
                <a href="tel:+92325634911" className="hover:text-gold">0325 634911</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold">✉</span>
                <a href="mailto:rajashahnawaz680@gmail.com" className="hover:text-gold break-all">rajashahnawaz680@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-secondary flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 SolarPro. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
            <Link href="/disclaimer" className="hover:text-white">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

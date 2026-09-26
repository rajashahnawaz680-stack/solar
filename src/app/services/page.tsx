import Link from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen bg-soft py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-mainText mb-4">Complete Solar Services</h1>
          <p className="text-subText">Professional engineering, installation, and support services.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Residential Solar', 'Commercial Solar', 'Solar Installation', 'Battery Storage', 'Solar Maintenance', 'Net Billing Assistance'].map(s => (
            <Link key={s} href="/get-a-quote" className="bg-white p-8 rounded-2xl border border-borderC shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-mainText mb-3">{s}</h3>
              <p className="text-primary font-bold hover:text-gold text-sm">Learn More →</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

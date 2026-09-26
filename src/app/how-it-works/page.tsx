import Link from 'next/link';

export const metadata = {
  title: 'How It Works — Solar Panel Rawalpindi & Islamabad',
  description: 'Understand the solar consultation and installation process from first enquiry to completion.',
};

const steps = [
  { num: '01', title: 'Tell Us Your Requirements', desc: 'Share your electricity usage, property details and energy goals through our online form or directly via WhatsApp or phone.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80' },
  { num: '02', title: 'Review Your Electricity Usage', desc: 'We review your electricity bill, property type and location to understand the scale and scope of the solar requirement.', img: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=800&q=80' },
  { num: '03', title: 'Discuss Your Solar Options', desc: 'We discuss the most suitable solution — on-grid, hybrid or battery backup — and explain the key differences clearly.', img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80' },
  { num: '04', title: 'Receive Your Customized Proposal', desc: 'After reviewing your requirements, we prepare a customized proposal. Cash and installment options can both be included.', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80' },
  { num: '05', title: 'Move Forward With Installation', desc: 'Once you approve the proposal, our team schedules and executes the installation with relevant support.', img: 'https://images.unsplash.com/photo-1509391366360-51590d6350f5?auto=format&fit=crop&w=800&q=80' },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-[#F5F6F1]">
      <div className="bg-[#0B0F0E] pt-32 pb-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">How the Process Works</h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">A transparent overview of how we work with you from first enquiry to installation.</p>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="space-y-16">
          {steps.map((step, i) => (
            <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? '' : ''}`}>
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="text-8xl font-extrabold text-gray-100 leading-none mb-4">{step.num}</div>
                <h2 className="text-2xl font-extrabold text-[#0B0F0E] mb-4">{step.title}</h2>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
              <div className={`rounded-2xl overflow-hidden shadow-xl ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img src={step.img} alt={step.title} className="w-full h-64 object-cover" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 bg-[#0B0F0E] rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Start?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">Tell us your requirements and we will begin the process.</p>
          <Link href="/get-quote" className="inline-block bg-[#B8D83D] text-[#0B0F0E] font-bold px-10 py-4 rounded-xl hover:bg-[#9dbf2c] transition-colors shadow-xl">
            Build My Solar Plan
          </Link>
        </div>
      </div>
    </main>
  );
}

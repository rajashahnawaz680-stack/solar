import Link from 'next/link';

export const metadata = {
  title: 'Solar FAQ — Solar Panel Rawalpindi & Islamabad',
  description: 'Answers to common solar questions about residential, commercial, battery, net metering and payment options.',
};

const faqs = [
  { q: 'How do I know what solar system I need?', a: 'System size is determined by analyzing your monthly electricity bill, available roof space, and backup goals. We discuss this during our consultation.' },
  { q: 'Can I pay in cash?', a: 'Yes. We provide direct cash purchase options based on a finalized custom quotation prepared specifically for your property.' },
  { q: 'Can I pay through installments?', a: 'Yes. We offer flexible installment options. Contact us to discuss eligibility and available payment plans.' },
  { q: 'Do I need battery backup?', a: 'Battery backup is optional but recommended if you experience frequent load shedding or need continued power during outages.' },
  { q: 'Can solar help during load shedding?', a: 'Yes. A hybrid solar system with battery backup can keep critical appliances running when the grid is down.' },
  { q: 'What information is needed for a quotation?', a: 'Your average monthly electricity bill, property location, property type, and backup requirements. Share this through our solar plan form.' },
  { q: 'Do you provide residential solutions?', a: 'Yes. We specialize in rooftop solar systems for homes, villas and residential properties.' },
  { q: 'Do you provide commercial solutions?', a: 'Yes. We design solar systems for offices, shops, factories and commercial buildings.' },
  { q: 'Do you serve Rawalpindi and Islamabad?', a: 'Yes. Rawalpindi and Islamabad are our primary service areas.' },
  { q: 'How do I contact you?', a: 'Call or WhatsApp us at 03125634911, or email rajashahnawaz680@gmail.com. You can also submit requirements through our solar plan form.' },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#F5F6F1]">
      <div className="bg-[#0B0F0E] pt-32 pb-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">Clear answers to common solar questions.</p>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-white rounded-2xl shadow-sm border border-gray-100 cursor-pointer overflow-hidden">
              <summary className="flex items-center justify-between p-6 font-bold text-[#0B0F0E] list-none select-none">
                <span>{faq.q}</span>
                <svg className="w-5 h-5 text-[#B8D83D] shrink-0 ml-4 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">{faq.a}</div>
            </details>
          ))}
        </div>
        <div className="mt-16 bg-[#0B0F0E] rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">Still have questions?</h2>
          <p className="text-gray-400 mb-8">Talk to us directly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-quote" className="bg-[#B8D83D] text-[#0B0F0E] font-bold px-8 py-4 rounded-xl hover:bg-[#9dbf2c] transition-colors">Build My Solar Plan</Link>
            <a href="https://wa.me/923125634911" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#20b858] transition-colors">WhatsApp Us</a>
          </div>
        </div>
      </div>
    </main>
  );
}

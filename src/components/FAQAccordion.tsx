'use client';
import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-4">
      {items.map((item, idx) => (
        <div key={idx} className="border border-zinc-200 rounded-lg overflow-hidden bg-white">
          <button 
            onClick={() => toggle(idx)}
            className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-zinc-50 transition"
          >
            <span className="font-semibold text-zinc-900 text-lg">{item.question}</span>
            <svg className={`w-5 h-5 text-zinc-500 transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          {openIndex === idx && (
            <div className="p-5 pt-0 text-zinc-600 border-t border-zinc-100 leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

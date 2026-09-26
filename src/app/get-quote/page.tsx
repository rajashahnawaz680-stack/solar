'use client';

import { useState, useRef, RefObject } from 'react';
import Link from 'next/link';

// ─── Types ────────────────────────────────────────────────────────────────────
interface FormData {
  need: string;
  propertyType: string;
  location: string;
  area: string;
  monthlyBill: string;
  needsBackup: string;
  paymentPreference: string;
  fullName: string;
  phone: string;
  whatsapp: string;
  email: string;
  notes: string;
  billFile: File | null;
}

type Errors = Partial<Record<keyof FormData, string>>;

// ─── Constants ────────────────────────────────────────────────────────────────
const TOTAL_STEPS = 5;

const needOptions = [
  { id: 'residential', label: 'Residential Solar', icon: '\u{1F3E0}' },
  { id: 'commercial', label: 'Commercial Solar', icon: '\u{1F3E2}' },
  { id: 'backup', label: 'Solar + Backup', icon: '\u26A1' },
  { id: 'battery', label: 'Battery Storage', icon: '\u{1F50B}' },
  { id: 'consultation', label: 'Solar Consultation', icon: '\u{1F4A1}' },
  { id: 'notsure', label: 'Not Sure', icon: '\u{1F914}' },
];

const propertyOptions = ['Home', 'Office', 'Shop', 'Commercial', 'Other'];
const locationOptions = ['Rawalpindi', 'Islamabad', 'Other'];
const billOptions = ['Under Rs 15,000', 'Rs 15,000\u201330,000', 'Rs 30,000\u201350,000', 'Rs 50,000+', 'Not Sure'];
const backupOptions = ['Yes', 'No', 'Not Sure'];
const paymentOptions = [
  { id: 'cash', label: 'Cash', desc: 'Direct purchase with custom quotation.' },
  { id: 'installment', label: 'Installment', desc: 'Discuss a flexible payment plan.' },
  { id: 'compare', label: 'Compare Both', desc: 'See both options side by side.' },
  { id: 'notsure', label: 'Not Sure', desc: 'We can walk you through both.' },
];

const stepLabels = [
  'What do you need?',
  'Your property',
  'Electricity usage',
  'Payment preference',
  'Contact details',
];

// ─── Sub-components (defined outside main component to avoid render errors) ──

function Pill({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-5 py-3 rounded-xl border-2 font-semibold text-sm transition-all duration-200 ${
        selected
          ? 'border-[#B8D83D] bg-[#B8D83D] text-[#0B0F0E]'
          : 'border-gray-200 bg-white text-gray-600 hover:border-[#B8D83D] hover:text-[#0B0F0E]'
      }`}
    >
      {label}
    </button>
  );
}

function ProgressBar({ step }: { step: number }) {
  return (
    <div className="w-full max-w-2xl mx-auto mb-10">
      <div className="flex items-center justify-between mb-3">
        {[1, 2, 3, 4, 5].map((s) => (
          <div key={s} className="flex items-center flex-1 last:flex-none">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                s < step
                  ? 'bg-[#B8D83D] text-[#0B0F0E]'
                  : s === step
                  ? 'bg-[#0B0F0E] text-white ring-4 ring-[#B8D83D]/30'
                  : 'bg-gray-100 text-gray-400'
              }`}
            >
              {s < step ? '\u2713' : s}
            </div>
            {s < 5 && (
              <div className="flex-1 h-1 mx-2 rounded-full overflow-hidden bg-gray-100">
                <div
                  className="h-full bg-[#B8D83D] transition-all duration-500"
                  style={{ width: s < step ? '100%' : '0%' }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between text-xs text-gray-400 font-medium px-1">
        <span>Needs</span>
        <span>Property</span>
        <span>Electricity</span>
        <span>Payment</span>
        <span>Contact</span>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg className="w-3 h-3 text-[#0B0F0E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function GetQuotePage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const fileRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<FormData>({
    need: '',
    propertyType: '',
    location: '',
    area: '',
    monthlyBill: '',
    needsBackup: '',
    paymentPreference: '',
    fullName: '',
    phone: '',
    whatsapp: '',
    email: '',
    notes: '',
    billFile: null,
  });

  const setField = (key: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const setFile = (file: File | null) => {
    setFormData((prev) => ({ ...prev, billFile: file }));
  };

  const validateStep = (): boolean => {
    const errs: Errors = {};
    if (step === 1 && !formData.need) errs.need = 'Please select an option.';
    if (step === 2) {
      if (!formData.propertyType) errs.propertyType = 'Required.';
      if (!formData.location) errs.location = 'Required.';
    }
    if (step === 3) {
      if (!formData.monthlyBill) errs.monthlyBill = 'Required.';
      if (!formData.needsBackup) errs.needsBackup = 'Required.';
    }
    if (step === 4 && !formData.paymentPreference) errs.paymentPreference = 'Please select an option.';
    if (step === 5) {
      if (!formData.fullName.trim()) errs.fullName = 'Full name is required.';
      if (!formData.phone.trim()) errs.phone = 'Phone number is required.';
      else if (!/^[\d\s+\-]{10,}$/.test(formData.phone)) errs.phone = 'Enter a valid phone number.';
      if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Enter a valid email address.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleContinue = () => {
    if (!validateStep()) return;
    if (step < TOTAL_STEPS) setStep((s) => s + 1);
    else handleSubmit();
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;
    setLoading(true);
    await new Promise<void>((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  // ── Success State ─────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <main className="min-h-screen bg-[#F5F6F1] flex items-center justify-center px-4 py-20">
        <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-12 text-center border border-gray-100">
          <div className="w-20 h-20 bg-[#B8D83D] rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-[#0B0F0E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-[#0B0F0E] mb-4">
            Your Solar Plan Request Has Been Received
          </h1>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Thank you. We have your requirements and will contact you using the details you provided.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:03125634911"
              className="bg-[#0B0F0E] text-white font-bold px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/923125634911?text=Hi%2C%20I%20just%20submitted%20my%20solar%20plan%20request."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#20b858] transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
              </svg>
              WhatsApp
            </a>
          </div>
          <Link href="/" className="block mt-6 text-gray-500 hover:text-[#0B0F0E] text-sm font-medium transition-colors">
            \u2190 Back to home
          </Link>
        </div>
      </main>
    );
  }

  // ── Form ──────────────────────────────────────────────────────────────────
  return (
    <main className="min-h-screen bg-[#F5F6F1]">
      {/* Header */}
      <div className="bg-[#0B0F0E] pt-24 pb-14 px-4 text-center">
        <span className="inline-block px-4 py-1 rounded-full bg-[#183C32] text-[#B8D83D] text-xs font-bold tracking-widest uppercase mb-4">
          STEP {step} OF {TOTAL_STEPS}
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Build Your Solar Plan</h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Answer a few questions so we can understand your property, electricity needs and preferred payment option.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-14">
        <ProgressBar step={step} />

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
          <h2 className="text-2xl font-extrabold text-[#0B0F0E] mb-8 pb-4 border-b border-gray-100">
            {stepLabels[step - 1]}
          </h2>

          {/* STEP 1 */}
          {step === 1 && (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {needOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setField('need', opt.id)}
                    className={`flex items-center gap-4 p-5 rounded-2xl border-2 text-left transition-all duration-200 ${
                      formData.need === opt.id
                        ? 'border-[#B8D83D] bg-[#fafff0]'
                        : 'border-gray-100 bg-[#F5F6F1] hover:border-[#B8D83D]'
                    }`}
                  >
                    <span className="text-3xl">{opt.icon}</span>
                    <span className="font-bold text-[#0B0F0E]">{opt.label}</span>
                    {formData.need === opt.id && (
                      <span className="ml-auto w-5 h-5 rounded-full bg-[#B8D83D] flex items-center justify-center">
                        <CheckIcon />
                      </span>
                    )}
                  </button>
                ))}
              </div>
              {errors.need && <p className="text-red-500 text-sm">{errors.need}</p>}
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Property Type</label>
                <div className="flex flex-wrap gap-3">
                  {propertyOptions.map((opt) => (
                    <Pill key={opt} label={opt} selected={formData.propertyType === opt} onClick={() => setField('propertyType', opt)} />
                  ))}
                </div>
                {errors.propertyType && <p className="text-red-500 text-sm mt-2">{errors.propertyType}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Location</label>
                <div className="flex flex-wrap gap-3">
                  {locationOptions.map((opt) => (
                    <Pill key={opt} label={opt} selected={formData.location === opt} onClick={() => setField('location', opt)} />
                  ))}
                </div>
                {errors.location && <p className="text-red-500 text-sm mt-2">{errors.location}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Area / Locality <span className="font-normal text-gray-400">(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Bahria Town, G-10, Saddar..."
                  value={formData.area}
                  onChange={(e) => setField('area', e.target.value)}
                  className="w-full px-5 py-4 border-2 border-gray-100 rounded-xl text-[#0B0F0E] placeholder-gray-400 focus:outline-none focus:border-[#B8D83D] transition-colors bg-[#F5F6F1]"
                />
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Approximate Monthly Electricity Bill</label>
                <div className="flex flex-wrap gap-3">
                  {billOptions.map((opt) => (
                    <Pill key={opt} label={opt} selected={formData.monthlyBill === opt} onClick={() => setField('monthlyBill', opt)} />
                  ))}
                </div>
                {errors.monthlyBill && <p className="text-red-500 text-sm mt-2">{errors.monthlyBill}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Do you need backup?</label>
                <div className="flex flex-wrap gap-3">
                  {backupOptions.map((opt) => (
                    <Pill key={opt} label={opt} selected={formData.needsBackup === opt} onClick={() => setField('needsBackup', opt)} />
                  ))}
                </div>
                {errors.needsBackup && <p className="text-red-500 text-sm mt-2">{errors.needsBackup}</p>}
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div>
              <p className="text-gray-500 mb-6">How would you prefer to pay?</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {paymentOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setField('paymentPreference', opt.id)}
                    className={`p-6 rounded-2xl border-2 text-left transition-all duration-200 ${
                      formData.paymentPreference === opt.id
                        ? 'border-[#B8D83D] bg-[#fafff0]'
                        : 'border-gray-100 bg-[#F5F6F1] hover:border-[#B8D83D]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-extrabold text-[#0B0F0E] text-lg">{opt.label}</span>
                      {formData.paymentPreference === opt.id && (
                        <span className="w-5 h-5 rounded-full bg-[#B8D83D] flex items-center justify-center">
                          <CheckIcon />
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{opt.desc}</p>
                  </button>
                ))}
              </div>
              <div className="bg-[#F5F6F1] border border-gray-200 rounded-xl p-4 text-sm text-gray-500 flex items-start gap-3">
                <svg className="w-5 h-5 text-[#B8D83D] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Your customized solar plan will be prepared after reviewing your full requirements. No prices are shown at this stage.
              </div>
              {errors.paymentPreference && <p className="text-red-500 text-sm mt-3">{errors.paymentPreference}</p>}
            </div>
          )}

          {/* STEP 5 */}
          {step === 5 && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={(e) => setField('fullName', e.target.value)}
                    className={`w-full px-5 py-4 border-2 rounded-xl text-[#0B0F0E] placeholder-gray-400 focus:outline-none transition-colors bg-[#F5F6F1] ${
                      errors.fullName ? 'border-red-300' : 'border-gray-100 focus:border-[#B8D83D]'
                    }`}
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="03xxxxxxxxx"
                    value={formData.phone}
                    onChange={(e) => setField('phone', e.target.value)}
                    className={`w-full px-5 py-4 border-2 rounded-xl text-[#0B0F0E] placeholder-gray-400 focus:outline-none transition-colors bg-[#F5F6F1] ${
                      errors.phone ? 'border-red-300' : 'border-gray-100 focus:border-[#B8D83D]'
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">WhatsApp Number</label>
                  <input
                    type="tel"
                    placeholder="Same as phone if applicable"
                    value={formData.whatsapp}
                    onChange={(e) => setField('whatsapp', e.target.value)}
                    className="w-full px-5 py-4 border-2 border-gray-100 rounded-xl text-[#0B0F0E] placeholder-gray-400 focus:outline-none focus:border-[#B8D83D] transition-colors bg-[#F5F6F1]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setField('email', e.target.value)}
                    className={`w-full px-5 py-4 border-2 rounded-xl text-[#0B0F0E] placeholder-gray-400 focus:outline-none transition-colors bg-[#F5F6F1] ${
                      errors.email ? 'border-red-300' : 'border-gray-100 focus:border-[#B8D83D]'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Additional Requirements <span className="font-normal text-gray-400">(Optional)</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Any specific questions, concerns or requirements..."
                  value={formData.notes}
                  onChange={(e) => setField('notes', e.target.value)}
                  className="w-full px-5 py-4 border-2 border-gray-100 rounded-xl text-[#0B0F0E] placeholder-gray-400 focus:outline-none focus:border-[#B8D83D] transition-colors bg-[#F5F6F1] resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Upload Electricity Bill <span className="font-normal text-gray-400">(Optional)</span>
                </label>
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className="w-full flex items-center justify-center gap-3 px-5 py-4 border-2 border-dashed border-gray-200 rounded-xl text-gray-500 hover:border-[#B8D83D] hover:text-[#0B0F0E] transition-colors bg-[#F5F6F1]"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  {formData.billFile ? formData.billFile.name : 'Click to upload bill or photo'}
                </button>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*,application/pdf"
                  className="hidden"
                  onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                />
              </div>

              {/* Summary */}
              <div className="bg-[#0B0F0E] rounded-2xl p-6">
                <p className="text-[#B8D83D] text-xs font-bold uppercase tracking-widest mb-3">Your Solar Plan Summary</p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {([
                    ['Need', needOptions.find((n) => n.id === formData.need)?.label ?? '\u2013'],
                    ['Property', formData.propertyType || '\u2013'],
                    ['Location', [formData.location, formData.area].filter(Boolean).join(' / ') || '\u2013'],
                    ['Monthly Bill', formData.monthlyBill || '\u2013'],
                    ['Backup', formData.needsBackup || '\u2013'],
                    ['Payment', paymentOptions.find((p) => p.id === formData.paymentPreference)?.label ?? '\u2013'],
                  ] as [string, string][]).map(([label, value]) => (
                    <div key={label}>
                      <span className="text-gray-500 block">{label}</span>
                      <span className="text-white font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-100">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="text-gray-500 hover:text-[#0B0F0E] font-medium flex items-center gap-2 transition-colors"
              >
                \u2190 Back
              </button>
            ) : (
              <div />
            )}
            <button
              type="button"
              onClick={handleContinue}
              disabled={loading}
              className={`flex items-center gap-3 font-bold px-10 py-4 rounded-xl transition-all shadow-md ${
                loading
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-[#B8D83D] text-[#0B0F0E] hover:bg-[#9dbf2c] hover:shadow-lg'
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4} />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Submitting\u2026
                </>
              ) : step < TOTAL_STEPS ? (
                'Continue \u2192'
              ) : (
                'Request My Solar Plan'
              )}
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          No prices shown. No commitment required. We will contact you to discuss your requirements.
        </p>
        <div className="mt-4 text-center">
          <a
            href="https://wa.me/923125634911?text=Hi%2C%20I%20want%20to%20discuss%20a%20solar%20requirement."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#183C32] hover:text-[#B8D83D] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
            </svg>
            Prefer to chat directly? WhatsApp us
          </a>
        </div>
      </div>
    </main>
  );
}

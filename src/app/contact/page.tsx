"use client";

import { useState, useEffect, useRef, FormEvent } from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { servicesData } from "@/data";

declare global {
  interface Window {
    _turnstileLoaded?: boolean;
    turnstile?: { render: (el: HTMLElement, opts: Record<string, unknown>) => string; execute: (id: string, opts?: Record<string, unknown>) => Promise<string>; reset: (id: string) => void; };
  }
}

function loadTurnstile(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window._turnstileLoaded) return Promise.resolve();
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[src^="https://challenges.cloudflare.com/turnstile/v0/api.js"]');
    if (existing) { window._turnstileLoaded = true; return resolve(); }
    const s = document.createElement("script");
    s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"; s.async = true; s.defer = true;
    s.onload = () => { window._turnstileLoaded = true; resolve(); };
    s.onerror = () => reject(new Error("Turnstile failed"));
    document.head.appendChild(s);
  });
}

type FormData = { fullName: string; phone: string; email: string; service: string; address: string; timeline: string; description: string; };

export default function ContactPage() {
  const captchaRef = useRef<HTMLDivElement | null>(null);
  const [formData, setFormData] = useState<FormData>({ fullName: '', phone: '', email: '', service: '', address: '', timeline: '', description: '' });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');
  const [turnstileId, setTurnstileId] = useState<string | null>(null);
  const [turnstileReady, setTurnstileReady] = useState(false);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const windowServices = servicesData.filter((s) => s.category === "Windows");
  const doorServices = servicesData.filter((s) => s.category === "Doors");

  useEffect(() => {
    let cancelled = false;
    const t = setTimeout(async () => {
      if (cancelled || !siteKey) return;
      try {
        await loadTurnstile();
        if (cancelled || !window.turnstile || !captchaRef.current) return;
        const id = window.turnstile.render(captchaRef.current, { sitekey: siteKey, size: "normal", theme: "dark", callback: () => setTurnstileReady(true), "error-callback": () => setTurnstileReady(false) });
        setTurnstileId(id); setTurnstileReady(true);
      } catch (e) { console.error("Turnstile init failed:", e); }
    }, 500);
    return () => { cancelled = true; clearTimeout(t); };
  }, [siteKey]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Required";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.phone.trim()) newErrors.phone = "Required";
    if (!formData.service.trim()) newErrors.service = "Required";
    if (!formData.address.trim()) newErrors.address = "Required";
    if (!formData.timeline.trim()) newErrors.timeline = "Required";
    if (!formData.description.trim()) newErrors.description = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) { setFeedback("Please complete all required fields."); return; }
    setStatus('submitting'); setErrors({}); setFeedback('');
    try {
      if (siteKey && (!turnstileReady || !window.turnstile || !turnstileId)) { setFeedback("Please complete security verification."); setStatus("error"); return; }
      let turnstileToken = '';
      if (siteKey && window.turnstile && turnstileId) {
        try {
          window.turnstile.reset(turnstileId);
          turnstileToken = await new Promise<string>((resolve, reject) => { window.turnstile!.execute(turnstileId, { callback: (t: string) => resolve(t), "error-callback": () => reject(new Error("error")) }); });
        } catch { setFeedback("Security verification failed."); setStatus("error"); window.turnstile?.reset(turnstileId); return; }
      }
      const response = await fetch('/api/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: formData.fullName, fullName: formData.fullName, email: formData.email, phone: formData.phone.replace(/\D/g, ''), service: formData.service, address: formData.address, timeline: formData.timeline, description: formData.description, turnstileToken }) });
      if (response.ok) {
        setFormData({ fullName: '', phone: '', email: '', service: '', address: '', timeline: '', description: '' });
        if (window.turnstile && turnstileId) window.turnstile.reset(turnstileId);
        setStatus('success'); setFeedback('Thank you! A Garland window specialist will contact you within one business day.');
      } else {
        const err = await response.json().catch(() => ({ error: 'Failed' }));
        setFeedback(err.error || 'Failed to submit.'); setStatus('error');
        if (window.turnstile && turnstileId) window.turnstile.reset(turnstileId);
      }
    } catch { setFeedback("An error occurred."); setStatus("error"); if (window.turnstile && turnstileId) window.turnstile.reset(turnstileId); }
  };

  return (
    <main>
      <Header />
      <nav className="bg-cream-200 py-4 pt-32"><div className="max-w-6xl mx-auto px-6"><ol className="flex items-center space-x-2 text-sm text-navy-700"><li><Link href="/" className="hover:text-gold-500">Home</Link></li><li>/</li><li className="text-navy-900 font-medium">Contact</li></ol></div></nav>
      <section className="py-20 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12"><h1 className="font-serif text-5xl font-bold text-navy-900 mb-4">Contact Us</h1><p className="text-xl text-navy-700 max-w-2xl mx-auto">Schedule your free in-home consultation and estimate for window and door replacement in Garland, TX.</p></div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-6">Get in Touch</h2>
              <p className="text-navy-700 mb-8">Our expert consultants will visit your home, assess your needs, and provide a detailed, no-obligation estimate.</p>
              <div className="space-y-6">
                <div><h3 className="font-semibold text-navy-900 mb-2">Call Us Directly</h3><a href="tel:972-734-3158" className="text-gold-500 text-2xl font-semibold hover:text-gold-600">(972) 734-3158</a></div>
                <div><h3 className="font-semibold text-navy-900 mb-2">Email Us</h3><a href="mailto:contact@windowreplacementgarlandtx.com" className="text-gold-500 hover:text-gold-600">contact@windowreplacementgarlandtx.com</a></div>
                <div><h3 className="font-semibold text-navy-900 mb-2">Address</h3><address className="text-navy-700 not-italic">350 Oaks Trl #220<br />Garland, TX 75043</address></div>
                <div><h3 className="font-semibold text-navy-900 mb-2">Hours</h3><p className="text-navy-700">Open 24/7<br />Available for Emergency Service</p></div>
              </div>
              <div className="mt-8"><h3 className="font-semibold text-navy-900 mb-4">Find Us</h3><div className="aspect-video w-full"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.8!2d-96.6285!3d32.9285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1f5b5e1b5a6d%3A0x1234567890!2s350%20Oaks%20Trl%20%23220%2C%20Garland%2C%20TX%2075043!5e0!3m2!1sen!2sus!4v1234567890" width="100%" height="100%" style={{ border: 0, borderRadius: "4px" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Window Replacement Service of Garland location map"></iframe></div></div>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h2 className="font-serif text-2xl font-semibold text-cream-100 mb-6">Request Your Free Estimate</h2>
              {status === 'success' && <div className="bg-green-500 text-white p-4 rounded mb-4">{feedback}</div>}
              {status === 'error' && <div className="bg-red-500 text-white p-4 rounded mb-4">{feedback}</div>}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <fieldset disabled={status === 'submitting'} className="space-y-4">
                  <div><label htmlFor="fullName" className="block text-cream-200 text-sm mb-2">Full Name</label><input type="text" id="fullName" name="fullName" required placeholder="John Smith" className="w-full px-4 py-3 bg-white text-navy-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500" value={formData.fullName} onChange={handleChange} />{errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}</div>
                  <div><label htmlFor="phone" className="block text-cream-200 text-sm mb-2">Phone Number</label><input type="tel" id="phone" name="phone" required placeholder="(972) 734-3158" className="w-full px-4 py-3 bg-white text-navy-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500" value={formData.phone} onChange={handleChange} />{errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}</div>
                  <div><label htmlFor="email" className="block text-cream-200 text-sm mb-2">Email Address</label><input type="email" id="email" name="email" required placeholder="john@example.com" className="w-full px-4 py-3 bg-white text-navy-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500" value={formData.email} onChange={handleChange} />{errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}</div>
                  <div><label htmlFor="service" className="block text-cream-200 text-sm mb-2">Service Interested In</label><select id="service" name="service" required className="w-full px-4 py-3 bg-white text-navy-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500" value={formData.service} onChange={handleChange}><option value="">Select a service...</option><optgroup label="Windows">{windowServices.map((service) => (<option key={service.slug} value={service.name}>{service.name}</option>))}</optgroup><optgroup label="Doors">{doorServices.map((service) => (<option key={service.slug} value={service.name}>{service.name}</option>))}</optgroup><option value="Not Sure / Multiple Services">Not Sure / Multiple Services</option></select>{errors.service && <p className="text-red-400 text-sm mt-1">{errors.service}</p>}</div>
                  <div><label htmlFor="address" className="block text-cream-200 text-sm mb-2">Property Address</label><input type="text" id="address" name="address" required placeholder="123 Main St, Garland, TX 75043" className="w-full px-4 py-3 bg-white text-navy-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500" value={formData.address} onChange={handleChange} />{errors.address && <p className="text-red-400 text-sm mt-1">{errors.address}</p>}</div>
                  <div><label htmlFor="timeline" className="block text-cream-200 text-sm mb-2">Project Timeline</label><select id="timeline" name="timeline" required className="w-full px-4 py-3 bg-white text-navy-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500" value={formData.timeline} onChange={handleChange}><option value="">Select timeline...</option><option value="ASAP">ASAP</option><option value="Within 1 month">Within 1 month</option><option value="Within 3 months">Within 3 months</option><option value="Within 6 months">Within 6 months</option><option value="6+ months">6+ months</option><option value="Just researching">Just researching</option></select>{errors.timeline && <p className="text-red-400 text-sm mt-1">{errors.timeline}</p>}</div>
                  <div><label htmlFor="description" className="block text-cream-200 text-sm mb-2">Project Description</label><textarea id="description" name="description" rows={4} required placeholder="Tell us about your project..." className="w-full px-4 py-3 bg-white text-navy-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500" value={formData.description} onChange={handleChange}></textarea>{errors.description && <p className="text-red-400 text-sm mt-1">{errors.description}</p>}</div>
                  {siteKey && <div className="flex justify-center"><div ref={captchaRef} style={{ minHeight: '78px' }} /></div>}
                  <button type="submit" className="btn-primary w-full" disabled={status === 'submitting' || !!(siteKey && !turnstileReady)}>{status === 'submitting' ? 'Sending...' : 'Request Free Estimate'}</button>
                </fieldset>
                <p className="text-cream-300 text-xs text-center">By submitting this form, you agree to receive communications from our team.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

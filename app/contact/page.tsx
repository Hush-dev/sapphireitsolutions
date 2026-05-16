'use client'

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import MagneticButton from '@/components/ui/MagneticButton';
import GlowCard from '@/components/ui/GlowCard';
import PageHero from '@/components/ui/PageHero';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [selectedCity, setSelectedCity] = useState<'Bangalore' | 'Nagpur'>('Bangalore');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', company: '', service: 'Laptop Rentals', message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
        setForm({ name: '', email: '', company: '', service: 'Laptop Rentals', message: '' });
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const locations = {
    Bangalore: { title: 'Bangalore Strategic Hub', address: 'Prestige Shantiniketan, Whitefield, Bangalore, Karnataka 560048', mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.98!2d77.72!3d12.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11f5f5f5f5f5%3A0x1234567890abcdef!2sWhitefield%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1715760000000!5m2!1sen!2sin' },
    Nagpur: { title: 'Nagpur Active Hub', address: 'MIHAN SEZ, Wardha Road, Nagpur, Maharashtra 441108', mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238132!2d79.08!3d21.14!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715760000000!5m2!1sen!2sin' },
  };

  return (
    <div className="pb-24">
      <PageHero badge="Get in Touch" title="Let's Build Your IT Solutions" subtitle="Request a customized quote or talk to our technology experts about your upcoming projects in Nagpur and Bangalore." image="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80" />

      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-display font-bold">Enterprise Support</h3>
              <p className="text-foreground/60 max-w-sm leading-relaxed">Dedicated consultants available to help you design the perfect IT stack for your business scale.</p>
            </div>

            <div className="space-y-8">
              {[
                { icon: <Mail className="text-brand-blue" />, label: 'Email Solutions', val: 'solutions@sapphireit.com' },
                { icon: <Phone className="text-brand-purple" />, label: 'Fast Response', val: '+91 (0) 9876 543 210' },
                { icon: <MessageCircle className="text-green-500" />, label: 'WhatsApp Chat', val: '+91 98765 43210' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group cursor-pointer">
                  <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center group-hover:bg-brand-blue/10 transition-colors">{item.icon}</div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-1">{item.label}</p>
                    <p className="text-lg font-display font-semibold transition-colors group-hover:text-brand-blue text-foreground">{item.val}</p>
                  </div>
                </div>
              ))}

              <div className="flex gap-6 group">
                <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-brand-blue"><MapPin size={24} /></div>
                <div className="flex-1 space-y-3">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-1">Office Location</p>
                  <div className="relative p-1 bg-background/50 border border-border rounded-xl flex items-center w-full max-w-[220px]">
                    <motion.div layoutId="activeLocationSmall" className="absolute inset-y-1 rounded-lg bg-gradient-premium shadow-md" initial={false} animate={{ x: selectedCity === 'Bangalore' ? 0 : '100%', width: 'calc(50% - 4px)' }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} />
                    <button onClick={() => setSelectedCity('Bangalore')} className={`relative flex-1 py-1.5 text-[9px] font-bold uppercase tracking-widest transition-colors duration-300 z-10 ${selectedCity === 'Bangalore' ? 'text-white' : 'text-foreground/40 hover:text-foreground/60'}`}>Bangalore</button>
                    <button onClick={() => setSelectedCity('Nagpur')} className={`relative flex-1 py-1.5 text-[9px] font-bold uppercase tracking-widest transition-colors duration-300 z-10 ${selectedCity === 'Nagpur' ? 'text-white' : 'text-foreground/40 hover:text-foreground/60'}`}>Nagpur</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 glass-card rounded-[2.5rem] border-border bg-card/30 h-80 overflow-hidden">
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden border border-border">
                <AnimatePresence mode="wait">
                  <motion.div key={selectedCity} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="absolute inset-0">
                    <iframe src={locations[selectedCity].mapUrl} width="100%" height="100%" style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2) brightness(0.9)' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={locations[selectedCity].title} />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/5 rounded-[2rem]" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <GlowCard className="p-10 md:p-16">
              {success ? (
                <div className="flex flex-col items-center justify-center py-16 gap-4">
                  <CheckCircle2 size={64} className="text-brand-blue" />
                  <h3 className="text-2xl font-display font-bold">Inquiry Sent!</h3>
                  <p className="text-foreground/60 text-center">We'll get back to you within 2 business hours.</p>
                </div>
              ) : (
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">Full Name</label>
                      <input name="name" value={form.name} onChange={handleChange} type="text" required placeholder="Jane Doe" className="w-full px-6 py-4 bg-card/60 border border-border rounded-2xl focus:outline-none focus:border-brand-blue focus:bg-card/90 transition-all text-foreground placeholder:text-gray-500" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">Work Email</label>
                      <input name="email" value={form.email} onChange={handleChange} type="email" required placeholder="jane@company.com" className="w-full px-6 py-4 bg-card/60 border border-border rounded-2xl focus:outline-none focus:border-brand-blue focus:bg-card/90 transition-all text-foreground placeholder:text-gray-500" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">Company</label>
                      <input name="company" value={form.company} onChange={handleChange} type="text" required placeholder="Enterprise Inc." className="w-full px-6 py-4 bg-card/60 border border-border rounded-2xl focus:outline-none focus:border-brand-blue focus:bg-card/90 transition-all text-foreground placeholder:text-gray-500" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">Service Type</label>
                      <select name="service" value={form.service} onChange={handleChange} className="w-full px-6 py-4 bg-card/60 border border-border rounded-2xl focus:outline-none focus:border-brand-blue focus:bg-card/90 transition-all text-foreground appearance-none">
                        <option className="bg-background">Laptop Rentals</option>
                        <option className="bg-background">Server Solutions</option>
                        <option className="bg-background">AV & Events</option>
                        <option className="bg-background">IT Solutions Setup</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">Project Details</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={5} required placeholder="Describe your requirements, scale, and timeline..." className="w-full px-6 py-4 bg-card/60 border border-border rounded-2xl focus:outline-none focus:border-brand-blue focus:bg-card/90 transition-all text-foreground placeholder:text-gray-500 resize-none"></textarea>
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
                  )}

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-4">
                    <p className="text-gray-500 text-xs italic">Our team typically responds within <span className="text-brand-blue font-bold">2 business hours</span>.</p>
                    <MagneticButton className="bg-gradient-premium text-white w-full sm:w-auto px-12 group">
                      <span className="flex items-center gap-3">
                        {loading ? 'Sending...' : 'Send Inquiry'}
                        {!loading && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                      </span>
                    </MagneticButton>
                  </div>
                </form>
              )}
            </GlowCard>
          </div>
        </div>
      </section>
    </div>
  );
}
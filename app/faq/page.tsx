'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SectionHeading from '@/components/ui/SectionHeading';
import PageHero from '@/components/ui/PageHero';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: 'Which cities do you currently serve?', a: 'Sapphire IT Solutions currently provides end-to-end IT rental and IT solutions exclusively in Nagpur and Bangalore. This allows us to maintain our high service level agreements and provide on-ground technical support within 2-4 hours.' },
    { q: 'What is the minimum rental period?', a: 'We offer highly flexible rental terms. For enterprise hardware like laptops and servers, the minimum period starts from as little as 1 week for events or projects, up to multi-year long-term leases.' },
    { q: 'How fast is your hardware deployment?', a: 'For standard configurations of laptops and workstations, we offer 24-48 hour delivery and setup across our hubs in Nagpur and Bangalore. Larger IT solution setups like servers or event technology are typically deployed within 72-96 hours after consultation.' },
    { q: 'Do you provide on-site technical support?', a: 'Yes. Every rental package includes access to our specialized support team. For larger deployments or corporate events, we provide dedicated on-site technicians to ensure zero-friction operations.' },
    { q: 'Are your laptops and servers customizable?', a: 'Absolutely. We provide enterprise-grade hardware that can be pre-configured with specific RAM, SSD, and software stacks tailored to your internal technical requirements.' },
  ];

  return (
    <div className="pb-24">
      <PageHero badge="Got Questions?" title="Common Inquiries" subtitle="Everything you need to know about our enterprise hardware solutions and service availability." image="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80" />

      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card rounded-2xl overflow-hidden border border-border">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full px-8 py-8 flex items-center justify-between text-left hover:bg-foreground/5 transition-colors">
                <span className="text-xl font-display font-medium pr-8">{faq.q}</span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center">
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <div className="px-8 pb-8 text-foreground/60 leading-relaxed">{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
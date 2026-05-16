'use client'

import { motion, AnimatePresence } from 'motion/react';
import { X, Send } from 'lucide-react';
import { useDrawer } from '@/context/DrawerContext';
import MagneticButton from '@/components/ui/MagneticButton';
import { useEffect } from 'react';
import { lenisInstance } from '@/components/SmoothScroll';

export default function ContactDrawer() {
  const { isOpen, closeDrawer } = useDrawer();


useEffect(() => {
  if (isOpen) {
    lenisInstance?.stop();
    document.body.style.overflow = 'hidden';
    document.documentElement.classList.add('lenis-stopped');
  } else {
    lenisInstance?.start();
    document.body.style.overflow = 'unset';
    document.documentElement.classList.remove('lenis-stopped');
  }
  return () => {
    lenisInstance?.start();
    document.body.style.overflow = 'unset';
    document.documentElement.classList.remove('lenis-stopped');
  };
}, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  onClick={closeDrawer}
  className="fixed inset-0 bg-background/20 backdrop-blur-sm z-[100] cursor-pointer"
/>
          <motion.div
  initial={{ y: '100%' }}
  animate={{ y: 0 }}
  exit={{ y: '100%' }}
  transition={{ type: 'spring', damping: 30, stiffness: 300 }}
  className="fixed left-0 right-0 bottom-0 h-[85vh] bg-background border-t border-border z-[101] rounded-t-[3rem] shadow-2xl overflow-y-auto overscroll-contain"
  onWheel={(e) => {
    e.stopPropagation();
    const el = e.currentTarget;
    el.scrollTop += e.deltaY;
  }}
>
            <div className="max-w-4xl mx-auto px-6 py-12 relative">
              <button
                onClick={closeDrawer}
                className="absolute top-8 right-6 p-2 rounded-full hover:bg-foreground/5 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-12">
                <span className="px-4 py-1.5 glass-card rounded-full text-[10px] uppercase tracking-[0.3em] font-bold text-brand-blue">
                  Inquiry Form
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-4 mb-2">Let's Build Your IT Solutions</h2>
                <p className="text-foreground/60 max-w-lg mx-auto">
                  Fill out the form below and our experts will get back to you within 2 business hours.
                </p>
              </div>

              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); closeDrawer(); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">Full Name</label>
                    <input type="text" required placeholder="Jane Doe" className="w-full px-6 py-4 bg-card/60 border border-border rounded-2xl focus:outline-none focus:border-brand-blue focus:bg-card/90 transition-all text-foreground placeholder:text-gray-500" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">Work Email</label>
                    <input type="email" required placeholder="jane@company.com" className="w-full px-6 py-4 bg-card/60 border border-border rounded-2xl focus:outline-none focus:border-brand-blue focus:bg-card/90 transition-all text-foreground placeholder:text-gray-500" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">Company Name</label>
                    <input type="text" required placeholder="Enterprise Inc." className="w-full px-6 py-4 bg-card/60 border border-border rounded-2xl focus:outline-none focus:border-brand-blue focus:bg-card/90 transition-all text-foreground placeholder:text-gray-500" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">Requirement Type</label>
                    <select className="w-full px-6 py-4 bg-card/60 border border-border rounded-2xl focus:outline-none focus:border-brand-blue focus:bg-card/90 transition-all text-foreground appearance-none">
                      <option className="bg-background">Laptop Rentals</option>
                      <option className="bg-background">Server Solutions</option>
                      <option className="bg-background">AV & Events</option>
                      <option className="bg-background">IT Solutions Setup</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">Project Details</label>
                  <textarea rows={4} required placeholder="Describe your requirements, scale, and timeline..." className="w-full px-6 py-4 bg-card/60 border border-border rounded-2xl focus:outline-none focus:border-brand-blue focus:bg-card/90 transition-all text-foreground placeholder:text-gray-500 resize-none"></textarea>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6">
                  <p className="text-gray-500 text-xs italic text-center md:text-left">
                    By submitting, you agree to our <span className="text-foreground font-bold underline">Privacy Policy</span>.
                  </p>
                  <MagneticButton className="bg-gradient-premium text-white w-full md:w-auto px-12 group" onClick={() => {}}>
                    <span className="flex items-center gap-3">
                      Submit Inquiry <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </MagneticButton>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
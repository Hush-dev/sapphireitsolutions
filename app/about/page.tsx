'use client'

import { motion } from 'motion/react';
import { useRef } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GlowCard from '@/components/ui/GlowCard';
import PageHero from '@/components/ui/PageHero';
import { Target, Eye, ShieldCheck, Zap, Laptop, Building2, Link2, AtSign, ArrowLeft, ArrowRight } from 'lucide-react';
import { LinkedInIcon, TwitterIcon } from '@/components/ui/SocialIcons';


export default function About() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="pb-0">
      <PageHero
        badge="Our Story"
        title="Powering Next-Gen Enterprises"
        subtitle="Sapphire IT Solutions was founded with a singular mission: to provide world-class IT hardware and deployment solutions without the traditional CAPEX burden."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
      />

      <section className="px-6 mb-32 -mt-12 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="space-y-6 text-foreground/60 leading-relaxed text-lg">
              <p>As businesses in India's leading tech hubs like Nagpur and Bangalore evolve, so does their need for agile IT solutions. We bridge the gap between innovation and execution by providing instant access to high-performance technology.</p>
              <p>Today, we support over 150 enterprise clients, from high-growth startups to Fortune 500 conglomerates, ensuring their teams are equipped with the best possible tools to succeed.</p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video lg:aspect-square glass-card rounded-3xl p-4 animate-float overflow-hidden">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" alt="Architecture" className="w-full h-full object-cover rounded-2xl opacity-60 grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="absolute -bottom-8 lg:-left-8 glass-card p-6 rounded-2xl border-brand-blue/30 backdrop-blur-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue"><Building2 /></div>
                <div>
                  <p className="text-sm font-bold text-foreground">Dual-Hub Presence</p>
                  <p className="text-xs text-foreground/40 italic">Nagpur • Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 mb-32 bg-card py-32 rounded-[4rem]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <GlowCard className="bg-brand-blue/5 border-brand-blue/10 p-12">
            <Eye className="text-brand-blue mb-8" size={48} />
            <h3 className="text-3xl font-display font-bold mb-6">Our Vision</h3>
            <p className="text-foreground/60 text-lg leading-relaxed">To become the foundational technology partner for every enterprise in India, enabling limitless growth through zero-friction IT solutions deployment.</p>
          </GlowCard>
          <GlowCard className="bg-brand-purple/5 border-brand-purple/10 p-12">
            <Target className="text-brand-purple mb-8" size={48} />
            <h3 className="text-3xl font-display font-bold mb-6">Our Mission</h3>
            <p className="text-foreground/60 text-lg leading-relaxed">To simplify corporate technology procurement by providing premium hardware, expert support, and flexible scaling solutions that empower modern workforces.</p>
          </GlowCard>
        </div>
      </section>

      <section className="pb-32 px-6">
  <div className="max-w-7xl mx-auto">
    <SectionHeading badge="The Visionary" title="Meet the Mind Behind the Tech" subtitle="The professional dedicated to redefining IT infrastructure availability." align="center" />
    
    <div className="flex justify-center mt-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-[320px] md:w-[400px] h-[550px] relative group/member"
      >
        <div className="absolute bottom-0 left-0 right-0 h-3/4 rounded-3xl bg-gradient-to-br from-brand-blue/40 to-brand-blue/5 border border-white/10 shadow-2xl overflow-hidden z-0">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />
          <div className="absolute bottom-8 right-8 flex gap-4 z-20">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">
              <LinkedInIcon size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">
              <TwitterIcon size={18} />
            </a>
          </div>
        </div>
        <div className="absolute top-[28%] left-8 right-8 z-30 pointer-events-none drop-shadow-lg">
          <h4 className="text-3xl md:text-4xl font-display font-bold text-white mb-1 leading-tight">Amit Kothari</h4>
          <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-white/70">Founder & CEO</p>
        </div>
        <div className="absolute inset-x-0 bottom-0 top-[10%] z-10 pointer-events-none flex items-end justify-center overflow-hidden rounded-3xl">
          <motion.img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
            alt="Amit Kothari"
            className="w-full h-full object-cover object-top scale-100 group-hover/member:scale-105 transition-transform duration-700"
            style={{ maskImage: 'linear-gradient(to bottom, black 60%, transparent 95%)' }}
          />
        </div>
      </motion.div>
    </div>
  </div>
</section>
    </div>
  );
}
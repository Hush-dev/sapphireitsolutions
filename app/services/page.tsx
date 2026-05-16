'use client'

import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import SectionHeading from '@/components/ui/SectionHeading';
import GlowCard from '@/components/ui/GlowCard';
import MagneticButton from '@/components/ui/MagneticButton';
import PageHero from '@/components/ui/PageHero';
import { useDrawer } from '@/context/DrawerContext';
import { Laptop, Server, Presentation, Cpu, CheckCircle2, Globe, ArrowRight } from 'lucide-react';

export default function Services() {
  const { openDrawer } = useDrawer();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const allServices = [
    { id: 'laptop-rentals', title: 'Laptop Rentals', fullDesc: 'We provide the latest MacBook Pros, Dell XPS, and ThinkPad series configured to your specific workload requirements. Perfect for hybrid teams, temporary projects, or training sessions.', icon: <Laptop size={32} />, features: ['Latest Gen Intel/M-series chips', 'On-site maintenance', 'Flexible rental terms', 'Pre-configured software'], img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80' },
    { id: 'server-solutions', title: 'Server Rentals', fullDesc: 'Deploy enterprise-grade rack servers and workstations without the massive upfront CAPEX. Ideal for short-term data processing, R&D, or temporary IT solutions expansion.', icon: <Server size={32} />, features: ['Multi-node configurations', 'UPS & Cooling support', 'Data redundancy setup', '24/7 technical monitoring'], img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80' },
    { id: 'av-solutions', title: 'Projector & AV Rentals', fullDesc: 'High-lumen projectors, LED walls, and premium audio systems for conferences, product launches, and boardroom presentations in Nagpur and Bangalore.', icon: <Presentation size={32} />, features: ['4K Visual output', 'Professional sound engineering', 'On-site technical operators', 'Seamless connectivity'], img: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80' },
    { id: 'infrastructure', title: 'IT Solutions Setup', fullDesc: 'End-to-end network architecture, hardware deployment, and workspace technology setup for new offices or facility upgrades.', icon: <Cpu size={32} />, features: ['Network design & audit', 'Structured cabling', 'Workstation deployment', 'Security firewall setup'], img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80' },
  ];

  return (
    <div className="pb-24">
      <PageHero badge="Full Suite Solutions" title="Enterprise Tech at Your Fingertips" subtitle="Explore our comprehensive range of high-end IT rental and IT solutions tailored for businesses in Nagpur and Bangalore." image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" />

      <section className="px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
    {allServices.map((service, index) => (
      <motion.div
        key={service.id}
        id={service.id}
        className="flex flex-col group"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl mb-8 group-hover:shadow-brand-blue/10 transition-shadow duration-500">
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <div className="absolute top-8 left-8 w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white border border-white/20 shadow-xl group-hover:bg-brand-blue group-hover:border-brand-blue transition-all duration-500">
            {React.cloneElement(service.icon as React.ReactElement, { size: 28 })}
          </div>
          <div className="absolute bottom-8 left-8 right-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">{service.title}</h2>
          </div>
        </div>
        <div className="space-y-6 px-2">
          <p className="text-foreground/70 text-lg leading-relaxed line-clamp-3">{service.fullDesc}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 py-6 border-y border-border/50">
            {service.features.map((f) => (
              <div key={f} className="flex items-center gap-3 text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">
                <CheckCircle2 size={16} className="text-brand-blue shrink-0" />
                <span className="truncate">{f}</span>
              </div>
            ))}
          </div>
          <div className="pt-4 flex items-center justify-between">
            <MagneticButton onClick={openDrawer} className="bg-foreground text-background text-sm font-bold tracking-wider uppercase px-8">Request Quote</MagneticButton>
            <div className="h-px flex-1 mx-8 bg-gradient-to-r from-border/50 to-transparent" />
            <Link href={`#${service.id}`} className="p-3 rounded-full border border-border hover:border-brand-blue hover:text-brand-blue transition-all"><ArrowRight size={20} /></Link>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>

      <section className="mt-32 px-6">
        <div className="max-w-7xl mx-auto">
          <GlowCard className="bg-gradient-to-br from-brand-blue/10 via-transparent to-brand-purple/10 border-brand-blue/20 p-12 text-center">
            <SectionHeading title="Serving Your Growth in Nagpur & Bangalore" subtitle="With strategic hubs in India's leading tech corridors, we ensure lightning-fast deployment and on-ground support for your team." className="mb-8" />
            <div className="flex flex-wrap justify-center gap-8 mt-12 opacity-50 font-display font-bold text-2xl">
              <span className="flex items-center gap-4"><Globe className="text-brand-blue" /> NAGPUR</span>
              <span className="flex items-center gap-4"><Globe className="text-brand-purple" /> BANGALORE</span>
            </div>
          </GlowCard>
        </div>
      </section>
    </div>
  );
}
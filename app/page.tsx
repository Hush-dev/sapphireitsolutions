'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Laptop, Server, Monitor, Shield, Zap, Globe, ArrowRight, CheckCircle2, Rocket, Users, Cpu, Presentation } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import GlowCard from '@/components/ui/GlowCard';
import MagneticButton from '@/components/ui/MagneticButton';
import { cn } from '@/lib/utils';
import { useDrawer } from '@/context/DrawerContext';



export default function Home() {
  const { openDrawer } = useDrawer();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200);

useEffect(() => {
  if (videoRef.current) {
    videoRef.current.play().catch(() => {});
  }
}, []);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Add at the top of Home component, after useEffect for resize
useEffect(() => {
  const imageUrls = services.map(s => s.img);
  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
}, []);

  const services = [
    { title: 'Laptop Rentals', desc: 'Latest high-performance laptops for corporate teams.', icon: <Laptop className="w-5 h-5" />, img: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80', id: 'laptop-rentals' },
    { title: 'Server Solutions', desc: 'Enterprise-grade server stacks for scalable compute.', icon: <Server className="w-5 h-5" />, img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80', id: 'server-solutions' },
    { title: 'Projector & AV', desc: 'Premium visual setups for events and boardrooms.', icon: <Presentation className="w-5 h-5" />, img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80', id: 'av-solutions' },
    { title: 'IT Solutions Setup', desc: 'End-to-end office technology deployment.', icon: <Cpu className="w-5 h-5" />, img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80', id: 'infrastructure' },
    { title: 'Enterprise Support', desc: 'Dedicated 24/7 technical assistance.', icon: <Shield className="w-5 h-5" />, img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80', id: 'infrastructure' },
    { title: 'Desktop Rentals', desc: 'Powerful workstations for engineering teams.', icon: <Monitor className="w-5 h-5" />, img: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80', id: 'laptop-rentals' },
  ];

  const cardWidth = windowWidth < 768 ? windowWidth * 0.85 + 24 : 424;
  const maxScroll = -(services.length - 1) * cardWidth;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % services.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x < -50 || info.velocity.x < -500) {
      if (currentIndex < services.length - 1) setCurrentIndex(prev => prev + 1);
    } else if (info.offset.x > 50 || info.velocity.x > 500) {
      if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
    }
  };

  const features = [
    { title: 'Fast Deployment', desc: 'Hardware delivered and set up within 24-48 hours.', icon: <Zap /> },
    { title: 'Latest Hardware', desc: 'Enterprise-grade equipment from top global Tiers.', icon: <Cpu /> },
    { title: 'Flexible Plans', desc: 'Scale your infrastructure up or down as you grow.', icon: <Rocket /> },
    { title: 'Expert Support', desc: 'Dedicated technicians on-site and remote.', icon: <Users /> },
  ];

  const industries = [
    { title: 'Corporate Offices', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80', size: 'col-span-2' },
    { title: 'Tech Startups', img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80', size: 'col-span-1' },
    { title: 'Educational Institutes', img: 'https://images.unsplash.com/photo-1523050335456-c46d750fb9b1?auto=format&fit=crop&q=80', size: 'col-span-1' },
    { title: 'Events & Conferences', img: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80', size: 'col-span-2' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black z-10" />
          {/* ✅ Video moved to public/video/hero.mp4 */}
          <video
  ref={videoRef}
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  className="w-full h-full object-cover opacity-50 scale-105"
  onLoadedData={() => videoRef.current?.play().catch(() => {})}
>
  <source src="/video/hero.mp4" type="video/mp4" />
</video>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-[1.1] pt-24 text-white">
            Enterprise IT <br />
            <span className="text-gradient">IT Solutions, Simplified.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Premium IT hardware and rental solutions for forward-thinking enterprises across Nagpur and Bangalore.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <MagneticButton onClick={openDrawer} className="bg-white text-black hover:bg-brand-blue hover:text-white group">
              <span className="flex items-center gap-2">Talk to an Expert <ArrowRight className="w-4 h-4" /></span>
            </MagneticButton>
            <Link href="/services">
              <MagneticButton className="border border-white/20 text-white hover:border-brand-blue">Explore Services</MagneticButton>
            </Link>
          </motion.div>
        </div>

        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-brand-blue/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-brand-purple/20 blur-[120px] pointer-events-none" />
      </section>

      {/* Trust */}
<section className="py-24 border-y border-border bg-card overflow-hidden">
  <div className="px-6 mb-12">
    <p className="text-center text-[10px] uppercase tracking-[0.4em] font-bold text-gray-500">Trusted by Industry Leaders</p>
  </div>
  <div className="relative overflow-hidden">
    <motion.div
      className="flex items-center gap-24 w-max opacity-30 grayscale hover:grayscale-0 transition-[filter] duration-500 will-change-transform"
      animate={{ x: ['0%', '-50%'] }}
      transition={{
        duration: 30,
        ease: 'linear',
        repeat: Infinity,
      }}
      style={{ transform: 'translateZ(0)' }}
    >
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex gap-24 items-center px-12">
          {['IBM', 'Microsoft', 'Google', 'Deloitte', 'Amazon', 'Accenture', 'Intel', 'Oracle', 'Cisco'].map((brand) => (
            <div key={`${brand}-${i}`} className="text-2xl lg:text-4xl font-display font-bold tracking-tighter shrink-0">{brand}</div>
          ))}
        </div>
      ))}
    </motion.div>
    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />
  </div>
</section>

      {/* Services Carousel */}
<section className="py-32 relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 mb-16">
    <SectionHeading align="left" badge="Our Solutions" title="Premium Hardware for Every Scale" subtitle="From individual high-performance laptops to entire data center stacks, we provide the infrastructure that fuels your growth." className="px-0" />
  </div>

  <div className="relative pl-6 md:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
    <motion.div
      className="flex gap-6 cursor-grab active:cursor-grabbing will-change-transform"
      drag="x"
      dragConstraints={{ left: maxScroll, right: 0 }}
      dragElastic={0.05}
      dragMomentum={false}
      onDragStart={() => document.documentElement.classList.add('lenis-stopped')}
      onDragEnd={(_, info) => {
        document.documentElement.classList.remove('lenis-stopped');
        handleDragEnd(_, info);
      }}
      animate={{ x: -(currentIndex * cardWidth) }}
      transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      style={{ transform: 'translateZ(0)' }}
    >
      {services.map((service) => (
        <div
          key={service.title}
          className="relative min-w-[85vw] md:min-w-[400px] h-[420px] rounded-3xl overflow-hidden group shadow-2xl flex-shrink-0"
        >
          <img
            src={service.img}
  alt={service.title}
  decoding="async"
  loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
           
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 p-8 flex flex-col justify-between">
            <div className="w-9 h-9 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/20 group-hover:bg-brand-blue group-hover:border-brand-blue transition-all duration-500">
              {service.icon}
            </div>
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-display font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/80 text-xs max-w-[280px] leading-relaxed">{service.desc}</p>
              </div>
              <Link href={`/services#${service.id}`} className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 hover:text-white transition-all group/btn">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover/btn:bg-brand-blue group-hover/btn:border-brand-blue transition-all group-hover/btn:scale-110">
                  <ArrowRight size={16} />
                </div>
                <span className="group-hover:translate-x-1 transition-transform">Explore Solution</span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </motion.div>

    <div className="flex gap-4 mt-12">
      <button onClick={prevSlide} className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue hover:text-white transition-all text-foreground group" aria-label="Previous Slide">
        <ArrowRight className="rotate-180 group-active:-translate-x-1 transition-transform" size={24} />
      </button>
      <button onClick={nextSlide} className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue hover:text-white transition-all text-foreground group" aria-label="Next Slide">
        <ArrowRight className="group-active:translate-x-1 transition-transform" size={24} />
      </button>
    </div>
  </div>
</section>

      {/* Why Choose Us */}
      <section className="py-32 bg-card relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <SectionHeading align="left" badge="The Sapphire Advantage" title="Why Enterprises Trust Our IT Solutions" subtitle="We don't just provide hardware; we provide the reliability and scalability that modern businesses demand." className="mb-12 px-0" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue">{feature.icon}</div>
                  <h4 className="font-display font-bold text-lg">{feature.title}</h4>
                  <p className="text-gray-500 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square glass-card rounded-3xl p-4 rotate-3 animate-float overflow-hidden">
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80" alt="IT Solutions" className="w-full h-full object-cover rounded-2xl opacity-60" />
            </div>
            <div className="absolute -top-12 -right-12 w-48 h-48 glass-card rounded-full p-8 flex flex-col items-center justify-center text-center -rotate-12">
              <span className="text-3xl font-display font-bold text-brand-blue">150+</span>
              <span className="text-[10px] uppercase font-bold text-foreground/40">Enterprise Clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Bento Grid */}
      <section className="py-32">
        <SectionHeading badge="Verticals" title="Solutions Tailored for Every Sector" subtitle="Our infrastructure solutions are designed to meet the specific demands of diverse enterprise environments." />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className={cn('relative h-[300px] rounded-3xl overflow-hidden group cursor-pointer', item.size)}>
              <img src={item.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
              <div className="absolute bottom-8 left-8 z-20">
                <h4 className="text-2xl font-display font-bold text-white mb-2">{item.title}</h4>
                <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity">
                  View Cases <ArrowRight size={12} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-32 bg-card">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading badge="Workflows" title="Seamless Onboarding Process" />
          <div className="relative pt-12">
            {[
              { step: '01', title: 'Consultation', desc: 'Detailed analysis of your hardware and IT solutions requirements.' },
              { step: '02', title: 'Blueprint', desc: 'Creating a tailored deployment strategy for your specific scale.' },
              { step: '03', title: 'Deployment', desc: 'Secure delivery and professional setup within 48 hours.' },
              { step: '04', title: 'Lifecycle Support', desc: 'Continuous management, upgrades, and 24/7 technical assistance.' },
            ].map((p, i) => (
              <div key={i} className="flex gap-8 mb-16 last:mb-0 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center font-display font-bold text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">{p.step}</div>
                  {i !== 3 && <div className="w-px h-full bg-gradient-to-b from-brand-blue/50 to-transparent mt-4" />}
                </div>
                <div className="pt-2">
                  <h4 className="text-xl font-display font-bold mb-3">{p.title}</h4>
                  <p className="text-gray-500 max-w-lg leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue/5 blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1.5 bg-gradient-premium rounded-b-full shadow-[0_0_20px_rgba(var(--brand-blue-rgb),0.3)]" />
          <GlowCard className="pt-20 pb-10 md:pt-24 md:pb-16 px-6 md:px-16 text-center overflow-hidden relative">
            <SectionHeading title="Ready to Upgrade Your Enterprise IT Solutions?" subtitle="Talk to our technology experts today and get a tailored quote for your Nagpur or Bangalore operations." className="mb-12 px-0" />
            <div className="flex flex-col items-center justify-center gap-8">
              <MagneticButton onClick={openDrawer} className="bg-foreground text-background hover:bg-brand-blue hover:text-white px-10">Contact Our Team</MagneticButton>
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs md:text-sm font-bold text-foreground/60">
                <span className="flex items-center gap-2 whitespace-nowrap"><CheckCircle2 className="text-brand-blue w-4 h-4" /> 24/7 Support</span>
                <span className="flex items-center gap-2 whitespace-nowrap"><CheckCircle2 className="text-brand-blue w-4 h-4" /> Pan India (Nagpur & Bangalore)</span>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>
    </div>
  );
}
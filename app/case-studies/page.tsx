'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Building, ArrowRight, Cpu, Settings, LineChart, X } from 'lucide-react';
import { useDrawer } from '@/context/DrawerContext';
import PageHero from '@/components/ui/PageHero';
import GlowCard from '@/components/ui/GlowCard';
import MagneticButton from '@/components/ui/MagneticButton';

interface CaseStudyData {
  id: string;
  clientName: string;
  industry: string;
  location: 'Nagpur' | 'Bangalore';
  title: string;
  challenge: string;
  solution: string;
  metrics: { value: string; label: string }[];
  image: string;
  duration: string;
  tags: string[];
}

const caseStudiesList: CaseStudyData[] = [
  {
    id: 'edtech-scaleUp',
    clientName: 'EduSprint Unicorn',
    industry: 'EdTech & Training Solutions',
    location: 'Bangalore',
    title: '500+ Standard Workstations Setup for Onboarding Sprint',
    challenge: 'EduSprint signed up a massive cohort of temporary remote tutors to onboard inside 9 days, requiring high-spec corporate Windows laptops imaged with strict proxy configurations and secure VPN setups.',
    solution: 'Sapphire staged, tested, and dispatched 540 custom-imaged Lenovo ThinkPads with preconfigured network settings directly to individual teams inside Bangalore. Included live on-call support setups throughout the training sprint.',
    metrics: [
      { value: '540+', label: 'Laptops Configured' },
      { value: '48hr', label: 'Staged & Deployed' },
      { value: '100%', label: 'Uptime Throughout' },
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80',
    duration: '6 Months Lease',
    tags: ['ThinkPad Rentals', 'MDM Profiles', 'Corporate Scaling'],
  },
  {
    id: 'finance-core-infrastructure',
    clientName: 'Apex Securities Ltd.',
    industry: 'Financial Brokerage & Trading',
    location: 'Nagpur',
    title: 'High-Frequency Core Workstation Setup & Firewall Architecture',
    challenge: 'Apex Securities required a completely local, physical server hardware backup stack alongside high-density multi-monitor workstations for thirty traders to ensure compliance and prevent latency issues.',
    solution: 'We installed dual-socket Dell PowerEdge rack servers with local RAID storage controllers, dressed custom Cat6A cabling lines cleanly across their main floor, and deployed Intel Core i9 workstations featuring quadruple display cards.',
    metrics: [
      { value: '30+', label: 'Tier-1 Workstations' },
      { value: 'Dual', label: 'Dell PowerEdge Nodes' },
      { value: '0ms', label: 'Network Latency Snags' },
    ],
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80',
    duration: '2-Year AMC & Lease',
    tags: ['Server Deployments', 'Firewalls', 'AMC Contracts'],
  },
  {
    id: 'tech-summit-audiovisual',
    clientName: 'Global AI Summit 2026',
    industry: 'Event Venues & Technology',
    location: 'Bangalore',
    title: 'Immersive Audio-Visual Staging for Multi-Stage Convention',
    challenge: 'A major international artificial intelligence conference required double 4K Fine Pixel LED wall backdrops, flawless stage audio systems for seventy global thought leaders, and zero-flicker live feed switching.',
    solution: 'Deploying EPSON 20,000-lumen laser projectors, Shure wireless microphone grids, and specialized modular LED tiles. Four certified sound engineers and video controllers were stationed on-premise throughout the 3-day event.',
    metrics: [
      { value: '20K', label: 'ANSI Laser Lumens' },
      { value: '2500+', label: 'Active Audiences' },
      { value: 'Zero', label: 'Audio-Visual Snags' },
    ],
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80',
    duration: '4-Days Summit',
    tags: ['LED Walls', 'Sound Engineering', '4K Projectors'],
  },
  {
    id: 'heavy-manufacturing-amc',
    clientName: 'Nagpur AutoForgings Pvt. Ltd.',
    industry: 'Heavy Industry & Assembly',
    location: 'Nagpur',
    title: 'Enterprise AMC & Security Restructuring Across 3 Factories',
    challenge: 'Unmanaged firmware updates and dusty physical environments caused corporate laptops and local files servers to shut down unexpectedly, slowing production pipelines and causing diagnostic delays.',
    solution: 'Implemented a Comprehensive Annual Maintenance Contract. Organized scheduled monthly on-ground cleanup, replaced aging hardware nodes, upgraded primary data pathways to fiber loops, and deployed Sophos Firewalls.',
    metrics: [
      { value: '150+', label: 'Connected Terminal Nodes' },
      { value: '98.5%', label: 'Downtime Elimination' },
      { value: '2h', label: 'Emergency Support SLA' },
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    duration: 'Annual Comprehensive Contract',
    tags: ['AMC Service', 'Sophos Firewall', 'Preventative Sweep'],
  },
];

export default function CaseStudies() {
  const { openDrawer } = useDrawer();
  const [filterLocation, setFilterLocation] = useState<'All' | 'Nagpur' | 'Bangalore'>('All');
  const [selectedStudy, setSelectedStudy] = useState<CaseStudyData | null>(null);

  const filteredStudies = React.useMemo(() => {
  return filterLocation === 'All'
    ? caseStudiesList
    : caseStudiesList.filter(
        study => study.location === filterLocation
      );
}, [filterLocation]);

  return (
    <div className="pb-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <PageHero
        badge="Proven Success"
        title="B2B Implementations"
        subtitle="Explore detailed case studies showing how we help corporate teams and enterprise units scale their computing footprints."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
      />

      <div className="max-w-7xl mx-auto px-6 mt-16 md:mt-24">

        {/* Location Filter */}
        <div className="flex justify-center gap-3 mb-16">
          {(['All', 'Nagpur', 'Bangalore'] as const).map((loc) => (
            <button
              key={loc}
              onClick={() => setFilterLocation(loc)}
              className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                filterLocation === loc
                  ? 'bg-gradient-premium text-white border-transparent shadow-lg shadow-brand-blue/20'
                  : 'bg-card/40 border-border text-foreground/40 hover:border-brand-blue/50 hover:text-foreground'
              }`}
            >
              {loc}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-24">
            {filteredStudies.map((study, idx) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group transform-gpu flex flex-col justify-between bg-card/20 hover:bg-card/40 border border-border/60 rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 shadow-xl"
              >
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-brand-blue uppercase">
                      <MapPin size={14} />
                      {study.location}
                    </div>
                    <div className="text-[10px] font-bold text-foreground/45 uppercase tracking-widest flex items-center gap-1.5 bg-background/50 border border-border/40 px-3 py-1.5 rounded-full">
                      <Building size={12} />
                      {study.industry}
                    </div>
                  </div>

                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md">
                    {/* <img src={study.image} alt={study.clientName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" decoding="async" /> */}
                    <Image
  src={study.image}
  alt={study.clientName}
  fill
  loading="lazy"
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover group-hover:scale-105 transition-transform duration-700"
/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute bottom-6 left-6 text-white font-display text-2xl font-black">{study.clientName}</span>
                  </div>

                  <div className="space-y-3">
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-purple">Case Story</span>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-foreground transition-colors group-hover:text-brand-blue duration-300">{study.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed line-clamp-3">{study.challenge}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border/40">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="text-center rounded-xl bg-background/30 border border-border/30 p-3">
                        <div className="text-base md:text-lg font-display font-black text-brand-blue">{metric.value}</div>
                        <div className="text-[8px] uppercase font-bold tracking-widest text-foreground/40 mt-1 truncate">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-foreground/40 uppercase tracking-widest">{study.duration}</span>
                  <button
                    onClick={() => setSelectedStudy(study)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-blue hover:text-brand-purple group/btn duration-300"
                  >
                    Read Details <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedStudy && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedStudy(null)} className="absolute inset-0 bg-black/80 backdrop-blur-md" />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                // exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                className="relative bg-background border border-border rounded-[2.5rem] w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-2xl p-8 md:p-12 z-10"
                onWheel={(e) => { e.stopPropagation(); e.currentTarget.scrollTop += e.deltaY; }}
              >
                <button onClick={() => setSelectedStudy(null)} className="absolute top-6 right-6 w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/40 hover:text-foreground hover:bg-card duration-300">
                  <X size={18} />
                </button>

                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-mono font-bold tracking-wider text-brand-blue uppercase bg-brand-blue/10 px-3 py-1 rounded-full">{selectedStudy.location}</span>
                      <span className="text-xs font-mono font-bold tracking-wider text-brand-purple uppercase bg-brand-purple/10 px-3 py-1 rounded-full">{selectedStudy.industry}</span>
                    </div>
                    <span className="text-xs font-mono font-bold uppercase text-foreground/40">{selectedStudy.duration}</span>
                    <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground tracking-tight">{selectedStudy.title}</h2>
                    <p className="text-foreground/60 text-lg font-medium">{selectedStudy.clientName}</p>
                  </div>

                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                    {/* <img src={selectedStudy.image} alt={selectedStudy.clientName} className="w-full h-full object-cover" /> */}
                    <Image
  src={selectedStudy.image}
  alt={selectedStudy.clientName}
  fill
  sizes="(max-width: 768px) 100vw, 900px"
  className="object-cover"
/>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 border-y border-border/50">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold text-brand-purple uppercase tracking-widest">
                        <Cpu size={14} /> The Challenge
                      </div>
                      <p className="text-foreground/70 text-base leading-relaxed">{selectedStudy.challenge}</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold text-brand-blue uppercase tracking-widest">
                        <Settings size={14} /> The Implementation
                      </div>
                      <p className="text-foreground/70 text-base leading-relaxed">{selectedStudy.solution}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-brand-blue uppercase tracking-widest">
                      <LineChart size={14} /> Tangible Outcomes
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {selectedStudy.metrics.map((metric, i) => (
                        <div key={i} className="bg-card border border-border/80 rounded-2xl p-5 text-center">
                          <span className="text-2xl md:text-3xl font-display font-black text-brand-blue">{metric.value}</span>
                          <span className="block text-[10px] uppercase font-bold tracking-widest text-foreground/40 mt-1">{metric.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {selectedStudy.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest bg-card border border-border/60 px-3 py-1.5 rounded-full">#{tag}</span>
                    ))}
                  </div>

                  <div className="pt-6 flex justify-end gap-4">
                    <button onClick={() => setSelectedStudy(null)} className="px-6 py-3 border border-border rounded-xl text-xs font-bold uppercase text-foreground/40 hover:text-foreground hover:bg-card duration-300">
                      Close Report
                    </button>
                    <MagneticButton onClick={() => { setSelectedStudy(null); openDrawer(); }} className="bg-gradient-premium text-white text-xs px-6">
                      Establish Workspace Like This
                    </MagneticButton>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20">
          <GlowCard className="bg-gradient-premium p-12 md:p-16 text-center text-white border-none rounded-[3rem]">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Partner with Sapphire IT Solutions</h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">Our hardware leases feature direct warranty replacements and SLA-backed maintenance in Nagpur & Bangalore.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={openDrawer} className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-neutral-100 transition-all text-sm uppercase tracking-widest">
                Request Custom Quotation
              </button>
              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer" className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all text-sm tracking-widest uppercase inline-flex items-center justify-center">
                Chat on WhatsApp
              </a>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </div>
  );
}
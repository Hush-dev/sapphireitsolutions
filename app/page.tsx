'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Laptop, Server, Zap, ArrowRight, CheckCircle2, Rocket, Users, Cpu, Presentation, Wrench, TrendingUp, Coins, X, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import GlowCard from '@/components/ui/GlowCard';
import MagneticButton from '@/components/ui/MagneticButton';
import { cn } from '@/lib/utils';
import { useDrawer } from '@/context/DrawerContext';

// --- Animated Counter ---
interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
}

function AnimatedCounter({ value, suffix = '', decimals = 0 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || hasAnimated.current) return;
      hasAnimated.current = true;
      observer.disconnect();

      const duration = 1200;
      const startTime = performance.now();

      const animate = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out quart - fast start, smooth end
        const eased = 1 - Math.pow(1 - progress, 4);
        setCount(eased * value);
        if (progress < 1) requestAnimationFrame(animate);
        else setCount(value);
      };

      requestAnimationFrame(animate);
    }, { threshold: 0.3 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {count.toFixed(decimals)}{suffix}
    </span>
  );
}

// --- Static data outside component to avoid re-creation ---
const TRUST_METRICS = [
  { value: 6.5, decimals: 1, suffix: 'k+', label: 'Active Hardware Devices' },
  { value: 150, decimals: 0, suffix: '+', label: 'Enterprise Projects' },
  { value: 10, decimals: 0, suffix: '+', label: 'Cities Serviced' },
  { value: 300, decimals: 0, suffix: '+', label: 'Happy Customers' },
];

const TESTIMONIALS = [
  { quote: "Transitioning our 150+ developer workforce in Bangalore to Sapphire's leased MacBooks was entirely hands-free. They handled full specification matching, secure imaging, and delivery in 48 hours flawlessly.", author: 'Rajesh Sen', role: 'VP of Engineering, Nexahealth', location: 'Bangalore' },
  { quote: "Our hardware depreciation costs used to consume 12% of our quarterly liquid capital. Moving our infrastructure needs entirely to Sapphire OPEX leasing freed up critical cash for core operations.", author: 'Ananya Deshmukh', role: 'Chief Operating Officer, AlphaScale', location: 'Nagpur' },
  { quote: "Whenever we need additional temporary corporate projectors, workstations, or servers for high-stakes enterprise events, Sapphire delivers. Their technical on-call team is unmatched.", author: 'Karthik Nair', role: 'Head of Infrastructure, Zenith Systems', location: 'Bangalore' },
];

const CASE_STUDIES = [
  { industry: 'Corporate Offices', client: 'Nexahealth Corporate HQ', devices: '180+ MacBook Pro & Windows Fleet', duration: '36 Months Managed Lease', challenge: 'High CapEx outlay and complex device maintenance multi-city burdened internal ops, delaying deployment to remote executives.', solution: 'Fully outsourced device lifespans backed by Sapphire. Deployed custom provisioning and next-day emergency loaner units.', result: 'Onboarding down to 24 hours, capital budget overhead saved by 35% compared to outright corporate ownership.' },
  { industry: 'Tech Startups', client: 'AlphaScale AI Labs', devices: '55+ M3 Max & High-tier Workstations', duration: '12 Months Flexible Lease', challenge: 'High-end ML workstations are prohibitively expensive and depreciate wildly in 18 months, straining early stage seed funds.', solution: 'Sapphire high-tier workspace options with flexible scale plans. Swappable parts and configurations on-demand with zero extra setup fee.', result: 'Preserved 92 Lakhs capital balance directly mapped to hiring and product development runways.' },
  { industry: 'Educational Institutes', client: 'Zenith Institute of Technology', devices: '120+ CAD Terminals & Presentation Displays', duration: '10 Months Custom Trim', challenge: 'Heavy CAD programs require solid GPU systems, but class labs remained fully vacant during seasonal vacation calendar windows.', solution: 'Leases aligned precisely to active course calendars, complete with student-grade administrative restrictions and custom labs imaging.', result: 'Reduced hardware acquisition costs by 40% annually while maintaining an active hardware cycle.' },
  { industry: 'Events & Conferences', client: 'Global Tech Summit Nagpur', devices: '300+ Event Terminals & Audio-Visual Rigs', duration: 'Short-term Event Package', challenge: 'Managing massive transient hardware needs with a 3-day layout and 100% video redundancy with absolutely zero room for setup errors.', solution: 'Turnkey presentation setup. Back-office deployment, technical riggers, and hardware redundancy run-sheets managed by Sapphire onsite team.', result: 'Zero system errors during 18 high-profile presentations with 15,000 attendee sessions.' },
];

const SERVICES = [
  { title: 'Apple MacBooks', id: 'apple-macbooks', desc: 'Premium M-series Apple MacBook Pros and Airs configured for creators and power users.', icon: <Laptop className="w-5 h-5" />, img: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80' },
  { title: 'Laptop Rentals', id: 'laptop-rentals', desc: 'Latest high-performance laptops for corporate teams.', icon: <Laptop className="w-5 h-5" />, img: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80' },
  { title: 'Server Solutions', id: 'server-solutions', desc: 'Enterprise-grade server stacks for scalable compute.', icon: <Server className="w-5 h-5" />, img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80' },
  { title: 'Projector & AV', id: 'av-solutions', desc: 'Premium visual setups for events and boardrooms.', icon: <Presentation className="w-5 h-5" />, img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80' },
  { title: 'IT Solutions Setup', id: 'infrastructure', desc: 'End-to-end office technology deployment.', icon: <Cpu className="w-5 h-5" />, img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80' },
  { title: 'AMC Services', id: 'amc-services', desc: 'Comprehensive Annual Maintenance Contracts to keep your IT infrastructure running smoothly.', icon: <Wrench className="w-5 h-5" />, img: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80' },
];

const INDUSTRIES = [
  { title: 'Corporate Offices', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80', size: 'col-span-2' },
  { title: 'Tech Startups', img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80', size: 'col-span-1' },
  { title: 'Educational Institutes', img: 'https://images.unsplash.com/photo-1523050335456-c46d750fb9b1?auto=format&fit=crop&q=80', size: 'col-span-1' },
  { title: 'Events & Conferences', img: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80', size: 'col-span-2' },
];

const FEATURES = [
  { title: 'Fast Deployment', desc: 'Hardware delivered and set up within 24-48 hours.', icon: <Zap /> },
  { title: 'Latest Hardware', desc: 'Enterprise-grade equipment from top global Tiers.', icon: <Cpu /> },
  { title: 'Flexible Plans', desc: 'Scale your infrastructure up or down as you grow.', icon: <Rocket /> },
  { title: 'Expert Support', desc: 'Dedicated technicians on-site and remote.', icon: <Users /> },
];

const PROCESS_STEPS = [
  { step: '01', title: 'Consultation', desc: 'Detailed analysis of your hardware and IT solutions requirements.' },
  { step: '02', title: 'Blueprint', desc: 'Creating a tailored deployment strategy for your specific scale.' },
  { step: '03', title: 'Deployment', desc: 'Secure delivery and professional setup within 48 hours.' },
  { step: '04', title: 'Lifecycle Support', desc: 'Continuous management, upgrades, and technical assistance.' },
];

export default function Home() {
  const { openDrawer } = useDrawer();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [estimateFleet, setEstimateFleet] = useState(30);
  const [activeQuote, setActiveQuote] = useState(0);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
  let timeout: NodeJS.Timeout;

  const handleResize = () => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      setWindowWidth(window.innerWidth);
    }, 150);
  };

  handleResize();

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
    clearTimeout(timeout);
  };
}, []);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const formatCurrency = React.useCallback((amount: number) => {
    if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)} Cr`;
    if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)} Lakhs`;
    return `₹${amount.toLocaleString('en-IN')}`;
  }, []);

const cardWidth = React.useMemo(() => 
  windowWidth < 768 ? windowWidth * 0.85 + 24 : 424, 
[windowWidth]);

const maxScroll = React.useMemo(() => 
  -(SERVICES.length - 1) * cardWidth, 
[cardWidth]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % SERVICES.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x < -50 || info.velocity.x < -500) {
      if (currentIndex < SERVICES.length - 1) setCurrentIndex(prev => prev + 1);
    } else if (info.offset.x > 50 || info.velocity.x > 500) {
      if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
    }
  };

  const prevQuote = () => setActiveQuote((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  const nextQuote = () => setActiveQuote((prev) => (prev + 1) % TESTIMONIALS.length);

  // Fixed lease percentage — constant regardless of fleet size
  const leasePercent = Math.round((2800 / 75000) * 100);
  const purchaseCost = React.useMemo(
  () => estimateFleet * 75000,
  [estimateFleet]
);

const monthlyLease = React.useMemo(
  () => estimateFleet * 2800,
  [estimateFleet]
);

const cashPreserved = React.useMemo(
  () => purchaseCost - monthlyLease,
  [purchaseCost, monthlyLease]
);

  return (
    <div className="overflow-hidden">

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black z-10" />
          <video ref={videoRef} autoPlay loop muted playsInline preload="metadata" className="w-full h-full object-cover opacity-50 scale-105" onLoadedData={() => videoRef.current?.play().catch(() => {})}>
            <source src="/video/hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-[1.1] pt-24 text-white">
            Enterprise IT <br />
            <span className="text-gradient">IT Solutions, Simplified.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Premium IT hardware and rental solutions for forward-thinking enterprises across Bangalore and Nagpur.
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
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-brand-blue/20 blur-2xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-brand-purple/20 blur-2xl pointer-events-none" />
      </section>

      {/* Trust Marquee — fixed loop */}
      <section className="py-24 border-y border-border bg-card overflow-hidden">
        <div className="px-6 mb-12">
          <p className="text-center text-[10px] uppercase tracking-[0.4em] font-bold text-gray-500">Trusted by Industry Leaders</p>
        </div>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex items-center gap-24 w-max opacity-30 grayscale hover:grayscale-0 transition-[filter] duration-500 will-change-transform"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
            style={{ transform: 'translateZ(0)' }}
          >
            {/* 2 identical copies = seamless -50% loop */}
            {[0, 1].map((i) => (
              <div key={i} className="flex gap-24 items-center px-12 shrink-0">
                {['IBM', 'Microsoft', 'Google', 'Deloitte', 'Amazon', 'Accenture', 'Intel', 'Oracle', 'Cisco'].map((brand) => (
                  <div key={brand} className="text-2xl lg:text-4xl font-display font-bold tracking-tighter shrink-0">{brand}</div>
                ))}
              </div>
            ))}
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />
        </div>
      </section>

      {/* Rent vs Buy Calculator */}
      <section className="py-24 md:py-32 relative overflow-hidden border-b border-border bg-background">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-brand-blue/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-purple/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
            <SectionHeading align="center" badge="Asset Management Strategy" title="Rent vs. Buy: The Operational Advantage" subtitle="In enterprise growth, outright asset ownership is a depreciating trap. See why India's leading tech operators prioritize low-OPEX fleet leasing over capital-draining procurement." className="px-0" />
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-[2.5rem] p-8 md:p-10 shadow-lg relative overflow-hidden transform-gpu">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-bl-full pointer-events-none" />
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest block mb-1">Dynamic ROI Estimator</span>
                  <h3 className="font-display font-bold text-lg text-foreground">Analyze Your Capital Impact</h3>
                </div>
                <div className="space-y-4 pt-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-foreground/50 tracking-wider font-mono font-medium">PROJECTED FLEET SIZE:</span>
                    <span className="text-xl font-display font-black text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-lg border border-brand-blue/20">{estimateFleet} Laptops</span>
                  </div>
                  <input type="range" min="10" max="250" value={estimateFleet} 
                  onChange={(e) => {
  requestAnimationFrame(() => {
    setEstimateFleet(Number(e.target.value));
  });
}}
                  className="w-full h-1 bg-border rounded-lg appearance-none cursor-pointer accent-brand-blue focus:outline-none" />
                  <div className="flex justify-between text-[10px] text-foreground/35 font-semibold font-mono tracking-wider">
                    <span>10 DEVICES</span><span>125</span><span>250 DEVICES</span>
                  </div>
                </div>
                <div className="space-y-4 pt-4 border-t border-border/40">
                  <span className="text-[10px] font-bold text-foreground/45 uppercase tracking-widest block">Upfront Capital Required</span>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-foreground/50">Outright Purchase (CAPEX)</span>
                      <span className="text-red-500 font-bold">{formatCurrency(purchaseCost)}</span>
                    </div>
                    <div className="w-full bg-border/40 h-2.5 rounded-full overflow-hidden transform-gpu">
                      <div className="bg-gradient-to-r from-red-500/80 to-red-500 h-full rounded-full w-full" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-brand-blue">Sapphire Lease (Opex)</span>
                      <span className="text-emerald-500 font-bold">{formatCurrency(monthlyLease)}<span className="text-[10px] font-normal text-foreground/50">/mo</span></span>
                    </div>
                    <div className="w-full bg-border/40 h-2.5 rounded-full overflow-hidden transform-gpu">
                      <div className="bg-gradient-to-r from-brand-blue to-emerald-400 h-full rounded-full" style={{
  width: `${leasePercent}%`,
  transform: 'translate3d(0,0,0)',
  willChange: 'width',
}} />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-border/40">
                  <div className="bg-background border border-border/40 rounded-2xl p-4">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-500 uppercase tracking-widest"><Coins size={12} /> Cash Preserved</div>
                    <h3 className="font-display font-bold text-lg text-foreground">{formatCurrency(cashPreserved)}</h3>
                    <span className="text-[9px] text-foreground/45 leading-snug block mt-1">Keep your working liquid capital for core hiring & marketing.</span>
                  </div>
                  <div className="bg-background border border-border/40 rounded-2xl p-4">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-brand-blue uppercase tracking-widest"><TrendingUp size={12} /> Tech Upgrade Cycle</div>
                    <h3 className="font-display font-bold text-lg text-foreground">Every 18 Months</h3>
                    <span className="text-[9px] text-foreground/45 leading-snug block mt-1">Never get stuck with depreciated older laptops. Swap at zero cost.</span>
                  </div>
                </div>
                <div className="bg-brand-blue/[0.03] border border-brand-blue/20 rounded-2xl p-4 text-center">
                  <p className="text-xs text-brand-blue/80 leading-relaxed font-medium">💡 Rented devices are structured as 100% tax-deductible operational expenditures (OPEX), providing substantial tax write-offs compared to buying depreciation curves.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <MagneticButton onClick={openDrawer} className="bg-foreground text-background hover:bg-brand-blue hover:text-white px-10 shadow-md">
              <span className="flex items-center gap-2 font-display text-sm uppercase tracking-widest font-black">Set Up Rented Workforce <ArrowRight className="w-4 h-4" /></span>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-20 bg-card border-b border-border relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-brand-blue/[0.03] rounded-full blur-xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center lg:divide-x divide-border/40">
            {TRUST_METRICS.map((metric, idx) => (
              <div key={metric.label || idx} className="px-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight text-foreground">
                  <AnimatedCounter value={metric.value} decimals={metric.decimals} suffix={metric.suffix} />
                </h2>
                <span className="text-[10px] md:text-xs uppercase font-mono font-bold tracking-widest text-foreground/45 mt-3 block">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Carousel */}
<section className="py-32 relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 mb-16">
    <SectionHeading align="left" badge="Our Solutions" title="Premium Hardware for Every Scale" subtitle="From individual high-performance laptops to entire data center stacks, we provide the infrastructure that fuels your growth." className="px-0" />
  </div>
  <div className="relative pl-6 md:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
    <motion.div
  className="flex gap-6 will-change-transform transform-gpu"
  animate={{
    x: -(currentIndex * cardWidth),
  }}
  transition={{
    type: 'spring',
    stiffness: 120,
    damping: 20,
  }}
  style={{
    transform: 'translate3d(0,0,0)',
  }}
>
      {SERVICES.map((service, index) => (
        <div key={service.id} className="relative min-w-[85vw] md:min-w-[400px] h-[420px] rounded-3xl overflow-hidden group shadow-xl flex-shrink-0 transform-gpu">
          <Image
  src={service.img}
  alt={service.title}
  fill
  priority={index < 2}
  loading={index < 2 ? 'eager' : 'lazy'}
  sizes="(max-width: 768px) 85vw, 400px"
  className="object-cover"
/>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 p-8 flex flex-col justify-between">
            <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center text-white border border-white/20 group-hover:bg-brand-blue group-hover:border-brand-blue transition-all duration-500">
              {service.icon}
            </div>
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-display font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/80 text-xs max-w-[280px] leading-relaxed">{service.desc}</p>
              </div>
              <Link href={`/services/${service.id}`} className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 hover:text-white transition-all group/btn">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover/btn:bg-brand-blue group-hover/btn:border-brand-blue transition-all group-hover/btn:scale-110">
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
        <ArrowRight className="rotate-180" size={24} />
      </button>
      <button onClick={nextSlide} className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue hover:text-white transition-all text-foreground group" aria-label="Next Slide">
        <ArrowRight size={24} />
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
              {FEATURES.map((feature, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue">{feature.icon}</div>
                  <h4 className="font-display font-bold text-lg text-foreground">{feature.title}</h4>
                  <p className="text-gray-500 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square glass-card rounded-3xl p-4 rotate-3 animate-float overflow-hidden">
              {/* <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80" alt="IT Solutions" className="w-full h-full object-cover rounded-2xl opacity-60"  /> */}
              <Image
  src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop"
  alt="IT Solutions"
  fill
  priority
  sizes="100vw"
  className="object-cover rounded-2xl opacity-60"
/>
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
          {INDUSTRIES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedCaseStudy(i)}
              className={cn('relative h-[300px] rounded-3xl overflow-hidden group cursor-pointer', item.size)}
            >
              {/* <img src={item.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} loading="lazy" decoding="async" /> */}
              <Image
  src={item.img}
  alt={item.title}
  fill
  loading="lazy"
  sizes="(max-width: 768px) 85vw, 400px"
  className="object-cover transition-transform duration-700 group-hover:scale-110"
/>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
              <div className="absolute bottom-8 left-8 z-20">
                <h4 className="text-2xl font-display font-bold text-white mb-2">{item.title}</h4>
                <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-brand-blue opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
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
            {PROCESS_STEPS.map((p, i) => (
              <div key={i} className="flex gap-8 mb-16 last:mb-0 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center font-display font-bold text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">{p.step}</div>
                  {i !== PROCESS_STEPS.length - 1 && <div className="w-px h-full bg-gradient-to-b from-brand-blue/50 to-transparent mt-4" />}
                </div>
                <div className="pt-2">
                  <h4 className="text-xl font-display font-bold mb-3 text-foreground">{p.title}</h4>
                  <p className="text-gray-500 max-w-lg leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative overflow-hidden bg-background border-t border-b border-border/40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/[0.03] rounded-full blur-2xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading badge="Partner Feedback" title="What Operators Say" align="center" />
          <div className="mt-16 relative">
            <div className="bg-card border border-border/80 rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden shadow-lg">
              <div className="absolute -top-6 -left-2 text-[12rem] font-serif font-black text-brand-blue/5 pointer-events-none leading-none select-none">"</div>
              <div className="relative z-10 space-y-8">
                <div className="min-h-[140px] flex items-center">
                  <p className="font-display text-lg font-semibold leading-relaxed tracking-tight italic text-foreground">
                    "{TESTIMONIALS[activeQuote].quote}"
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-border/40">
                  <div>
                    <p className="font-display font-bold text-foreground">{TESTIMONIALS[activeQuote].author}</p>
                    <p className="text-xs text-brand-blue font-bold uppercase tracking-widest mt-1">{TESTIMONIALS[activeQuote].role}</p>
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-foreground/40 font-bold">{TESTIMONIALS[activeQuote].location}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-6 mt-8">
              <button onClick={prevQuote} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:bg-card hover:text-brand-blue hover:border-brand-blue transition-all duration-300" aria-label="Previous testimonial">
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button key={idx} onClick={() => setActiveQuote(idx)} className={cn('h-2 rounded-full transition-all duration-300', activeQuote === idx ? 'w-8 bg-brand-blue' : 'w-2 bg-border/80 hover:bg-border')} aria-label={`Go to testimonial ${idx + 1}`} />
                ))}
              </div>
              <button onClick={nextQuote} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:bg-card hover:text-brand-blue hover:border-brand-blue transition-all duration-300" aria-label="Next testimonial">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue/[0.03] blur-2xl" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1.5 bg-gradient-premium rounded-b-full" />
          <GlowCard className="pt-20 pb-10 md:pt-24 md:pb-16 px-6 md:px-16 text-center overflow-hidden relative">
            <SectionHeading title="Ready to Upgrade Your Enterprise IT Solutions?" subtitle="Talk to our technology experts today and get a tailored quote for your Nagpur or Bangalore operations." className="mb-12 px-0" />
            <div className="flex flex-col items-center justify-center gap-8">
              <MagneticButton onClick={openDrawer} className="bg-foreground text-background hover:bg-brand-blue hover:text-white px-10">Contact Our Team</MagneticButton>
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs md:text-sm font-bold text-foreground/60">
                {/* <span className="flex items-center gap-2 whitespace-nowrap"><CheckCircle2 className="text-brand-blue w-4 h-4" /> 24/7 Support</span> */}
                {/* <span className="flex items-center gap-2 whitespace-nowrap"><CheckCircle2 className="text-brand-blue w-4 h-4" /> Nagpur & Bangalore</span> */}
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCaseStudy !== null && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedCaseStudy(null)} className="absolute inset-0 bg-black/60 backdrop-blur-md" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-background border border-border rounded-[2rem] shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/[0.03] rounded-bl-full pointer-events-none" />
              <div className="p-6 md:p-10 overflow-y-auto space-y-8 flex-1" onWheel={(e) => { e.stopPropagation(); e.currentTarget.scrollTop += e.deltaY; }}>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em] block mb-2 font-mono">Case Study ({CASE_STUDIES[selectedCaseStudy].industry})</span>
                    <h3 className="text-2xl md:text-3xl font-display font-black text-foreground leading-tight">{CASE_STUDIES[selectedCaseStudy].client}</h3>
                  </div>
                  <button onClick={() => setSelectedCaseStudy(null)} className="p-2 rounded-full hover:bg-card text-foreground/40 hover:text-foreground transition-colors" aria-label="Close">
                    <X size={20} />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4 bg-card border border-border p-4 rounded-2xl font-mono text-xs text-foreground/70">
                  <div>
                    <span className="text-[10px] text-foreground/40 uppercase tracking-wider block font-bold mb-1">DEPLOYED FLEET:</span>
                    <span className="font-semibold text-foreground">{CASE_STUDIES[selectedCaseStudy].devices}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-foreground/40 uppercase tracking-wider block font-bold mb-1">LEASE TERMS:</span>
                    <span className="font-semibold text-foreground">{CASE_STUDIES[selectedCaseStudy].duration}</span>
                  </div>
                </div>
                <div className="space-y-6">
                  {[
                    { label: 'The Challenge', color: 'bg-red-500', text: CASE_STUDIES[selectedCaseStudy].challenge },
                    { label: 'Engineered Solution', color: 'bg-brand-blue', text: CASE_STUDIES[selectedCaseStudy].solution },
                    { label: 'Business Impact', color: 'bg-emerald-500', text: CASE_STUDIES[selectedCaseStudy].result },
                  ].map((item) => (
                    <div key={item.label} className="space-y-2">
                      <h4 className="font-display font-bold text-foreground flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 ${item.color} rounded-full`} /> {item.label}
                      </h4>
                      <p className="text-sm text-foreground/60 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-card border-t border-border flex justify-end gap-3">
                <button onClick={() => setSelectedCaseStudy(null)} className="px-5 py-2.5 rounded-xl border border-border text-xs uppercase tracking-widest font-mono font-bold text-foreground/40 hover:text-foreground transition-colors">Close View</button>
                <button onClick={() => { setSelectedCaseStudy(null); openDrawer(); }} className="px-5 py-2.5 rounded-xl bg-brand-blue hover:bg-brand-blue/90 text-white text-xs uppercase tracking-widest font-mono font-bold transition-colors shadow-lg shadow-brand-blue/20">Inquire Similar Solution</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
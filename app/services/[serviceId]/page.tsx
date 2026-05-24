'use client'

import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Laptop, Server, Presentation, Cpu, Wrench, ChevronRight, Check } from 'lucide-react';
import { useDrawer } from '@/context/DrawerContext';
import PageHero from '@/components/ui/PageHero';
import GlowCard from '@/components/ui/GlowCard';
import MagneticButton from '@/components/ui/MagneticButton';

interface ServiceDetailData {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  icon: React.ReactNode;
  heroImage: string;
  introText: string;
  bodyImage: string;
  bodyTitle: string;
  bodyText: string;
  stats: { value: string; label: string }[];
  keyBenefits: string[];
  specs: { category: string; items: { label: string; value: string }[] }[];
  faqs: { q: string; a: string }[];
}

const servicesContent: Record<string, ServiceDetailData> = {
  'apple-macbooks': {
    id: 'apple-macbooks',
    title: 'Apple MacBooks',
    subtitle: 'High-end M-Series MacBook Pro & Air leasing for design, development, and creators.',
    badge: 'Creative Powerhouse',
    icon: <Laptop size={32} />,
    heroImage: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80',
    introText: 'Unleash the full potential of your creative and technical teams with premium Apple silicon. Sapphire IT Solutions provides premium, flexible leasing on the latest Apple MacBook Pros and Airs, meticulously configured for developers, UI/UX designers, video editors, and power users in Nagpur and Bangalore.',
    bodyImage: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80',
    bodyTitle: 'The Apple Silicon Advantage without the CAPEX',
    bodyText: 'We handle entire workflows. Each MacBook is preloaded with specified software profiles and security configurations. By leasing through Sapphire, your business optimizes tax reporting via OPEX structures while ensuring your design and engineering units never experience computing bottlenecks.',
    stats: [
      { value: '3x', label: 'Faster Compile Times' },
      { value: '18+', label: 'Hours Battery Endurance' },
      { value: '100%', label: 'Maintenance Covered' },
    ],
    keyBenefits: [
      'Next-Gen M2 Pro, M2 Max, & M3 Series Configurations',
      'Unified Memory options up to 96GB or 128GB RAM',
      'Zero-downtime diagnostic and replacement warranty',
      'Enterprise Jamf deployment and MDM profiling ready',
    ],
    specs: [
      {
        category: 'Performance Specs',
        items: [
          { label: 'Processors Available', value: 'Apple Silicon M2, M2 Pro, M3, M3 Pro, M3 Max' },
          { label: 'Screen Variations', value: 'Liquid Retina XDR 14.2-inch & 16.2-inch displays' },
          { label: 'Memory Bandwidth', value: 'Up to 300GB/s unified RAM bandwidth' },
          { label: 'Storage Capacity', value: '512GB to 4TB High-Speed NVMe Storage' },
        ],
      },
      {
        category: 'Leasing Logistics',
        items: [
          { label: 'Minimum Duration', value: 'From 1 month up to 3-year structured contracts' },
          { label: 'Standard Delivery', value: 'Under 24 hours for central Nagpur & Bangalore hubs' },
          { label: 'Maintenance support', value: 'Included' },
          { label: 'Insurance Cover', value: 'Available standard corporate theft & asset protection' },
        ],
      },
    ],
    faqs: [
      { q: 'Can we install custom enterprise profile software?', a: 'Yes, we can pre-configure MacBooks with your Jamf, MDM, or individual corporate software profile before delivery.' },
      { q: 'What happens if a device is physically damaged?', a: 'We offer specialized accidental damage covers as part of our corporate service agreements to protect your business parameters.' },
    ],
  },
  'laptop-rentals': {
    id: 'laptop-rentals',
    title: 'Laptop & Workstation Rentals',
    subtitle: 'Enterprise-grade ThinkPads, Dell Latitudes, and HP EliteBooks for scaling teams.',
    badge: 'Enterprise Standard',
    icon: <Laptop size={32} />,
    heroImage: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80',
    introText: 'Onboard fifty developers next week without breaking your cash-flow. Our Windows-based laptop rental program offers high-performance workstations optimized for software engineering, financial modeling, customer service centers, and general corporate workflows.',
    bodyImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    bodyTitle: 'Built for High Density Corporate Deployments',
    bodyText: 'We source exclusively from A-Tier enterprise laptop lines. That means magnesium alloy builds, robust military-rated drop resistances, and professional security chips. Every machine is fully updated, loaded with anti-virus scanners, and ready to go straight out of the case.',
    stats: [
      { value: '24h', label: 'On-Demand Setup' },
      { value: '1500+', label: 'Active Fleet Units' },
      { value: '4h', label: 'Critical Support SLA' },
    ],
    keyBenefits: [
      'Top tier models like ThinkPad T-Series, HP EliteBook, and Dell Latitude',
      'Dual RAM channel configurations up to 64GB',
      'Optional premium docking stations and dual monitor expansion packs',
      'Pre-installed Windows 11 Pro with remote management licenses',
    ],
    specs: [
      {
        category: 'Hardware Specs',
        items: [
          { label: 'Processors', value: 'Intel Core i5, i7, i9 (12th-14th Gen) / AMD Ryzen 7' },
          { label: 'System Memory', value: '16GB, 32GB, 64GB DDR5 configurations Available' },
          { label: 'Graphics Option', value: 'Intel Iris Xe or NVIDIA RTX workstation GPUs' },
          { label: 'Screen Sizes', value: '13.3-inch Ultraportable, 14.1-inch Standard, 15.6-inch Numeric' },
        ],
      },
      {
        category: 'Services & Support',
        items: [
          { label: 'Turnaround Time', value: '24-48 hours across Bangalore & Nagpur business zones' },
          { label: 'Software Stack', value: 'Custom OS imaging with corporate standard setups' },
          { label: 'Support Cover', value: 'On-site swap guarantee for hardware failures' },
        ],
      },
    ],
    faqs: [
      { q: 'Can we rent external screens and accessories together?', a: 'Yes! We configure complete corporate workstation kits, including 4K monitors, wireless layout keyboards, mice, and desk docking hubs.' },
      { q: 'Do you offer lower rates for high-volume enterprise leases?', a: 'Absolutely. Volume lease programs are available for 50+ structures with optimized monthly corporate pricing.' },
    ],
  },
  'server-solutions': {
    id: 'server-solutions',
    title: 'Server Rentals & High Compute',
    subtitle: 'Scalable bare-metal rack servers, local backup boxes, and simulation stations.',
    badge: 'Enterprise Infrastructure',
    icon: <Server size={32} />,
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80',
    introText: 'Empower core local services and simulation benchmarks safely. Sapphire Server Solutions offers high-compute hardware leasing: scalable rack servers that run databases, deep-learning trainings, or private hosting nodes completely under your local governance.',
    bodyImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80',
    bodyTitle: 'Raw Compute on Your Terms',
    bodyText: 'Upgrading cloud clusters can rapidly incur massive hidden egress and operational billing. Local bare-metal racks solve this by handling high-density storage and massive memory arrays at a predictable monthly lease. Sapphire ensures your in-house IT team has physical control of structural data parameters.',
    stats: [
      { value: '10G', label: 'Network Cards Standard' },
      { value: '256G', label: 'Maximum Node Memory' },
      { value: '99.9%', label: 'Hardware Uptime Guarantee' },
    ],
    keyBenefits: [
      'Intel Xeon Scalable / AMD EPYC modern architectures',
      'Optimized SAS/SATA high density arrays up to 100TB',
      'Integrated iDRAC or iLO cards for full remote lights-out access',
      'Dual-supply hardware components ensure maximum backup protection',
    ],
    specs: [
      {
        category: 'Platform Options',
        items: [
          { label: 'Brands Stocked', value: 'Dell PowerEdge (1U/2U/4U), HPE ProLiant Gen10/Gen11' },
          { label: 'CPU Sizing', value: 'Single or Dual Socket AMD EPYC & Intel Xeon structures' },
          { label: 'Ram Scaling', value: 'Up to 512GB ECC DDR4/DDR5 registered memory' },
          { label: 'Storage Bays', value: 'Hot-plug SAS SFF/LFF, NVMe Solid State Drives' },
        ],
      },
    ],
    faqs: [
      { q: 'Can your team perform initial server racking and network routing?', a: 'Yes, our core systems engineers handle physical installation, initial network routing, and OS setup (Windows Server, ESXi, Linux).' },
      { q: 'Is there support if a server drive fails?', a: 'Yes. Drives have instant hot-swappable backups, and we supply on-site replacements under a direct 4-hour SLA.' },
    ],
  },
  'av-solutions': {
    id: 'av-solutions',
    title: 'Projector & AV Rentals',
    subtitle: 'Premium high-lumen laser projectors, corporate LED boards, and immersive sound setups.',
    badge: 'Conferences & Events',
    icon: <Presentation size={32} />,
    heroImage: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80',
    introText: 'Captivate investors, teams, and attendees. Whether you are hosting an annual milestone conference in Bangalore or a highly focused product launch in Nagpur, Sapphire designs high-end audio-visual environments with crystal-clear output specs.',
    bodyImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80',
    bodyTitle: 'Pristine Presentation Aesthetics',
    bodyText: 'A blurry screen or mic feedback destroys the premium aura of an expensive conference. Sapphire avoids this by providing clean, professional laser projectors, customized digital podium connections, high-definition wireless microphones, and dynamic speaker sets.',
    stats: [
      { value: '15k', label: 'Laser Lumens' },
      { value: '100s', label: 'Events Fully Managed' },
      { value: '4K', label: 'UHD Resolution Engine' },
    ],
    keyBenefits: [
      'High-luminosity Epson and Optoma Laser projectors',
      'Custom modular LED walls scaled to auditorium sizes',
      'Professional sound mixing boards with Shure audio kits',
      'End-to-end setup, staging management, and extraction',
    ],
    specs: [
      {
        category: 'Hardware Sizing',
        items: [
          { label: 'Projector Types', value: 'Short-Throw, Standard, High-Lumen Venue-Laser (up to 20K ANSI)' },
          { label: 'Microphone Arrays', value: 'Shure Head-worn, neck-lavalier, or wireless dynamic stage-mics' },
          { label: 'LED Panels', value: 'Fine Pixel Pitch (P1.8 / P2.5) modular indoor screens' },
          { label: 'Cabling Infrastructure', value: 'Fiber-optic HDMI and professional SDI inputs standard' },
        ],
      },
    ],
    faqs: [
      { q: 'Do you provide a full-time operator during the conference?', a: 'Yes, our on-site sound and visual operators can handle all switching, audio balances, and live inputs from start to finish.' },
      { q: 'How early will your team build and sound-test?', a: 'We typically finish configuration 4 to 12 hours before doors open to guarantee extensive run-through and verification.' },
    ],
  },
  'infrastructure': {
    id: 'infrastructure',
    title: 'IT Solutions & Office Setup',
    subtitle: 'Modular structured network design, Wi-Fi 6 arrays, and corporate work setups.',
    badge: 'Workspace Architecture',
    icon: <Cpu size={32} />,
    heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
    introText: 'Establish a pristine workspace from day one. Sapphire orchestrates comprehensive hardware planning, secure cabling paths, managed switches, and firewall integrations to transform empty corporate floors into securely connected hubs.',
    bodyImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80',
    bodyTitle: 'Engineered for Performance and Security',
    bodyText: 'Enterprise modern structures require robust, high-availability wireless maps. Our experienced systems engineers carry out heat-mapping, pull structured Cat6A lines cleanly, configure hardware firewalls to block threats, and implement visual dashboards.',
    stats: [
      { value: '10G', label: 'Fiber Backbone' },
      { value: '250+', label: 'Nodes Configured' },
      { value: 'Cat6a', label: 'High-Density Shielded' },
    ],
    keyBenefits: [
      'Full physical heat mapping and structural floor design',
      'Fortinet, Sophos, and Cisco Meraki hardware routing security',
      'Seamless multi-layer enterprise Wi-Fi SSID configuration',
      'Clean rack dressing, labeling, and structured diagnostic sheets',
    ],
    specs: [
      {
        category: 'Setup Services',
        items: [
          { label: 'Security Firewall', value: 'Intrusion prevention, load balancing, SSL inspection' },
          { label: 'Access Points', value: 'Enterprise Wi-Fi 6 / 6E dual-radio managed APs' },
          { label: 'Switch Infrastructure', value: 'PoE+ managed layer-2 and layer-3 switches' },
          { label: 'Documentation', value: 'Detailed digital map topology with port maps' },
        ],
      },
    ],
    faqs: [
      { q: 'Can you work during off-office hours or weekends?', a: 'Absolutely. We coordinate weekend and overnight schedules to ensure office infrastructure is deployed with zero active workflow disruption.' },
      { q: 'Is there a warranty?', a: 'We offer a full 1-year guarantee on our physical cabling setups, and active AMC extensions for ongoing hardware maintenance.' },
    ],
  },
  'amc-services': {
    id: 'amc-services',
    title: 'B2B AMC Services',
    subtitle: 'Annual maintenance contracts, scheduled server tuning, and 2-hour emergency dispatches.',
    badge: 'Zero Downtime',
    icon: <Wrench size={32} />,
    heroImage: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80',
    introText: 'Delegate the stress of continuous network patching and device breakdowns. Sapphire AMC plans provide dedicated technical teams, structural server system sweeps, and priority emergency response windows for corporate teams.',
    bodyImage: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80',
    bodyTitle: 'A Dedicated Tech Department on Call',
    bodyText: 'Hiring full-time in-house experts for specialized servers, networks, and laptop systems is extremely expensive. Sapphire AMC serves as your on-call virtual CTO and engineering department, preventing breakdowns before they block pipelines.',
    stats: [
      { value: '2h', label: 'Emergency SLA' },
      { value: '98%', label: 'Preventive Success' },
      { value: '24/7', label: 'System Monitoring' },
    ],
    keyBenefits: [
      'Proactive monthly backup and network health checking',
      'Immediate technical replacement of internal hardware units',
      'Unlimited remote assistance desk logins',
      'Comprehensive reporting of all logged actions and resolutions',
    ],
    specs: [
      {
        category: 'Contract Sizing',
        items: [
          { label: 'Plans Supported', value: 'Comprehensive (includes all parts) & Non-Comprehensive' },
          { label: 'Scheduled Sweeps', value: 'Monthly physical deep-cleans and server software audits' },
          { label: 'On-Ground Hubs', value: 'Nagpur & Bangalore rapid dispatch offices' },
          { label: 'Incident Desk', value: 'Dedicated email, web dashboard, and phone dispatch line' },
        ],
      },
    ],
    faqs: [
      { q: 'What is the difference between Comprehensive and Non-Comprehensive AMCs?', a: 'Comprehensive includes full pricing tracking for broken replacement parts. Non-comprehensive includes labor, network routing, and software patches, but hardware units are billed separately.' },
      { q: 'Can we include out-of-warranty office machines in the AMC?', a: 'Yes! We perform an initial diagnostic audit of your fleet, resolve existing snags, and safely include them under our AMC program.' },
    ],
  },
};

export default function ServiceDetail({ params }: { params: Promise<{ serviceId: string }> }) {
  const { openDrawer } = useDrawer();
  const { serviceId } = React.use(params);
  const service = servicesContent[serviceId];

  if (!service) notFound();

  return (
    <div className="pb-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <PageHero badge={service.badge} title={service.title} subtitle={service.subtitle} image={service.heroImage} />

      <div className="max-w-7xl mx-auto px-6 mt-16 md:mt-24">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-foreground/40 mb-12">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
          <ChevronRight size={14} />
          <span className="text-brand-blue font-bold">{service.title}</span>
        </div>

        {/* Intro + Key Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24 md:mb-32">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">Solution Overview</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-foreground leading-tight">
              A high-end, responsive infrastructure built to support your operations.
            </h2>
            <p className="text-foreground/75 text-lg leading-relaxed pt-2">{service.introText}</p>
          </div>

          <div className="lg:col-span-5 bg-card/40 border border-border/80 rounded-[2.5rem] p-8 md:p-10 space-y-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/45 mb-6">Key Capabilities</h3>
              <div className="space-y-4">
                {service.keyBenefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0 mt-0.5">
                      <Check size={14} className="stroke-[3]" />
                    </div>
                    <span className="text-base text-foreground/80 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-6 border-t border-border/50 grid grid-cols-3 gap-4">
              {service.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-display font-black text-brand-blue">{stat.value}</div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-foreground/40 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Body Image + Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-32">
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="absolute -inset-2 bg-gradient-to-tr from-brand-blue/30 via-transparent to-brand-purple/30 rounded-[3rem] blur-xl opacity-80" />
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
              <img src={service.bodyImage} alt={service.bodyTitle} className="w-full h-full object-cover" decoding="async" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest block mb-2">On-Ground Support</span>
                <p className="text-white font-display text-xl font-bold leading-tight">Nagpur & Bangalore deployment hubs are fully optimized.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-purple">Operational Excellence</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight leading-tight">{service.bodyTitle}</h2>
            <p className="text-foreground/70 text-lg leading-relaxed">{service.bodyText}</p>
            <div className="space-y-6 pt-4">
              <h3 className="text-lg font-display font-bold text-foreground">Technical Specifications & Service Parameters</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.specs.map((group, idx) => (
                  <div key={idx} className="bg-card/30 border border-border/40 rounded-2xl p-6">
                    <span className="text-xs font-bold text-brand-blue uppercase tracking-widest block mb-4">{group.category}</span>
                    <div className="space-y-3">
                      {group.items.map((it, i) => (
                        <div key={i} className="flex justify-between text-xs py-1 border-b border-border/30 last:border-0">
                          <span className="text-foreground/50 tracking-wider uppercase font-semibold font-mono">{it.label}</span>
                          <span className="text-foreground/85 font-medium tracking-wide text-right">{it.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Deployment Timeline */}
        <section className="mb-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">Deployment Cycle</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-foreground mt-4">Standard 4-Step Flow</h2>
            <p className="text-foreground/60 text-base mt-4">We simplify IT hardware logistics, maintaining rigorous quality parameters throughout deployment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-[44px] left-8 right-8 h-px bg-gradient-to-r from-brand-blue/30 via-brand-purple/30 to-brand-blue/10 z-0" />
            {[
              { num: '01', title: 'Consultation', desc: 'Identify system workloads, core quantities, and dynamic soft stack setups.' },
              { num: '02', title: 'Configuration', desc: 'Staging, OS updates, licensing setup, and quality checklist runs.' },
              { num: '03', title: 'Zero Friction Delivery', desc: 'Secure transit to Bangalore or Nagpur workspaces within 24-48 hours.' },
              { num: '04', title: 'Continuous Monitoring', desc: 'Unlimited SLA-backed emergency troubleshooting and maintenance.' },
            ].map((step, i) => (
              <div key={i} className="relative z-10 space-y-4 px-2">
                <div className="w-12 h-12 rounded-xl bg-card border border-border text-foreground/90 font-display font-black text-lg flex items-center justify-center shadow-lg">{step.num}</div>
                <h3 className="text-lg font-display font-bold text-foreground pt-2">{step.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto mb-32 space-y-6">
          <div className="text-center space-y-4 mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">Frequently Asked Questions</span>
            <h2 className="text-3xl font-display font-bold tracking-tight text-foreground">Service Specific Queries</h2>
          </div>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div key={i} className="p-8 bg-card/25 border border-border/60 rounded-3xl space-y-3">
                <h3 className="text-lg md:text-xl font-display font-bold text-foreground flex gap-3 uppercase tracking-wide">
                  <span className="text-brand-blue text-sm font-bold tracking-normal uppercase shrink-0 mt-1">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-foreground/70 text-base leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <GlowCard className="bg-gradient-premium p-12 md:p-16 text-center text-white border-none rounded-[3rem] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Need a Custom Quote?</h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">Our hardware engineers will configure complete setup sheets matching your exact business workflows.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <MagneticButton onClick={openDrawer} className="px-8 py-5 bg-white text-black font-bold rounded-2xl hover:bg-neutral-100 transition-all text-sm uppercase tracking-widest">
                Request Consultation
              </MagneticButton>
              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer" className="px-8 py-5 bg-white/10 border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all text-sm uppercase tracking-widest inline-flex items-center gap-2 justify-center">
                Chat on WhatsApp
              </a>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </div>
  );
}
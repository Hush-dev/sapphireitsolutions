// app/services/page.tsx

'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import {
  Laptop,
  Server,
  Presentation,
  Cpu,
  Wrench,
  ArrowRight,
  CheckCircle2,
  Globe,
} from 'lucide-react';

// Update these imports based on your folder structure
import { cn } from '@/lib/utils';
import SectionHeading from '@/components/ui/SectionHeading';
import GlowCard from '@/components/ui/GlowCard';
import MagneticButton from '@/components/ui/MagneticButton';
import PageHero from '@/components/ui/PageHero';
import { useDrawer } from '@/context/DrawerContext';

export default function ServicesPage() {
  const { openDrawer } = useDrawer();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  }, []);

  const allServices = [
    {
      id: 'apple-macbooks',
      title: 'Apple MacBooks',
      shortDesc:
        'Premium M-series Apple MacBook Pros and Airs configured for creators.',
      fullDesc:
        'Get peak output with the latest M-Series Apple MacBooks on flexible, secure, and tax-efficient leases. Fully loaded with customized software configurations tailored to developers and creative powerhouses.',
      icon: Laptop,
      features: [
        'M1/M2/M3 high-spec platforms',
        'MDM configuration ready',
        'Instant replacement assurance',
        'Weekly/monthly flexible lease durations',
      ],
      img: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80',
    },
    {
      id: 'laptop-rentals',
      title: 'Laptop Rentals',
      shortDesc:
        'Premium high-performance laptops for enterprise teams.',
      fullDesc:
        'We provide the latest MacBook Pros, Dell XPS, and ThinkPad series configured to your specific workload requirements. Perfect for hybrid teams, temporary projects, or training sessions.',
      icon: Laptop,
      features: [
        'Latest Gen Intel/M-series chips',
        'On-site maintenance',
        'Flexible rental terms',
        'Pre-configured software',
      ],
      img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80',
    },
    {
      id: 'server-solutions',
      title: 'Server Rentals',
      shortDesc:
        'Scalable server IT solutions for data-intensive projects.',
      fullDesc:
        'Deploy enterprise-grade rack servers and workstations without the massive upfront CAPEX. Ideal for short-term data processing, R&D, or temporary IT solutions expansion.',
      icon: Server,
      features: [
        'Multi-node configurations',
        'UPS & Cooling support',
        'Data redundancy setup',
        '24/7 technical monitoring',
      ],
      img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80',
    },
    {
      id: 'av-solutions',
      title: 'Projector & AV Rentals',
      shortDesc:
        'Cinematic visual experiences for your corporate events.',
      fullDesc:
        'High-lumen projectors, LED walls, and premium audio systems for conferences, product launches, and boardroom presentations.',
      icon: Presentation,
      features: [
        '4K Visual output',
        'Professional sound engineering',
        'On-site technical operators',
        'Seamless connectivity',
      ],
      img: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80',
    },
    {
      id: 'infrastructure',
      title: 'IT Solutions Setup',
      shortDesc:
        'Complete office technology deployment solutions.',
      fullDesc:
        'End-to-end network architecture, hardware deployment, and workspace technology setup for new offices or facility upgrades.',
      icon: Cpu,
      features: [
        'Network design & audit',
        'Structured cabling',
        'Workstation deployment',
        'Security firewall setup',
      ],
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
    },
    {
      id: 'amc-services',
      title: 'AMC Services',
      shortDesc:
        'Corporate preventive and hardware maintenance agreements.',
      fullDesc:
        'Ensure operational resilience with comprehensive and customized B2B Annual Maintenance Contracts. Includes emergency on-site diagnostic dispatches under strict 2-hour SLAs.',
      icon: Wrench,
      features: [
        'Scheduled monthly sweeping audits',
        'Emergency 2-hour support SLA',
        'Diagnostic network heat-mapping',
        'Includes full replacement coverage options',
      ],
      img: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <PageHero
        badge="Full Suite Solutions"
        title="Enterprise Tech at Your Fingertips"
        subtitle="Explore our comprehensive range of high-end IT rental and IT solutions tailored for businesses."
        image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
      />

      {/* Services Grid */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {allServices.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                id={service.id}
                className="flex flex-col group scroll-mt-24"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl mb-8 group-hover:shadow-brand-blue/10 transition-all duration-500">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Icon */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-8 left-8 w-14 h-14 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white border border-white/20 shadow-xl group-hover:bg-brand-blue group-hover:border-brand-blue transition-all duration-500"
                  >
                    <Icon size={28} />
                  </motion.div>

                  {/* Heading */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight"
                    >
                      {service.title}
                    </motion.h2>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6 px-2">
                  <p className="text-foreground/70 text-lg leading-relaxed line-clamp-3">
                    {service.fullDesc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 py-6 border-y border-border/50">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-brand-blue shrink-0"
                        />

                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-4 flex items-center justify-between">
                    <MagneticButton
                      onClick={openDrawer}
                      className="bg-foreground text-background text-sm font-bold tracking-wider uppercase px-8"
                    >
                      Request Quote
                    </MagneticButton>

                    <div className="h-px flex-1 mx-8 bg-gradient-to-r from-border/50 to-transparent" />

                    <Link
                      href={`/services/${service.id}`}
                      className="p-3 rounded-full border border-border hover:border-brand-blue hover:text-brand-blue transition-all flex items-center gap-2 group/link pl-5 pr-5"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/60 group-hover/link:text-brand-blue hidden sm:inline">
                        Learn More
                      </span>

                      <ArrowRight
                        size={18}
                        className="group-hover/link:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Global Section */}
      <section className="mt-32 px-6">
        <div className="max-w-7xl mx-auto">
          <GlowCard className="bg-gradient-to-br from-brand-blue/10 via-transparent to-brand-purple/10 border-brand-blue/20 p-12 text-center">
            <SectionHeading
              title="Serving Your Growth"
              subtitle="With strategic hubs in India's leading tech corridors, we ensure lightning-fast deployment and on-ground support for your team."
              className="mb-8"
            />

            <div className="flex flex-wrap justify-center gap-8 mt-12 opacity-50 font-display font-bold text-2xl">

              <span className="flex items-center gap-4">
                <Globe className="text-brand-purple" />
                BANGALORE
              </span>
              <span className="flex items-center gap-4">
                <Globe className="text-brand-blue" />
                NAGPUR
              </span>
            </div>
          </GlowCard>
        </div>
      </section>
    </div>
  );
}
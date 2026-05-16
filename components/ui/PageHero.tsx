'use client'

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import Image from 'next/image';
import SectionHeading from './SectionHeading';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  image: string;
  className?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ badge, title, subtitle, image, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80, damping: 25, mass: 0.5, restDelta: 0.001,
  });

  const imageY = useTransform(smoothProgress, [0, 1], ['0%', '25%']);

  return (
    <div ref={containerRef} className={cn('relative w-full h-[45vh] md:h-[55vh] min-h-[450px] mb-24 overflow-hidden', className)}>
      <motion.div
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 overflow-hidden rounded-b-[3rem] md:rounded-b-[5rem] shadow-2xl bg-card will-change-transform"
      >
        <motion.div style={{ y: imageY }} className="absolute inset-0 will-change-transform">
          <Image
  src={image}
  alt={title}
  fill
  className="object-cover pointer-events-none brightness-[0.7] contrast-[1.1] saturate-[1.1]"
  priority
/>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-premium opacity-80 z-10" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
            className="will-change-[opacity,transform]"
          >
            <SectionHeading
              badge={badge}
              title={title}
              subtitle={subtitle}
              className="mb-0 [&_h2]:text-white [&_p]:text-white/70"
            />
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/40 to-transparent z-[1]" />
    </div>
  );
};

export default PageHero;
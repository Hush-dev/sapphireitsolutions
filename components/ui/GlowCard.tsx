'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import React, { ReactNode, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlowCard({ children, className }: GlowCardProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia('(hover: none)').matches);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: isMobile ? 0 : rotateX, rotateY: isMobile ? 0 : rotateY, transformStyle: 'preserve-3d' }}
      className={cn('group relative glass-card p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-brand-blue/10', className)}
    >
      <div className="relative z-10">{children}</div>
      {/* Always visible on mobile, hover-only on desktop */}
      <div className={cn(
        'absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-purple/5 transition-opacity duration-500 rounded-2xl',
        isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
      )} />
      <div className={cn(
        'absolute -inset-px bg-gradient-to-br from-brand-blue/20 via-white/5 to-brand-purple/20 transition-opacity duration-300 rounded-2xl blur-sm',
        isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
      )} />
    </motion.div>
  );
}
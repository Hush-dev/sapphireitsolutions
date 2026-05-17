'use client'

import { motion } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useTheme } from '@/context/ThemeContext';
import { useDrawer } from '@/context/DrawerContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { openDrawer } = useDrawer();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.classList.add('lenis-stopped');
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.classList.remove('lenis-stopped');
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.classList.remove('lenis-stopped');
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    // { name: 'Insights', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500',
        isScrolled ? 'glass-nav py-4' : 'bg-transparent py-8'
      )}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
  <Image
    src="/sapphire_logo.png"
    alt="Sapphire Logo"
    width={40}
    height={40}
    className="w-full h-full object-contain"
  />
</div>
            <div className="flex flex-col">
              <span className={cn(
                'text-xl font-display font-bold tracking-tight transition-colors duration-300',
                !isScrolled ? 'text-white' : 'text-foreground'
              )}>SAPPHIRE</span>
              <span className="text-[10px] text-brand-blue font-medium tracking-[0.2em] uppercase">IT Solutions</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={cn(
                  'text-sm font-medium transition-all duration-300 hover:text-brand-blue tracking-wide',
                  pathname === link.path
                    ? 'text-brand-blue'
                    : (!isScrolled ? 'text-white/70' : 'text-foreground/60')
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={cn('p-2 rounded-full transition-colors', !isScrolled ? 'hover:bg-white/10' : 'hover:bg-foreground/5')}
              aria-label="Toggle Theme"
            >
              {theme === 'dark'
                ? <Sun size={20} className="text-white" />
                : <Moon size={20} className={cn(!isScrolled ? 'text-white' : 'text-foreground')} />
              }
            </button>
            <button
              onClick={openDrawer}
              className="px-6 py-2 bg-foreground text-background text-sm font-bold rounded-full hover:bg-brand-blue hover:text-white transition-all duration-300 shadow-xl"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className={cn('p-2 rounded-full transition-colors', !isScrolled ? 'hover:bg-white/10' : 'hover:bg-foreground/5')}
              aria-label="Toggle Theme"
            >
              {theme === 'dark'
                ? <Sun size={20} className="text-white" />
                : <Moon size={20} className={cn(!isScrolled ? 'text-white' : 'text-foreground')} />
              }
            </button>
            <button
              className={cn('p-2 transition-colors', !isScrolled ? 'text-white' : 'text-foreground')}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, x: 0 },
          closed: { opacity: 0, x: '100%' },
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className={cn(
          'fixed top-0 left-0 w-full h-[100dvh] bg-background/95 backdrop-blur-xl z-[60] flex flex-col items-center justify-center gap-8 lg:hidden',
          !isOpen && 'pointer-events-none'
        )}
      >
        <button className="absolute top-8 right-6 text-foreground" onClick={() => setIsOpen(false)}>
          <X size={32} />
        </button>
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
            >
              <Link
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-display font-bold hover:text-brand-blue transition-colors"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1 + navLinks.length * 0.1, duration: 0.5 }}
        >
          <button
            onClick={() => { setIsOpen(false); openDrawer(); }}
            className="px-10 py-4 bg-gradient-premium text-white rounded-full font-bold text-lg shadow-2xl shadow-brand-blue/30"
          >
            Get Quote
          </button>
        </motion.div>
      </motion.div>
    </>
  );
}
'use client'

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Link2, AtSign, Globe } from 'lucide-react';
import { useDrawer } from '@/context/DrawerContext';
import { LinkedInIcon, TwitterIcon, InstagramIcon } from '@/components/ui/SocialIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { openDrawer } = useDrawer();

  return (
    <footer className="bg-card border-t border-border pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

          {/* Brand Col */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2 group">


<div className="w-12 h-12 flex items-center justify-center">
  <Image
    src="/sapphire_logo.png"
    alt="Sapphire Logo"
    width={48}
    height={48}
    className="w-full h-full object-contain"
  />
</div>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold tracking-tight">SAPPHIRE</span>
                <span className="text-[10px] text-brand-blue font-medium tracking-[0.2em] uppercase">IT Solutions</span>
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Premium IT Solutions and rental solutions for forward-thinking enterprises. Powering the future of corporate technology.
            </p>
            <div className="flex gap-4">
  {[
    { Icon: LinkedInIcon, href: '#' },
    { Icon: TwitterIcon, href: '#' },
    { Icon: InstagramIcon, href: '#' },
  ].map(({ Icon, href }, i) => (
    <a key={i} href={href} className="w-10 h-10 glass-card rounded-lg flex items-center justify-center text-gray-500 hover:text-brand-blue hover:scale-110 transition-all">
      <Icon size={18} />
    </a>
  ))}
</div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'About Us', 'Case Studies', 'Insights', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-500 hover:text-brand-blue transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-8">Core Services</h4>
            <ul className="space-y-4">
              {['Apple MackBooks', 'Laptop Rentals', 'Server Solutions', 'AV & Event Tech', 'IT Solutions Setup', 'AMC Services'].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-gray-500 hover:text-brand-blue transition-colors text-sm underline-offset-4 hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-8">Service Areas</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-brand-purple shrink-0" size={20} />
                <div>
                  <p className="font-medium text-sm">Bangalore Tech Park</p>
                  {/* <p className="text-gray-500 text-xs mt-1 italic">Strategic Deployment Center</p> */}
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="text-brand-blue shrink-0" size={20} />
                <div>
                  <p className="font-medium text-sm">Nagpur Hub</p>
                  {/* <p className="text-gray-500 text-xs mt-1 italic">Corporate HQ & Logistics Center</p> */}
                </div>
              </div>
              <div className="flex gap-4">
                {/* <MapPin className="text-brand-blue shrink-0" size={20} /> */}
                <div>
                  <p className="font-medium text-sm">Now Also Serving - Hyderabad & Pune</p>
                  {/* <p className="text-gray-500 text-xs mt-1 italic">Corporate HQ & Logistics Center</p> */}
                </div>
              </div>
              
              <div className="pt-4 space-y-3">
                <a href="mailto:solutions@sapphireit.com" className="flex items-center gap-3 text-sm text-gray-500 hover:text-brand-blue transition-colors">
                  <Mail size={16} className="text-brand-blue" />
                  sis4rental@gmail.com
                </a>
                <a href="tel:+919876543210" className="flex items-center gap-3 text-sm text-gray-500 hover:text-brand-blue transition-colors">
                  <Phone size={16} className="text-brand-blue" />
                  +91-8208911289
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs">
            © {currentYear} Sapphire IT Solutions. Currently serving Bangalore & Nagpur.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-500 hover:text-brand-blue text-[10px] uppercase tracking-widest font-bold">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-brand-blue text-[10px] uppercase tracking-widest font-bold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
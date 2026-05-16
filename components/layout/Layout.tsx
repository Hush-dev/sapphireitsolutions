'use client'

import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactDrawer from './ContactDrawer';
import SmoothScroll from '../SmoothScroll';
import ScrollToTop from '../ScrollToTop'

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SmoothScroll>
      <ScrollToTop />
      <div className="relative min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ContactDrawer />
      </div>
    </SmoothScroll>
  );
}
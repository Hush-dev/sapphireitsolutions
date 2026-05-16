'use client'

import { motion } from 'motion/react';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import GlowCard from '@/components/ui/GlowCard';
import PageHero from '@/components/ui/PageHero';
import { ArrowRight, Clock, User } from 'lucide-react';

export default function Blog() {
  const posts = [
    { title: 'Scaling Tech for Rapid Office Expansion', excerpt: 'How enterprises are leveraging hardware rentals to scale their physical presence without large capital investments.', date: 'May 12, 2026', author: 'Technical Team', img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80', category: 'Enterprise Strategy' },
    { title: 'Why Bangalore & Nagpur are Hubs of Growth', excerpt: "Analyzing the infrastructure needs of India's fastest-growing technology corridors and the role of agile IT solutions.", date: 'May 05, 2026', author: 'Leadership', img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80', category: 'Market Insights' },
    { title: 'The Future of Hybrid Hardware Support', excerpt: 'Best practices for managing and maintaining a distributed fleet of high-performance laptops and servers.', date: 'April 28, 2026', author: 'Operations', img: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80', category: 'IT Management' },
  ];

  return (
    <div className="pb-24">
      <PageHero badge="Sapphire Insights" title="IT Solutions Intelligence" subtitle="The latest thoughts on enterprise technology, IT solutions scaling, and the future of workstation rentals." image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <GlowCard className="p-0 overflow-hidden flex flex-col h-full bg-card/40">
                <div className="h-56 overflow-hidden relative group">
                  <img src={post.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={post.title} />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-brand-blue text-[10px] font-bold uppercase tracking-wider text-white rounded-full">{post.category}</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 flex-grow hover:text-brand-blue transition-colors cursor-pointer leading-snug">{post.title}</h3>
                  <p className="text-foreground/60 text-sm mb-8 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <Link href="#" className="text-brand-blue text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all mt-auto">
                    Read Analysis <ArrowRight size={14} />
                  </Link>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-12 glass-card rounded-[3rem] text-center border-brand-purple/20 bg-brand-purple/5">
          <h4 className="text-2xl font-display font-bold mb-4">Stay Ahead of IT Solutions Trends</h4>
          <p className="text-foreground/60 text-sm mb-8 max-w-lg mx-auto">Get monthly technical analysis and service updates delivered to your inbox.</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input type="email" placeholder="work@company.com" className="flex-grow px-6 py-4 bg-card border border-border rounded-2xl focus:outline-none focus:border-brand-purple transition-all text-sm" />
            <button className="px-8 py-4 bg-foreground text-background font-bold rounded-2xl hover:bg-brand-purple hover:text-white transition-all text-sm">Join</button>
          </div>
        </div>
      </div>
    </div>
  );
}
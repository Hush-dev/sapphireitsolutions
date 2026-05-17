'use client'

import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.556 4.115 1.528 5.845L.057 23.617a.75.75 0 0 0 .92.92l5.772-1.471A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.725 9.725 0 0 1-4.953-1.354l-.355-.211-3.43.875.89-3.43-.23-.368A9.725 9.725 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
  </svg>
);

export default function SidebarActions() {
  const actions = [
    {
      id: 'whatsapp',
      icon: <WhatsAppIcon />,
      label: 'WhatsApp',
      sublabel: 'Chat with us',
      onClick: () => window.open('https://wa.me/919604938657', '_blank'),
      color: 'bg-[#25D366]',
      shadow: 'shadow-[#25D366]/30',
    },
    {
      id: 'call',
      icon: <Phone size={20} />,
      label: 'Call Us',
      sublabel: '+91 96049 38657',
      onClick: () => window.open('tel:+919604938657', '_self'),
      color: 'bg-brand-blue',
      shadow: 'shadow-brand-blue/30',
    },
  ];

  return (
    <div className="fixed right-6 bottom-8 z-[60] flex flex-col gap-3 items-end will-change-transform">
      {actions.map((action, index) => (
        <motion.button
          key={action.id}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 + index * 0.15, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={action.onClick}
          whileHover={{ scale: 1.05 }}
          style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
          className={`group flex items-center gap-3 ${action.color} ${action.shadow} text-white pl-3 pr-4 py-3 rounded-2xl shadow-xl will-change-transform`}
          title={action.label}
        >
          <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
            {action.icon}
          </div>
          <div className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-[max-width] duration-300 ease-out text-left">
            <p className="text-[11px] font-black uppercase tracking-wider whitespace-nowrap">{action.label}</p>
            <p className="text-[9px] whitespace-nowrap opacity-80">{action.sublabel}</p>
          </div>
        </motion.button>
      ))}
    </div>
  );
}
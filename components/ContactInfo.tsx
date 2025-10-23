import React from 'react';
import Icon from './Icon';

import { CONTACT_PHONE_NUMBER, CONTACT_PHONE_NUMBER_WHATSAPP } from '../constants';

const ContactInfo: React.FC = () => {
  const infoItems = [
    { icon: 'location', text: 'Entregas em Vargens, Barra e Recreio (Congeladas em até 48h)' },
    { icon: 'phone', text: CONTACT_PHONE_NUMBER },
  ];

  const socialLinks = [
    { icon: 'whatsapp', href: `https://wa.me/${CONTACT_PHONE_NUMBER_WHATSAPP}/`, label: 'WhatsApp', tooltip: 'Fale conosco pelo WhatsApp' },
    { icon: 'instagram', href: 'https://www.instagram.com/lebre.alimentos/', label: 'Instagram', tooltip: 'Veja nosso Instagram' },
    { icon: 'blog', href: '#', label: 'Blog Lebre (em breve)', tooltip: 'Nosso Blog (Em breve)' },
  ];

  return (
    <div className="p-6 bg-slate-800/80 rounded-2xl shadow-lg backdrop-blur-sm border border-slate-700">
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="space-y-3">
          {infoItems.map(item => (
            <div key={item.icon} className="flex items-center space-x-3 text-slate-400">
              <Icon name={item.icon} className="w-5 h-5 text-pink-500" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          {socialLinks.map(link => (
            <div key={link.icon} className="relative group">
              <a 
                href={link.href}
                aria-label={link.label}
                target={link.href === '#' ? '_self' : '_blank'}
                rel={link.href === '#' ? '' : 'noopener noreferrer'}
                onClick={link.href === '#' ? (e) => e.preventDefault() : undefined}
                className="p-3 block bg-slate-700 text-slate-300 rounded-full hover:bg-pink-500 hover:text-white transition-colors duration-300"
              >
                <Icon name={link.icon} className="w-6 h-6" />
              </a>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-800 text-white text-xs font-semibold rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {link.tooltip}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-slate-800"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

import React from 'react';
import Icon from './Icon';

const ContactInfo: React.FC = () => {
  const infoItems = [
    { icon: 'location', text: 'Entregas em Vargens, Barra e Recreio' },
    { icon: 'phone', text: '(21) 98211-2061' },
  ];

  const socialLinks = [
    { icon: 'whatsapp', href: 'https://wa.me/5521982112061?text=Ol%C3%A1%21%20Gostaria%20de%20informa%C3%A7%C3%B5es', label: 'WhatsApp' },
    { icon: 'instagram', href: 'https://www.instagram.com/lebre.alimentos/', label: 'Instagram' },
  ];

  return (
    <div className="p-6 bg-gray-800/50 rounded-2xl shadow-lg backdrop-blur-sm border border-gray-700">
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="space-y-3">
          {infoItems.map(item => (
            <div key={item.icon} className="flex items-center space-x-3 text-gray-300">
              <Icon name={item.icon} className="w-5 h-5 text-pink-400" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          {socialLinks.map(link => (
            <a 
              key={link.icon}
              href={link.href}
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-700/60 rounded-full hover:bg-pink-500 hover:text-white transition-colors duration-300"
            >
              <Icon name={link.icon} className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

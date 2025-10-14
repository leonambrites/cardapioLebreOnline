
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between p-4 bg-gray-800/50 rounded-2xl shadow-lg backdrop-blur-sm border border-gray-700">
      <div className="flex items-center space-x-4">
        <div className="w-20 h-20 rounded-lg border-4 border-orange-500 flex-shrink-0 overflow-hidden bg-white">
          <img 
            src="https://assets-temp.lovart.ai/img/1ea1880f8def4e4f8d31e7bff4d377c3/01f643f7ba60e3c91d55ab0e38e3f250b0a550ef.png" 
            alt="LEBRE Logo" 
            className="w-full h-full object-contain p-1"
          />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">Cardápio LEBRE</h1>
          <p className="text-orange-400 font-semibold">Delícias saudáveis para todas as idades</p>
        </div>
      </div>
      <div className="mt-4 sm:mt-0 flex items-center space-x-2 bg-green-500/20 text-green-300 border border-green-400 rounded-full px-4 py-1.5 text-sm font-semibold">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span>Aberto</span>
      </div>
    </header>
  );
};

export default Header;

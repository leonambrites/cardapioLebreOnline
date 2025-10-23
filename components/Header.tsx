import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 p-6 bg-slate-800/80 rounded-2xl shadow-lg backdrop-blur-sm border border-slate-700 text-center sm:text-left">
      <div className="w-24 h-24 rounded-lg border-4 border-orange-500 flex-shrink-0 overflow-hidden bg-white">
        <img 
          src="https://assets-temp.lovart.ai/img/1ea1880f8def4e4f8d31e7bff4d377c3/01f643f7ba60e3c91d55ab0e38e3f250b0a550ef.png" 
          alt="LEBRE Logo" 
          className="w-full h-full object-contain p-1"
        />
      </div>
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-wide">Cardápio LEBRE</h1>
        <p className="text-orange-500 font-semibold mt-1">Delícias saudáveis para todas as idades</p>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center space-y-4 p-6 bg-gray-800/50 rounded-2xl shadow-lg backdrop-blur-sm border border-gray-700 text-center">
      <div className="w-24 h-24 rounded-lg border-4 border-orange-500 flex-shrink-0 overflow-hidden bg-white">
        <img 
          src="https://assets-temp.lovart.ai/img/1ea1880f8def4e4f8d31e7bff4d377c3/01f643f7ba60e3c91d55ab0e38e3f250b0a550ef.png" 
          alt="LEBRE Logo" 
          className="w-full h-full object-contain p-1"
        />
      </div>
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">Cardápio LEBRE</h1>
        <p className="text-orange-400 font-semibold mt-1">Delícias saudáveis para todas as idades</p>
      </div>
    </header>
  );
};

export default Header;

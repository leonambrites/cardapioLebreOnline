import React from 'react';
import Icon from './Icon';

interface FloatingCartButtonProps {
  itemCount: number;
  onClick: () => void;
  isAnimating: boolean;
}

const FloatingCartButton: React.FC<FloatingCartButtonProps> = ({ itemCount, onClick, isAnimating }) => {
  if (itemCount === 0) return null;

  return (
    <button
      onClick={onClick}
      aria-label={`Ver pedido com ${itemCount} itens`}
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-orange-500 ${isAnimating ? 'animate-shake' : ''}`}
    >
      <Icon name="cart" className="w-8 h-8" />
      <span className="absolute -top-1 -right-1 flex items-center justify-center w-6 h-6 text-xs font-bold bg-white text-orange-500 border-2 border-white rounded-full">
        {itemCount}
      </span>
    </button>
  );
};

export default FloatingCartButton;

import React, { useState } from 'react';
import type { MenuItemType } from '../types';
import Icon from './Icon';
import { CONTACT_PHONE_NUMBER_WHATSAPP } from '../constants';

interface MenuItemProps {
  item: MenuItemType;
  onAddToOrder: (item: MenuItemType, quantity: number) => void;
  onImageClick: (imageUrl: string) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, onAddToOrder, onImageClick }) => {
  const [quantity, setQuantity] = useState(1);
  const [wasAdded, setWasAdded] = useState(false);

  const isPriceNumber = typeof item.price === 'number';

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const handleDecrement = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleAddToCartClick = () => {
    onAddToOrder(item, quantity);
    setQuantity(1); // Reset quantity after adding
    setWasAdded(true);
    setTimeout(() => {
      setWasAdded(false);
    }, 1500);
  };

  const handleConsult = () => {
    const message = `Olá! Gostaria de mais informações sobre o item: ${item.name}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CONTACT_PHONE_NUMBER_WHATSAPP}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex bg-gray-800/60 rounded-2xl overflow-hidden shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-orange-500/20 hover:border-orange-500/50 hover:scale-[1.02]">
      <div 
        className="w-1/3 flex-shrink-0 cursor-pointer group"
        onClick={() => onImageClick(item.imageUrl)}
        aria-label={`Ver imagem de ${item.name} em tamanho maior`}
      >
        <img 
          src={item.imageUrl} 
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4 sm:p-5 flex flex-col justify-between w-2/3">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white">{item.name}</h3>
          <p className="text-gray-400 text-sm mt-1">{item.description}</p>
        </div>
        <div className="mt-4 space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-xl sm:text-2xl font-bold text-orange-400">
              {isPriceNumber ? formatPrice(item.price as number) : item.price}
            </p>
            {isPriceNumber && (
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleDecrement}
                  aria-label="Diminuir quantidade"
                  disabled={quantity <= 1}
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-white text-2xl font-bold transition-colors hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  -
                </button>
                <span className="w-8 text-center text-lg font-bold" aria-live="polite">
                  {quantity}
                </span>
                <button
                  onClick={handleIncrement}
                  aria-label="Aumentar quantidade"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-white text-2xl font-bold transition-colors hover:bg-orange-600"
                >
                  +
                </button>
              </div>
            )}
          </div>
          {isPriceNumber ? (
            <button
              onClick={handleAddToCartClick}
              disabled={wasAdded}
              className={`w-full flex items-center justify-center text-sm font-bold py-2.5 px-4 rounded-lg transition-all duration-300 ${
                wasAdded 
                  ? 'bg-green-600 text-white cursor-not-allowed' 
                  : 'bg-orange-600 hover:bg-orange-700 text-white'
              }`}
            >
              <Icon name={wasAdded ? 'check' : 'cart'} className="w-5 h-5 mr-2" />
              {wasAdded ? 'Adicionado!' : 'Adicionar ao Pedido'}
            </button>
          ) : (
            <button
              onClick={handleConsult}
              className="w-full flex items-center justify-center text-sm font-bold py-2.5 px-4 rounded-lg transition-all duration-300 bg-green-600 hover:bg-green-700 text-white"
            >
              <Icon name="whatsapp" className="w-5 h-5 mr-2" />
              Consultar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
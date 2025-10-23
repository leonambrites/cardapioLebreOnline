import React, { useState, useRef, useEffect } from 'react';
import type { MenuItemType, SizeOption } from '../types';
import Icon from './Icon';
import { CONTACT_PHONE_NUMBER_WHATSAPP } from '../constants';
import { formatPrice } from '../utils';

interface MenuItemProps {
  item: MenuItemType;
  onAddToOrder: (item: MenuItemType, quantity: number, selectedSize?: SizeOption) => void;
  onSelectItem: (item: MenuItemType) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, onAddToOrder, onSelectItem }) => {
  const [quantity, setQuantity] = useState(1);
  const [wasAdded, setWasAdded] = useState(false);
  const [selectedSize, setSelectedSize] = useState<SizeOption | undefined>(
    item.sizes ? item.sizes[0] : undefined
  );
  const [infoVisible, setInfoVisible] = useState(false);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (infoRef.current && !infoRef.current.contains(event.target as Node)) {
        setInfoVisible(false);
      }
    };
  
    if (infoVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [infoVisible]);


  const isPriceNumber = typeof item.price === 'number' || !!item.sizes;

  const handleDecrement = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleInfoToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setInfoVisible(prev => !prev);
  };

  const handleAddToCartClick = () => {
    onAddToOrder(item, quantity, selectedSize);
    setQuantity(1);
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

  const displayPrice = selectedSize
    ? formatPrice(selectedSize.price)
    : (typeof item.price === 'number' ? formatPrice(item.price) : item.price);

  return (
    <div 
      className="relative flex flex-col sm:flex-row bg-slate-800 rounded-2xl shadow-lg border border-slate-700 transition-all duration-300 hover:shadow-orange-500/10 hover:border-orange-500/30 hover:scale-[1.02] cursor-pointer"
      onClick={() => onSelectItem(item)}
    >
      <div 
        className="w-full sm:w-1/3 h-48 sm:h-auto flex-shrink-0 group overflow-hidden rounded-t-2xl sm:rounded-t-none sm:rounded-l-2xl"
        aria-label={`Ver detalhes de ${item.name}`}
      >
        <img 
          src={item.imageUrl} 
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4 sm:p-5 flex flex-col justify-between w-full sm:w-2/3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg sm:text-xl font-bold text-slate-100">{item.name}</h3>
            <div ref={infoRef} className="relative flex items-center">
              <button onClick={handleInfoToggle} className="text-slate-400 hover:text-slate-100 transition-colors" aria-label={`Mais informações sobre ${item.name}`}>
                <Icon name="info" className="w-5 h-5" />
              </button>
              {infoVisible && (
                <div className="absolute bottom-full right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 mb-2 w-64 p-3 bg-slate-700 border border-slate-600 rounded-lg shadow-xl text-sm text-gray-300 z-30" role="tooltip">
                  {item.description}
                  <div className="absolute top-full right-3 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-slate-700"></div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-4 space-y-3" onClick={(e) => e.stopPropagation()}>
          {item.sizes && (
            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold text-slate-400">Tamanho:</span>
              {item.sizes.map(size => (
                <button
                  key={size.size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 text-sm rounded-md transition-colors ${
                    selectedSize?.size === size.size
                      ? 'bg-orange-500 text-white font-semibold'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {size.size}
                </button>
              ))}
            </div>
          )}
          <div className="flex items-center justify-between">
            <p className="text-xl sm:text-2xl font-bold text-orange-500">
              {displayPrice}
            </p>
            {isPriceNumber && (
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleDecrement}
                  aria-label="Diminuir quantidade"
                  disabled={quantity <= 1}
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-700 text-slate-200 text-2xl font-bold transition-colors hover:bg-orange-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  -
                </button>
                <span className="w-8 text-center text-lg font-bold text-slate-100" aria-live="polite">
                  {quantity}
                </span>
                <button
                  onClick={handleIncrement}
                  aria-label="Aumentar quantidade"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-700 text-slate-200 text-2xl font-bold transition-colors hover:bg-orange-500 hover:text-white"
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
                  ? 'bg-green-500 text-white cursor-not-allowed animate-pop-in' 
                  : 'bg-orange-500 hover:bg-orange-600 text-white'
              }`}
            >
              <Icon name={wasAdded ? 'check' : 'cart'} className="w-5 h-5 mr-2" />
              {wasAdded ? 'Adicionado!' : 'Adicionar ao Pedido'}
            </button>
          ) : (
            <button
              onClick={handleConsult}
              className="w-full flex items-center justify-center text-sm font-bold py-2.5 px-4 rounded-lg transition-all duration-300 bg-green-500 hover:bg-green-600 text-white"
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
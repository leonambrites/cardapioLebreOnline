import React, { useState, useEffect } from 'react';
import type { MenuItemType, SizeOption } from '../types';
import Icon from './Icon';
import { CONTACT_PHONE_NUMBER_WHATSAPP } from '../constants';
import { formatPrice } from '../utils';

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: MenuItemType | null;
  onAddToOrder: (item: MenuItemType, quantity: number, selectedSize?: SizeOption) => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ isOpen, onClose, item, onAddToOrder }) => {
  const [quantity, setQuantity] = useState(1);
  const [wasAdded, setWasAdded] = useState(false);
  const [selectedSize, setSelectedSize] = useState<SizeOption | undefined>(undefined);

  useEffect(() => {
    // Reset state whenever the modal is opened with an item.
    if (isOpen && item) {
      setQuantity(1);
      setSelectedSize(item.sizes ? item.sizes[0] : undefined);
      setWasAdded(false);
    }
  }, [isOpen, item]);

  if (!isOpen || !item) return null;

  const isPriceNumber = typeof item.price === 'number' || !!item.sizes;

  const handleDecrement = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleAddToCartClick = () => {
    if (!item) return;
    onAddToOrder(item, quantity, selectedSize);
    setWasAdded(true);
    setTimeout(() => {
      onClose();
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
      className="fixed inset-0 bg-black bg-opacity-70 z-[100] flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row shadow-2xl border border-slate-700 transform transition-transform duration-300 scale-95"
        style={{ animation: 'scale-up 0.3s forwards' }}
        onClick={e => e.stopPropagation()}
      >
        <style>{`
          @keyframes scale-up {
            from { transform: scale(0.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}</style>
        <div className="w-full md:w-1/2 h-64 md:h-auto flex-shrink-0">
            <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover rounded-t-2xl md:rounded-t-none md:rounded-l-2xl" />
        </div>
        <div className="flex flex-col flex-1">
            <header className="flex items-center justify-between p-4 border-b border-slate-700 flex-shrink-0">
                <h2 className="text-2xl font-bold text-slate-100">{item.name}</h2>
                <button onClick={onClose} aria-label="Fechar detalhes do produto" className="p-2 rounded-full hover:bg-slate-700 transition-colors">
                    <Icon name="close" className="w-6 h-6 text-slate-400" />
                </button>
            </header>
            <main className="p-6 overflow-y-auto space-y-4 flex-1">
                <p className="text-slate-400">{item.description}</p>
                {item.sizes && (
                    <div className="flex items-center space-x-2 pt-2">
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
            </main>
            <footer className="p-6 mt-auto border-t border-slate-700 space-y-4 flex-shrink-0">
                <div className="flex items-center justify-between">
                    <p className="text-3xl sm:text-4xl font-bold text-orange-500">
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
                    className={`w-full flex items-center justify-center text-md font-bold py-3 px-4 rounded-lg transition-all duration-300 ${
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
                    className="w-full flex items-center justify-center text-md font-bold py-3 px-4 rounded-lg transition-all duration-300 bg-green-500 hover:bg-green-600 text-white"
                    >
                    <Icon name="whatsapp" className="w-5 h-5 mr-2" />
                    Consultar
                    </button>
                )}
            </footer>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
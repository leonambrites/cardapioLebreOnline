
import React from 'react';
import type { OrderItemType } from '../types';
import Icon from './Icon';
import { CONTACT_PHONE_NUMBER_WHATSAPP } from '../constants';

interface OrderSummaryProps {
  isOpen: boolean;
  onClose: () => void;
  orderItems: OrderItemType[];
  onUpdateQuantity: (itemId: number, newQuantity: number) => void;
  onClearCart: () => void;
}

const formatPrice = (price: number) => {
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const OrderSummary: React.FC<OrderSummaryProps> = ({ isOpen, onClose, orderItems, onUpdateQuantity, onClearCart }) => {
  if (!isOpen) return null;

  // FIX: The price can be a string (e.g., "A combinar"), so only add to total if it's a number.
  const totalPrice = orderItems.reduce((total, orderItem) => {
    if (typeof orderItem.item.price === 'number') {
      return total + orderItem.item.price * orderItem.quantity;
    }
    return total;
  }, 0);

  const handleFinalizeOrder = () => {
    if (orderItems.length === 0) return;

    let message = 'Olá! Gostaria de fazer o seguinte pedido:\n\n';
    
    orderItems.forEach(({ item, quantity }) => {
      message += `- ${quantity}x ${item.name}\n`;
    });

    message += `\n*Total: ${formatPrice(totalPrice)}*`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CONTACT_PHONE_NUMBER_WHATSAPP}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-[100] flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-gray-800 rounded-2xl w-full max-w-lg max-h-[90vh] flex flex-col shadow-2xl border border-gray-700 transform transition-transform duration-300 scale-95"
        style={{ animation: 'scale-up 0.3s forwards' }}
        onClick={e => e.stopPropagation()}
      >
        <style>{`
          @keyframes scale-up {
            from { transform: scale(0.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}</style>
        <header className="flex items-center justify-between p-4 border-b border-gray-700 flex-shrink-0">
          <h2 className="text-2xl font-bold text-white">Resumo do Pedido</h2>
          <button onClick={onClose} aria-label="Fechar resumo do pedido" className="p-2 rounded-full hover:bg-gray-700 transition-colors">
            <Icon name="close" className="w-6 h-6 text-gray-400" />
          </button>
        </header>

        <main className="p-6 overflow-y-auto space-y-4">
          {orderItems.length === 0 ? (
            <p className="text-gray-400 text-center py-8">Seu carrinho está vazio.</p>
          ) : (
            orderItems.map(({ item, quantity }) => (
              <div key={item.id} className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={item.imageUrl} 
                    alt={item.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white truncate">{item.name}</h3>
                  {/* FIX: Check if price is a number before formatting, otherwise display as string. */}
                  <p className="text-sm text-orange-400">{typeof item.price === 'number' ? formatPrice(item.price) : item.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button onClick={() => onUpdateQuantity(item.id, quantity - 1)} aria-label={`Diminuir quantidade de ${item.name}`} className="w-7 h-7 rounded-md bg-gray-700 hover:bg-orange-600 transition-colors">-</button>
                  <span className="w-8 text-center font-bold">{quantity}</span>
                  <button onClick={() => onUpdateQuantity(item.id, quantity + 1)} aria-label={`Aumentar quantidade de ${item.name}`} className="w-7 h-7 rounded-md bg-gray-700 hover:bg-orange-600 transition-colors">+</button>
                </div>
                {/* FIX: Check if price is a number before performing arithmetic operation. */}
                <p className="w-20 text-right font-bold">{typeof item.price === 'number' ? formatPrice(item.price * quantity) : item.price}</p>
              </div>
            ))
          )}
        </main>

        <footer className="p-6 mt-auto border-t border-gray-700 space-y-4 flex-shrink-0">
            <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>{formatPrice(totalPrice)}</span>
            </div>
            <div className="space-y-2">
                <button 
                onClick={handleFinalizeOrder}
                disabled={orderItems.length === 0} 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                    <Icon name="whatsapp" className="w-5 h-5" />
                    <span>Finalizar via WhatsApp</span>
                </button>
                {orderItems.length > 0 && (
                    <button
                        onClick={onClearCart}
                        className="w-full flex items-center justify-center text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 py-2 px-4 rounded-lg transition-colors"
                        aria-label="Esvaziar carrinho"
                    >
                        <Icon name="trash" className="w-4 h-4 mr-2" />
                        Esvaziar Carrinho
                    </button>
                )}
            </div>
        </footer>
      </div>
    </div>
  );
};

export default OrderSummary;
import React, { useState, useEffect } from 'react';
import type { MenuItemType, OrderItemType, SizeOption } from '../types';
import Icon from './Icon';
import { CONTACT_PHONE_NUMBER_WHATSAPP, DELIVERY_FEE, FREE_DELIVERY_THRESHOLD } from '../constants';
import { formatPrice } from '../utils';

interface OrderSummaryProps {
  isOpen: boolean;
  onClose: () => void;
  orderItems: OrderItemType[];
  onUpdateQuantity: (orderItemId: string, newQuantity: number) => void;
  onClearCart: () => void;
  onAddToOrder: (item: MenuItemType, quantity: number, selectedSize?: SizeOption) => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ isOpen, onClose, orderItems, onUpdateQuantity, onClearCart, onAddToOrder }) => {
  const [orderSent, setOrderSent] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');


  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setOrderSent(false);
        setCustomerName('');
        setCustomerAddress('');
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const subtotal = orderItems.reduce((total, orderItem) => {
    const price = orderItem.selectedSize?.price ?? (typeof orderItem.item.price === 'number' ? orderItem.item.price : 0);
    return total + (price * orderItem.quantity);
  }, 0);

  const deliveryFee = subtotal >= FREE_DELIVERY_THRESHOLD || subtotal === 0 ? 0 : DELIVERY_FEE;
  const finalTotal = subtotal + deliveryFee;
  const isFormValid = customerName.trim() !== '' && customerAddress.trim() !== '';

  const progressPercentage = Math.min((subtotal / FREE_DELIVERY_THRESHOLD) * 100, 100);
  const amountLeftForFreeDelivery = FREE_DELIVERY_THRESHOLD - subtotal;

  const handleFinalizeOrder = () => {
    if (!isFormValid || orderItems.length === 0 || orderSent) return;
    
    const orderId = Date.now().toString().slice(-4);

    let message = `*Pedido Nº: #${orderId}*\n\n`;
    message += '*Novo Pedido LEBRE* 🥗\n\n';
    message += `*Cliente:* ${customerName}\n`;
    message += `*Endereço:* ${customerAddress}\n\n`;
    message += '*Itens do Pedido:*\n';
    
    orderItems.forEach(({ item, quantity, selectedSize }) => {
      const itemName = selectedSize ? `${item.name} (${selectedSize.size})` : item.name;
      const itemPrice = selectedSize?.price ?? (typeof item.price === 'number' ? item.price : 0);
      message += `- ${quantity}x ${itemName} (${formatPrice(itemPrice * quantity)})\n`;
    });

    message += `\n-------------------\n`;
    message += `*Subtotal:* ${formatPrice(subtotal)}\n`;
    message += `*Taxa de Entrega:* ${deliveryFee > 0 ? formatPrice(deliveryFee) : 'Grátis'}\n`;
    message += `*Total do Pedido:* ${formatPrice(finalTotal)}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CONTACT_PHONE_NUMBER_WHATSAPP}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    setOrderSent(true);
    onClearCart();

    setTimeout(() => {
      onClose();
    }, 4000);
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-[100] flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-slate-800 rounded-2xl w-full max-w-lg max-h-[90vh] flex flex-col shadow-2xl border border-slate-700 transform transition-transform duration-300 scale-95"
        style={{ animation: 'scale-up 0.3s forwards' }}
        onClick={e => e.stopPropagation()}
      >
        <style>{`
          @keyframes scale-up {
            from { transform: scale(0.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}</style>
        <header className="flex items-center justify-between p-4 border-b border-slate-700 flex-shrink-0">
          <h2 className="text-2xl font-bold text-slate-100">Resumo do Pedido</h2>
          <button onClick={onClose} aria-label="Fechar resumo do pedido" className="p-2 rounded-full hover:bg-slate-700 transition-colors">
            <Icon name="close" className="w-6 h-6 text-slate-400" />
          </button>
        </header>

        <main className="p-6 overflow-y-auto space-y-4">
          {orderItems.length === 0 ? (
            <p className="text-slate-400 text-center py-8">Seu carrinho está vazio.</p>
          ) : (
            <>
              {orderItems.map(({ id, item, quantity, selectedSize }) => {
                const itemPrice = selectedSize?.price ?? (typeof item.price === 'number' ? item.price : 0);
                const name = selectedSize ? `${item.name} (${selectedSize.size})` : item.name;

                return (
                <div key={id} className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={item.imageUrl} 
                      alt={item.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-slate-200 break-words pr-2">{name}</h3>
                      <p className="font-bold text-slate-300 text-right flex-shrink-0">{formatPrice(itemPrice * quantity)}</p>
                    </div>
                     <div className="flex items-center space-x-2 mt-2">
                        <button onClick={() => onUpdateQuantity(id, quantity - 1)} aria-label={`Diminuir quantidade de ${item.name}`} className="w-7 h-7 rounded-md bg-slate-700 text-slate-300 hover:bg-orange-500 hover:text-white transition-colors flex-shrink-0">-</button>
                        <span className="w-8 text-center font-bold text-slate-100">{quantity}</span>
                        <button onClick={() => onUpdateQuantity(id, quantity + 1)} aria-label={`Aumentar quantidade de ${item.name}`} className="w-7 h-7 rounded-md bg-slate-700 text-slate-300 hover:bg-orange-500 hover:text-white transition-colors flex-shrink-0">+</button>
                      </div>
                  </div>
                </div>
              )})}
            </>
          )}
        </main>

        <footer className="p-6 mt-auto border-t border-slate-700 space-y-4 flex-shrink-0">
          {orderSent ? (
            <div className="text-center py-4 transition-all duration-300 animate-pop-in">
                <div className="flex justify-center items-center mb-3">
                    <Icon name="check" className="w-10 h-10 text-green-400" />
                </div>
                <p className="text-lg font-bold text-green-400">Pedido enviado com sucesso!</p>
                <p className="text-slate-400">Continue no WhatsApp para finalizar.</p>
            </div>
          ) : (
            <>
              {orderItems.length > 0 && (
                <div className="space-y-3 pb-4">
                  <div className="space-y-2 mb-4">
                    {subtotal >= FREE_DELIVERY_THRESHOLD ? (
                      <p className="text-center text-sm font-bold text-green-400">Parabéns! Você ganhou entrega grátis!</p>
                    ) : (
                      <>
                        <p className="text-center text-sm text-slate-400">
                            Faltam <strong>{formatPrice(amountLeftForFreeDelivery)}</strong> para ter <strong>entrega grátis</strong>!
                        </p>
                        <div className="w-full bg-slate-700 rounded-full h-2.5">
                            <div 
                                className="bg-green-500 h-2.5 rounded-full transition-all duration-500" 
                                style={{ width: `${progressPercentage}%` }}>
                            </div>
                        </div>
                      </>
                    )}
                  </div>
                  <h3 className="font-semibold text-lg text-slate-200">Seus Dados para Entrega</h3>
                  <div>
                    <label htmlFor="customerName" className="block text-xs font-medium text-slate-400 mb-1">Nome</label>
                    <input 
                      type="text" 
                      id="customerName"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Seu nome completo"
                      className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-slate-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="customerAddress" className="block text-xs font-medium text-slate-400 mb-1">Endereço Completo</label>
                    <input 
                      type="text" 
                      id="customerAddress"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      placeholder="Rua, Número, Bairro, Complemento"
                      className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-slate-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
              )}
               {orderItems.length > 0 && (
                <div className="space-y-2 pt-4 border-t border-slate-700">
                  <div className="flex justify-between text-md text-slate-300">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-md text-slate-300">
                    <span>Taxa de Entrega</span>
                    <span>{deliveryFee > 0 ? formatPrice(deliveryFee) : 'Grátis'}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-slate-100">
                      <span>Total</span>
                      <span className="text-orange-500">{formatPrice(finalTotal)}</span>
                  </div>
                </div>
               )}
              <div className="space-y-2 pt-2">
                  <button 
                  onClick={handleFinalizeOrder}
                  disabled={orderItems.length === 0 || !isFormValid} 
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-colors disabled:bg-slate-600 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                      <Icon name="whatsapp" className="w-5 h-5" />
                      <span>Finalizar via WhatsApp</span>
                  </button>
                  {orderItems.length > 0 && (
                      <button
                          onClick={onClearCart}
                          className="w-full flex items-center justify-center text-sm text-pink-500 hover:text-pink-400 hover:bg-pink-500/10 py-2 px-4 rounded-lg transition-colors"
                          aria-label="Esvaziar carrinho"
                      >
                          <Icon name="trash" className="w-4 h-4 mr-2" />
                          Esvaziar Carrinho
                      </button>
                  )}
              </div>
            </>
          )}
        </footer>
      </div>
    </div>
  );
};

export default OrderSummary;
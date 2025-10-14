
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import MenuCategory from './components/MenuCategory';
import OrderSummary from './components/OrderSummary';
import FloatingCartButton from './components/FloatingCartButton';
import ImageModal from './components/ImageModal';
import { MENU_DATA } from './constants';
import type { MenuCategoryType, MenuItemType, OrderItemType } from './types';

const App: React.FC = () => {
  const [order, setOrder] = useState<OrderItemType[]>([]);
  const [isOrderSummaryOpen, setOrderSummaryOpen] = useState(false);
  const [imageModal, setImageModal] = useState<{ isOpen: boolean; imageUrl: string }>({
    isOpen: false,
    imageUrl: '',
  });

  const handleAddToOrder = (itemToAdd: MenuItemType, quantity: number) => {
    setOrder(prevOrder => {
      const existingItemIndex = prevOrder.findIndex(
        orderItem => orderItem.item.id === itemToAdd.id
      );

      if (existingItemIndex > -1) {
        // Item exists, update quantity
        const updatedOrder = [...prevOrder];
        updatedOrder[existingItemIndex].quantity += quantity;
        return updatedOrder;
      } else {
        // Item doesn't exist, add it
        return [...prevOrder, { item: itemToAdd, quantity }];
      }
    });
  };

  const handleUpdateQuantity = (itemId: number, newQuantity: number) => {
    setOrder(prevOrder => {
      if (newQuantity <= 0) {
        // Remove item if quantity is 0 or less
        return prevOrder.filter(orderItem => orderItem.item.id !== itemId);
      }
      // Otherwise, update quantity
      return prevOrder.map(orderItem => 
        orderItem.item.id === itemId 
          ? { ...orderItem, quantity: newQuantity } 
          : orderItem
      );
    });
  };
  
  const handleImageClick = (imageUrl: string) => {
    setImageModal({ isOpen: true, imageUrl });
  };

  const handleCloseImageModal = () => {
    setImageModal({ isOpen: false, imageUrl: '' });
  };

  const totalItemsInCart = useMemo(() => {
    return order.reduce((total, currentItem) => total + currentItem.quantity, 0);
  }, [order]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-white">
      <div className="container mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
        <Header />
        <main className="mt-8">
          <div className="mt-12 space-y-12">
            {MENU_DATA.map((category: MenuCategoryType) => (
              <MenuCategory 
                key={category.id} 
                category={category} 
                onAddToOrder={handleAddToOrder}
                onImageClick={handleImageClick}
              />
            ))}
          </div>
        </main>
        <footer className="text-center text-gray-500 text-sm mt-16 pb-4">
          <p>LEBRE • Delícias saudáveis para todas as idades</p>
        </footer>
      </div>

      <FloatingCartButton 
        itemCount={totalItemsInCart} 
        onClick={() => setOrderSummaryOpen(true)} 
      />

      <OrderSummary 
        isOpen={isOrderSummaryOpen}
        onClose={() => setOrderSummaryOpen(false)}
        orderItems={order}
        onUpdateQuantity={handleUpdateQuantity}
      />

      <ImageModal
        isOpen={imageModal.isOpen}
        imageUrl={imageModal.imageUrl}
        onClose={handleCloseImageModal}
      />
    </div>
  );
};

export default App;

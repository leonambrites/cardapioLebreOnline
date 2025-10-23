import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import MenuCategory from './components/MenuCategory';
import OrderSummary from './components/OrderSummary';
import FloatingCartButton from './components/FloatingCartButton';
import ProductDetailModal from './components/ProductDetailModal';
import ContactInfo from './components/ContactInfo';
import { MENU_DATA } from './constants';
import type { MenuCategoryType, MenuItemType, OrderItemType, SizeOption } from './types';

const App: React.FC = () => {
  const [order, setOrder] = useState<OrderItemType[]>([]);
  const [isOrderSummaryOpen, setOrderSummaryOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItemType | null>(null);

  const handleAddToOrder = (itemToAdd: MenuItemType, quantity: number, selectedSize?: SizeOption) => {
    const orderItemId = selectedSize ? `${itemToAdd.id}-${selectedSize.size}` : `${itemToAdd.id}`;
    
    setOrder(prevOrder => {
      const existingItemIndex = prevOrder.findIndex(
        orderItem => orderItem.id === orderItemId
      );

      if (existingItemIndex > -1) {
        // Item with same size exists, update quantity
        const updatedOrder = [...prevOrder];
        // FIX: Corrected typo from `existingItem-1` to `existingItemIndex` to correctly update the item's quantity.
        updatedOrder[existingItemIndex].quantity += quantity;
        return updatedOrder;
      } else {
        // Item doesn't exist or has a different size, add it
        return [...prevOrder, { id: orderItemId, item: itemToAdd, quantity, selectedSize }];
      }
    });
  };

  const handleUpdateQuantity = (orderItemId: string, newQuantity: number) => {
    setOrder(prevOrder => {
      if (newQuantity <= 0) {
        // Remove item if quantity is 0 or less
        return prevOrder.filter(orderItem => orderItem.id !== orderItemId);
      }
      // Otherwise, update quantity
      return prevOrder.map(orderItem => 
        orderItem.id === orderItemId 
          ? { ...orderItem, quantity: newQuantity } 
          : orderItem
      );
    });
  };
  
  const handleSelectItem = (item: MenuItemType) => {
    setSelectedItem(item);
  };

  const handleCloseProductModal = () => {
    setSelectedItem(null);
  };

  const handleClearCart = () => {
    setOrder([]);
  };

  const totalItemsInCart = useMemo(() => {
    return order.reduce((total, currentItem) => total + currentItem.quantity, 0);
  }, [order]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 text-slate-100">
      <div className="container mx-auto max-w-4xl p-2 sm:p-6 lg:p-8">
        <Header />
        <div className="mt-8">
          <ContactInfo />
        </div>
        <main className="mt-8">
          <div className="mt-12 space-y-12">
            {MENU_DATA.map((category: MenuCategoryType) => (
              <MenuCategory 
                key={category.id} 
                category={category} 
                onAddToOrder={handleAddToOrder}
                onSelectItem={handleSelectItem}
              />
            ))}
          </div>
        </main>
        <footer className="text-center text-slate-400 text-sm mt-16 pb-4">
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
        onClearCart={handleClearCart}
        onAddToOrder={handleAddToOrder}
      />

      <ProductDetailModal
        isOpen={!!selectedItem}
        item={selectedItem}
        onClose={handleCloseProductModal}
        onAddToOrder={handleAddToOrder}
      />
    </div>
  );
};

export default App;

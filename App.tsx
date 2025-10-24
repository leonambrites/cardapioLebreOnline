import React, { useState, useMemo, useEffect, useCallback } from 'react';
import Header from './components/Header';
import MenuCategory from './components/MenuCategory';
import OrderSummary from './components/OrderSummary';
import FloatingCartButton from './components/FloatingCartButton';
import ProductDetailModal from './components/ProductDetailModal';
import ContactInfo from './components/ContactInfo';
import MenuSkeleton from './components/MenuSkeleton';
import { MENU_DATA } from './constants';
import type { MenuCategoryType, MenuItemType, OrderItemType, SizeOption, SaltOption } from './types';

const App: React.FC = () => {
  const [order, setOrder] = useState<OrderItemType[]>([]);
  const [isOrderSummaryOpen, setOrderSummaryOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItemType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCartAnimating, setIsCartAnimating] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleAddToOrder = useCallback((itemToAdd: MenuItemType, quantity: number, selectedSize?: SizeOption, saltOption?: SaltOption) => {
    const effectiveSaltOption = itemToAdd.hasSaltOption ? (saltOption || 'Com Sal') : undefined;
    const orderItemId = `${itemToAdd.id}-${selectedSize?.size || 'default'}-${effectiveSaltOption || 'default'}`;
    
    setOrder(prevOrder => {
      const existingItemIndex = prevOrder.findIndex(
        orderItem => orderItem.id === orderItemId
      );

      if (existingItemIndex > -1) {
        const updatedOrder = [...prevOrder];
        updatedOrder[existingItemIndex].quantity += quantity;
        return updatedOrder;
      } else {
        return [...prevOrder, { id: orderItemId, item: itemToAdd, quantity, selectedSize, saltOption: effectiveSaltOption }];
      }
    });
    
    setIsCartAnimating(true);
    setTimeout(() => setIsCartAnimating(false), 820); // Duration of the shake animation
  }, []);

  const handleUpdateQuantity = useCallback((orderItemId: string, newQuantity: number) => {
    setOrder(prevOrder => {
      if (newQuantity <= 0) {
        return prevOrder.filter(orderItem => orderItem.id !== orderItemId);
      }
      return prevOrder.map(orderItem => 
        orderItem.id === orderItemId 
          ? { ...orderItem, quantity: newQuantity } 
          : orderItem
      );
    });
  }, []);
  
  const handleSelectItem = useCallback((item: MenuItemType) => {
    setSelectedItem(item);
  }, []);

  const handleCloseProductModal = useCallback(() => {
    setSelectedItem(null);
  }, []);

  const handleClearCart = useCallback(() => {
    setOrder([]);
  }, []);

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
            {isLoading ? (
              <MenuSkeleton />
            ) : (
              MENU_DATA.map((category: MenuCategoryType) => (
                <MenuCategory 
                  key={category.id} 
                  category={category} 
                  onAddToOrder={handleAddToOrder}
                  onSelectItem={handleSelectItem}
                />
              ))
            )}
          </div>
        </main>
        <footer className="text-center text-slate-400 text-sm mt-16 pb-4">
          <p>LEBRE • Delícias saudáveis para todas as idades</p>
        </footer>
      </div>

      <FloatingCartButton 
        itemCount={totalItemsInCart} 
        onClick={() => setOrderSummaryOpen(true)}
        isAnimating={isCartAnimating}
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
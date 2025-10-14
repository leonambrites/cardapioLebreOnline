
import React from 'react';
import MenuItem from './MenuItem';
import type { MenuCategoryType, MenuItemType } from '../types';

interface MenuCategoryProps {
  category: MenuCategoryType;
  onAddToOrder: (item: MenuItemType, quantity: number) => void;
  onImageClick: (imageUrl: string) => void;
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ category, onAddToOrder, onImageClick }) => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8 pb-2 border-b-2 border-orange-500/50 inline-block">
        {category.name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {category.items.map(item => (
          <MenuItem 
            key={item.id} 
            item={item} 
            onAddToOrder={onAddToOrder} 
            onImageClick={onImageClick} 
          />
        ))}
      </div>
    </section>
  );
};

export default MenuCategory;

import React from 'react';
import MenuItem from './MenuItem';
import type { MenuCategoryType, MenuItemType, SizeOption, SaltOption } from '../types';

interface MenuCategoryProps {
  category: MenuCategoryType;
  onAddToOrder: (item: MenuItemType, quantity: number, selectedSize?: SizeOption, saltOption?: SaltOption) => void;
  onSelectItem: (item: MenuItemType) => void;
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ category, onAddToOrder, onSelectItem }) => {
  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-xl sm:text-3xl font-bold text-slate-100 pb-2 border-b-2 border-orange-500/30 inline-block">
          {category.name}
        </h2>
        {category.subtitle && (
          <p className="text-slate-400 mt-2 text-md">{category.subtitle}</p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {category.items.map(item => (
          <MenuItem 
            key={item.id} 
            item={item} 
            onAddToOrder={onAddToOrder} 
            onSelectItem={onSelectItem} 
          />
        ))}
      </div>
    </section>
  );
};

export default MenuCategory;
export interface SizeOption {
  size: string;
  price: number;
}

export type SaltOption = 'Com Sal' | 'Sem Sal';

export interface MenuItemType {
  id: number;
  name: string;
  description: string;
  price?: number | string;
  sizes?: SizeOption[];
  imageUrl: string;
  hasSaltOption?: boolean;
}

export interface MenuCategoryType {
  id: number;
  name: string;
  subtitle?: string;
  items: MenuItemType[];
}

export interface OrderItemType {
  id: string; // Unique ID like "itemId-size-salt"
  item: MenuItemType;
  quantity: number;
  selectedSize?: SizeOption;
  saltOption?: SaltOption;
}
export interface SizeOption {
  size: string;
  price: number;
}

export interface MenuItemType {
  id: number;
  name: string;
  description: string;
  price?: number | string;
  sizes?: SizeOption[];
  imageUrl: string;
}

export interface MenuCategoryType {
  id: number;
  name: string;
  subtitle?: string;
  items: MenuItemType[];
}

export interface OrderItemType {
  id: string; // Unique ID like "itemId-size"
  item: MenuItemType;
  quantity: number;
  selectedSize?: SizeOption;
}
export interface MenuItemType {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface MenuCategoryType {
  id: number;
  name: string;
  items: MenuItemType[];
}

export interface OrderItemType {
  item: MenuItemType;
  quantity: number;
}

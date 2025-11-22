export interface CartItem {
  id: string;
  slug: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
}

export interface CartState {
  items: CartItem[];
  subtotal: number;
  itemCount: number;
}
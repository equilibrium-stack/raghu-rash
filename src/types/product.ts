export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'floral' | 'wood' | 'resin';
  price: number;
  images: string[];
  description: string;
  scentNotes: string[];
  ingredients: string[];
  burnTime: string;
  quantity: number; // number of sticks
  featured?: boolean;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: 'floral' | 'wood' | 'resin';
}
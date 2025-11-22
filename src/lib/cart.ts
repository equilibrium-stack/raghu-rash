'use client';

import { CartItem, CartState } from '@/types';
import { products } from '@/data/products';

const CART_STORAGE_KEY = 'raghu-rash-cart';

export class CartManager {
  private cart: CartState;

  constructor() {
    this.cart = this.loadCart();
  }

  private loadCart(): CartState {
    if (typeof window === 'undefined') {
      return { items: [], subtotal: 0, itemCount: 0 };
    }

    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        return JSON.parse(savedCart);
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
    }

    return { items: [], subtotal: 0, itemCount: 0 };
  }

  private saveCart(): void {
    if (typeof window === 'undefined') return;

    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.cart));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }

  private calculateTotals(): void {
    this.cart.subtotal = this.cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    this.cart.itemCount = this.cart.items.reduce((total, item) => total + item.quantity, 0);
  }

  addToCart(productId: string, quantity: number = 1): boolean {
    const product = products.find(p => p.id === productId);
    if (!product || !product.inStock) {
      return false;
    }

    if (quantity < 1 || quantity > 10) {
      return false;
    }

    const existingItem = this.cart.items.find(item => item.id === productId);

    if (existingItem) {
      const newQuantity = existingItem.quantity + quantity;
      if (newQuantity > 10) {
        return false;
      }
      existingItem.quantity = newQuantity;
    } else {
      const cartItem: CartItem = {
        id: product.id,
        slug: product.slug,
        name: product.name,
        price: product.price,
        quantity,
        image: product.images[0],
        category: product.category
      };
      this.cart.items.push(cartItem);
    }

    this.calculateTotals();
    this.saveCart();
    return true;
  }

  updateQuantity(productId: string, newQuantity: number): boolean {
    if (newQuantity < 1 || newQuantity > 10) {
      return false;
    }

    const item = this.cart.items.find(item => item.id === productId);
    if (!item) {
      return false;
    }

    item.quantity = newQuantity;
    this.calculateTotals();
    this.saveCart();
    return true;
  }

  removeFromCart(productId: string): void {
    this.cart.items = this.cart.items.filter(item => item.id !== productId);
    this.calculateTotals();
    this.saveCart();
  }

  clearCart(): void {
    this.cart = { items: [], subtotal: 0, itemCount: 0 };
    this.saveCart();
  }

  getCart(): CartState {
    return { ...this.cart };
  }

  getCartItemCount(): number {
    return this.cart.itemCount;
  }

  getCartSubtotal(): number {
    return this.cart.subtotal;
  }

  getCartItems(): CartItem[] {
    return [...this.cart.items];
  }

  isInCart(productId: string): boolean {
    return this.cart.items.some(item => item.id === productId);
  }

  getItemQuantity(productId: string): number {
    const item = this.cart.items.find(item => item.id === productId);
    return item ? item.quantity : 0;
  }
}

// Singleton instance
let cartManager: CartManager | null = null;

export function getCartManager(): CartManager {
  if (!cartManager) {
    cartManager = new CartManager();
  }
  return cartManager;
}
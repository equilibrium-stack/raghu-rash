'use client';

import { useState, useEffect, useCallback } from 'react';
import { CartState, CartItem } from '@/types';
import { getCartManager } from '@/lib/cart';

export function useCart() {
  const [cart, setCart] = useState<CartState>({ items: [], subtotal: 0, itemCount: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cartManager = getCartManager();
    setCart(cartManager.getCart());
    setIsLoading(false);

    // Listen for storage changes from other tabs
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'raghu-rash-cart') {
        setCart(cartManager.getCart());
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const addToCart = useCallback((productId: string, quantity: number = 1) => {
    const cartManager = getCartManager();
    const success = cartManager.addToCart(productId, quantity);
    if (success) {
      setCart(cartManager.getCart());
    }
    return success;
  }, []);

  const updateQuantity = useCallback((productId: string, newQuantity: number) => {
    const cartManager = getCartManager();
    const success = cartManager.updateQuantity(productId, newQuantity);
    if (success) {
      setCart(cartManager.getCart());
    }
    return success;
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    const cartManager = getCartManager();
    cartManager.removeFromCart(productId);
    setCart(cartManager.getCart());
  }, []);

  const clearCart = useCallback(() => {
    const cartManager = getCartManager();
    cartManager.clearCart();
    setCart(cartManager.getCart());
  }, []);

  const isInCart = useCallback((productId: string) => {
    const cartManager = getCartManager();
    return cartManager.isInCart(productId);
  }, []);

  const getItemQuantity = useCallback((productId: string) => {
    const cartManager = getCartManager();
    return cartManager.getItemQuantity(productId);
  }, []);

  return {
    cart,
    isLoading,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    isInCart,
    getItemQuantity,
  };
}
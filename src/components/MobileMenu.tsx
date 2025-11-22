'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { categories, getFeaturedProducts } from '@/data/products';
import { Badge } from '@/components/ui/Badge';
import { useCart } from '@/hooks/useCart';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const { cart } = useCart();
  const featuredProducts = getFeaturedProducts().slice(0, 3);

  if (!isOpen) return null;

  const handleProductsToggle = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
        onClick={onClose}
      />

      {/* Slide-in Menu */}
      <div className="fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-white shadow-2xl md:hidden transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 relative">
                <Image
                  src="/images/ui/logo.svg"
                  alt="Raghu rash logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-bold text-gold">Raghu rash</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-beige/50 transition-colors font-medium text-gray-900"
                  onClick={onClose}
                >
                  <span>Home</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </Link>
              </li>

              {/* Products Accordion */}
              <li>
                <button
                  onClick={handleProductsToggle}
                  className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-beige/50 transition-colors font-medium text-gray-900"
                  aria-expanded={isProductsOpen}
                >
                  <span>Products</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isProductsOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {/* Categories */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-600 mb-2">Categories</h4>
                      {categories.map((category) => (
                        <Link
                          key={category.id}
                          href={`/products?category=${category.slug}`}
                          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-beige/50 transition-colors"
                          onClick={onClose}
                        >
                          <Badge variant={category.color} className="text-xs">
                            {category.name}
                          </Badge>
                          <span className="text-sm text-muted">{category.description}</span>
                        </Link>
                      ))}
                    </div>

                    {/* Featured Products */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-600 mb-2">Featured</h4>
                      {featuredProducts.map((product) => (
                        <Link
                          key={product.id}
                          href={`/products/${product.slug}`}
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-beige/50 transition-colors"
                          onClick={onClose}
                        >
                          <div className="w-12 h-12 bg-beige/50 rounded-lg flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
                            <p className="text-xs text-muted">₹{product.price}</p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <Link
                      href="/products"
                      className="flex items-center justify-center w-full p-3 rounded-lg bg-cinnamon text-white hover:bg-[#4B1E1E] transition-colors font-medium"
                      onClick={onClose}
                    >
                      View All Products
                    </Link>
                  </div>
                )}
              </li>

              <li>
                <Link
                  href="/about"
                  className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-beige/50 transition-colors font-medium text-gray-900"
                  onClick={onClose}
                >
                  <span>About</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-beige/50 transition-colors font-medium text-gray-900"
                  onClick={onClose}
                >
                  <span>Contact</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 bg-beige/20">
            <Link
              href="#"
              className="flex items-center justify-center w-full p-3 rounded-lg bg-gold text-charcoal hover:bg-gold-dark transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                // TODO: Open cart drawer
                console.log('Open cart drawer from mobile menu');
                onClose();
              }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Cart ({cart.itemCount} items) • ₹{cart.subtotal}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
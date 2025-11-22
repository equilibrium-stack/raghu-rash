'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/hooks/useCart';
import { ProductsDropdown } from './ProductsDropdown';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { cart } = useCart();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsProductsOpen(false);
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleProductsToggle = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                  <span className="text-charcoal font-bold text-sm">RR</span>
                </div>
                <span className="text-xl font-bold text-gold">Raghu rash</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
              <Link
                href="/"
                className="text-gray-700 hover:text-gold transition-colors font-medium"
              >
                Home
              </Link>

              {/* Products Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={handleProductsToggle}
                  className="flex items-center space-x-1 text-gray-700 hover:text-gold transition-colors font-medium"
                  aria-expanded={isProductsOpen}
                  aria-haspopup="true"
                >
                  <span>Products</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <ProductsDropdown isOpen={isProductsOpen} onClose={() => setIsProductsOpen(false)} />
              </div>

              <Link
                href="/about"
                className="text-gray-700 hover:text-gold transition-colors font-medium"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-gray-700 hover:text-gold transition-colors font-medium"
              >
                Contact
              </Link>
            </nav>

            {/* Cart and Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Cart Icon */}
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  // TODO: Open cart drawer
                  console.log('Open cart drawer');
                }}
                className="relative p-2 text-gold hover:bg-gold/10 rounded-full transition-colors"
                aria-label={`Shopping cart with ${cart.itemCount} items`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>

                {/* Cart Badge */}
                {cart.itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-sage text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center min-w-[20px]">
                    {cart.itemCount > 99 ? '99+' : cart.itemCount}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={handleMobileMenuToggle}
                className="md:hidden p-2 text-cinnamon hover:bg-cinnamon/10 rounded-full transition-colors"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
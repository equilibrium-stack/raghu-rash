'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // TODO: Implement newsletter subscription
      console.log('Newsletter subscription:', email);
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-beige/30 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="w-32 h-10 relative">
                <Image
                  src="/images/ui/logo.svg"
                  alt="Raghu rash logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-muted mb-4">
              Handcrafted perfumed agarbatti made with natural ingredients. Traditional craftsmanship meets timeless scents for your daily rituals.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/raghu-rash"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-cinnamon transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998z"/>
                  <circle cx="18.406" cy="5.594" r="1.44"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-cinnamon mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted hover:text-cinnamon transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted hover:text-cinnamon transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted hover:text-cinnamon transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted hover:text-cinnamon transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-cinnamon mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=floral" className="text-muted hover:text-cinnamon transition-colors">
                  Floral Incense
                </Link>
              </li>
              <li>
                <Link href="/products?category=wood" className="text-muted hover:text-cinnamon transition-colors">
                  Woody Scents
                </Link>
              </li>
              <li>
                <Link href="/products?category=resin" className="text-muted hover:text-cinnamon transition-colors">
                  Pure Resins
                </Link>
              </li>
              <li>
                <Link href="/products?featured=true" className="text-muted hover:text-cinnamon transition-colors">
                  Featured
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-cinnamon mb-4">Stay Connected</h3>
            <p className="text-muted mb-4">
              Subscribe to receive updates on new scents, special offers, and wellness tips.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="w-full bg-cinnamon text-white px-4 py-2 rounded-lg hover:bg-[#4B1E1E] transition-colors font-medium"
              >
                Subscribe
              </button>
              {isSubscribed && (
                <p className="text-sm text-sage font-medium">
                  Thank you for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted text-sm">
              © {new Date().getFullYear()} Raghu rash. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted">
              <Link href="/shipping" className="hover:text-cinnamon transition-colors">
                Shipping
              </Link>
              <Link href="/returns" className="hover:text-cinnamon transition-colors">
                Returns
              </Link>
              <Link href="/privacy" className="hover:text-cinnamon transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-cinnamon transition-colors">
                Terms of Service
              </Link>
            </div>
            <div className="text-sm text-muted">
              GSTIN: 27AAAPC1234C1ZV
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
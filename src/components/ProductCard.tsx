'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Product } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/hooks/useCart';

interface ProductCardProps {
  product: Product;
  showQuickView?: boolean;
  className?: string;
}

export function ProductCard({ product, showQuickView = true, className }: ProductCardProps) {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart, isInCart, getItemQuantity } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product.id, 1);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // TODO: Implement quick view modal
    console.log('Quick view for', product.name);
  };

  const inCart = isInCart(product.id);
  const cartQuantity = getItemQuantity(product.id);

  return (
    <div
      className={`group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-beige/50">
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={`${product.name} agarbatti box, ${product.quantity} sticks, ₹${product.price}`}
            fill
            className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
              isImageLoading ? 'blur-sm' : ''
            }`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onLoad={() => setIsImageLoading(false)}
            priority={product.featured}
          />
        </Link>

        {/* Quick View Button */}
        {showQuickView && (
          <button
            onClick={handleQuickView}
            className={`absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all duration-200 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
            aria-label={`Quick view ${product.name}`}
          >
            <svg
              className="w-4 h-4 text-cinnamon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </button>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <Badge variant={product.category}>
            {product.category}
          </Badge>
        </div>

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="bg-white px-4 py-2 rounded-lg font-semibold text-gray-800">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        {/* Product Name */}
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-semibold text-cinnamon text-lg hover:text-sage transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>

        {/* Scent Notes */}
        <div className="flex flex-wrap gap-1">
          {product.scentNotes.slice(0, 3).map((note, index) => (
            <span
              key={index}
              className="text-xs text-muted bg-beige/50 px-2 py-1 rounded-full"
            >
              {note}
            </span>
          ))}
        </div>

        {/* Product Details */}
        <div className="flex items-center justify-between text-sm text-muted">
          <span>{product.quantity} sticks</span>
          <span>Burns {product.burnTime}</span>
        </div>

        {/* Price and Cart Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="space-y-1">
            <p className="text-xl font-bold text-cinnamon">
              ₹{product.price}
            </p>
            {inCart && (
              <p className="text-xs text-sage font-medium">
                {cartQuantity} in cart
              </p>
            )}
          </div>

          <Button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            size="sm"
            variant={inCart ? "outline" : "primary"}
            className="min-w-[100px]"
          >
            {inCart ? (
              <>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                In Cart
              </>
            ) : (
              <>
                <svg
                  className="w-4 h-4"
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
                Add to Cart
              </>
            )}
          </Button>
        </div>

        {/* Ingredients Preview */}
        <div className="text-xs text-muted">
          <span className="font-medium">Ingredients:</span> {product.ingredients.slice(0, 2).join(', ')}
          {product.ingredients.length > 2 && ` +${product.ingredients.length - 2} more`}
        </div>
      </div>
    </div>
  );
}
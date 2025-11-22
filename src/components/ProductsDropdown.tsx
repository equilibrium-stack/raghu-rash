import Link from 'next/link';
import Image from 'next/image';
import { categories, getFeaturedProducts } from '@/data/products';
import { Badge } from '@/components/ui/Badge';

interface ProductsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProductsDropdown({ isOpen, onClose }: ProductsDropdownProps) {
  const featuredProducts = getFeaturedProducts().slice(0, 3);

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 mt-2 w-screen max-w-4xl bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Categories Section */}
          <div>
            <h3 className="font-semibold text-cinnamon mb-4">Categories</h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/products?category=${category.slug}`}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-beige/50 transition-colors group"
                    onClick={onClose}
                  >
                    <div className="w-4 h-4 rounded-full bg-beige/50" />
                    <div>
                      <p className="font-medium text-gray-900 group-hover:text-cinnamon transition-colors">
                        {category.name}
                      </p>
                      <p className="text-sm text-muted">{category.description}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            {/* View All Link */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link
                href="/products"
                className="flex items-center justify-between w-full p-3 rounded-lg bg-cinnamon text-white hover:bg-[#4B1E1E] transition-colors group"
                onClick={onClose}
              >
                <span className="font-medium">View All Products</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Featured Products Section */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-cinnamon mb-4">Featured Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="group"
                  onClick={onClose}
                >
                  <div className="bg-beige/30 rounded-lg p-3 hover:bg-beige/50 transition-colors">
                    {/* Product Image */}
                    <div className="relative aspect-square mb-3 overflow-hidden rounded-lg bg-beige/50">
                      <Image
                        src={product.images[0]}
                        alt={`${product.name} agarbatti`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900 group-hover:text-cinnamon transition-colors line-clamp-1">
                          {product.name}
                        </h4>
                        <Badge variant={product.category} className="text-xs">
                          {product.category}
                        </Badge>
                      </div>

                      <div className="text-xs text-muted space-y-1">
                        <p>{product.quantity} sticks • Burns {product.burnTime}</p>
                        <p className="line-clamp-1">
                          {product.scentNotes.join(' • ')}
                        </p>
                      </div>

                      <p className="font-semibold text-cinnamon">₹{product.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
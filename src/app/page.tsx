'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ProductGrid } from '@/components/ProductGrid';
import { getFeaturedProducts } from '@/data/products';

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gradient-to-br from-beige/50 to-sage/30" />
            <Image
              src="/images/hero/company-photo.jpg"
              alt="Raghu rash company photo — handcrafted agarbatti production"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Raghu rash
              <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 font-normal">
                Handcrafted Perfumed Agarbatti
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Natural ingredients. Timeless scents. Rituals restored.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white/20" href="/products">
                Shop Bestsellers
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white/20" href="#about">
                About Raghu rash
              </Button>
            </div>
          </div>
        </section>

        {/* Why Raghu Rash Section */}
        <section id="about" className="py-16 md:py-24 bg-beige/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-cinnamon mb-4">
                Why Raghu rash?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <p className="text-lg text-muted leading-relaxed">
                    For over three generations, Raghu rash has been dedicated to the art of traditional agarbatti making.
                    Our handcrafted incense sticks are created using time-honored techniques passed down through our family,
                    ensuring each bundle carries the essence of authentic Indian craftsmanship.
                  </p>
                  <p className="text-lg text-muted leading-relaxed">
                    We source only the finest natural ingredients—premium frankincense from Somalia,
                    authentic sandalwood from sustainable forests, and the purest floral blends from local gardens.
                    Every batch is small-batch produced to maintain the highest quality and potency.
                  </p>
                  <blockquote className="border-l-4 border-sage pl-4 italic">
                    <p className="text-lg text-muted">
                      "We don't just make incense; we preserve traditions and create moments of peace in your daily life."
                    </p>
                    <footer className="mt-2 text-cinnamon font-semibold">
                      — Abhishek Chakravarti, Founder
                    </footer>
                  </blockquote>
                </div>
              </div>

              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-sage/20 to-cinnamon/20 rounded-xl" />
                <Image
                  src="/images/founder/abhishek-chakravarti.jpg"
                  alt="Abhishek Chakravarti, founder of Raghu rash"
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-cinnamon mb-4">
                Featured Products
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Discover our most loved scents, handcrafted with care and designed to transform your space.
              </p>
            </div>

            <ProductGrid products={featuredProducts} />

            <div className="text-center mt-12">
              <Button variant="outline" size="lg" href="/products">
                View All Products
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-beige/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-cinnamon mb-4">
                Benefits of Our Agarbatti
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-cinnamon mb-2">Aromatherapy</h3>
                <p className="text-muted">
                  Our natural scents promote relaxation, reduce stress, and create a peaceful atmosphere for meditation and daily wellness.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-cinnamon mb-2">100% Natural</h3>
                <p className="text-muted">
                  Made with pure ingredients, essential oils, and natural resins. No synthetic fragrances, chemicals, or harmful additives.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-cinnamon mb-2">Long-Burning</h3>
                <p className="text-muted">
                  Each stick burns for 6-10 hours, providing lasting fragrance and value. Slow-burning formula ensures consistent scent release.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-cinnamon mb-4">
                What Our Customers Say
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-muted mb-4">
                  "The Sandalwood Calm is absolutely divine! It creates such a peaceful atmosphere for my evening meditation. The quality is exceptional."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-3" />
                  <div>
                    <p className="font-semibold text-cinnamon">Priya Sharma</p>
                    <p className="text-sm text-muted">Verified Customer</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-muted mb-4">
                  "I've tried many incense brands, but Raghu rash stands out. The Rose Oud is luxurious and the burn time is incredible. Highly recommend!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-3" />
                  <div>
                    <p className="font-semibold text-cinnamon">Rahul Patel</p>
                    <p className="text-sm text-muted">Verified Customer</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-muted mb-4">
                  "The natural ingredients make such a difference. No artificial smell, just pure, authentic fragrances that transform my home."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-3" />
                  <div>
                    <p className="font-semibold text-cinnamon">Anita Reddy</p>
                    <p className="text-sm text-muted">Verified Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subscription & Gift Boxes Section */}
        <section className="py-16 md:py-24 bg-beige/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-cinnamon mb-4">
                Perfect Gifts & Subscriptions
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-sage/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-cinnamon mb-2">Monthly Scent Delivery</h3>
                <p className="text-muted mb-4">
                  Discover new scents every month with our subscription service.
                  Carefully curated selection delivered to your doorstep.
                </p>
                <Button className="w-full">Subscribe & Save</Button>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-cinnamon/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-cinnamon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-cinnamon mb-2">Gift Boxes</h3>
                <p className="text-muted mb-4">
                  Beautifully packaged gift boxes perfect for any occasion.
                  Premium collections presented in elegant, sustainable packaging.
                </p>
                <Button variant="outline" className="w-full">Buy Gift Box</Button>
              </div>
            </div>
          </div>
        </section>

        {/* About/Craft Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-cinnamon mb-4">
                Our Craft & Values
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🙏</span>
                </div>
                <h3 className="text-lg font-semibold text-cinnamon mb-2">Traditional Methods</h3>
                <p className="text-muted text-sm">
                  Time-honored techniques passed down through generations
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="text-lg font-semibold text-cinnamon mb-2">Sustainable Sourcing</h3>
                <p className="text-muted text-sm">
                  Ethically sourced ingredients from sustainable suppliers
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👐</span>
                </div>
                <h3 className="text-lg font-semibold text-cinnamon mb-2">Handcrafted</h3>
                <p className="text-muted text-sm">
                  Each stick carefully hand-rolled by skilled artisans
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-lg font-semibold text-cinnamon mb-2">Quality Promise</h3>
                <p className="text-muted text-sm">
                  Rigorous quality control ensures the finest products
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Store Info Section */}
        <section className="py-16 md:py-24 bg-beige/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-cinnamon mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Have questions about our products or want to learn more about our craft? We'd love to hear from you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-cinnamon mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-cinnamon mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-cinnamon mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"
                      placeholder="Tell us how we can help you..."
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-cinnamon mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-muted">hello@raghu-rash.com</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-muted">+91 98765 43210</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-muted">Mumbai, Maharashtra, India</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-cinnamon mb-4">Follow Us</h3>
                  <a
                    href="https://instagram.com/raghu-rash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-muted hover:text-cinnamon transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                      <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998z"/>
                      <circle cx="18.406" cy="5.594" r="1.44"/>
                    </svg>
                    <span>@raghu-rash</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}

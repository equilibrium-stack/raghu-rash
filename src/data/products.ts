import { Product, Category } from '@/types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Floral',
    slug: 'floral',
    description: 'Delicate floral scents for peaceful moments',
    color: 'floral'
  },
  {
    id: '2',
    name: 'Wood',
    slug: 'wood',
    description: 'Rich woody aromas for grounding and meditation',
    color: 'wood'
  },
  {
    id: '3',
    name: 'Resin',
    slug: 'resin',
    description: 'Pure resin fragrances for purification rituals',
    color: 'resin'
  }
];

export const products: Product[] = [
  {
    id: '1',
    slug: 'sandalwood-calm',
    name: 'Sandalwood Calm',
    category: 'wood',
    price: 250,
    images: [
      '/images/products/sandalwood-calm-1.jpg',
      '/images/products/sandalwood-calm-2.jpg'
    ],
    description: 'Experience tranquility with our premium Sandalwood Calm agarbatti. Handcrafted using traditional methods and the finest sandalwood, these incense sticks create a serene atmosphere perfect for meditation and relaxation.',
    scentNotes: ['sandalwood', 'amber', 'cedar'],
    ingredients: ['Natural sandalwood oil', 'cedar essential oil', 'amber resin', 'hand-rolled bamboo stick'],
    burnTime: '6-8 hours',
    quantity: 50,
    featured: true,
    inStock: true
  },
  {
    id: '2',
    slug: 'rose-oud',
    name: 'Rose Oud',
    category: 'floral',
    price: 300,
    images: [
      '/images/products/rose-oud-1.jpg',
      '/images/products/rose-oud-2.jpg'
    ],
    description: 'A luxurious blend of delicate rose and exotic oud that creates an atmosphere of romance and sophistication. Perfect for special occasions and evening rituals.',
    scentNotes: ['rose', 'oud', 'jasmine'],
    ingredients: ['Rose absolute', 'oud essential oil', 'jasmine essential oil', 'natural resins', 'hand-rolled bamboo stick'],
    burnTime: '5-7 hours',
    quantity: 50,
    featured: true,
    inStock: true
  },
  {
    id: '3',
    slug: 'tulsi-lemongrass',
    name: 'Tulsi & Lemongrass',
    category: 'floral',
    price: 220,
    images: [
      '/images/products/tulsi-lemongrass-1.jpg',
      '/images/products/tulsi-lemongrass-2.jpg'
    ],
    description: 'Revitalize your space with the fresh, herbal aroma of tulsi and lemongrass. This purifying blend is perfect for morning rituals and creating a positive environment.',
    scentNotes: ['tulsi', 'lemongrass', 'fresh herbal'],
    ingredients: ['Tulsi essential oil', 'lemongrass essential oil', 'natural herbs', 'hand-rolled bamboo stick'],
    burnTime: '4-6 hours',
    quantity: 50,
    featured: true,
    inStock: true
  },
  {
    id: '4',
    slug: 'frankincense-pure',
    name: 'Frankincense Pure',
    category: 'resin',
    price: 280,
    images: [
      '/images/products/frankincense-pure-1.jpg',
      '/images/products/frankincense-pure-2.jpg'
    ],
    description: 'Pure frankincense resin sourced from the finest suppliers. This sacred aroma has been used for centuries in spiritual practices and healing rituals.',
    scentNotes: ['frankincense', 'citrus', 'spicy'],
    ingredients: ['Pure frankincense resin', 'citrus essential oils', 'spice notes', 'hand-rolled bamboo stick'],
    burnTime: '7-9 hours',
    quantity: 50,
    featured: false,
    inStock: true
  },
  {
    id: '5',
    slug: 'patchouli-earth',
    name: 'Patchouli Earth',
    category: 'wood',
    price: 260,
    images: [
      '/images/products/patchouli-earth-1.jpg',
      '/images/products/patchouli-earth-2.jpg'
    ],
    description: 'Ground yourself with the earthy, deep aroma of patchouli. Perfect for root chakra work, meditation, and creating a sense of stability.',
    scentNotes: ['patchouli', 'earth', 'moss'],
    ingredients: ['Patchouli essential oil', 'moss extract', 'earthy resins', 'hand-rolled bamboo stick'],
    burnTime: '6-8 hours',
    quantity: 50,
    featured: false,
    inStock: true
  },
  {
    id: '6',
    slug: 'lavender-dreams',
    name: 'Lavender Dreams',
    category: 'floral',
    price: 240,
    images: [
      '/images/products/lavender-dreams-1.jpg',
      '/images/products/lavender-dreams-2.jpg'
    ],
    description: 'Drift into peaceful slumber with our calming lavender blend. Perfect for bedtime rituals and creating a tranquil atmosphere for rest.',
    scentNotes: ['lavender', 'chamomile', 'vanilla'],
    ingredients: ['Lavender essential oil', 'chamomile extract', 'vanilla absolute', 'hand-rolled bamboo stick'],
    burnTime: '5-7 hours',
    quantity: 50,
    featured: false,
    inStock: true
  },
  {
    id: '7',
    slug: 'myrrh-sacred',
    name: 'Myrrh Sacred',
    category: 'resin',
    price: 320,
    images: [
      '/images/products/myrrh-sacred-1.jpg',
      '/images/products/myrrh-sacred-2.jpg'
    ],
    description: 'Sacred myrrh resin that has been used in ceremonial practices for thousands of years. Creates a deeply meditative and purifying atmosphere.',
    scentNotes: ['myrrh', 'balsamic', 'warm spice'],
    ingredients: ['Pure myrrh resin', 'balsamic oils', 'warm spices', 'hand-rolled bamboo stick'],
    burnTime: '8-10 hours',
    quantity: 50,
    featured: false,
    inStock: true
  },
  {
    id: '8',
    slug: 'cinnamon-spice',
    name: 'Cinnamon Spice',
    category: 'wood',
    price: 230,
    images: [
      '/images/products/cinnamon-spice-1.jpg',
      '/images/products/cinnamon-spice-2.jpg'
    ],
    description: 'Warm and inviting cinnamon spice that creates a cozy atmosphere. Perfect for autumn evenings and festive celebrations.',
    scentNotes: ['cinnamon', 'clove', 'nutmeg'],
    ingredients: ['Cinnamon essential oil', 'clove extract', 'nutmeg absolute', 'hand-rolled bamboo stick'],
    burnTime: '4-6 hours',
    quantity: 50,
    featured: false,
    inStock: true
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}
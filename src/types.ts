export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  benefits: string[];
  ingredients: string[];
  nutrition: Record<string, string>;
}

export const PRODUCTS: Product[] = [
  {
    id: 'kinnow-medallions',
    name: 'Golden Kinnow Medallions',
    price: 45.00,
    description: 'Sun-cured citrus slices with a perfect balance of sweetness and tang. Hand-picked from the finest orchards of Pakistan.',
    image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=800',
    category: 'Citrus',
    benefits: ['100% Organic', 'No Added Sugar', 'Rich in Vitamin C', 'Solar Dehydrated'],
    ingredients: ['Organic Kinnow Oranges'],
    nutrition: {
      'Calories': '45 kcal',
      'Vitamin C': '85% DV',
      'Fiber': '2g',
      'Sugars': '8g (Natural)'
    }
  },
  {
    id: 'ruby-apple-crisps',
    name: 'Ruby Apple Crisps',
    price: 38.00,
    description: 'Thinly sliced organic apples, dehydrated to preserve their natural crunch and intense floral sweetness.',
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&q=80&w=800',
    category: 'Pome',
    benefits: ['High Fiber', 'Antioxidant Rich', 'Perfect Snack', 'Eco-Friendly'],
    ingredients: ['Organic Ruby Apples'],
    nutrition: {
      'Calories': '52 kcal',
      'Fiber': '3g',
      'Potassium': '10% DV',
      'Sugars': '10g (Natural)'
    }
  },
  {
    id: 'velvet-mango-strips',
    name: 'Velvet Mango Strips',
    price: 55.00,
    description: 'Premium Chaunsa mangoes, sliced and solar-dried to a chewy, honey-like perfection.',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=800',
    category: 'Tropical',
    benefits: ['Natural Energy', 'Beta-Carotene', 'No Preservatives', 'Luxury Snack'],
    ingredients: ['Organic Chaunsa Mangoes'],
    nutrition: {
      'Calories': '70 kcal',
      'Vitamin A': '25% DV',
      'Fiber': '1.5g',
      'Sugars': '14g (Natural)'
    }
  }
];

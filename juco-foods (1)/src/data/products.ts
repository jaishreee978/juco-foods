export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  description: string;
}

export const categories = [
  { id: 'fruit-juices', name: 'Fruit Juices', icon: '🍹', description: 'Freshly squeezed natural fruit juices.' },
  { id: 'milk-shakes', name: 'Milk Shakes', icon: '🥤', description: 'Creamy and delicious milkshakes.' },
  { id: 'fruit-salads', name: 'Fruit Salads', icon: '🥗', description: 'Fresh seasonal fruit bowls.' },
  { id: 'coconut-shakes', name: 'Coconut Shakes', icon: '🥥', description: 'Refreshing coconut-based smoothies.' },
  { id: 'coconut-products', name: 'Coconut Products', icon: '🌴', description: 'Pure coconut water and treats.' },
];

export const products: Product[] = [
  // Fruit Juices
  { id: 1, name: "Orange Juice", category: "Fruit Juices", price: 80, rating: 4.8, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=500&q=80", description: "Freshly squeezed oranges." },
  { id: 2, name: "Apple Juice", category: "Fruit Juices", price: 90, rating: 4.7, image: "https://images.unsplash.com/photo-1568901839119-631418a3910d?auto=format&fit=crop&w=500&q=80", description: "Pure apple goodness." },
  { id: 3, name: "Mango Juice", category: "Fruit Juices", price: 100, rating: 4.9, image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=500&q=80", description: "King of fruits in a glass." },
  { id: 4, name: "Pineapple Juice", category: "Fruit Juices", price: 85, rating: 4.6, image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=500&q=80", description: "Tropical pineapple delight." },
  { id: 5, name: "Watermelon Juice", category: "Fruit Juices", price: 75, rating: 4.5, image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=500&q=80", description: "Ultimate summer refresher." },

  // Milk Shakes
  { id: 6, name: "Chocolate Milkshake", category: "Milk Shakes", price: 120, rating: 4.9, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80", description: "Rich chocolatey treat." },
  { id: 7, name: "Strawberry Milkshake", category: "Milk Shakes", price: 110, rating: 4.8, image: "https://images.unsplash.com/photo-1553173154-5622b1af05ff?auto=format&fit=crop&w=500&q=80", description: "Fresh strawberry blend." },
  { id: 8, name: "Vanilla Milkshake", category: "Milk Shakes", price: 100, rating: 4.7, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80", description: "Classic vanilla cream." },
  { id: 9, name: "Oreo Milkshake", category: "Milk Shakes", price: 130, rating: 5.0, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80", description: "Crunchy Oreo delight." },

  // Fruit Salads
  { id: 10, name: "Mixed Fruit Salad", category: "Fruit Salads", price: 150, rating: 4.8, image: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=500&q=80", description: "Assorted seasonal fruits." },
  { id: 11, name: "Tropical Fruit Bowl", category: "Fruit Salads", price: 180, rating: 4.9, image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=500&q=80", description: "Exotic tropical mix." },
  { id: 12, name: "Seasonal Fruit Mix", category: "Fruit Salads", price: 140, rating: 4.7, image: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=500&q=80", description: "Fresh from the farm." },

  // Coconut Shakes
  { id: 13, name: "Tender Coconut Shake", category: "Coconut Shakes", price: 110, rating: 4.9, image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=500&q=80", description: "Creamy tender coconut." },
  { id: 14, name: "Coconut Smoothie", category: "Coconut Shakes", price: 120, rating: 4.8, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80", description: "Nutritious coconut blend." },

  // Coconut Products
  { id: 15, name: "Tender Coconut Water", category: "Coconut Products", price: 50, rating: 5.0, image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=500&q=80", description: "Pure natural hydration." },
  { id: 16, name: "Coconut Ice Cream", category: "Coconut Products", price: 90, rating: 4.9, image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=500&q=80", description: "Creamy coconut treat." },
  { id: 17, name: "Coconut Chips", category: "Coconut Products", price: 60, rating: 4.7, image: "https://images.unsplash.com/photo-1622484211148-716598e04141?auto=format&fit=crop&w=500&q=80", description: "Crunchy coconut snacks." },
];

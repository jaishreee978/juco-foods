import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { products, categories } from '../data/products';
import ProductCard from './ProductCard';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-green font-bold uppercase tracking-widest text-sm">Our Menu</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            Freshly Prepared <span className="text-juice-orange">For You</span>
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
              activeCategory === 'All' 
                ? 'bg-primary-green text-white shadow-lg' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                activeCategory === cat.name 
                  ? 'bg-primary-green text-white shadow-lg' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

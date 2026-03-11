import React from 'react';
import { motion } from 'motion/react';
import { Star, Plus, Heart } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="glass-card rounded-3xl overflow-hidden group transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4">
          <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-400 hover:text-red-500 transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-primary-green text-white text-xs font-bold rounded-full">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-bold text-slate-700">{product.rating}</span>
          </div>
        </div>
        
        <p className="text-slate-500 text-sm mb-6 line-clamp-2">
          {product.description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-leaf-green">₹{product.price}</span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => addToCart(product)}
            className="p-3 bg-juice-orange text-white rounded-2xl shadow-lg shadow-orange-200 hover:bg-orange-500 transition-colors"
          >
            <Plus className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;

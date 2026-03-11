import { motion } from 'motion/react';
import { categories } from '../data/products';

export default function Categories() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-green font-bold uppercase tracking-widest text-sm"
          >
            Categories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mt-4"
          >
            Explore Our <span className="text-juice-orange">Variety</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-3xl text-center flex flex-col items-center group cursor-pointer"
            >
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{category.name}</h3>
              <p className="text-xs text-slate-500">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

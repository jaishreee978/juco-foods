import { motion } from 'motion/react';
import Menu from '../components/Menu';

export default function MenuPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <div className="bg-primary-green/5 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">Our Menu</h1>
          <p className="text-slate-600 max-w-xl mx-auto">
            Browse our full collection of fresh, natural beverages delivered straight to your door.
          </p>
        </div>
      </div>
      <Menu />
    </motion.div>
  );
}

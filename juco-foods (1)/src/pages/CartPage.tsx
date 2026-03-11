import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-24 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto glass-card p-12 rounded-[3rem]"
        >
          <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-12 h-12 text-slate-300" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Your cart is empty</h2>
          <p className="text-slate-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
          <Link to="/menu" className="btn-gradient inline-flex items-center gap-2">
            Browse Menu <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-12">Shopping Cart ({totalItems})</h1>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="glass-card p-6 rounded-3xl flex flex-col sm:flex-row items-center gap-6"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-2xl object-cover"
                />
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-xl font-bold text-slate-900">{item.name}</h3>
                  <p className="text-primary-green font-bold">₹{item.price}</p>
                </div>
                
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-2xl">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-2 hover:bg-white rounded-xl transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-bold w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 hover:bg-white rounded-xl transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-right min-w-[100px]">
                  <p className="text-xl font-bold text-slate-900">₹{item.price * item.quantity}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600 p-2 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="glass-card p-8 rounded-[2.5rem] sticky top-32">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Order Summary</h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>₹{totalPrice}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Delivery</span>
                  <span className="text-primary-green font-bold">FREE</span>
                </div>
                <div className="pt-4 border-t border-slate-100 flex justify-between text-2xl font-bold text-slate-900">
                  <span>Total</span>
                  <span>₹{totalPrice}</span>
                </div>
              </div>
              <button className="w-full btn-gradient py-5 text-lg">
                Proceed to Checkout
              </button>
              <p className="text-center text-slate-400 text-xs mt-6">
                Secure payment powered by Juco Pay
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { motion } from 'motion/react';
import { ShoppingBag, Zap, Heart } from 'lucide-react';

const offers = [
  {
    id: 1,
    title: 'Buy 1 Get 1 Juice',
    desc: 'On all fruit juices every Monday.',
    color: 'bg-orange-500',
    icon: <ShoppingBag className="w-8 h-8" />,
  },
  {
    id: 2,
    title: 'Summer Special',
    desc: '20% off on all smoothies this week.',
    color: 'bg-green-500',
    icon: <Zap className="w-8 h-8" />,
  },
  {
    id: 3,
    title: 'Coconut Health',
    desc: 'Free coconut chips with every shake.',
    color: 'bg-blue-500',
    icon: <Heart className="w-8 h-8" />,
  },
];

export default function Offers() {
  return (
    <section id="offers" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-green font-bold uppercase tracking-widest text-sm">Special Offers</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            Exclusive <span className="text-juice-orange">Deals</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`${offer.color} p-8 rounded-[2.5rem] text-white relative overflow-hidden group`}
            >
              <div className="relative z-10">
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                  {offer.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                <p className="text-white/80 mb-6">{offer.desc}</p>
                <button className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold text-sm hover:bg-slate-100 transition-colors">
                  Claim Offer
                </button>
              </div>
              
              {/* Decorative circles */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute -left-10 -top-10 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

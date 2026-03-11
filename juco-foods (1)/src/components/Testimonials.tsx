import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Fitness Enthusiast',
    comment: 'The tender coconut water is a game changer for my post-workout recovery. So fresh and natural!',
    rating: 5,
    image: 'https://picsum.photos/seed/sarah/100/100',
  },
  {
    name: 'Michael Chen',
    role: 'Food Blogger',
    comment: 'I have tried many mango juices, but Juco Foods has that authentic farm-fresh taste that is hard to find.',
    rating: 5,
    image: 'https://picsum.photos/seed/michael/100/100',
  },
  {
    name: 'Emily Davis',
    role: 'Yoga Instructor',
    comment: 'The coconut smoothie is my absolute favorite. It is creamy, delicious, and I love that it has no preservatives.',
    rating: 4,
    image: 'https://picsum.photos/seed/emily/100/100',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-green-50/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-linear-to-b from-white to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary-green font-bold uppercase tracking-widest text-sm">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            What Our <span className="text-juice-orange">Customers Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-[2rem] shadow-xl shadow-green-900/5 relative group"
            >
              <div className="absolute -top-4 -right-4 bg-juice-orange p-3 rounded-2xl shadow-lg group-hover:rotate-12 transition-transform">
                <Quote className="text-white w-6 h-6" />
              </div>
              
              <div className="flex items-center gap-1 text-yellow-500 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <p className="text-slate-600 italic mb-8 leading-relaxed">
                "{item.comment}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full border-2 border-primary-green/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-lg font-bold text-slate-900">{item.name}</h4>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

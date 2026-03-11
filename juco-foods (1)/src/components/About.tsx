import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const features = [
  { title: '100% Natural', desc: 'No artificial flavors or colors.' },
  { title: 'Farm Fresh', desc: 'Sourced directly from organic farms.' },
  { title: 'No Preservatives', desc: 'Pure goodness in every bottle.' },
];

export default function About() {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=800&q=80"
                alt="About Juco Foods"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-juice-orange/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-primary-green/20 rounded-full blur-3xl -z-10" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100"
            >
              <p className="text-4xl font-bold text-leaf-green">10+</p>
              <p className="text-sm text-slate-500 font-medium">Years of Freshness</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-juice-orange font-bold uppercase tracking-widest text-sm">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-8">
              Juco Foods Delivers <br />
              <span className="text-primary-green">Nature's Best</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              “Juco Foods delivers fresh coconut and fruit beverages directly from farms to your glass.” We believe in the power of natural ingredients to nourish the body and soul. Our journey started with a simple mission: to provide the purest, most refreshing drinks without compromising on quality.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 bg-green-100 p-1 rounded-full">
                    <CheckCircle2 className="w-6 h-6 text-primary-green" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">{feature.title}</h4>
                    <p className="text-slate-500">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 btn-gradient"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

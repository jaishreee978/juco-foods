import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-green/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-juice-orange/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 bg-green-100 text-leaf-green text-sm font-bold rounded-full mb-6"
          >
            100% Natural & Farm Fresh
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
            Fresh Juices & <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-green to-juice-orange">
              Coconut Goodness
            </span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            Experience the pure taste of nature with our handpicked fruit juices and premium coconut products. Natural energy in every sip.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gradient flex items-center gap-2"
            >
              Shop Now <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full border-2 border-slate-200 font-semibold text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-2"
            >
              <div className="bg-juice-orange p-1 rounded-full">
                <Play className="w-3 h-3 text-white fill-current" />
              </div>
              Explore Menu
            </motion.button>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/100/100`}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <p className="text-sm text-slate-500 font-medium">
              <span className="text-leaf-green font-bold">2k+</span> Happy Customers
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative"
        >
          <div className="relative z-10">
            <motion.img
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              src="https://picsum.photos/seed/juice-bottle/600/800"
              alt="Fresh Juice"
              className="w-full max-w-md mx-auto rounded-3xl shadow-2xl rotate-3"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-10 -left-10 glass-card p-4 rounded-2xl shadow-xl z-20"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Leaf className="text-primary-green w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Freshness</p>
                <p className="text-sm font-bold text-slate-900">100% Organic</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Leaf({ className, ...props }: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C10.5 14.5 12 14 15 12" />
    </svg>
  );
}

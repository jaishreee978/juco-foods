import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-[3rem] overflow-hidden shadow-2xl border-none">
          <div className="grid lg:grid-cols-2">
            {/* Contact Info */}
            <div className="bg-linear-to-br from-primary-green to-leaf-green p-12 lg:p-20 text-white">
              <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
              <p className="text-green-50 mb-12 text-lg">
                Have questions or want to place a bulk order? We'd love to hear from you.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-green-100 text-sm font-bold uppercase tracking-wider">Call Us</p>
                    <p className="text-xl font-semibold">+1 (234) 567-890</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-green-100 text-sm font-bold uppercase tracking-wider">Email Us</p>
                    <p className="text-xl font-semibold">hello@jucofoods.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-green-100 text-sm font-bold uppercase tracking-wider">Visit Us</p>
                    <p className="text-xl font-semibold">Juco Foods – Fresh Coconut Bar, Tropical Street</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-16 border-t border-white/20">
                <p className="text-green-100 mb-4 font-bold uppercase tracking-widest text-xs">Follow Us</p>
                <div className="flex gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/40 transition-colors cursor-pointer">
                      <div className="w-5 h-5 bg-white rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-12 lg:p-20 bg-white">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-green/20 focus:border-primary-green transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-green/20 focus:border-primary-green transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-green/20 focus:border-primary-green transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us more..."
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-green/20 focus:border-primary-green transition-all resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-orange flex items-center justify-center gap-3 py-5"
                >
                  Send Message <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

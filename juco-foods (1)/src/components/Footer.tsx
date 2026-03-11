import React from 'react';
import { Leaf, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary-green p-2 rounded-xl">
                <Leaf className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Juco <span className="text-juice-orange">Foods</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Delivering the freshest coconut and fruit beverages directly from organic farms to your doorstep. Pure, natural, and delicious.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Instagram />} />
              <SocialIcon icon={<Twitter />} />
              <SocialIcon icon={<Facebook />} />
              <SocialIcon icon={<Youtube />} />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/#products">Products</FooterLink>
              <FooterLink to="/#about">About Us</FooterLink>
              <FooterLink to="/#contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Our Products</h4>
            <ul className="space-y-4">
              <FooterLink to="/#products">Coconut Water</FooterLink>
              <FooterLink to="/#products">Mango Juice</FooterLink>
              <FooterLink to="/#products">Pineapple Juice</FooterLink>
              <FooterLink to="/#products">Coconut Milk</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-6">Subscribe to get special offers and fresh updates.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-slate-800 border border-slate-700 rounded-full py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary-green transition-all"
              />
              <button className="absolute right-2 top-2 bg-primary-green text-white px-6 py-2 rounded-full font-bold hover:bg-leaf-green transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Juco Foods. All rights reserved. Designed with ❤️ for nature.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link to={to} className="text-slate-400 hover:text-primary-green transition-colors">
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-primary-green transition-all cursor-pointer group">
      <div className="text-slate-400 group-hover:text-white transition-colors">
        {icon}
      </div>
    </div>
  );
}

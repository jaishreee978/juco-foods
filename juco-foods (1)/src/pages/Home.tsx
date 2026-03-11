import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Menu from '../components/Menu';
import About from '../components/About';
import Offers from '../components/Offers';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Categories />
      <Offers />
      <Menu />
      <About />
      <Testimonials />
      <Contact />
    </motion.div>
  );
}

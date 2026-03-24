import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { ScrollToTop } from './components/ScrollToTop';
import { ExitIntentPopup } from './components/ExitIntentPopup';
import { motion, AnimatePresence } from 'motion/react';

const Footer = () => (
  <footer className="bg-primary text-accent py-20 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-primary font-serif font-bold text-lg">R</span>
            </div>
            <span className="font-serif text-2xl font-bold tracking-wider">REENZ</span>
          </div>
          <p className="text-accent/50 max-w-sm leading-relaxed mb-8">
            Luxury dehydrated organic fruits from the heart of Pakistan. Nature preserved in its purest, most elegant form.
          </p>
          <div className="flex gap-6">
            {['Instagram', 'Facebook', 'LinkedIn'].map(social => (
              <a key={social} href="#" className="text-xs uppercase tracking-widest font-bold text-secondary hover:text-accent transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-accent/60">
            <li><a href="/shop" className="hover:text-secondary transition-colors">Shop All</a></li>
            <li><a href="/gifting" className="hover:text-secondary transition-colors">Gifting</a></li>
            <li><a href="/about" className="hover:text-secondary transition-colors">Our Story</a></li>
            <li><a href="/contact" className="hover:text-secondary transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-6">Newsletter</h4>
          <p className="text-xs text-accent/50 mb-6 uppercase tracking-widest">Join the elite circle</p>
          <div className="flex border-b border-white/20 pb-2">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="bg-transparent flex-1 text-sm focus:outline-none"
            />
            <button className="text-secondary font-bold uppercase tracking-widest text-[10px]">Join</button>
          </div>
        </div>
      </div>
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] uppercase tracking-[0.3em] text-accent/30">
          © 2026 REENZ Organic Origin. All Rights Reserved.
        </p>
        <div className="flex gap-8 text-[10px] uppercase tracking-widest text-accent/30">
          <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <ExitIntentPopup />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/gifting" element={<div className="pt-40 text-center text-4xl font-serif">Gifting Collection Coming Soon</div>} />
                <Route path="/about" element={<div className="pt-40 text-center text-4xl font-serif">Our Story Coming Soon</div>} />
                <Route path="/contact" element={<div className="pt-40 text-center text-4xl font-serif">Contact Us Coming Soon</div>} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

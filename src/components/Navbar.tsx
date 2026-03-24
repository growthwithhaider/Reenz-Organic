import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../CartContext';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Gifting', path: '/gifting' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4',
        isScrolled ? 'bg-primary/90 backdrop-blur-md py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
            <span className="text-primary font-serif font-bold text-xl">R</span>
          </div>
          <div className="flex flex-col">
            <span className={cn("font-serif text-xl font-bold tracking-wider leading-none", isScrolled || location.pathname !== '/' ? "text-accent" : "text-primary")}>REENZ</span>
            <span className={cn("text-[10px] uppercase tracking-[0.2em]", isScrolled || location.pathname !== '/' ? "text-secondary" : "text-primary/70")}>Organic Origin</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm uppercase tracking-widest font-medium transition-colors hover:text-secondary",
                isScrolled || location.pathname !== '/' ? "text-accent" : "text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn("hidden sm:flex items-center gap-2 text-xs uppercase tracking-widest font-bold", isScrolled || location.pathname !== '/' ? "text-secondary" : "text-primary")}
          >
            <Phone size={14} />
            Quick Order
          </a>
          <Link to="/cart" className="relative group">
            <ShoppingBag className={cn("w-6 h-6 transition-colors group-hover:text-secondary", isScrolled || location.pathname !== '/' ? "text-accent" : "text-primary")} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-secondary text-primary text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={cn("w-6 h-6", isScrolled || location.pathname !== '/' ? "text-accent" : "text-primary")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled || location.pathname !== '/' ? "text-accent" : "text-primary")} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-primary border-t border-white/10 p-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-accent text-lg font-serif tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

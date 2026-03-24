import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../types';
import { motion } from 'motion/react';
import { ShoppingBag, Eye } from 'lucide-react';
import { useCart } from '../CartContext';

export const Shop = () => {
  const { addToCart } = useCart();

  return (
    <div className="pt-32 pb-20 bg-accent min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-secondary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Our Collection</span>
            <h1 className="text-5xl md:text-6xl font-serif text-primary">The Pantry of Elegance</h1>
          </div>
          <div className="flex gap-4">
            <select className="bg-transparent border-b border-primary/20 py-2 px-4 text-sm focus:outline-none focus:border-secondary transition-colors">
              <option>All Fruits</option>
              <option>Citrus</option>
              <option>Tropical</option>
              <option>Pome</option>
            </select>
            <select className="bg-transparent border-b border-primary/20 py-2 px-4 text-sm focus:outline-none focus:border-secondary transition-colors">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 luxury-shadow">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary hover:bg-secondary transition-colors"
                  >
                    <ShoppingBag size={20} />
                  </button>
                  <Link 
                    to={`/product/${product.id}`}
                    className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary hover:bg-secondary transition-colors"
                  >
                    <Eye size={20} />
                  </Link>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/80 backdrop-blur-sm text-accent text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-serif text-primary mb-2 group-hover:text-secondary transition-colors">
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                </h3>
                <p className="text-primary/50 text-sm mb-4 line-clamp-2 px-4">{product.description}</p>
                <p className="text-xl font-bold text-primary">${product.price.toFixed(2)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

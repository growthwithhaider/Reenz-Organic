import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../types';
import { motion } from 'motion/react';
import { ShoppingBag, ChevronRight, Star, Shield, Leaf, Truck } from 'lucide-react';
import { useCart } from '../CartContext';

export const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = PRODUCTS.find(p => p.id === id);
  const [activeTab, setActiveTab] = useState('benefits');

  if (!product) return <div className="pt-40 text-center">Product not found</div>;

  return (
    <div className="pt-32 pb-20 bg-accent min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-primary/50 mb-12">
          <Link to="/" className="hover:text-secondary">Home</Link>
          <ChevronRight size={10} />
          <Link to="/shop" className="hover:text-secondary">Shop</Link>
          <ChevronRight size={10} />
          <span className="text-primary">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden luxury-shadow">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-4 gap-4 mt-6">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden border border-primary/10 cursor-pointer hover:border-secondary transition-all">
                  <img 
                    src={product.image} 
                    alt="Thumbnail" 
                    className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-secondary">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <span className="text-[10px] text-primary/50 uppercase tracking-widest">(24 Reviews)</span>
              </div>
              <h1 className="text-5xl font-serif text-primary mb-4">{product.name}</h1>
              <p className="text-3xl font-bold text-primary mb-6">${product.price.toFixed(2)}</p>
              <p className="text-primary/70 text-lg leading-relaxed mb-8">
                {product.description}
              </p>
            </div>

            {/* Tabs */}
            <div className="mb-10">
              <div className="flex border-b border-primary/10 mb-6">
                {['benefits', 'ingredients', 'nutrition'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 px-6 text-[10px] uppercase tracking-widest font-bold transition-all relative ${
                      activeTab === tab ? 'text-primary' : 'text-primary/40 hover:text-primary/60'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary" />
                    )}
                  </button>
                ))}
              </div>
              <div className="min-h-[150px]">
                {activeTab === 'benefits' && (
                  <ul className="grid grid-cols-2 gap-4">
                    {product.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-primary/70">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                {activeTab === 'ingredients' && (
                  <p className="text-sm text-primary/70 leading-relaxed">
                    {product.ingredients.join(', ')}
                  </p>
                )}
                {activeTab === 'nutrition' && (
                  <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                    {Object.entries(product.nutrition).map(([key, val]) => (
                      <div key={key} className="flex justify-between border-b border-primary/5 pb-2">
                        <span className="text-xs text-primary/50 uppercase tracking-widest">{key}</span>
                        <span className="text-xs font-bold text-primary">{val}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-12">
              <button 
                onClick={() => addToCart(product)}
                className="flex-1 bg-primary text-accent py-5 font-bold uppercase tracking-widest text-sm hover:bg-matte-black transition-all luxury-shadow flex items-center justify-center gap-3"
              >
                <ShoppingBag size={18} />
                Add to Cart
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-primary/10">
              <div className="text-center">
                <Shield className="w-6 h-6 text-secondary mx-auto mb-2" />
                <span className="text-[8px] uppercase tracking-widest text-primary/60 block">Secure Checkout</span>
              </div>
              <div className="text-center">
                <Leaf className="w-6 h-6 text-secondary mx-auto mb-2" />
                <span className="text-[8px] uppercase tracking-widest text-primary/60 block">100% Organic</span>
              </div>
              <div className="text-center">
                <Truck className="w-6 h-6 text-secondary mx-auto mb-2" />
                <span className="text-[8px] uppercase tracking-widest text-primary/60 block">Global Shipping</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Sticky Mobile Add to Cart */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full p-4 bg-accent/80 backdrop-blur-md border-t border-primary/5 z-40">
        <button 
          onClick={() => addToCart(product)}
          className="w-full bg-primary text-accent py-4 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 luxury-shadow"
        >
          <ShoppingBag size={18} />
          Add to Cart — ${product.price.toFixed(2)}
        </button>
      </div>
    </div>
  );
};

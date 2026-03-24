import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import { Trash2, Minus, Plus, ArrowRight, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

export const Cart = () => {
  const { cart, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-40 pb-20 text-center bg-accent min-h-screen">
        <div className="max-w-md mx-auto px-6">
          <ShoppingBag size={64} className="mx-auto text-primary/20 mb-8" />
          <h1 className="text-4xl font-serif text-primary mb-6">Your cart is empty</h1>
          <p className="text-primary/60 mb-10">Discover our collection of luxury dehydrated fruits and start your journey of taste.</p>
          <Link to="/shop" className="inline-block px-10 py-4 bg-primary text-accent font-bold uppercase tracking-widest text-sm hover:bg-matte-black transition-all">
            Browse Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-accent min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-serif text-primary mb-16">Your Selection</h1>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-8">
            {cart.map((item) => (
              <motion.div 
                layout
                key={item.id} 
                className="flex gap-6 p-6 bg-white/50 rounded-2xl border border-primary/5"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-serif text-primary mb-1">{item.name}</h3>
                      <p className="text-xs text-primary/50 uppercase tracking-widest">{item.category}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-primary/30 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center border border-primary/10 rounded-full px-3 py-1">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 text-primary/50 hover:text-primary"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 text-primary/50 hover:text-primary"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <p className="text-lg font-bold text-primary">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-primary p-10 rounded-3xl text-accent luxury-shadow sticky top-32">
              <h2 className="text-2xl font-serif mb-8">Summary</h2>
              <div className="space-y-4 mb-8 border-b border-white/10 pb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-accent/60">Subtotal ({totalItems} items)</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-accent/60">Shipping</span>
                  <span className="text-secondary font-bold uppercase tracking-widest text-[10px]">Calculated at checkout</span>
                </div>
              </div>
              <div className="flex justify-between text-xl font-serif mb-10">
                <span>Total</span>
                <span className="text-secondary">${totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full py-5 bg-secondary text-primary font-bold uppercase tracking-widest text-sm hover:bg-accent transition-all flex items-center justify-center gap-3">
                Checkout
                <ArrowRight size={18} />
              </button>
              <p className="text-[10px] text-accent/40 text-center mt-6 uppercase tracking-[0.2em]">
                Secure Payment Powered by REENZ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

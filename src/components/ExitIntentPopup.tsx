import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Gift } from 'lucide-react';

export const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-primary/60 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          className="bg-accent max-w-lg w-full rounded-3xl overflow-hidden luxury-shadow relative"
        >
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-primary/40 hover:text-primary transition-colors"
          >
            <X size={24} />
          </button>
          
          <div className="p-12 text-center">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Gift className="text-secondary w-8 h-8" />
            </div>
            <h2 className="text-3xl font-serif text-primary mb-4">A Gift for Your First Taste</h2>
            <p className="text-primary/60 mb-8">
              Join our elite circle and receive an exclusive <span className="text-primary font-bold">15% discount</span> on your first order of REENZ luxury fruits.
            </p>
            
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-6 py-4 bg-white border border-primary/10 rounded-xl focus:outline-none focus:border-secondary transition-all"
              />
              <button className="w-full py-4 bg-primary text-accent font-bold uppercase tracking-widest text-sm hover:bg-matte-black transition-all">
                Claim My Invitation
              </button>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-[10px] uppercase tracking-widest text-primary/40 hover:text-primary transition-colors"
              >
                No thanks, I prefer full price
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

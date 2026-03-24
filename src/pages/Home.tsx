import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Leaf, ShieldCheck, Recycle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../types';

export const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-primary overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=2000" 
            alt="Orchard" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-primary"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-secondary uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Organic Origin</span>
            <h1 className="text-accent text-5xl md:text-8xl font-serif mb-8 leading-tight">
              Nature, Preserved <br /> <span className="italic">in Perfection.</span>
            </h1>
            <p className="text-accent/70 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto tracking-wide">
              Luxury Dehydrated Fruits. Pure. Elegant. Timeless. Experience the essence of the orchard in every bite.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/shop" 
                className="group relative px-10 py-4 bg-secondary text-primary font-bold uppercase tracking-widest text-sm overflow-hidden transition-all hover:pr-12"
              >
                <span className="relative z-10">Shop Now</span>
                <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" size={18} />
              </Link>
              <Link 
                to="/gifting" 
                className="px-10 py-4 border border-accent/30 text-accent font-bold uppercase tracking-widest text-sm hover:bg-accent hover:text-primary transition-all"
              >
                Explore Collection
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Product Preview */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 hidden lg:block w-64 h-80 glass rounded-2xl p-4 luxury-shadow"
        >
          <img 
            src={PRODUCTS[0].image} 
            alt="Product" 
            className="w-full h-48 object-cover rounded-xl mb-4"
            referrerPolicy="no-referrer"
          />
          <h3 className="text-accent font-serif text-lg">{PRODUCTS[0].name}</h3>
          <p className="text-secondary font-bold mt-2">${PRODUCTS[0].price.toFixed(2)}</p>
        </motion.div>
      </section>

      {/* Product Experience (Scroll Transform) */}
      <section className="py-32 bg-accent relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary/50 uppercase tracking-widest text-xs font-bold mb-4 block">The Process</span>
              <h2 className="text-primary text-4xl md:text-6xl font-serif mb-8">From Orchard <br /> to Elegance</h2>
              <p className="text-primary/70 text-lg leading-relaxed mb-8">
                Our Kinnows are hand-picked at peak ripeness, precision-sliced, and solar-dehydrated to lock in every drop of flavor and nutrition. No chemicals, no additives—just pure nature.
              </p>
              <Link to="/about" className="text-primary font-bold uppercase tracking-widest text-sm border-b-2 border-secondary pb-1 hover:text-secondary transition-colors">
                Our Story
              </Link>
            </motion.div>
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-2xl overflow-hidden luxury-shadow"
              >
                <img 
                  src="https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=1000" 
                  alt="Dehydration" 
                  className="w-full h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why REENZ (Trust Building) */}
      <section className="py-32 bg-primary text-accent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Why REENZ?</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: "100% Natural", desc: "Zero chemicals or artificial preservatives." },
              { icon: Clock, title: "Sun-Cured", desc: "Traditional solar dehydration process." },
              { icon: Recycle, title: "Zero Waste", desc: "Sustainable farming and packaging." },
              { icon: ShieldCheck, title: "Long Shelf Life", desc: "Nature preserved for 12 months." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-white/10 hover:border-secondary/50 transition-all group"
              >
                <item.icon className="w-10 h-10 text-secondary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-serif mb-4">{item.title}</h3>
                <p className="text-accent/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Product */}
      <section className="py-32 bg-accent overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative z-10"
              >
                <img 
                  src={PRODUCTS[0].image} 
                  alt="Signature Product" 
                  className="w-full h-[600px] object-cover rounded-3xl luxury-shadow"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/5 rounded-full -z-10 animate-spin-slow"></div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-secondary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Signature Collection</span>
              <h2 className="text-primary text-5xl md:text-7xl font-serif mb-8">{PRODUCTS[0].name}</h2>
              <p className="text-primary/70 text-xl mb-10 leading-relaxed italic">
                "A burst of golden sunshine in every slice. Hand-crafted for the discerning palate."
              </p>
              <div className="flex items-center gap-8 mb-12">
                <span className="text-3xl font-bold text-primary">${PRODUCTS[0].price.toFixed(2)}</span>
                <div className="h-8 w-px bg-primary/20"></div>
                <span className="text-primary/50 text-sm uppercase tracking-widest">Premium Packaging</span>
              </div>
              <Link 
                to={`/product/${PRODUCTS[0].id}`}
                className="inline-block px-12 py-5 bg-primary text-accent font-bold uppercase tracking-widest text-sm hover:bg-matte-black transition-all luxury-shadow"
              >
                Experience the Taste
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Gifting */}
      <section className="py-32 bg-matte-black text-accent relative">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=2000" 
            alt="Gifting" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-6xl font-serif mb-8">The Perfect Gift for Every Occasion</h2>
          <p className="text-accent/70 text-lg mb-12 max-w-2xl mx-auto">
            From corporate tokens to wedding favors, REENZ offers bespoke gifting solutions that reflect your impeccable taste.
          </p>
          <Link 
            to="/gifting" 
            className="px-12 py-5 border-2 border-secondary text-secondary font-bold uppercase tracking-widest text-sm hover:bg-secondary hover:text-primary transition-all"
          >
            Bespoke Gifting
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-accent text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-5xl md:text-7xl font-serif text-primary mb-12">Elevate Your Taste.</h2>
          <Link 
            to="/shop" 
            className="inline-block px-16 py-6 bg-primary text-accent font-bold uppercase tracking-widest text-lg hover:bg-matte-black transition-all luxury-shadow"
          >
            Shop the Collection
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-luxury.png" 
          alt="Louis Vuitton Luxury Perfume" 
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-champagne font-bold tracking-[0.5em] uppercase text-xs mb-6 block bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
            Édition Limitée
          </span>
          <h1 className="text-6xl md:text-8xl font-serif text-cream leading-tight mb-8 tracking-tight">
            LOUIS VUITTON <br />
            <span className="text-champagne font-light italic">Les Extraits</span>
          </h1>
          <p className="text-cream/90 text-lg md:text-xl font-light mb-12 max-w-2xl leading-relaxed font-sans">
            Une odyssée sensorielle au cœur des matières les plus précieuses. Découvrez l&apos;excellence de la haute parfumerie.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-12 py-5 bg-champagne text-charcoal font-bold tracking-widest uppercase text-xs hover:bg-white transition-all duration-500 shadow-[0_10px_40px_rgba(212,175,55,0.3)] hover:scale-105 active:scale-95">
              Acheter Maintenant
            </button>
            <button className="px-12 py-5 border border-white/30 backdrop-blur-md text-white font-bold tracking-widest uppercase text-xs hover:bg-white hover:text-charcoal transition-all duration-500 hover:scale-105 active:scale-95">
              Explorer l&apos;Univers
            </button>
          </div>
        </motion.div>
      </div>

      {/* Luxury Detail */}
      <div className="absolute bottom-12 left-12 hidden lg:flex flex-col gap-4 text-white/40 text-[10px] tracking-[0.3em] uppercase vertical-rl">
        <span>Paris</span>
        <div className="h-20 w-[1px] bg-white/20 mx-auto"></div>
        <span>Grasse</span>
      </div>
    </section>
  );
};

export default Hero;

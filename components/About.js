import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl h-[500px] w-full">
              <Image 
                src="/hero-luxury.png" 
                alt="Brand Story" 
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-champagne/20 rounded-full blur-3xl -z-0"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-charcoal/5 rounded-full blur-3xl -z-0"></div>
            
            {/* Experience Badge */}
            <div className="absolute bottom-12 -right-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center">
              <span className="text-4xl font-serif font-bold text-champagne">10+</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Années d&apos;Excellence</span>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-champagne font-medium tracking-[0.3em] uppercase text-xs mb-4 block">Notre Histoire</span>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-8 leading-tight">
              L&apos;Art de la Parfumerie <br />
              <span className="text-gray-400 italic font-light">Redéfini par ASEFA</span>
            </h2>
            <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
              <p>
                Depuis plus d&apos;une décennie, ASEFA PARFUMERIE s&apos;efforce de capturer l&apos;essence même de l&apos;élégance. Nos fragrances ne sont pas seulement des parfums, mais des déclarations d&apos;identité.
              </p>
              <p>
                Nous sélectionnons méticuleusement les ingrédients les plus rares à travers le monde pour créer des accords uniques qui laissent un sillage inoubliable. Notre engagement envers la qualité et le luxe se reflète dans chaque flacon que nous signons.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-charcoal font-bold uppercase tracking-widest text-sm mb-2">Ingrédients Rares</h4>
                <div className="w-10 h-0.5 bg-champagne"></div>
              </div>
              <div>
                <h4 className="text-charcoal font-bold uppercase tracking-widest text-sm mb-2">Savoir-faire Artisanal</h4>
                <div className="w-10 h-0.5 bg-champagne"></div>
              </div>
            </div>

            <button className="mt-16 px-10 py-4 bg-charcoal text-white font-bold tracking-widest uppercase text-sm hover:bg-champagne transition-colors duration-300 shadow-xl">
              Découvrir nos valeurs
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

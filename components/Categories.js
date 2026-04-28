import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const categories = [
  {
    title: "Pour Homme",
    subtitle: "Force & Caractère",
    image: "/s2249688-main-zoom.webp",
    link: "/post/phomme",
    color: "bg-charcoal/5"
  },
  {
    title: "Pour Femme",
    subtitle: "Élégance & Douceur",
    image: "/s2742112-main-zoom.webp",
    link: "/post/pfemme",
    color: "bg-champagne/5"
  },
  {
    title: "Sprays & Déos",
    subtitle: "Fraîcheur Quotidienne",
    image: "/téléchargement (8).jpeg",
    link: "/post/spray",
    color: "bg-charcoal/5"
  },
  {
    title: "Huiles Corps",
    subtitle: "Soin & Parfum",
    image: "/téléchargement (9).jpeg",
    link: "/post/huile",
    color: "bg-champagne/5"
  }
];

const Categories = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">Parcourez nos Univers</h2>
          <div className="w-20 h-1 bg-champagne mx-auto mb-6"></div>
          <p className="text-gray-500 max-w-xl mx-auto font-light">
            Chaque collection est une invitation au voyage. Trouvez la fragrance qui correspond à votre personnalité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className={`relative h-96 group overflow-hidden rounded-2xl ${cat.color} border border-gray-100 flex flex-col items-center justify-center p-8 text-center transition-all duration-500 hover:shadow-2xl`}
            >
              <div className="relative w-48 h-48 mb-8 transition-transform duration-500 group-hover:scale-110">
                <Image 
                  src={cat.image} 
                  alt={cat.title} 
                  fill
                  className="object-contain mix-blend-multiply p-4"
                />
              </div>
              <h3 className="text-xl font-serif font-bold text-charcoal mb-2 uppercase tracking-widest">{cat.title}</h3>
              <p className="text-sm text-gray-400 mb-6 font-light">{cat.subtitle}</p>
              <Link href={cat.link} className="text-xs font-bold tracking-[0.2em] uppercase text-charcoal border-b border-champagne pb-1 hover:text-champagne transition-colors">
                Explorer
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

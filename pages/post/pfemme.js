import React from "react";
import Layout from "../../components/Layout";
import ProductCard from "../../components/productCard";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdFavoriteBorder } from "react-icons/md";
import { motion } from "framer-motion";

const products = [
  {
    title: "J'adore Dior",
    description: "Eau de Parfum - Bouquet Floral",
    img: "/s2142016-main-zoom.webp",
    price: "85.000 FCFA"
  },
  {
    title: "Chanel N°5",
    description: "Parfum - L'Éternel Féminin",
    img: "/s2205417-main-zoom.webp",
    price: "95.000 FCFA"
  },
  {
    title: "Black Opium",
    description: "YSL - Café Floral & Audace",
    img: "/s2742112-main-zoom.webp",
    price: "78.000 FCFA"
  },
  {
    title: "La Vie Est Belle",
    description: "Lancôme - Iris & Gourmandise",
    img: "/s2645026-main-zoom.webp",
    price: "72.000 FCFA"
  }
];

export default function ParfumFemme() {
  return (
    <Layout>
      <div className="py-16 bg-cream/30 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-serif text-charcoal mb-4 uppercase tracking-widest">
              Parfums <span className="text-champagne italic">Femme</span>
            </h1>
            <div className="w-32 h-1 bg-champagne mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-xl mx-auto font-light">
              Des fragrances envoûtantes et sophistiquées pour célébrer la féminité.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((p, i) => (
              <ProductCard 
                key={i}
                title={p.title}
                description={p.description}
                img={p.img}
                price={p.price}
                icon1={<HiOutlineShoppingBag />}
                icon2={<MdFavoriteBorder />}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

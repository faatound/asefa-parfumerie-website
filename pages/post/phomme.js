import React from "react";
import Layout from "../../components/Layout";
import ProductCard from "../../components/productCard";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdFavoriteBorder } from "react-icons/md";
import { motion } from "framer-motion";

const products = [
  {
    title: "Asad Zanzibar",
    description: "Lattafa - Eau de Parfum",
    img: "/ASAD-ZANZIBAR-1-400x369.jpeg",
    price: "35.000 FCFA"
  },
  {
    title: "Dior Sauvage",
    description: "Eau de Parfum - Intense & Frais",
    img: "/s2249688-main-zoom.webp",
    price: "75.000 FCFA"
  },
  {
    title: "Bleu de Chanel",
    description: "Parfum - Élégance Masculine",
    img: "/s2249738-main-zoom.webp",
    price: "82.000 FCFA"
  },
  {
    title: "Ajayeb Dubai Gold",
    description: "Lattafa - Oud & Gold",
    img: "/Ajayeb-Dubai-Gold-bottle-1-400x844.jpg",
    price: "45.000 FCFA"
  }
];

export default function ParfumHomme() {
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
              Parfums <span className="text-champagne italic">Homme</span>
            </h1>
            <div className="w-32 h-1 bg-champagne mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-xl mx-auto font-light">
              Une sélection de fragrances puissantes et raffinées pour l&apos;homme moderne.
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

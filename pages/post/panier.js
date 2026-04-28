import React from "react";
import Layout from "../../components/Layout";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function Panier() {
  return (
    <Layout>
      <div className="py-24 bg-cream/30 min-h-screen flex flex-col items-center justify-center">
        <HiOutlineShoppingBag className="text-8xl text-champagne mb-8 opacity-20" />
        <h1 className="text-4xl font-serif text-charcoal mb-4">Votre Panier</h1>
        <p className="text-gray-500 mb-8 font-light">Votre panier est actuellement vide.</p>
        <Link 
          href="/" 
          className="px-8 py-3 bg-charcoal text-white font-bold tracking-widest uppercase text-xs hover:bg-champagne transition-colors duration-300 shadow-xl"
        >
          Continuer mes achats
        </Link>
      </div>
    </Layout>
  );
}

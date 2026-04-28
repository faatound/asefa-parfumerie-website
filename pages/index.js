import Image from "next/image";
import { Inter } from "next/font/google";
import Menue from "../components/menue"
import Elements from "@/components/elements";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import React, { useState } from 'react';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <Categories />

      {/* Best Sellers Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-charcoal tracking-wide relative inline-block pb-6">
            Nos Best-Sellers
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-champagne"></span>
          </h2>
          <p className="mt-8 text-gray-500 font-light max-w-xl mx-auto">
            Découvrez les fragrances les plus plébiscitées par nos clients. Une sélection d&apos;excellence pour tous les goûts.
          </p>
        </div>
        
        <div className="mb-16">
          <Elements />
        </div>
        
        <div className="flex justify-center items-center gap-4 mt-12">
          <button className="w-12 h-12 flex items-center justify-center rounded-full border border-champagne bg-champagne text-white shadow-lg transition-all duration-300 font-serif text-lg">1</button>
          <button className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-100 text-gray-400 hover:border-champagne hover:text-champagne transition-all duration-300 font-serif text-lg shadow-sm">2</button>
          <button className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-100 text-gray-400 hover:border-champagne hover:text-champagne transition-all duration-300 font-serif text-lg shadow-sm">3</button>
        </div>
      </section>

      {/* About Section */}
      <About />
    </Layout>
  );
}

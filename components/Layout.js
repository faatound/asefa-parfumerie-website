import React from 'react';
import Menue from './menue';
import Footer from './Footer';
import { LuPartyPopper } from "react-icons/lu";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-charcoal text-cream py-2 px-4 flex justify-center items-center text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
        <LuPartyPopper className="mr-2 text-champagne text-sm" />
        <span>Livraison gratuite à partir de 50.000 fcfa</span>
        <LuPartyPopper className="ml-2 text-champagne text-sm" />
      </div>
      
      {/* Navigation */}
      <div className="sticky top-0 z-50 shadow-sm border-b border-gray-50">
        <Menue />
      </div>

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;

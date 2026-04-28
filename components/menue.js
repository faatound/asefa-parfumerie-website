import React from 'react'
import { FaRegUser } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Link from 'next/link';
import SearchBar from './searchbar';

const Menue = () => {
  return (
    <nav className="bg-white">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4 md:py-6">
        <Link href="/" className="text-2xl md:text-3xl self-center font-serif font-bold tracking-widest text-charcoal">
          ASEFA<span className="text-champagne font-light">PARFUMERIE</span>
        </Link>
        
        <div className="flex items-center md:order-2 space-x-4 md:space-x-6">
          <div className="relative group">
            <Link href='/post/login'>
              <FaRegUser className="text-xl text-charcoal hover:text-champagne transition-colors duration-300 cursor-pointer" />
              <span className="absolute top-8 left-1/2 transform -translate-x-1/2 w-max bg-charcoal text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Se connecter
              </span>
            </Link>  
          </div>
          <div className="hidden sm:block">
            <SearchBar/>
          </div>
          <div className="relative group">
            <Link href='/post/fav'>
              <MdFavoriteBorder className="text-xl text-charcoal hover:text-champagne transition-colors duration-300 cursor-pointer" />
              <span className="absolute top-8 left-1/2 transform -translate-x-1/2 w-max bg-charcoal text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Favoris
              </span>
            </Link>  
          </div>
          <div className="relative group">
            <HiOutlineShoppingBag className="text-xl text-charcoal hover:text-champagne transition-colors duration-300 cursor-pointer" />
            <span className="absolute top-8 left-1/2 transform -translate-x-1/2 w-max bg-charcoal text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Panier
            </span>
          </div>
                
          <button data-collapse-toggle="mega-menu-icons" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none" aria-controls="mega-menu-icons" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>

        <div id="mega-menu-icons" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col mt-4 md:flex-row md:mt-0 md:space-x-10">
            <li>
              <Link href="/post/phomme" className="block py-2 px-3 text-sm tracking-widest font-medium text-gray-600 uppercase hover:text-champagne transition-colors duration-300 md:p-0">Parfum Homme</Link>
            </li>
            <li>
              <Link href="/post/pfemme" className="block py-2 px-3 text-sm tracking-widest font-medium text-gray-600 uppercase hover:text-champagne transition-colors duration-300 md:p-0">Parfum Femme</Link>
            </li>
            <li>
              <Link href="/post/spray" className="block py-2 px-3 text-sm tracking-widest font-medium text-gray-600 uppercase hover:text-champagne transition-colors duration-300 md:p-0">Spray & Déo</Link>
            </li>
            <li>
              <Link href="/post/huile" className="block py-2 px-3 text-sm tracking-widest font-medium text-gray-600 uppercase hover:text-champagne transition-colors duration-300 md:p-0">Huile Corps</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Menue

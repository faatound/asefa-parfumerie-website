import React from "react";
import Link from 'next/link';
import { FaRegUser } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import style from '../../styles/login.module.css';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import SearchBar from "@/components/searchbar";

export default function Favorite() {

    return(

        <>
            <h2>
                 <Link href="/">Back to home</Link>
             </h2>

             <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
            <span className={`${style.nom} self-center text-2xl font-semibold whitespace-nowrap dark:text-white`}>AsefaParfumerie</span>
        
        <div class="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
        <div className="relative group">
         <Link href='/post/login'>
        <FaRegUser className="text-xl cursor-pointer" />
        <span className="absolute top-8 left-1/2 transform -translate-x-1/2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Se connecter
        </span>
        </Link>  
      </div>
      <div className="relative group">
      <SearchBar/>
      </div>
      <div className="relative group">
      <Link href='/post/fav'>
        <MdFavoriteBorder className="text-xl cursor-pointer" />
        <span className="absolute top-8 left-1/2 transform -translate-x-1/2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Favoris
        </span>
        </Link>  
      </div>
      <div className="relative group">
        <HiOutlineShoppingBag className="text-xl cursor-pointer" />
        <span className="absolute top-8 left-1/2 transform -translate-x-1/2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Panier
        </span>
      </div>
            
            <button data-collapse-toggle="mega-menu-icons" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-icons" aria-expanded="false">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>

        <div id="mega-menu-icons" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                <li>
                    <Link href="/post/phomme" class="block py-2 px-3 text-pink-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-pink-600 md:p-0 dark:text-pink-500 md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-pink-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Parfum Homme</Link>
                </li>
                <li>
                    <Link href="/post/pfemme"  class="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-pink-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                        Parfum Femme 
                    </Link>
                    
                </li>
                <li>
                    <Link href="/post/spray" class="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-pink-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-pink-500 md:dark:hover:bg-transparent dark:border-gray-700">Spray&Déo</Link>
                </li>
                <li>
                    <Link href="post/huile" class="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-pink-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-pink-500 md:dark:hover:bg-transparent dark:border-gray-700">Huile Corps</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>

     <div >
      <h2 className="soutt">FAVORIS</h2>
      </div>

        </>

    )
}
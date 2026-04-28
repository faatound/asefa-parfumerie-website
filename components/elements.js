import React, { useState } from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import ProductCard from '../components/productCard';

const Elements = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-4 md:px-0">
        <ProductCard 
          title={"LV Ombre Nomade"}  
          description={"Oud & Encens - Intense"}  
          img={"Ajayeb-Dubai-Gold-bottle-1-400x844.jpg"} 
          price={"250.000 FCFA"} 
          icon1={<HiOutlineShoppingBag/>} 
          icon2={<MdFavoriteBorder/>}   
        /> 
        <ProductCard 
          title={"Dior Sauvage"}  
          description={"Eau de Parfum"}  
          img={"s2249688-main-zoom.webp"} 
          price={"75.000 FCFA"} 
          icon1={<HiOutlineShoppingBag/>} 
          icon2={<MdFavoriteBorder/>}   
        /> 
        <ProductCard 
          title={"Chanel N°5"}  
          description={"L'Original - Parfum"}  
          img={"s2205417-main-zoom.webp"} 
          price={"95.000 FCFA"} 
          icon1={<HiOutlineShoppingBag/>} 
          icon2={<MdFavoriteBorder/>}   
        />
        
        <ProductCard 
          title={"Bleu de Chanel"}  
          description={"Élégance Boisée"}  
          img={"s2249738-main-zoom.webp"} 
          price={"82.000 FCFA"} 
          icon1={<HiOutlineShoppingBag/>} 
          icon2={<MdFavoriteBorder/>}   
        /> 
        <ProductCard 
          title={"YSL Black Opium"}  
          description={"Floral Gourmand"}  
          img={"s2742112-main-zoom.webp"} 
          price={"78.000 FCFA"} 
          icon1={<HiOutlineShoppingBag/>} 
          icon2={<MdFavoriteBorder/>}   
        /> 
        <ProductCard 
          title={"Creed Aventus"}  
          description={"L'Icône Masculine"}  
          img={"s2372688-main-zoom.webp"} 
          price={"155.000 FCFA"} 
          icon1={<HiOutlineShoppingBag/>} 
          icon2={<MdFavoriteBorder/>}   
        />
    </div>                  
  )
};

export default Elements

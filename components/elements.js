import React, { useState } from 'react'
import style from '../styles/elements.module.css'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import ProductCard from '../components/productCard';



 const Elements = () => {

    const [isFavorite,setIsFavorite] = useState(false)
   
    const handleIconClick = ()  =>  {
        setIsFavorite(!isFavorite);
    }

  return (
    <div className={style.container}>
        <div className={style.part1}>
        <ProductCard title={"givenchy"}  description={"eau de parfum"}  img={"s2142016-main-zoom.webp"} price={"38000 - 129000"} icon1={<HiOutlineShoppingBag/>} icon2={<MdFavoriteBorder/>}   /> 
        <ProductCard title={"givenchy"}  description={"eau de parfum"}  img={"s2205417-main-zoom.webp"} price={"38000 - 129000"} icon1={<HiOutlineShoppingBag/>} icon2={<MdFavoriteBorder/>}   /> 
        <ProductCard title={"givenchy"}  description={"eau de parfum"}  img={"téléchargement (6).jpeg"} price={"38000 - 129000"} icon1={<HiOutlineShoppingBag/>} icon2={<MdFavoriteBorder/>}   />
        </div>
        <div className={style.part2}>
        <ProductCard title={"givenchy"}  description={"eau de parfum"}  img={"téléchargement (7).jpeg"} price={"38000 - 129000"} icon1={<HiOutlineShoppingBag/>} icon2={<MdFavoriteBorder/>}   /> 
        <ProductCard title={"givenchy"}  description={"eau de parfum"}  img={"images (1).jpeg"} price={"38000 - 129000"} icon1={<HiOutlineShoppingBag/>} icon2={<MdFavoriteBorder/>}   /> 
        <ProductCard title={"givenchy"}  description={"eau de parfum"}  img={"s2742112-main-zoom.webp"} price={"38000 - 129000"} icon1={<HiOutlineShoppingBag/>} icon2={<MdFavoriteBorder/>}   />
        </div>
        <div className={style.part3}>
        <ProductCard title={"givenchy"}  description={"eau de parfum"}  img={"s2249738-main-zoom.webp"} price={"38000 - 129000"} icon1={<HiOutlineShoppingBag/>} icon2={<MdFavoriteBorder/>}   /> 
        <ProductCard title={"givenchy"}  description={"eau de parfum"}  img={"s2249688-main-zoom.webp"} price={"38000 - 129000"} icon1={<HiOutlineShoppingBag/>} icon2={<MdFavoriteBorder/>}   /> 
        <ProductCard title={"givenchy"}  description={"eau de parfum"}  img={"s2372688-main-zoom.webp"} price={"38000 - 129000"} icon1={<HiOutlineShoppingBag/>} icon2={<MdFavoriteBorder/>}   />
        </div>
         </div>
                   
  )
};

export default Elements

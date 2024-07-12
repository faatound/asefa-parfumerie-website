import React, { useState } from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import StarRating from '../components/starRating';


export default function ProductCard({ title, isFavorite, setFavorite, description, note,  img, price, icon1, icon2 }) {
  const[userRating,setUserRating] = useState(note); // note user
  const handleRatingChange = (newRating)  => { // fonction qui va changer l'état 
    setUserRating(newRating)
  }


  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="ml-7 p-8 rounded-t-lg" alt={title} src={img} />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          <h7 className="tracking-tight text-gray-900 dark:text-white">{description}</h7>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <StarRating rating={userRating}  onRatingChange={handleRatingChange}/>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {userRating }
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-black focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {price}
          </span>
          <div className="flex gap-2">
            <a href="#" className="text-3xl font-bold text-gray-900 dark:text-white">
              {icon1}
            </a>
            <a href="#" className="text-3xl font-bold text-gray-900 dark:text-white">
              {icon2}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import StarRating from '../components/starRating';
import Image from 'next/image';

export default function ProductCard({ title, description, note, img, price, icon1, icon2 }) {
  const [userRating, setUserRating] = useState(note || 0);
  const handleRatingChange = (newRating) => setUserRating(newRating);

  return (
    <div className="group relative w-full bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer border border-gray-50 hover:border-transparent">
      {/* Image Container */}
      <div className="relative w-full h-80 bg-cream overflow-hidden flex justify-center items-center p-6">
        <Image 
          className="object-contain transition-transform duration-700 group-hover:scale-105 mix-blend-multiply" 
          alt={title} 
          src={img} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Floating Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 z-10">
          <button className="w-10 h-10 bg-white rounded-full shadow hover:shadow-lg flex items-center justify-center text-charcoal hover:bg-champagne hover:text-white transition-colors duration-300">
            {icon2}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow bg-white relative z-20">
        <div className="mb-2">
          <h5 className="text-xl font-serif text-charcoal font-bold uppercase tracking-widest truncate">{title}</h5>
          <p className="text-sm text-gray-500 font-sans tracking-wide mt-1 line-clamp-1">{description}</p>
        </div>
        
        {/* Rating */}
        <div className="flex items-center mb-6">
          <StarRating rating={userRating} onRatingChange={handleRatingChange} />
          <span className="ml-2 mt-1 text-xs font-semibold text-gray-400">
            {userRating ? `(${userRating})` : ''}
          </span>
        </div>
        
        {/* Footer */}
        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-5">
          <span className="text-lg font-sans font-medium text-charcoal">
            {price}
          </span>
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-charcoal text-white hover:bg-champagne transition-colors duration-300 shadow-sm">
            {icon1}
          </button>
        </div>
      </div>
    </div>
  );
}

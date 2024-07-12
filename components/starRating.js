// components/StarRating.js
import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

const StarRating = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <div className="flex justify-center">
      <ReactStars
        count={5}
        onChange={handleRatingChange}
        size={16}
        activeColor="#ffd700"
        value={rating}
        a11y={true}
      />
    </div>
  );
};

export default StarRating;

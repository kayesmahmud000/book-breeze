import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

const  Rating=()=> {
   
  const [rating, setRating] = useState(4.5);
  

  const ratingChanged = (newRating) => {
    setRating(newRating);
    // console.log(newRating);
  };

  return (
    <div>
      <ReactStars
        count={1}
        value={rating}
        onChange={ratingChanged}
        size={28}
        activeColor="#ffd700"
      />
     
    </div>
  );
}

export default Rating;

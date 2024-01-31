import React, { useState } from "react";
import "./ratingComponent.css";
import { Star_Gold_Filled, Star_Grey_Filled } from "../../data/icons";
import useRating from "./useRating";
const RatingComponent = ({selection,iconsCount}) => {
  const [selectedRating, handleRating,handleSingle] = useRating();
console.log(selectedRating);
  return (
    <div className="rating-container">
      {Array.from(new Array(iconsCount)).map((el, i) => (
        <span className="rating" onClick={() =>selection==='single'?handleSingle(i): handleRating(i)}>
{selection==="single"?
          <img
          className="rating-icon"
          src={selectedRating===i ? Star_Gold_Filled : Star_Grey_Filled}
          alt={selectedRating===i ? Star_Gold_Filled : Star_Grey_Filled}
        />:
          <img
          className="rating-icon"
          src={selectedRating.includes(i) ? Star_Gold_Filled : Star_Grey_Filled}
          alt={selectedRating.includes(i) ? Star_Gold_Filled : Star_Grey_Filled}
        />
        }
        <span className="rating-value">{i}</span>
        </span>
        
      ))}
    </div>
  );
};

export default RatingComponent;

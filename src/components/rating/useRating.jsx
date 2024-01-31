import React, { useState } from 'react'

const useRating = () => {
    const [selectedRating, setSelectedRating] = useState([]);
    const handleRating = (rate) => {
      if (selectedRating.includes(rate)) {
        setSelectedRating(selectedRating.filter((el) => el !== rate));
      } else {
        setSelectedRating([...selectedRating, rate]);
      }
    };
    const handleSingle = (rate) => {
        selectedRating===rate?
        setSelectedRating(""):
        setSelectedRating(rate)
      };
  return (
    [selectedRating, handleRating,handleSingle]
  )
}

export default useRating
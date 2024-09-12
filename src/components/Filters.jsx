// Filters.js
import React from 'react';
import {useState} from "react"

function Filters({ onFilter }) {
  const [billButtonActive, setBillButtonActive] = useState(false);
  const [stacieButtonActive, setStacieButtonActive] = useState(false);
  const [averageButtonActive, setAverageButtonActive] = useState(false);

  const handleClick = (filterType) => {
    if(filterType === "billRating"){
      setBillButtonActive(!billButtonActive);
    } else if(filterType === "stacieRating"){
      setStacieButtonActive(!stacieButtonActive);
    } else if(filterType === "averageRating"){
      setAverageButtonActive(!averageButtonActive);
    }
    onFilter(filterType);
  };

  return (
    <div className="filter-buttons">
      <button className={billButtonActive ? "active-button" : null} onClick={() => handleClick('billRating')}>Bill's Ratings</button>
      <button className={stacieButtonActive ? "active-button" : null} onClick={() => handleClick('stacieRating')}>Stacie's Ratings</button>
      <button className={averageButtonActive ? "active-button" : null} onClick={() => handleClick('averageRating')}>Average Ratings</button>
    </div>
  );
}

export default Filters;

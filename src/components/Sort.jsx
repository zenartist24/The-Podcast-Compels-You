import React from 'react'
import {useState, useEffect} from "react"

function Sort({onSort}) {
    const [sortData, setSortData] = useState("");

    const handleChange = (e) =>{
        setSortData(e.target.value);
    }

    useEffect(()=>{
        onSort(sortData); 
    },[sortData])


  return (
    <div>
        <label>Sort by: </label>
         <select value={sortData} onChange={handleChange}>
            <option value="">...select</option>
            <option value="filmAZ">Film A-Z</option>
            <option value="filmZA">Film Z-A</option>
            <option value="ratingHighLow">Average Rating: High to Low</option>
            <option value="ratingLowHigh">Average Rating: Low to High</option>
            <option value="episodeLowHigh">Episode Number: Low to High</option>
            <option value="episodeHighLow">Episode Number: High to Low</option>
         </select>
    </div>
  )
}

export default Sort

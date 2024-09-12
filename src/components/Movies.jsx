import React from 'react'
import {useState, useEffect} from "react"
import MovieList from './MovieList';
import Sort from './Sort';
import Filters from './Filters';

function Movies() {
    const [isSorted, setIsSorted] = useState(false);
    const [sortedFilms, setSortedFilms] = useState([]);
    const [filterChecks, setFilterChecks] = useState({
      bill:false,
      stacie:false,
      average:false,
    })
    const episodes = [
      {
        episode: 1,
        film: "The Lodge",
        year: 2019,
        billRating: 4,
        stacieRating: 4,
        averageRating: 4
      },
      {
        episode: 2,
        film: "The Blackcoat's Daughter",
        year: 2015,
        billRating: 3.5,
        stacieRating: 3,
        averageRating: 3.25
      },
      {
        episode: 3,
        film: "The Wicker Man",
        year: 1973,
        billRating: 4,
        stacieRating: 4.5,
        averageRating: 4.25
      },
      {
        episode: 4,
        film: "Apostle",
        year: 2018,
        billRating: 3,
        stacieRating: 2.5,
        averageRating: 2.75
      },
      {
        episode: 5,
        film: "The Bay",
        year: 2012,
        billRating: 2,
        stacieRating: 2,
        averageRating: 2
      },
      {
        episode: 6,
        film: "Club Dread",
        year: 2004,
        billRating: 1.5,
        stacieRating: 1.5,
        averageRating: 1.5
      },
      {
        episode: 7,
        film: "The First Omen",
        year: 2024,
        billRating: 4,
        stacieRating: 4.5,
        averageRating: 4.25
      },
      {
        episode: 8,
        film: "Ouija: Origin of Evil",
        year: 2016,
        billRating: 2.5,
        stacieRating: 4,
        averageRating: 3.25
      },
      {
        episode: 9,
        film: "Veronica",
        year: 2017,
        billRating: 4,
        stacieRating: 5,
        averageRating: 4.5
      },
      {
        episode: 10,
        film: "Ready or Not",
        year: 2019,
        billRating: 4,
        stacieRating: 4.5,
        averageRating: 4.25
      },
      {
        episode: 11,
        film: "Longlegs",
        year: 2024, // Assuming the year is unknown or yet to be determined
        billRating: 3.5,
        stacieRating: 4.5,
        averageRating: 4
      },{
        episode: 12,
        film: "The Devil's Candy",
        year: 2015, // Assuming the year is unknown or yet to be determined
        billRating: 3.5,
        stacieRating: 3,
        averageRating: 3.75
      }
    ];

    const handleSort = (sortData) => {
      let sortedArray = [];
  
      if (sortData === "filmAZ") {
        sortedArray = [...episodes].sort((a, b) => a.film.localeCompare(b.film));
        setIsSorted(true);
      } else if (sortData === "filmZA") {
        sortedArray = [...episodes].sort((a, b) => b.film.localeCompare(a.film));
        setIsSorted(true);
      } else if(sortData === "..."){
        setIsSorted(false);
      } else if(sortData === "episodeLowHigh"){
        sortedArray = [...episodes].sort((a, b) => a.episode - b.episode);
        setIsSorted(true);
      } else if(sortData === "episodeHighLow"){
        sortedArray = [...episodes].sort((a, b) => b.episode - a.episode);
        setIsSorted(true)
      } else if(sortData === "ratingHighLow"){
        sortedArray = [...episodes].sort((a, b)=> b.averageRating - a.averageRating);
        setIsSorted(true);
      } else if(sortData === "ratingLowHigh"){
        sortedArray = [...episodes].sort((a, b)=> a.averageRating - b.averageRating);
        setIsSorted(true);
      }
      setSortedFilms(sortedArray);
    };

    const handleFilter = (filterData) => {
      setFilterChecks((prevChecks) => {
        if (filterData === "billRating") {
          return { ...prevChecks, bill: !prevChecks.bill };
        } else if(filterData === "stacieRating"){
          return {...prevChecks, stacie: !prevChecks.stacie};
        } else if(filterData === "averageRating"){
          return {...prevChecks, average: !prevChecks.average};
        }
        // Add other conditions for different filter buttons
        return prevChecks;
      });
    };
      
      console.log(sortedFilms);

  return (
    <div className="movies-position">
      <div className="sort-filters">
        <Sort onSort={handleSort} />
        <Filters onFilter={handleFilter} />
      </div>
      <MovieList episodes={isSorted ? sortedFilms : episodes} filterChecks={filterChecks} />
    </div>
  )
}

export default Movies

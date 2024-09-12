import React from 'react'
import {useState, useEffect} from "react"

function MovieShow({item, filterChecks}) {
    const apiKey = import.meta.env.VITE_API_KEY;
    const apiUrl = import.meta.env.VITE_API_URL;
    const {episode, film, year, billRating, stacieRating, averageRating} = item;
    const [moviePoster, setMoviePoster] = useState("");
    const [moviePlot, setMoviePlot] = useState("");
    const [showRatings, setShowRatings] = useState(false);
    const [imdbRating, setImdbRating] = useState("");
    const [ratingDifference, setRatingDifference] = useState("");

    console.log('Api Key:', apiKey);
    console.log('Api URL:', apiUrl);

    useEffect(() =>{
      const fetchPoster = async (film) =>{
        try{
          const response = await fetch(`${apiUrl}/?&apikey=${apiKey}&t=${film}`);
          if(!response.ok){
            throw new Error('Failed to fetch data');
          }
          const jsonData = await response.json();
          setMoviePoster(jsonData.Poster);
          setMoviePlot(jsonData.Plot);
          setImdbRating(jsonData.imdbRating/2);
        } catch (error) {
          console.error('Error fetching data', error);
        }
      }
      fetchPoster(film);
    },[film])

    useEffect(() => {
      setRatingDifference(Math.abs(imdbRating - averageRating));
    }, [imdbRating, averageRating]);

    const handleClickRatings = () =>{
      setShowRatings(true);
    }


  return (
    <div className="ind-movie">
      <div>
        <img className="movie-poster" src={moviePoster} />
      </div>
      <div className="movie-text">
        <h2>Episode {episode}: {film} ({year})</h2>
        <p>{moviePlot}</p>
        
        <div className="ratings-layout">
          {filterChecks.bill ? <h3>Bill's Rating: {billRating + "/5"}</h3> : null}

          {filterChecks.stacie ? <h3>Stacie's Rating: {stacieRating + "/5"}</h3> : null}
          
          {filterChecks.average ? <h3>Average Rating: {averageRating + "/5"}</h3> : null}

          
          <h3 className={ratingDifference > 0.5 ? "negative-correlation" : "positive-correlation"}>IMDB Rating: {imdbRating}</h3>
        </div>
      </div>
      
    </div>
  )
}

export default MovieShow

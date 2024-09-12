import React from 'react'
import MovieShow from './MovieShow'

function MovieList({episodes, filterChecks}) {
    const renderedEpisodes = episodes.map((item)=>{
        return <MovieShow item={item} key={item.episode} filterChecks={filterChecks} />
    })

  return (
    <div className="episode-layout">
      {renderedEpisodes}
    </div>
  )
}

export default MovieList

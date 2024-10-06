import React from 'react'
import { useParams, Link } from 'react-router-dom'

function Moviedetails({ movies }) {
  const { id } = useParams()
  const movie = movies.find((movie) => movie.id === parseInt(id))

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.posterUrl} alt={movie.title} style={{ width: '300px' }} />
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title={movie.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/movies">
        <button>Back to Movies</button>
      </Link>
    </div>
  );
}

export default Moviedetails

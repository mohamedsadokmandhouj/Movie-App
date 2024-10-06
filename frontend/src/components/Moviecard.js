import React from 'react';
import { Link } from 'react-router-dom';
import '../CssPage/Moviecard.css'; // Assume you have a CSS file for styling

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterUrl} alt={movie.title} className="movie-poster" />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <div className="movie-rating">Rating: {movie.rating} / 5</div>
        <Link to={`/trailer/${movie.id}`} className="watch-trailer-link">
          Watch Trailer
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;


import React from "react";
import { useNavigate } from "react-router-dom";

const MovieList = ({ movies, onDelete, user }) => {
  const navigate = useNavigate();

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div className="movie-card" key={movie._id}>
          <div className="movie-details">
            <span className="movie-title">{movie.title}</span>
            <span className="movie-year">{movie.year}</span>
          </div>

          {/* ✅ Only show actions if user is logged in */}
          {user && (
            <div className="movie-actions">
              <button onClick={() => navigate(`/edit/${movie._id}`)}>Edit</button>
              <button onClick={() => onDelete(movie._id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MovieList;
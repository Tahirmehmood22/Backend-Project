import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import MovieForm from '../components/MovieForm';

function Home() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/movies');
      const data = await res.json();
      if (res.ok) {
        setMovies(data);
      } else {
        console.error('Failed to fetch movies:', data.message);
      }
    } catch (err) {
      console.error('Error fetching movies:', err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3001/api/movies/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setMovies((prev) => prev.filter((movie) => movie._id !== id));
      } else {
        const data = await res.json();
        console.error('Delete failed:', data.message);
      }
    } catch (err) {
      console.error('Error deleting movie:', err);
    }
  };

  const handleMovieAdded = (newMovie) => {
    setMovies((prev) => [...prev, newMovie]);
  };

  return (
    <div>
      <MovieForm onMovieAdded={handleMovieAdded} />
      <MovieList movies={movies} onDelete={handleDelete} />
    </div>
  );
}

export default Home;


import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import MovieList from '../components/MovieList';
import MovieForm from '../components/MovieForm';

function Home() {
  const [movies, setMovies] = useState([]);
  const { user } = useOutletContext(); // 

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
        const deletedMovie = movies.find((m) => m._id === id);
        setMovies((prev) => prev.filter((movie) => movie._id !== id));
        alert(`${deletedMovie.title} has been deleted successfully!`);
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
    alert(`${newMovie.title} has been added successfully!`);
  };

  return (
    <div>
      {/* ✅ Only show form if user is logged in */}
      {user && <MovieForm onMovieAdded={handleMovieAdded} />}

      {/* ✅ Pass user to control Edit/Delete visibility */}
      <MovieList movies={movies} onDelete={handleDelete} user={user} />
    </div>
  );
}

export default Home;
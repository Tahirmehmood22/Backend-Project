import React, { useEffect, useState } from 'react';
import MovieForm from '../components/MovieForm';
import MovieList from '../components/MovieList';

function Home() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const res = await fetch('http://localhost:3001/api/movies');
    const data = await res.json();
    setMovies(data);
  };

  const addMovie = async (movie) => {
    await fetch('http://localhost:3001/api/movies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movie),
    });
    fetchMovies();
  };

  const deleteMovie = async (id) => {
    await fetch(`http://localhost:3001/api/movies/${id}`, {
      method: 'DELETE',
    });
    fetchMovies();
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <MovieForm onSubmit={addMovie} />
      <MovieList movies={movies} onDelete={deleteMovie} />
    </>
  );
}

export default Home;

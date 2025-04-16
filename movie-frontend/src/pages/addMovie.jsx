import React from 'react';
import MovieForm from '../components/MovieForm';
import { useNavigate } from 'react-router-dom';

function AddMovie() {
  const navigate = useNavigate();

  const addMovie = async (movie) => {
    await fetch('http://localhost:3001/api/movies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movie),
    });
    navigate('/');
  };

  return (
    <div>
      <MovieForm onSubmit={addMovie} />
    </div>
  );
}

export default AddMovie;

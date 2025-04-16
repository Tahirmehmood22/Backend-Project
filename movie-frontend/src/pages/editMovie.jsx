import React, { useEffect, useState } from 'react';
import MovieForm from '../components/MovieForm';
import { useNavigate, useParams } from 'react-router-dom';

function EditMovie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(`http://localhost:3001/api/movies/${id}`);
      const data = await res.json();
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  const updateMovie = async (updatedMovie) => {
    await fetch(`http://localhost:3001/api/movies/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedMovie),
    });
    navigate('/');
  };

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <MovieForm onSubmit={updateMovie} initialData={movie} />
    </div>
  );
}

export default EditMovie;

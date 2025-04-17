import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MovieForm from '../components/MovieForm';

function EditMovie() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(`http://localhost:3001/api/movies/${id}`);
        const data = await res.json();
        if (res.ok) {
          setMovie(data);
        } else {
          alert('Movie not found.');
          navigate('/');
        }
      } catch (err) {
        console.error('Error fetching movie:', err);
        alert('Failed to fetch movie.');
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id, navigate]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="edit-movie-page">
      <h2>Edit Movie</h2>
      <MovieForm
        initialData={movie}
        onMovieUpdated={() => {
          alert('Movie updated successfully!');
          navigate('/');
        }}
      />
    </div>
  );
}

export default EditMovie;

import React, { useState, useEffect } from 'react';

function MovieForm({ initialData, onMovieAdded, onMovieUpdated }) {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [errors, setErrors] = useState([]);

  const isEditMode = initialData && initialData._id;

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || '');
      setYear(initialData.year || '');
      setGenre(initialData.genre || '');
    }
  }, [initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    const movieData = { title, year, genre };

    try {
      const url = isEditMode
        ? `http://localhost:3001/api/movies/${initialData._id}`
        : 'http://localhost:3001/api/movies';

      const method = isEditMode ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movieData),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          alert(data.message || 'Something went wrong.');
        }
      } else {
        setTitle('');
        setYear('');
        setGenre('');
        setErrors([]);

        if (isEditMode && onMovieUpdated) {
          onMovieUpdated(data);
        } else if (onMovieAdded) {
          onMovieAdded(data);
        }
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Server error, please try again later.');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {errors.length > 0 && (
        <div className="error-messages">
          <ul>
            {errors.map((err, index) => (
              <li key={index}>{err.msg}</li>
            ))}
          </ul>
        </div>
      )}

      <input
        type="text"
        placeholder="Movie Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <button type="submit">{isEditMode ? 'Update' : 'Add'}</button>
    </form>
  );
}

export default MovieForm;

import React, { useState, useEffect } from 'react';

function MovieForm({ onSubmit, initialData }) {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setYear(initialData.year);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !year) return alert('Both fields are required');
    onSubmit({ title, year });
    setTitle('');
    setYear('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Movie Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default MovieForm;

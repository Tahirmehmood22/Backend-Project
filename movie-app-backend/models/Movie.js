
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: 100,
  },
  genre: {
    type: String,
    required: [true, 'Genre is required'],
    trim: true,
    maxlength: 50,
  },
  year: {
    type: Number,
    required: [true, 'Year is required'],
    min: [1888, 'Year must be after the first film ever made (1888)'],
    max: [new Date().getFullYear() + 1, 'Year must not be in the distant future'],
  },
  rating: {
    type: Number,
    min: [0, 'Rating must be at least 0'],
    max: [10, 'Rating must not exceed 10'],
    default: 0,
  },
  description: {
    type: String,
    trim: true,
    maxlength: 500,
  },
});

module.exports = mongoose.model('Movie', movieSchema);

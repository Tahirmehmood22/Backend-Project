const { body } = require('express-validator');

exports.movieValidationRules = [
  body('title')
    .notEmpty().withMessage('Title is required')
    .isLength({ min: 2 }).withMessage('Title must be at least 2 characters'),

  body('genre')
    .notEmpty().withMessage('Genre is required'),

  body('year')
    .notEmpty().withMessage('Year is required')
    .isInt({ min: 1888, max: new Date().getFullYear() }).withMessage('Enter a valid year'),

  body('rating')
    .optional()
    .isFloat({ min: 0, max: 10 }).withMessage('Rating must be between 0 and 10'),

  body('description')
    .optional()
    .isLength({ max: 500 }).withMessage('Description should be max 500 characters'),
];

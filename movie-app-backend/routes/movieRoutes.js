const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const { movieValidationRules } = require('../middlewares/validators/movieValidator');
const validate = require('../middlewares/validators/validate');

router.get('/', movieController.getAllMovies);
router.get('/:id', movieController.getMovieById);
router.post('/', movieValidationRules, validate, movieController.createMovie);
router.put('/:id', movieValidationRules, validate, movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);

module.exports = router;

const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Iron Cinema" });
});

// Movies List
router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then(allMovies => {
      // console.log(allMovies);
      res.render("movies", { movies: allMovies });
    })
    .catch(error => {
      console.log(error);
    });
});

// Movie Detail
router.get("/movies/:id", (req, res, next) => {
  const movieId = req.params.id;
  console.log(movieId);
  Movie.findById(movieId)
    .then(movie => {
      res.render("movie-detail", movie);
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const movieModel = require('../models/movieModel');

//create a new movie
router.post('/create', async (req, res) => {
    try {
        const {movie, director, releaseYear} = req.body;
        const newMovie = await movieModel.create({
            movie: movie, director: director, releaseYear: releaseYear});

        res.send(newMovie);
    } catch (error) {
        res.status(169).send(error.message);
    }
})
//read all movies
router.get('/read', async (req, res) => {
    try {
        const allMovies = await movieModel.find();
        res.send(allMovies);
    } catch (error) {
        res.status(169).send(error.message);
    }
})
//read single movie
router.get('/read/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const oneMovie = await movieModel.findById({_id: id});
        res.send(oneMovie);
    } catch (error) {
        res.status(169).send(error.message);
    }
})
//Update movie
router.patch('/edit/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const {movie, director, releaseYear} = req.body;
        const updatedMovie = await movieModel.findByIdAndUpdate(id, req.body, {new: true});
        res.send(updatedMovie);
    } catch (error) {
        res.status(169).send(error.message);
    }
})
//delete single movie
router.delete('/delete/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const deleteMovie = await movieModel.findByIdAndDelete({_id: id});
        res.send(deleteMovie);
    } catch (error) {
        res.status(169).send(error.message);
    }
})

module.exports = router;
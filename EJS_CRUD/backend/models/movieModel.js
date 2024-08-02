const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    movie:{
        type: String,
        required: true, 
    },
    director:{
        type: String,
        required: true
    },
    releaseYear:{
        type: Number,
        required: true
    }, 
}, { timestamps: true});

const movieModel = mongoose.model('Movie', movieSchema)
module.exports = movieModel;
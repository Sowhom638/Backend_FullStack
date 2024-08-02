const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase');
const userSchema = mongoose.Schema({ //A schema has been cretaed
    name: String,
    age: Number,
    email: String
})

module.exports = mongoose.model('User', userSchema); //A model has been created whose name is 'Users'(always plural formed naming of user-given name will be happening)
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/movieRoute')
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
const mongodbURL = process.env.url;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());

mongoose.connect(mongodbURL)
.then(() => {
    console.log('Connected to the database '+mongodbURL);
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
})
.catch((err) => console.error("Error is "+err) )

app.get('/', (req, res) => res.send('Hello World!'));

app.use("/movie",router);
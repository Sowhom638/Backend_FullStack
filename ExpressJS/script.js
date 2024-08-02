const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));//path.join(__dirname,'public') = path of current folder/public
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.send("Champion Nilu");
})
app.get("/profile", (req, res) => {
  res.render("index");
})
//Dynamic Routing
app.get("/about/:username/:age", (req, res) => {
  res.send(`This is ${req.params.username} of ${req.params.age}`);
})
app.get("/about/:username", (req, res) => {
  res.send(`This is ${req.params.username}`);
})
//
app.get("/chacha", (req, res, next) => {
  return next(new Error("Sorry! There is no chacha page here"));
})
//error Handling
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen("3000");
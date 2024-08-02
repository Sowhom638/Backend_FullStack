const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));//path.join(__dirname,'public') = path of current folder/public
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  fs.readdir(`./files`, (err, files) => {
    res.render('jade', { files: files });
  })

});

app.get('/files/:fileName', (req, res) => {
  fs.readFile(`./files/${req.params.fileName}`, "utf-8", (err, filedata) => {
    res.render('Notes', { title: req.params.fileName, Description: filedata });
  });
});
app.get('/edit/:fileName', (req, res) => {
  res.render('edit',{ PreviousNmae: req.params.fileName});
});

app.post('/edit', (req, res) => {
  fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new.split(' ').join('_')}`, (err) => {
    res.redirect('/');
  })

});
app.post('/create', (req, res) => {
  fs.writeFile(`./files/${req.body.title.split(' ').join('_')}.txt`, req.body.description, (err) => {
    res.redirect('/');
  })

});
app.listen(3500);
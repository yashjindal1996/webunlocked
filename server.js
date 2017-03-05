
const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.render('index.hbs');
});

app.get('/about', (req, res) => {
  res.render('about.hbs');
});

app.get('/login', (req, res) => {
  res.render('login.hbs');
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.render('404.hbs');
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});





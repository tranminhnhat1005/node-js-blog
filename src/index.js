const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

// morgan to view console log
app.use(morgan('combined'));

// **********************   ENGINE  **********************
// define engine handlebars by express-handlebars and config extname
app.engine('hbs', handlebars({ extname: '.hbs' }));
// set engine handlebars
app.set('view engine', 'hbs');
// set path to views folder
app.set('views', path.join(__dirname, 'resources\\views'));

// **********************   ROUTE   **********************
app.get('/', (req, res) => res.render('home'));

app.get('/news', (req, res) => res.render('news'));

// **********************   LISTEN  **********************
app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);

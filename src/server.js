const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// Initialization
const app = express();

// Settings
app.set('port', process.env.PORT || 4000); // Listen to the right PORT 
app.set('views', path.join(__dirname, 'views')); // Found the views directory
app.engine('.hbs', exphbs.engine({  
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs')

// Middlewares
app.use(express.urlencoded({extended: false})); //  Turn data into a JSON object

// Global Variables

// Routes
app.use(require('./routes/index.routes'));

// Static Files
app.use(express.static(path.join(__dirname, 'public'))); // Found the public directory (the statics files e.g CSS HTML)


module.exports = app;
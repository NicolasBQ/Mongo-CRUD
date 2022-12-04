const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

// Initialization
const app = express();
require('./config/passport');

// Settings
app.set('port', process.env.PORT || 3000); // Listen to the right PORT 
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
app.use(session( {
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Global Variables

// Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));
app.use(require('./routes/users.routes'));

// Static Files
app.use(express.static(path.join(__dirname, 'public'))); // Found the public directory (the statics files e.g CSS HTML)


module.exports = app;
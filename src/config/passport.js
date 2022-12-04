const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    // Match email's user
    const user = await User.findOne({email});
    if(!user) {
        return done(null, false, {message: 'Not user find'});
    } else {
        // Match password's user
        const match = await user.matchPassword(password);
        if(match) {
            return done(null, user, )
        } else {
            return done(null, false, {message: 'Incorrect Password'});
        }
    }
}));

passport.serializeUser((user, done) => { // Save the user id 
    done(null, user.id);
})

passport.deserializeUser((id, done) => { // Check if the user has permissions while is navigating in the app
    User.findById(id, (error, user) => {
        done(error, user)
    })
})
const usersCtrl = {};


const passport = require('passport');
const User = require('../models/User');



usersCtrl.renderSignUpForm = (req, res) => {
    res.render('users/signup');
}

usersCtrl.signup = async (req, res) => {
    const errors = [];
    const { name, email, password, confirm_password } = req.body;

    if(password != confirm_password) {
        errors.push({text: 'Passords do not match'});
    }
    if(password.length < 4) {
        errors.push({text: 'Password must have at least 4 characters'});
    }
    if(errors.length > 0) {
        res.render('users/signup', {
            errors,
            name,
            email
        })
    } else {
        const emailUser = await User.findOne({email: email});

        if(emailUser) {
            res.send('email repeated');
        } else {
            const newUser = new User({name, email, password});
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            res.redirect('/users/signin');
        }
    }

}

usersCtrl.renderSignInForm = (req, res) => {
    res.render('users/signin');
}

usersCtrl.signin = passport.authenticate('local', {
    failureRedirect: '/users/signin',
    successRedirect: '/',
    failureFlash: true
})

usersCtrl.logout = (req, res, next) => {
    req.logout((err) => {
        if(err) { return next(err); }
        res.redirect('/users/signin');      
    });
    // req.session.user = null;
}


module.exports = usersCtrl;
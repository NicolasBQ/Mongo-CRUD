const usersCtrl = {};

usersCtrl.renderSignUpForm = (req, res) => {
    res.render('users/signup');
}

usersCtrl.signup = (req, res) => {
    res.send('SIGN UP');
}

usersCtrl.renderSignInForm = (req, res) => {
    res.render('users/signin');
}

usersCtrl.signin = (req, res) => {
    res.send('SIGN IN');
}

usersCtrl.logout = (req, res) => {
    res.send('LOGOUT');
}


module.exports = usersCtrl;
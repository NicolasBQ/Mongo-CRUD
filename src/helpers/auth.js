const helpers = {};

helpers.isAuth = (req, res, next) => {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect('/users/signin');
}

module.exports = helpers;
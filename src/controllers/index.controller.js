const indexCtrl = {};

indexCtrl.rederIndex = (req, res) => {
    res.render('index');
}

indexCtrl.renderAbout = (req, res) => {
    res.render('about');
}


module.exports = indexCtrl;
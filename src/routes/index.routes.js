const { Router } = require('express');
const router = Router();

const { renderIndex, renderAbout } = require('../controllers/index.controller');

const {isAuth} = require('../helpers/auth');

router.get('/', renderIndex)
router.get('/about', isAuth, renderAbout)

module.exports = router;
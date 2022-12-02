const { Router } = require('express');
const router = Router();

const { rederIndex, renderAbout } = require('../controllers/index.controller');

router.get('/', rederIndex)
router.get('/about', renderAbout)

module.exports = router;
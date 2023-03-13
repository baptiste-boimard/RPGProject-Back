const express = require('express');

const router = express.Router();

const routerWrapper = require('../handlers/routerWrapper');
const loginController = require('../controllers/loginController');

router.post('/login', routerWrapper(loginController.login));
router.post('/signup', routerWrapper(loginController.signup));


module.exports = router;
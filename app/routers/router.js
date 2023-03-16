const express = require('express');

const routerWrapper = require('../handlers/routerWrapper');

const loginController = require('../controllers/loginController');

const {
  schemaCreateUser,
} = require('../validation/schema');

const {
  validateCreateUser,
} = require('../validation/validations');

const router = express.Router();

router.post(
  '/signup',
  validateCreateUser(schemaCreateUser),
  routerWrapper(loginController.signup),
  );


router.post('/login', routerWrapper(loginController.login));


module.exports = router;
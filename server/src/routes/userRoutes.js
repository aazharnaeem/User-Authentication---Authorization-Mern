const express = require('express');
const { user } = require('../controller');
const router = express.Router();
const { authenticateJWT } = require('../middleware/tokenAuthorization')


router.route('/register').post(user.register);
router.route('/login').post(user.login);
router.route('/check').get(authenticateJWT, user.getUserInfo);


module.exports = router;
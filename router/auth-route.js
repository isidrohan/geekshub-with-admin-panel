const express = require('express')
const router = express.Router();
const {home,register,login,user} = require("../controllers/auth-controller")
const signupSchema = require('../validators/auth-validator');
const validate = require('../middleware/validate-middleware');
const authMiddleware = require('../middleware/auth-middleware');
const loginSchema = require('../validators/login-validator');


router.route('/').get(home);
router.route('/register').post(validate(signupSchema),register)
router.route('/login').post(validate(loginSchema),login)

router.route('/user').get(authMiddleware,user)



module.exports = router
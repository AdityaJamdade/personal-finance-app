const express = require('express')
const router = express.Router()

const { loginUser, registerUser, getMe } = require('../controllers/userController')

router.route('/login').post(loginUser)
router.route('/register').post(registerUser)
router.route('/me').get(getMe)

module.exports = router
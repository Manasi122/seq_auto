const express = require('express')
const router = express.Router()
const {home, chk_user} = require('../controllers/userController')


router.route('/').get(home)
router.route('/chk_user').get(chk_user)

module.exports = router

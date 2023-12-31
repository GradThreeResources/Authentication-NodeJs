const express = require('express')
const router = express.Router()
const userAuth = require('../services/authService')
const {validateUserData} = require('../middleware/userMiddleware')


router.post('/create',validateUserData, userAuth.createUser )

module.exports.userRouter = router
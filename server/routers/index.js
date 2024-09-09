const express = require('express')
const {registerUser} = require("../controller/registerUser");
const checkEmail = require('../controller/checkEmail');
const checkPassword = require('../controller/checkPassword');
const userDetails = require('../controller/userDetails');
const logout = require('../controller/logout');
const updateUserDetails = require('../controller/updateUserDetails');
const router = express.Router();

//create routes
router.post("/register", registerUser);
//check email
router.post('/email', checkEmail)
//check password
router.post('/password', checkPassword)
//user details
router.get('/user-details', userDetails)
//user logout
router.get('/log-out', logout)
//user update
router.post('/update', updateUserDetails)

module.exports = router

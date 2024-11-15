const express = require('express');
const {check, validationResult} = require('express-validator');
const User = require('../models/Users');
const authenticationController = require('../controllers/auth');
const userController = require('../controllers/userControllers');

const router = express.Router();

router.post('/register', authenticationController.registerUser);

router.post('/login', authenticationController.loginUser);

router.get('/profile', userController.getUser);

router.patch('/profile', userController.updateUser);

router.delete('/profile', userController.deleteUser);

module.exports = router;

const express = require('express');
const { loginController, registerController } = require('../controllers/userController');

//router object
const router = express.Router();

//routers
//POST || Login
router.post('/login', loginController)
//POST||Register user
router.post('/register', registerController)

module.exports = router;    //export router object
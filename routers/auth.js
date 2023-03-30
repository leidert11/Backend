
const routerx = require('express-promise-router');

const authController = require('../controller/authController');


const router = routerx();

router.post('/login',  authController.login);
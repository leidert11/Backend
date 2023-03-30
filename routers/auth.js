const routerx = require("express-promise-router");

const authController = require("../controllers/authController");

const router = routerx();

router.post("/login", authController.login);

module.exports = router;

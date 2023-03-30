const routerx = require("express-promise-router");
const category = require("./category")
const auth = require("./auth")
const router = routerx();

router.use('/category',category );
router.use('/auth',auth );


module.exports = router;
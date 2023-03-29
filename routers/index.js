const routerx = require("express-promise-router");
const category = require("./category")
const router = routerx();

router.use('/category',category );


module.exports = router;
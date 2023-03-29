const routerx = require('express-promise-router');
const categoryController = require('../controller/categoryController');
//const auth = require('../middlewares/auth');


const router = routerx();
router.get('/list', categoryController.list);

// router.post('/add', auth.verifyUsuario, categoryController.add);
// router.get('/query', auth.verifyUsuario, categoryController.query);
// router.put('/update', auth.verifyUsuario, categoryController.update);
// router.delete('/remove', auth.verifyAdministrador, categoryController.remove);
// router.put('/activate', auth.verifyUsuario, categoryController.activate);
// router.put('/deactivate', auth.verifyUsuario, categoryController.deactivate);


module.exports = router;
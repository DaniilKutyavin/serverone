const Router = require('express');
const router = new Router();
const NewsController = require('../controllers/newController.js');
const authMiddleware = require('../middleware/auth-middlewares.js');

router.get('/', NewsController.getAll);
router.get('/:id', NewsController.getOne);
router.post('/', NewsController.create);


module.exports = router;
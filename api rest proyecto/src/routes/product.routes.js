const express = require('express');
const router = express.Router();
const controller = require('../controllers/product.controller');

router.get('/', controller.getAll);
router.post('/', controller.create);
router.delete('/:id', controller.remove);
router.patch('/:id/activate', controller.activate);
router.patch('/:id/deactivate', controller.deactivate);

module.exports = router;
var express = require('express');
var router = express.Router();

var architectController = require('../controllers/architect.controller')

/* test */
router.get('/test', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', architectController.create);

router.get('/', architectController.get);

router.get('/', architectController.getById);

router.put('/', architectController.update);

router.delete('/', architectController.delete);

module.exports = router;

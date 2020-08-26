var express = require('express');
var router = express.Router();

var landDetailsController = require('../controllers/landDetails.controller')

/* test */
router.get('/test', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', landDetailsController.create);

router.get('/', landDetailsController.getAll);

router.get('/', landDetailsController.getById);

router.put('/', landDetailsController.update);

router.delete('/', landDetailsController.delete);

module.exports = router;

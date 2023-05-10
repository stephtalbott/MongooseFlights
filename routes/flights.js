const express = require('express');
const router = express.Router();
const flightCtrl = require('../controllers/flights')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/new', flightCtrl.new)

router.get('/', flightCtrl.index)

router.post('/', flightCtrl.create) 

router.get("/:id", flightCtrl.show)

module.exports = router;

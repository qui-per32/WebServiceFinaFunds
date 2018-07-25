var express = require('express');
var router = express.Router();
let PerformanceController = require('../controllers/api/performanceController');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/performance', (req, res, next) => {
    let performanceController = new PerformanceController(req, res, next);
    performanceController.calc();
})

module.exports = router;
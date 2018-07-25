var express = require('express');
var router = express.Router();
let PerformanceController = require('../controllers/api/performanceController');
let CalcService = require('../service/calcService');

router.get('/performance', (req, res, next) => {
   let calcService = new CalcService();
   calcService.performance();
   calcService.volatility();
})

module.exports = router;
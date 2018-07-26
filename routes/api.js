var express = require('express');
var router = express.Router();
let FetchDataController = require('../controllers/api/fetchDataController');
let CalculateController = require('../controllers/api/calculateController');
let CalcService = require('../service/calcService');

router.get('/performance', (req, res, next) => {
    let fetchDataController = new FetchDataController(req, res, next);
    fetchDataController.fetchData()
    .then((datos) => {
            let calculateController = new CalculateController(req, res, next);
            calculateController.calculateObject(datos);
        })
        .catch(error => this.res.json(error));
    //    let calcService = new CalcService();

    //    calcService.performance();
    //    calcService.volatility();
})

module.exports = router;
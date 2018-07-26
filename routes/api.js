var express = require('express');
var router = express.Router();
let FetchDataController = require('../controllers/api/fetchDataController');
let CalculateController = require('../controllers/api/calculateController');
let CalcService = require('../service/calcService');

router.get('/performance', (req, res, next) => {
    let fetchDataController = new FetchDataController(req, res, next);
    fetchDataController.fetchData()
    .then((data) => {
            // console.log(datos);
            // res.json(data)
          
        })
        .catch(error => res.json(error));
    //    let calcService = new CalcService();

    //    calcService.performance();
    //    calcService.volatility();
})

module.exports = router;
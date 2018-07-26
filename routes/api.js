var express = require('express');
var router = express.Router();
let FetchDataController = require('../controllers/api/fetchDataController');
let CalculateController = require('../controllers/api/calculateController');
let CalcService = require('../service/calcService');

router.get('/performance', (req, res, next) => {
    let fetchDataController = new FetchDataController(req, res, next);
    fetchDataController.fetchData()
    .then((datos) => {
        // console.log(resultado);
            let calcService = new CalcService();
            calcService.resolveDataCalc(datos)
            .then((resultado)=>{
                res.json(resultado);
                // this.res.send(resultado);
            })
          
        })
})

module.exports = router;
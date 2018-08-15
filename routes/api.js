var express = require('express');
var router = express.Router();
let FetchDataController = require('../controllers/api/fetchDataController');
let CalcService = require('../service/calcService');

router.get('/performance', (req, res, next) => {
    let fetchDataController = new FetchDataController(req, res, next);
    fetchDataController.fetchData()
    .then((datos) => {
        console.log(datos);
        
            let calcService = new CalcService();
            calcService.resolveDataCalc(datos)
            .then((resultado)=>{
                res.json(resultado);
            })
          
        })
})

module.exports = router;
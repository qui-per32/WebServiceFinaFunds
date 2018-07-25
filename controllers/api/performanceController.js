const Controller = require('../controller');
let CalcService = require('../../service/calcService');

class performanceController extends Controller {
    constructor(req, res, next) {
        super(req, res, next);
        
    }
calc() {
    let isin = req.query.isin,
        dateFrom = req.query.dateFrom,
        dateTo = req.query.dateTo;
    let calcService = new CalcService();
    calcService.performance();
}


}
module.exports = performanceController;
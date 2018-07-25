const Controller = require('../controller');
let CalcService = require('../../service/calcService');

class performanceController extends Controller {
    constructor(req, res, next) {
        super(req, res, next);
        
    }
calc() {
    let calcService = new CalcService();
    calcService.print();
}


}
module.exports = performanceController;
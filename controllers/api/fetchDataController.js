const Controller = require('../controller');
let CuerpoModel = require('../../models/cuerpoModel');
let CalcService = require('../../service/calcService');

class fetchDataController extends Controller {
    constructor(req, res, next) {
        super(req, res, next);

    }
    fetchData() {
        let isin = this.req.query.isin;
        return new Promise((resolve, reject) => {
            CuerpoModel.find({
                isin: isin
            }, (err, data) => {
                if (err) console.error(err);
                resolve(data)
                reject('error')
            })
        })
    }

// let calcService = new CalcService();
// calcService.performance((isin,dateTo,dateFrom)=>{

// })



// this.res.json(dateTo);

}
module.exports = fetchDataController;
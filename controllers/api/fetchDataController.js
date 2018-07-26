const Controller = require('../controller');
let CuerpoModel = require('../../models/cuerpoModel');
let CalcService = require('../../service/calcService');

class fetchDataController extends Controller {
    constructor(req, res, next) {
        super(req, res, next);
        let isin = this.req.query.isin;
        let dateFrom = this.req.query.dateFrom;
        let dateTo = this.req.query.dateTo;

    }
    fetchData() {
        let isin = this.req.query.isin;
        let dateFrom = this.req.query.dateFrom;
        let dateTo = this.req.query.dateTo;

        return new Promise((resolve, reject) => {
            CuerpoModel.find({
                isin: isin,
                fecha: {
                    $gt: +dateFrom - 1,
                    $lt: +dateTo + 1
                },
            }, (err, data) => {
                if (err) reject(err);
                resolve(data)
                reject('error')
                



            })
        })
    }

}
module.exports = fetchDataController;
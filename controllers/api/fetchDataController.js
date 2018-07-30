const Controller = require('../controller');
let CuerpoModel = require('../../models/cuerpoModel');
let CalcService = require('../../service/calcService');

class fetchDataController extends Controller {
    constructor(req, res, next) {
        super(req, res, next);
    }
    fetchData() {
        let cuenta = this.req.query.isin;
        let dateFrom = this.req.query.dateFrom;
        let dateTo = this.req.query.dateTo;
        let fecha = /^(?:(?:(?:(?:(?:[13579][26]|[2468][048])00)|(?:[0-9]{2}(?:(?:[13579][26])|(?:[2468][048]|0[48]))))(?:(?:(?:09|04|06|11)(?:0[1-9]|1[0-9]|2[0-9]|30))|(?:(?:01|03|05|07|08|10|12)(?:0[1-9]|1[0-9]|2[0-9]|3[01]))|(?:02(?:0[1-9]|1[0-9]|2[0-9]))))|(?:[0-9]{4}(?:(?:(?:09|04|06|11)(?:0[1-9]|1[0-9]|2[0-9]|30))|(?:(?:01|03|05|07|08|10|12)(?:0[1-9]|1[0-9]|2[0-9]|3[01]))|(?:02(?:[01][0-9]|2[0-8])))))$/;

        if (dateFrom.match(fecha) && dateTo.match(fecha)) {
            return CuerpoModel.find({
                isin: cuenta,
                fecha: {
                    $gt: +dateFrom - 1,
                    $lt: +dateTo + 1
                },
            })
        } else {
            this.res.status(404);
            this.res.render('404', {
                layout: 'layout'
            });
        }
    }
}
module.exports = fetchDataController;
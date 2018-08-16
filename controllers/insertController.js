let Controller = require('../controllers/controller');

let MakeObject = require('../service/makeObject');

let csv = require("fast-csv");
let fs = require('fs');




class insertController extends Controller {
    constructor(req, res, next) {
        super(req, res, next);
        
        const filename = req.file.originalname;
        let csvfile = __dirname + "/../public/files/" + filename;
        this.stream = fs.createReadStream(csvfile);
        this.stream.on('ready', () => {})
    }

    insert() {

        return new Promise((resolve, reject) => {
            let makeObject = new MakeObject();
            csv
                .fromStream(this.stream, {
                    objectMode: true,
                    headers: false,
                    delimiter: ";",

                })
                .on("data", function (row) {
                    makeObject.extracCab(row);
                    makeObject.extracCuerpo(row);


                }).on("end", function () {
                    resolve([makeObject.getCabecera(), makeObject.getCuerpo(), makeObject.getCuerpoErrores(), makeObject.getNumeroCorrectos()]);
                });
        });
    }

    index(data) {
        if (data[0].length === 0) {
            return this.res.render('insert', {
                title: 'Finametrix'
            });
        };
        if (data[3] != 0 || data[2].length > 0) {
            let datos = data[3];
            let errores = data[2];
            this.res.render('insert', {
                registros: datos,
                errores: errores
            })
        } else {
            this.res.render('insert', {
                title: 'Finametrix'
            })
        }

    }

}
module.exports = insertController;
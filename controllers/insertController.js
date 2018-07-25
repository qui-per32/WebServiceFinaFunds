var Controller = require('../controllers/controller');

let MakeObject = require('../service/makeObject');

var csv = require("fast-csv");
var fs = require('fs');

var csvfile = __dirname + "/../public/files/file.csv";



class insertController extends Controller {
    constructor(req, res, next) {
        super(req, res, next);
        this.makeObject = new MakeObject();
        this.stream = fs.createReadStream(csvfile);
        this.stream.on('ready', () => {
            console.log("Preparado");
        })
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
                    // console.log(makeObject.getCabecera());
                    // console.log(makeObject.getCuerpo());
                    // console.log(makeObject.getNumeroCorrectos());

                    console.log("finalizada carga");
                    resolve([makeObject.getCabecera(), makeObject.getCuerpo(), makeObject.getCuerpoErrores(),makeObject.getNumeroCorrectos()]);
                   

                });
        });


        //stream.pipe(csvStream);
        // res.json({
        //     success: "Data imported successfully.",
        //     status: 200
        // });
    }

    index(data) {
        //    console.log(data[3]);
        if (data[0].length === 0) {
            console.log("no existe");
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
            this.res.render('insert',{
                title: 'Finametrix'
            })
        }
       
    }

}
module.exports = insertController;
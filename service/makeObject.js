let Cabecera = require('../models/cabeceraModel');
let Cuerpo = require('../models/cuerpoModel');

class makeObject {
    constructor() {
        this.objetoCabecera = [];
        this.objetoCuerpo = [];
        this.objetoCuerpoErrores = [];
        this.sumSubidos = 0;
    }

    extracCab(data) {


        if (data[0] === "VA") {
            
            let cabecera = new Cabecera({
                "tipo": data[0],
                "isin": data[1],
                "nombre": data[2],
                "divisa": data[3],
                "familia": data[4]
            })
            cabecera.save(err => {    
                if (err) console.error(err);
                console.log("Almacenado");
            })
            this.objetoCabecera.push(cabecera);
        }
    }

    extracCuerpo(data) {

        let fecha = /^(?:(?:(?:(?:(?:[13579][26]|[2468][048])00)|(?:[0-9]{2}(?:(?:[13579][26])|(?:[2468][048]|0[48]))))(?:(?:(?:09|04|06|11)(?:0[1-9]|1[0-9]|2[0-9]|30))|(?:(?:01|03|05|07|08|10|12)(?:0[1-9]|1[0-9]|2[0-9]|3[01]))|(?:02(?:0[1-9]|1[0-9]|2[0-9]))))|(?:[0-9]{4}(?:(?:(?:09|04|06|11)(?:0[1-9]|1[0-9]|2[0-9]|30))|(?:(?:01|03|05|07|08|10|12)(?:0[1-9]|1[0-9]|2[0-9]|3[01]))|(?:02(?:[01][0-9]|2[0-8])))))$/;
        let numero = /^[0-9]{1,}(\,[0-9]{1,})?$/
        if (data[0] === "VL") {
            //console.log("Es cuerpo");
            if (fecha.test(data[2]) == false || numero.test(data[3]) == false) {
                let cuerpo =
                    {
                        "tipo": data[0],
                        "isin": data[1],
                        "fecha": data[2],
                        "precio": data[3]
                    };
                    
                this.objetoCuerpoErrores.push(cuerpo);
            } else {
                let cuerpo = new Cuerpo(
                    {
                        "tipo": data[0],
                        "isin": data[1],
                        "fecha": parseInt(data[2]),
                        "precio": parseFloat(data[3].replace(',', '.'))
                    });
                cuerpo.save(err => {
                     if (err) console.error(err);
                     console.log("Almacenado");
                 })
                this.sumSubidos++;
                this.objetoCuerpo.push(cuerpo);
            }

        }

    }



    // addObject(data){

    //     for(let i=0;i<this.objetoCabecera.length;i++){

    //             if ((this.objetoCabecera[i][1] == data[1]) && (this.objetoCabecera[i][0]==="VL"))
    //             {
    //                 console.log(data);
    //                 this.objetoCuerpo.push(data);
    //             }


    //     }
    // }

    getCabecera() {
        return this.objetoCabecera;
    }

    getCuerpo() {
        return this.objetoCuerpo;
    }
    getCuerpoErrores() {
        return this.objetoCuerpoErrores;
    }

    getNumeroCorrectos() {
        return this.sumSubidos;
    }
}

module.exports = makeObject;
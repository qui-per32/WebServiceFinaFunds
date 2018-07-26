class calcService {
    constructor() {
        this.result = 0;
        this.total = 0;
    }



    resolveDataCalc(isin, dateFrom, dateTo, data) {
        // let isin = this.req.query.isin;
        // let dateFrom = this.req.query.dateFrom;
        // let dateTo = this.req.query.dateTo;
        // console.log(data);


        let precioFin = 0;
        let precioInicio = 0;
        let precio = [];
        let varianza = [];

        if (data[0].precio) {
            precioInicio = data[0].precio;

        }
        if (data[data.length - 1].precio) {
            precioFin = data[data.length - 1].precio;
        }
        // data = JSON.parse(JSON.stringify(data))
        // console.log(data[0].precio,data[0],data[data.length-1]);
        this.result = precioFin - precioInicio
        this.total = this.result / precioInicio;
        console.log("performance->" + this.total);

        let media = 0;
        // console.log(data.length);

        for (let i = 0; i < data.length; i++) {
            precio.push(data[i].precio)

        }

        for (let i = 0; i < precio.length; i++) {
            media += precio[i];

        }

        media = media / precio.length;
        // console.log(media);


        for (let i = 0; i < precio.length; i++) {
            varianza.push(Math.pow(precio[i] - media, 2))
        }

        let varianzaTotal = 0;

        for (let i = 0; i < varianza.length; i++) {
            varianzaTotal += varianza[i]
        }

        varianzaTotal = varianzaTotal / (precio.length - 1);

        let volatility = Math.sqrt(varianzaTotal)

        console.log("volavility->"+ volatility);
        
        // console.log(isin);

        // console.log(data[0].precio);




    }


}



module.exports = calcService;
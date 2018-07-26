class calcService {
    constructor() {
        this.result = 0;
        this.total = 0;
    }



    resolveDataCalc(data) {
        

        let precioFin = 0;
        let precioInicio = 0;

        if (data[0].precio){
            precioInicio = data[0].precio;

        }
        if (data[data.length - 1].precio){
            precioFin = data[data.length - 1].precio;
        }
        // data = JSON.parse(JSON.stringify(data))
        // console.log(data[0].precio,data[0],data[data.length-1]);
        this.result = precioFin - precioInicio 
        this.total = this.result / precioInicio;
        console.log(this.total);
        

    }


}



module.exports = calcService;
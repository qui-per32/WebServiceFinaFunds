class calcService {



    resolveDataCalc(data) {

        return new Promise((resolve, reject) => {
            let result = {};
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
            result.performance = (precioFin - precioInicio) / precioInicio;

            let media = 0;

            for (let i = 0; i < data.length; i++) {
                precio.push(data[i].precio)
            }

            for (let i = 0; i < precio.length; i++) {
                media += precio[i];
            }

            media = media / precio.length;

            for (let i = 0; i < precio.length; i++) {
                varianza.push(Math.pow(precio[i] - media, 2))
            }

            let varianzaTotal = 0;

            for (let i = 0; i < varianza.length; i++) {
                varianzaTotal += varianza[i]
            }

            varianzaTotal = varianzaTotal / (precio.length - 1);

            result.volatility = Math.sqrt(varianzaTotal)
            resolve(result);
            // reject('error calculando performance y volavility');
        })
    }


}



module.exports = calcService;
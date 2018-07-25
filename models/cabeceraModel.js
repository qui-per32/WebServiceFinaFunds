const Mongoose = require('mongoose');

let cabeceraSchema = Mongoose.Schema({
    tipo: String,
    isin: String,
    nombre: String,
    divisa: String,
    familia: String,
});

let valor = Mongoose.model('cabeceraModel', cabeceraSchema);
module.exports = valor;
const Mongoose = require('mongoose');

let cabeceraSchema = Mongoose.Schema({
    tipo: String,
    isin: String,
    nombre: String,
    divisa: String,
    familia: String,
});

let cabecera = Mongoose.model('cabecera', cabeceraSchema);
module.exports = cabecera;
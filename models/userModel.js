const Mongoose = require('mongoose');

let valorSchema = Mongoose.Schema({
    tipo: String,
    isin: String,
    nombre: String,
    divisa: String,
    familia: String,
    cuerpo: []
});

let valor = Mongoose.model('valor', valorSchema);
module.exports = valor;
const Mongoose = require('mongoose');

let CuerpoSchema = Mongoose.Schema({
    tipo: String,
    isin: String,
    fecha: Number,
    precio: Number
});

let valor = Mongoose.model('cuerpoModel', CuerpoSchema);
module.exports = valor;
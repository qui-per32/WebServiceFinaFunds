const Mongoose = require('mongoose');

let CuerpoSchema = Mongoose.Schema({
    tipo: String,
    isin: String,
    fecha: Number,
    precio: Number
});

let cuerpo = Mongoose.model('cuerpo', CuerpoSchema);
module.exports = cuerpo;
const Mongoose = require('mongoose');

module.exports = function connect() {
    Mongoose.connect('mongodb://localhost:27017/finafunds', {
        useNewUrlParser: true
    }, (error) => {
    })
    
    
}

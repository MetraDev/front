const mongoose = require('mongoose');
const {URI} = process.env.MongoDB;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/unicorn', { useNewUrlParser: true });
//mongoose.connect(`mongodb://${URI}`, { useNewUrlParser: true });

module.exports = mongoose;
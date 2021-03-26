const mongoose = require('./mongo');

const News = new mongoose.Schema({
    title: String,
    description: String,
    url: String,
    urlofimg: String,
    createdOn: {type: Date, default: Date.now}

});

module.exports = mongoose.model('News', News);
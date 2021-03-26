const { Mongoose } = require("mongoose")

const mongoose = require('./mongo');

const News = new mongoose.Schema({
    email: String,
    Msg: String,
    createdOn: {type: Date, default: Date.now}

});
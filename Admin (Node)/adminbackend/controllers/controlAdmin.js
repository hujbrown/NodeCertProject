const fetch = require('node-fetch');

// Has environment variables
const config = require('../config');

exports.dashboard = (req, res, next) => {
    res.status(200).render('dashboard',{errorMsg: null, successMsg: null, isLoggedIn: true});
}


// exports.getNewsForm = (req, res, next) => {
//     res.status(200).render('newsForm');
// }
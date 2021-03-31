var express = require('express');
var router = express.Router();
const News = require('../models/news');


/* edit article api. */


router.post('/', function(req, res, next) {
  console.log(req.body._id);
  console.log('Router put received')
  News.findOneAndUpdate({_id: req.body._id }, 
    {title: req.body.title ,
     description: req.body.description,
     url: req.body.url,
     urlofimg: req.body.urlofimg},{new: true}, (err, doc) =>{
    if (!err){
      //res.send("<h1>You article will be published soon...</h1>");
      res.send(" <h1>Post has been Edited</h1>");
      console.log("ok" + doc);
    }
    else{
        //console.log(doc);
        //console.log(err);
    }
  })
 });



module.exports = router;
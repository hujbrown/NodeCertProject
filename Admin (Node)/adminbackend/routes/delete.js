var express = require('express');
var router = express.Router();
const News = require('../models/news');


/*  delete api. */

 router.post('/delete', function(req, res, next) {
 News.findOneAndDelete({_id: req.body._id }, function (err, docs) {
  if (err){
      console.log(err)
  }
  else{
      console.log("Deleted User : ", docs);
      res.send(" <h1>Post has been Deleted</h1>");
  }
})
});

module.exports = router;
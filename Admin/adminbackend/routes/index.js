var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/register', (req,res) => {
  console.log("/register : req.body ==> ", req.body)
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) return res.status(500).send('Error on the server.');
    let htmlMsg
    if(!user){ //add new user
      const hashedPasword = bcrypt.hashSync(req.body.password, 8);
      User.create({
          name: req.body.name,
          email: req.body.email,
          password: hashedPasword,
      }, (err, user) => {
          if(err) return res.status(500).send('There was a problem registering user')
          htmlMsg = encodeURIComponent('Registered OK !');
          res.redirect('/?msg=' + htmlMsg)
      })
    }else{ //duplicate
      htmlMsg = encodeURIComponent('Email existing, please enter a new one ...');
      res.redirect('/?msg=' + htmlMsg);
    }
  })     
})


router.post('/login', (req, res) => {

  User.findOne({ email: req.body.email }, (err, user) => {
    console.log("/login : user => ", user)
    if (err) return res.status(500).send('Error on the server.');
    let htmlMsg
    if (!user) { 
      htmlMsg = encodeURIComponent('Email not found, try again ...');
      res.redirect('/?invalid=' + htmlMsg);
    }else{
      const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid) {
        return res.status(401).send({ auth: false, token: null });
      }

      var token = jwt.sign({ id: user._id }, config.secret, {
          expiresIn: 86400 // expires in 24 hours
      });
      localStorage.setItem('authtoken', token)

      res.redirect(`/admin/homepage`)
    }
  });
});

module.exports = router;

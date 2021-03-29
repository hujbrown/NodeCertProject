var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const adminRoutes = require('./routes/routeAdmin');
const authRoutes = require('./routes/routeAuth');
const newsRoutes = require('./routes/routeNews');
const userRoutes = require('./routes/routeUser');
var homepageRouter = require('./routes/homepage');
var addRouter = require('./routes/add')
var newsListRouter =require('./routes/api')

var app = express();

// Middleware used to parse the request data
const bodyParser = require('body-parser');
// Middleware for application/json
app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Middleware for application/json
app.use(bodyParser.json());

// Middleware for URL encoded
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  if (req.body.successMsg) {
      console.log('should show successfully registered message')
      res.render('index', {errorMsg: null, successMsg: req.body.successMsg, isLoggedIn: false}); // Landing Page
  } else {
      res.render('index', {errorMsg: null, successMsg: null, isLoggedIn: false}); // Landing Page
  }
});

app.get('/register', (req, res) => {
  if (req.body.successMsg) {
      console.log('should show successfully registered message')
      res.render('index', {errorMsg: null, successMsg: req.body.successMsg, isLoggedIn: false}); // Landing Page
  } else {
      res.render('register', {errorMsg: null, successMsg: null, isLoggedIn: false}); // Landing Page
  }
});
app.use('/homepage', homepageRouter);
app.use('/add', addRouter);
app.use('/api', newsListRouter);
app.use('/admin', adminRoutes);
app.use('/api/sec/auth', authRoutes);
app.use('/api/sec/news', newsRoutes);
app.use('/api/sec/users', userRoutes);
//app.use('/', indexRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
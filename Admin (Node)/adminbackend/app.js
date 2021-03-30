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

const userRoutes = require('./routes/routeUser');


var homepageRouter = require('./routes/homepage');
var addRouter = require('./routes/add')
var newsListRouter =require('./routes/api')
var app = express();
var http = require('http').createServer(app);
const io_port =  3200;
const port = 3000;
const io = require('socket.io')(http);

var cors = require('cors')

app.use(cors())


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

app.get('/chat', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/register', (req, res) => {
  if (req.body.successMsg) {
      console.log('should show successfully registered message')
      res.render('register', {errorMsg: null, successMsg: req.body.successMsg, isLoggedIn: false}); // Landing Page
  } else {
      res.render('register', {errorMsg: null, successMsg: null, isLoggedIn: false}); // Landing Page
  }
});

app.use('/admin', adminRoutes);
app.use('/api/sec/auth', authRoutes);

app.use('/api/sec/users', userRoutes);
//app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/homepage', homepageRouter);
app.use('/add', addRouter);
app.use('/api', newsListRouter);


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




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

http.listen(io_port, () => {
    console.log(`Chat app listening on *:${io_port}`);
});

io.on('connection', (socket) => { /* socket object may be used to send specific messages to the new connected client */
    console.log('New User connected');

  // attaching listener to the emitted event
  socket.on('chat', (data) => {
    // Chat message received
    console.log(data);

    // Let's send chat message to all connected socket clients.
    let payload = {
      message: data.chatMsg,
      nickName: data.nickName
    };

    socket.emit('newChat', payload);
    socket.broadcast.emit('newChat', payload);
  });
});

module.exports = app;

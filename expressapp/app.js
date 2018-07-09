var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var recipeRouter = require('./routes/recipe');
var cors = require('cors');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(cors({
  origin: ['http://localhost:4200','http://127.0.0.1:4200'],
  credentials: true
}))

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Credentials', true);
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://Kunasasin:passw0rd@ds121871.mlab.com:21871/baza');

//passport
var passport = require('passport');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);
app.use(session({
  name: 'myname.sid',
  resave: false,
  saveUninitialized: false,
  secret: 'secret',
  cookie: {
    age: 36000000,
    httpOnly: false,
    secure: false
  },
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
require('./passport-config');
app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/recipe', recipeRouter);

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

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');

//routes
var indexRouter = require('./routes/index');
var signupRouter = require('./routes/signup');
var loginRouter = require('./routes/login');
var getinfoRouter = require('./routes/getinfo');
var getcollectioninfoRouter = require('./routes/getcollectioninfo');
var createboardRouter = require('./routes/createboard');
var staredRouter = require('./routes/stared');
var creategroupRouter = require('./routes/creategroup');
var changecollecionRouter = require('./routes/changecollection');


//use passport
const passport    = require('passport');

require('./passport/passport');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//init passport
app.use(passport.initialize());

app.use('/api', indexRouter);
app.use('/api/signup', signupRouter);
app.use('/api/login', loginRouter);

// use passport jwt in /getinfo route
app.use('/api/getinfo',passport.authenticate('jwt',{session:false}), getinfoRouter);

//use passport jwt in /getcollection route
app.use('/api/getcollectioninfo',passport.authenticate('jwt',{session:false}), getcollectioninfoRouter);

//use passport jwt in /createboard route
app.use('/api/createboard',passport.authenticate('jwt',{session:false}), createboardRouter);

//use passport jwt in /stared route
app.use('/api/stared',passport.authenticate('jwt',{session:false}), staredRouter);


//use passport jwt in /creategroup route
app.use('/api/creategroup',passport.authenticate('jwt',{session:false}), creategroupRouter);

//use passport jwt in /changecollection route
app.use('/api/changecollection',passport.authenticate('jwt',{session:false}), changecollecionRouter);



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

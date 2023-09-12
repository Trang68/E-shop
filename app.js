const express = require('express');
const path = require('path');

var indexRouter = require('./routes/index');
//var eshopRouter = require('./routes/department');
var app = express();

// view engine setup
app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'views'))); 

//app.use('/departments', eshopRouter);
app.use('/', indexRouter);

//Get all event
// app.get('/', function(req, res) {
//   // ejs render automatically looks in the views folder
//   res.render('index');
// });


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

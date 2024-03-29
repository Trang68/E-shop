const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");

var indexRouter = require('./routes/index');
var app = express();

// view engine setup
app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'public'));

app.set('view engine', 'html');
app.use(express.json());

// app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public'))); 

// app.use(express.static(__dirname));


// get our app to use body parser 
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/', indexRouter);


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

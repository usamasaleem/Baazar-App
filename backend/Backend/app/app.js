var create_error = require('http-errors');
var express = require('express');
var path = require('path');
var cookie_parser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors'); 



var app = express();



var mongoose = require('mongoose');


create_db_connection();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookie_parser());
app.use(express.static(path.join(__dirname, 'public')));





// ────────────────────────────────────────────────────────────────────────────────
// ────────────────────────────────────────────────────────────────────────────────
// ────────────────────────────────────────────────────────────────────────────────


// ADD ROUTES AND THEIR ROUTES HERE //

// START


var company_router             =  require('./app_server/routes/company'           );

app.use('/company'         ,  company_router            );

// END

// ADD ROUTES AND THEIR ROUTES HERE //


// ────────────────────────────────────────────────────────────────────────────────
// ────────────────────────────────────────────────────────────────────────────────
// ────────────────────────────────────────────────────────────────────────────────








// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(create_error(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;







// DB Connection //

function create_db_connection(uri) {
  mongoose.connect("mongodb://localhost:27017/CreativeSpree", { useNewUrlParser: "true" });

  mongoose.connection.on("error", (err) => {

    console.log("err", err);

  });

  mongoose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected");
  });

}
require('./api/models/db.js'); 
require('./api/models/authenticationUser.js');

var express = require('express');
var app=express();
var adminRoutes = require('./api/routes');
var routes = require('./api/routes/retailer.js');
var bodyParser = require('body-parser');
var session=require('express-session');
var cookieSession = require('cookie-session')
//to give path
var path = require('path');
require('./api/config/passport.js');
var passport=require('passport');
var auth=require('./api/routes/auth.js')



// Add middleware to console log every request
app.use(function(req, res, next) {
    console.log(req.method, req.url);
  
    next(); 
  });

  
//routing 

app.use(express.static(path.join(__dirname, 'public')));
// Enable parsing of posted forms
app.use(bodyParser.urlencoded({ extended: true }));app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept");
next();
});

// app.use(session({ secret: 'keyboard cat', resave: true, cookie: { maxAge: 60000 }}));
app.use(cookieSession({
  name: 'session',
  keys: ['keyboard cat']
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(require('./api/routes/authIndex.js'));
app.use('/', adminRoutes,auth.optional);
app.use('/retailer', routes);

// app.get('/home',function(req,res){
//     res
//     .status(200)
//     .send("hanjee")
// });
//sending a file to browser
// app.get('/file',function(req,res){
//     res
//     .status(200)
//     .sendFile(path.join(__dirname,'public','index.html'));
// });
// Define the port to run on
app.set('port', 3000);
var server=app.listen(app.get('port'),function(){
    console.log("see magic on port in function" + " "+server.address().port);
    
});

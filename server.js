// import dependencies
var express = require('express');
var bodyParser = require('body-parser');
//var expressLayouts = require('express-ejs-layouts');
var app = express();
var port = 4000;


//use ejs
app.set('view engine', 'ejs');
//app.use(expressLayouts);

//use bodyparser
app.use(bodyParser.urlencoded({ extended: true }));




//route the app
var router = require('./app/routes');
app.use('/', router);


//set the static to be used by express
app.use(express.static(__dirname + '/public'));



//start the server
app.listen(process.env.PORT || port, function () {
    console.log('listening on port 3000');
});
















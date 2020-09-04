var note = require('./data/noteData.js') 

// call packages needed

var express = require('express');  //call express
var app = express();    // define app using express
var bodyParser = require('body-parser');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//setting port
var port = process.env.PORT || 8080;

// Routes for API
var router =express.Router();

//middleware
router.use(function(req, res, next){
    console.log('stuff is happening');
    next();
});

// Test route
router.get('/', function (req, res) {
    res.json({ message: 'horray!'});
});


//more routes

//register routes

//all routes will be prefixed w/api
app.use('/api', router);


// Start Server

app.listen(port);
console.log('MAgic happens on port ' + port);



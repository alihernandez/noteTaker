

// call packages needed

var express = require('express');  //call express
var app = express();    // define app using express
 

//middleware parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//setting port
var port = process.env.PORT || 8080;

// // Routes for API
// var router =express.Router();

// //middleware
// router.use(function(req, res, next){
//     console.log('stuff is happening');
//     next();
// });

// // Test route
// router.get('/', function (req, res) {
//     res.json({ message: 'horray!'});
// });
app.use(express.static("public"))

// //more routes

//register routes
var router = require("./routes/apiRoutes")
//all routes will be prefixed w/api

app.use(router);

var htmlRouter = require("./routes/htmlRoutes");
app.use(htmlRouter)
// Start Server

app.listen(port);
console.log('MAgic happens on port ' + port);



var express = require('express');
var path=require('path')
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express' });
//res.send("<h2>Hello This Is Express Developed By Saranya</h2>");
//res.sendFile(path.resolve("public/form.html"))
//});

//router.get('/login', function(req, res, next) {
  // res.render('index', { title: 'Express' });
 //res.send("<h2>Hello This Is Express Developed By Saranya</h2>");
 //res.sendFile(path.resolve("public/form.html"))
 //});
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
 //res.send("<h2>Hello This Is Express Developed By Saranya</h2>");
 res.sendFile(path.resolve("public/index1.html"))
 });
 router.get('/login1', function(req, res, next) {
  res.render('index', { title: 'Express' });
 //res.send("<h2>Hello This Is Express Developed By Saranya</h2>");
 res.sendFile(path.resolve("public/login1.html"))
 });
 router.get('/signup', function(req, res, next) {
 // res.render('index', { title: 'Express' });
 //res.send("<h2>Hello This Is Express Developed By Saranya</h2>");
 res.sendFile(path.resolve("public/signup.html"))
 });
 router.get('/contactus', function(req, res, next) {
  //res.render('index', { title: 'Express' });
 //res.send("<h2>Hello This Is Express Developed By Saranya</h2>");
 res.sendFile(path.resolve("public/contactus.html"))
 });
 /*router.post('/singup', function(req, res, next) {
  //res.render('index', { title: 'Express' });
 //res.send("<h2>Hello This Is Express Developed By Saranya</h2>");
 var ouput ="user name:" +req.loginid
 res.send(output);
 });*/
 router.post('/textboxdata', function(req, res, next) {
  //res.render('index', { title: 'Express' });
 //res.send("<h2>Hello This Is Express Developed By Saranya</h2>");
 var username=req.body.username
 var female=req.body.female
  var output="<table border=1><tr><td>Username<td>"+username+"<tr><td>Gender<td>"+female;
  res.send(output)
 });
 router.post('/formdata', function(req, res, next) {
  //res.render('index', { title: 'Express' });
 //res.send("<h2>Hello This Is Express Developed By Saranya</h2>");
 var username=req.body.username
 var female=req.body.female
  var output="<table border=1><tr><td>Username<td>"+username+"<tr><td>Gender<td>"+female;
  res.send(output)
 });
 
module.exports = router;

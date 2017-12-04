var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('assets'));
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function (req, res){
  res.render('myPug-template', {
    appTitle: 'myPug App',
    mainLead: 'unleash the pug',
    navBut: 'Pug in'
  });
});

app.get('/auth/google', function (req, res){
  res.render('pugLogin', {
    appTitle: 'myPug App',
    mainLead: 'unleash the pug',
    navBut: 'Pug in'
  });
});

var server = app.listen(3000, 'localhost', function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Pug app is avilable on http://' + host + ':' + port);
});

app.use(function (req, res, next) {
  res.status(404).send('oops! something went wrong.');
})

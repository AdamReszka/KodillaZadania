var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
var stringifyFile = '';

app.use(bodyParser.json());
app.use(express.static('assets'));
app.use(function(req, res, next){
    console.log('Hej, jestem pośrednikiem między żądaniem a odpowiedzią!');
    next();
});

app.get('/', function (req, res) {
  res.send('Hello world');
});

app.get('/userform', function (req, res) {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.end(JSON.stringify(response));
});
/*
app.get('/test/:wpis', function (req, res) {
  res.send('wpisałeś tu ' + req.params.wpis);
})

app.get('/getNote', function (req, res) {
  console.log('Otrzymałem żądanie GET do strony /getNote');
  fs.readFile('./test.json', 'utf-8', function(err, data) {
    if (err) throw err;
    stringifyFile = data;
    res.send(stringifyFile);
  });


});

app.post('/updateNote', function (req, res) {
  stringifyFile += req.params.note;
  fs.writeFile('./test.json', stringifyFile, function(err) {
    if (err) throw err;
    console.log('file update');
  });
  res.send('Dopisano' + req.params.note);
});
*/

var server = app.listen(3000, 'localhost', function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});

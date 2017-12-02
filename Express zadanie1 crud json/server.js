var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
var stringifyFile = '';

app.use(bodyParser.json());

app.get('/test', function (req, res) {
  res.send('trochę działa');
});
/*
app.get('/test/:wpis', function (req, res) {
  res.send('wpisałeś tu ' + req.params.wpis);
})
*/
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
app.listen(3000);

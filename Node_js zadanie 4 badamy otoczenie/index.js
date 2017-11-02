var fs = require('fs');
var myFiles;
fs.readdir('../Node_js zadanie 4 badamy otoczenie','utf-8', function(err, files){
  myFiles = files;
  console.log('To pliki w folderze: '+ myFiles);
  fs.open('dataFromDir.txt', 'w+' ,function (err) {
    if (err) throw err;
    fs.writeFile('./dataFromDir.txt', myFiles, function(err){
      if (err) throw err;
      console.log('Zapisano!');
      fs.readFile('./dataFromDir.txt', 'utf-8', function(err, data){
        console.log('Dane po zapisie w utworzonym pliku: ');
        console.log(data);
      })
    });
  });
});

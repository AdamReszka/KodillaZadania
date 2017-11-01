process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function(){
  var OSinfo = require('../modules/OSinfo');
  var input = process.stdin.read();
  if(input !== null){
    var instruction = input.toString().trim();
    switch(instruction){
      case '/exit':
        process.stdout.write('Quitting app!\n');
        process.exit();
        break;
      case '/sayhello':
        process.stdout.write('hello, hi my friend!\n');
        break;
      case '/getOSinfo':
        OSinfo.print();
        break;
      default:
        process.stderr.write('This is wrong instruction! Try again!\n');
    }
  }
});

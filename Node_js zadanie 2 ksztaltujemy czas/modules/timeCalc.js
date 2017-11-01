var os = require('os');

function timeCalc(){
    var myTime = os.uptime();
    var myHours = Math.floor(myTime/3600);
    var secondsLeft = (myTime - myHours * 3600);
    var myMinutes = Math.floor(secondsLeft/60);
    var mySeconds = Math.floor(secondsLeft - myMinutes * 60);
    process.stdout.write('System jest aktywny ')
    if (myHours > 0){
      process.stdout.write(myHours + ' godz.');
    }
    if ((myHours > 0)&&(myMinutes > 0)){
      process.stdout.write(' ');
    }
    if (myMinutes > 0){
      process.stdout.write(myMinutes + ' min');
    }
    if ((myHours > 0)&&(mySeconds > 0)||(myMinutes > 0)&&(mySeconds > 0)){
      process.stdout.write(' ');
    }
    if (mySeconds > 0){
      process.stdout.write(mySeconds + ' sek.\n');
    }
}
exports.print = timeCalc;

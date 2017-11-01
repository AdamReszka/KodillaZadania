var os = require('os');
var colors = require('colors');

function getOSinfo(){
  var timeCalc = require('./timeCalc');
  var type = os.type();
  var release = os.release();
  if(type === 'Darwin'){
    type = 'OSX';
  } else if(type === 'Windows_NT'){
    type = 'Windows';
  }
  var cpu = os.cpus()[0].model;
  var uptime = os.uptime();
  var userInfo = os.userInfo();
  console.log('System: '.gray, type);
  console.log('Release: '.red, release);
  console.log('CPU model:'.blue, cpu);
  console.log('Uptime: ~'.green, (uptime/60).toFixed(0), 'min');
  timeCalc.print();
  console.log('User name: '.yellow, userInfo.username);
  console.log('Home dir: '.magenta, userInfo.homedir);
}

exports.print = getOSinfo;

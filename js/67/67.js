var a = [];
const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
  input: fs.createReadStream('/users/kyle/projectEuler/js/67/triangle.txt')
});
rl.on('line', function (line) {
  a.push(line.split(' '))
});

rl.on('close', function (){
  var lines = a.length;

  for (var i = lines - 2; i >= 0; i--) {
    for (var j = 0; j <= i; j++) {
      a[i][j] = parseInt(a[i][j])+Math.max(parseInt(a[i+1][j]), parseInt(a[i+1][j+1]));
    }
  }
console.log(a[0]);
});

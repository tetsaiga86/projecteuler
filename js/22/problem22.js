var names = [];
const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
  input: fs.createReadStream('/users/kyle/projectEuler/js/22/names.json')
});

var baseLetter = 'A'.charCodeAt(0)-1
function nameValue(name){
  var nameTotal=0
  for (var i = 0; i < name.length; i++) {
    nameTotal+=name.charCodeAt(i)-baseLetter
  }
  return nameTotal
}

rl.on('line', function (line) {
  names=JSON.parse(line)
  names=names.sort()
  var totalNameScore=0
  for (var i = 0; i < names.length; i++) {
    totalNameScore+=(i+1)*nameValue(names[i])
  }
  console.log(totalNameScore)
});

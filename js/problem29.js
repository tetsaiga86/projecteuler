var bigInt = require('big-integer');
var numbers = [];

function intCombo(low,high){
  var posAns;
  for (var a = low; a <= high ; a++) {
    for (var b = low; b <= high ; b++) {
      posAns=bigInt(a).pow(b).toString();
      if (!numbers.includes(posAns)) {
        numbers.push(posAns)
      }
    }
  }
  numbers.sort(function(a, b) {
    return a - b;
  });
  console.log(numbers.length, numbers)
}

intCombo(2,100)

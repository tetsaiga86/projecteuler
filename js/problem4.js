
var mul;

function makeNum() {
  var max = 0;
  for (var i = 999; i > 100; i--) {
    for (var j = i; j > 100; j--) {
      mul = j * i;
      if (checkNum(mul) && mul > max) {
          max = i * j;
      }
    }
  }
  return max;
}

function checkNum(){
  if (mul.toString()==mul.toString().split('').reverse().join('')){
    return true;
  }else{
    return false;
  }
}

console.log(makeNum());

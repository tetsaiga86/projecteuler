// biginteger.js
var bigInt = require("big-integer");
var a = 1;
var b = 1;
var ind = 2;
var end=0;
var temp;

while(end<1000){
  temp = bigInt(b);
  b=bigInt(b).add(bigInt(a))
  a=temp;
  ind++;
  end=b.toString().length
}
console.log(ind);

var ans = 0;
var facts = [];

var factorial = function(x){
  if (x == 0){
    return 1;
  }

  var y = x;
  for (var i = 1; i < x; i++) {
    y *= i;
  }
  return y;
};

for (var i = 0; i < 10; i++) {
  facts[i] = factorial(i);
}

for (var i = 10; i < 2540161; i++) {
  var sum = 0;
  var number = i;
  while (number > 0) {
    var d = number % 10;
    number /= 10;
    sum += facts[d];
  }

  if(sum == i){
    ans += i;
  }
}

// var factorial = function(x){
//   if (x == 0){
//     return 1;
//   }
//
//   var y = x;
//   for (var i = 1; i < x; i++) {
//     y *= i;
//   }
//   return y;
// };
//
// for (var j = 10; j < 2540161; j++) {
//   var sum = 0;
//   var number = j;
//
//   while (number > 0){
//     var d = number % 10;
//     number /= 10;
//     sum += factorial(d);
//   }
//
//   if (sum == j) {
//     console.log('if');
//     ans += j;
//   }
// }

console.log(ans);

var denproduct = 1;
var nomproduct = 1;

for (var i = 1; i < 10; i++) {
  for (var den = 1; den < i; den++) {
    for (var nom = 1; nom < den; nom++) {
      if ((nom * 10 + i) * den == nom * (i * 10 + den)) {
        denproduct *= den;
        nomproduct *= nom;
      }
    }
  }
}

var gcd = function(a, b){
  var y, x;

  if (a > b) {
    x = a;
    y = b;
  } else {
    x = b;
    y = a;
  }

  while (x % y != 0) {
    var temp = x;
    x = y;
    y = temp % x;
  }

  return y;
};

console.log(denproduct /= gcd(nomproduct, denproduct));

function isPandigital(num) {
  var digits = 0;
  var count = 0;
  var tmp;

  while (num > 0) {
    tmp = digits;
    digits = digits | 1 << ((num % 10) - 1);
    if (tmp == digits) {
      return false;
    }

    count++;
    num /= 10;
  }
  return digits == (1 << count) - 1;
}

function concat(a, b) {
  var c = b;
  while (c > 0) {
    a *= 10;
    c /= 10;
  }
  return a + b;
}

var products = [];
var sum = 0;
var prod, compiled;

for (var m = 2; m < 100; m++) {
  var nbegin = (m > 9) ? 123 : 1234;
  var nend = 10000 / m + 1;

  for (var n = nbegin; n < nend; n++) {
    prod = m * n;
    compiled = concat(concat(prod, n), m);
    if (compiled >= 1E8 && compiled < 1E9 && isPandigital(compiled)) {
      if (!products.includes(prod)) {
        products.push(prod);
      }
    }
  }
}

for (var i = 0; i < products.length; i++) {
  sum += products[i];
}

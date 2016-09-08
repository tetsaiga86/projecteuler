function isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return true;
}
var aMax = 0, bMax = 0, nMax = 0;

for (var a = -1000; a <= 1000; a++) {
  for(var b = -1000; b <= 1000; b++){
    var n = 0;
    while (isPrime(Math.abs(n * n + a * n + b))) {
      n++;
    }

    if (n > nMax) {
      aMax = a;
      bMax = b;
      nMax = n;
    }
  }
}

console.log(aMax*bMax);

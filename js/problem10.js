var primeSums=0;

function isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return true;
}

for (var i = 2; i <= 2000000; i++) {
  if(isPrime(i)){
    primeSums+=i;
  }
}

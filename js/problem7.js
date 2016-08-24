var primeCounter=0, topPrime=0;

function isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return true;
}

var num=2;
while (primeCounter<10001) {
  if(isPrime(num)){
    topPrime=num;
    primeCounter++;
  }
  num++;
}
console.log(topPrime)

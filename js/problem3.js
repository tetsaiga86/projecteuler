var largestPrimeFactor=function(num){
  var primeFactors=[];
  var primes = [];
  function isPrime (n){
    if (n < 2) return false;
    var q = Math.floor(Math.sqrt(n));
  //for (var index = 0; index < primes.length; index += 1) {
    for (var index in primes) {
      if (n % primes[index] == 0) {
        return false;
      }
      if (primes[index] * primes[index] > n) {
        return true;
      }
    }
    return true;
  }

  var numWasReduced = false;

  for(i=2;i<=num/2;i++){
    if(isPrime(i)){
      primes.push(i)

      if ( num % i == 0) {
        primeFactors.push(i);
        while(num%i==0){
          num/=i
          numWasReduced = true;
        }
      }
    }
  }
  //console.log(primeFactors,num)


  var candidate1 = primeFactors[primeFactors.length-1]
  var candidate2 = num;

  if ( !numWasReduced ) {
    return candidate1;
  }

  return Math.max(candidate1, candidate2);

}

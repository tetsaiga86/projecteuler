var amNumbers = [];

function divisorSum(num){
  var divisors = [];
  var total=0;
  for (var i = 1; i < num; i++) {
    if(num%i==0){
      divisors.push(i);
    }
  }
  for (var i = 0; i < divisors.length; i++) {
    total+=divisors[i]
  }
  return total;
}

(function amNumPush(){
  for (var i = 1; i < 10000; i++) {
    var j = divisorSum(i)
      if (i!=j&&divisorSum(j)==i) {
        amNumbers.push(i)
    }
  }
})();

(function amNumSum(){
  var total=0;
  for (var i = 0; i < amNumbers.length; i++) {
    total+=amNumbers[i]
  }
  console.log(total);
})();

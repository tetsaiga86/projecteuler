var abunNums=[];

function abunNumCheck(num){
  var total=0;
  for (var i = 1; i < num; i++) {
    if (num%i==0) {
      total+=i
    }
  }
  if (total>num) {
    return true
  }
  return false
}

(function genAbunNums(){
  for (var i = 0; i <= 28123; i++) {
    if (abunNumCheck(i)) {
      abunNums.push(i)
    }
  }
})();

(function sumNonAbunNums(){
  var total=0
  var posNum;
  for (var i = 1; i <=28123; i++) {
    var matchingJ = -1;
    for (var j = 0; j < abunNums.length; j++) {
      if (i>abunNums[j]) {
        posNum=i-abunNums[j];
        var posNumIsAbun = abunNums.indexOf(posNum) != -1;
        if (posNumIsAbun) {
          matchingJ = j;
          break;
        }
      }
    }
    if (matchingJ == -1) {
      total+=i;
    }
  }
  console.log(total)
})();

memoizedChains = {};

function buildChain(num){
  var chainCounter=1;
  var originalNum = num;
  while(num!=1){
    if (memoizedChains[num]) {
      memoizedChains[originalNum] = memoizedChains[num] + chainCounter;
      return memoizedChains[originalNum];
    }

    if(num%2==0){
      num=num/2;
      chainCounter++;
    }else{
      num=3*num+1;
      chainCounter++
    }
  }

  memoizedChains[originalNum] = chainCounter;
  return chainCounter;
}

var longestChain=0;
var biggestNumber=0;

(function findTheBiggestNumber(){
  for (var i = 1; i < 1000000; i++) {
    var possibleLongest = buildChain(i);
    if (possibleLongest>longestChain){
      longestChain=possibleLongest;
      biggestNumber=i;
    }
  }
  return biggestNumber;
})()

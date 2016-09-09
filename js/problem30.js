function sumChk(num){
  numAsStrArr=num.toString().split('')
  var temp=[]
  var total=0
  for (index of numAsStrArr) {
    temp.push(parseInt(index))
  }
  for (index of temp) {
    total+=Math.pow(index,5)
  }
  if (num==total) {
    return true;
  }
  return false;
}

upperLimit=6*Math.pow(9,5);
var ans=0;
for (var i = 2; i <= upperLimit; i++) {
  if (sumChk(i)) {
    ans+=i
  }
}

console.log(ans)

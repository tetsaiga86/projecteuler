var permNums = [0,1,2,3,4,5,6,7,8,9];
var targetLocation = 1000000-1;
var perms = [parseInt(permNums.join(''))];

function nextPermutation(array) {
  // Find non-increasing suffix
  var i = array.length - 1;
  while (i > 0 && array[i - 1] >= array[i]){
    i--;
  }
  if (i <= 0){
    return false;
  }

  // Find successor to pivot
  var j = array.length - 1;
  while (array[j] <= array[i - 1]){
    j--;
  }
  var temp = array[i - 1];
  array[i - 1] = array[j];
  array[j] = temp;

  // Reverse suffix
  j = array.length - 1;
  while (i < j) {
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      i++;
      j--;
  }
  return true;
}

while(nextPermutation(permNums)){
  perms.push(parseInt(permNums.join('')))
}

perms.sort(function(a, b) {
  return a - b;
});

console.log(perms[targetLocation])

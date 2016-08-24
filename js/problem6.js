var squareSum=0;
var sumSquare=0;

for (var i = 0; i <= 100; i++) {
  squareSum+=i
}

squareSum=Math.pow(squareSum,2);

for (var i = 0; i <= 100; i++) {
  sumSquare+=Math.pow(i,2)
}

console.log(sumSquare, squareSum, squareSum-sumSquare);

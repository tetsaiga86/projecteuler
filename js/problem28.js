function diagonalSum(spiralSize){
  var topRight = (spiralSize - 1) / 2;
  var currentNumber = 1;
  var total = currentNumber;

  for (var i = 1; i <= topRight; i++){
    currentNumber += 8 * i;
    var bottomRight = currentNumber - (i * 6);
    var bottomLeft = currentNumber - (i * 4);
    var topLeft = currentNumber - (i * 2);

    total += currentNumber + bottomRight + bottomLeft + topLeft;
  }
  console.log(total);
}
diagonalSum(1001)

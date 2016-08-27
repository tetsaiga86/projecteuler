var choice1=1, answer=0;

var a='08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08'
var b='49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00'
var c='81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65'
var d='52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91'
var e='22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80'
var f='24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50'
var g='32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70'
var h='67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21'
var i='24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72'
var j='21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95'
var k='78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92'
var l='16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57'
var m='86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58'
var n='19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40'
var o='04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66'
var p='88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69'
var q='04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36'
var r='20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16'
var s='20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54'
var t='01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48'

var numbs = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t]

for (var i = 0; i < numbs.length; i++) {
  numbs[i]=numbs[i].split(' ');
}

function check(a,b,c,d){
  choice1=a*b*c*d;
  if (choice1>answer) {
    answer=choice1;
  }
}

function debugCheck(r1,c1,r2,c2,r3,c3,r4,c4) {
  args = [r1,c1,r2,c2,r3,c3,r4,c4]
  foreach(argIndex in args) {
    arg = args[argIndex];

    if (arg < 0 || arg >= numbs.length) {
      return;
    }
  }

  var operand1 = numbs[r1][c1];
  var operand2 = numbs[r2][c2];
  var operand3 = numbs[r3][c3];
  var operand4 = numbs[r4][c4];

  var product = operand1 * operand2 * operand3 * operand4;

  if (product > answer) {
    console.log('found product as new answer', product);
    console.log('using operands at: ', r1,c1,r2,c2,r3,c3,r4,c4)
    answer = product;
  }
}

function checkAll(startRow, startCol, rowDelta, colDelta) {
  for(var row = startRow; row < numbs.length; row += 1) {
    for (var col = startCol; col < numbs.length; col += 1) {
      debugCheck(row, col, row + rowDelta, col + colDelta, row + rowDelta * 2, col + colDelta * 2, row + rowDelta * 3, col + colDelta * 3);
    }
  }
}

checkAll(0, 0, 1, 0);
checkAll(0, 0, 0, 1);
checkAll(0, 0, 1, 1);
checkAll(0, 0, 1, -1);


(function leftRight(){
  for (var jj = 0; jj < numbs.length; jj++) {
    for (var ii = 0; ii < numbs[jj].length-4; ii++) {
      //check(numbs[jj][ii],numbs[jj][ii+1],numbs[jj][ii+2],numbs[jj][ii+3])
      debugCheck(jj,ii,jj,ii+1,jj,ii+2,jj,ii+3);
    }
  }
})();

(function upDown(){
  for (var ll = 0; ll < numbs.length; ll++) {
    for (var kk = 0; kk < numbs.length-4; kk++) {
      // check(numbs[kk][ll],numbs[kk+1][ll],numbs[kk+2][ll],numbs[kk+3][ll])
      debugCheck(kk,ll,kk+1,ll,kk+2,ll,kk+3,ll);
    }
  }
})();

(function diagonalLR(){
  for (var mm = 0; mm < numbs.length-4; mm++) {
    for (var nn = 0; nn < numbs.length-4; nn++) {
      // check(numbs[mm][nn],numbs[mm+1][nn+1],numbs[mm+2][mm+2],numbs[mm+3][nn+3])
      debugCheck(mm,nn,mm+1,nn+1,mm+2,nn+2,mm+3,nn+3);
    }
  }
})();

(function diagonalRL(){
  for (var mm = 0; mm < numbs.length-4; mm++) {
    for (var nn = 19; nn >=3; nn--) {
      // check(numbs[mm][nn],numbs[mm+1][nn-1],numbs[mm+2][nn-2],numbs[mm+3][nn-3])
      debugCheck(mm,nn,mm+1,nn-1,mm+2,nn-2,mm+3,nn-3);
    }
  }
})();

console.log(answer);

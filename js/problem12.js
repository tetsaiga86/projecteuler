
function overDivisorTest(number, goalDivisor){
  var divisors=0;
  for (var i = 1; i <= number; i++) {
    if (number%i==0) {
      divisors++;
    }
    if (divisors>goalDivisor) {
      return true;
    }
  }
  return false;
}

function triangleNumber(div){
  var answer=1;
  var counter=1;
  while(!overDivisorTest(answer, div)){
    counter++;
    answer=answer+counter;
  }
  return answer;
}

triangleNumber(500);

var num=20

var check = function(num){
  var d20 = 0
  for (var i = 1; i <= 20; i++) {
    if(num%i==0){
      d20++;
    }
    if(d20==20){
      console.log(num)
      return true
    }
  }
  return false;
}

while(!check(num)){
  num+=20
}

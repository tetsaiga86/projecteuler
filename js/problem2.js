var fib = [1,2];
var even = [];
for(var i=0; (fib[i]+fib[i+1])<=4000000; i++){
  fib.push(fib[i]+fib[i+1])
}

for(var i=0; i<fib.length; i++){
  if(fib[i]%2==0){
    even.push(fib[i])
  }
}

var addEmUp = function(){
  var total=0;
  for (var i = 0; i<even.length; i++){
    total+=even[i]
  }
  return total;
}

var a,b,c;
function squareCheck(){
  if(Math.pow(a,2)+Math.pow(b,2)==Math.pow(c,2)){
    return true;
  }else{
    return false;
  }
}
while(a+b+c!=1000){
  a=0;
  b=0;
  c=0
  for (var i = 1; i < 500; i++) {
    a=i;
    for (var j = 1; j < 500; j++) {
      b=j;
      for (var l = 1; l < 500; l++) {
        c=l;
        if(a+b+c==1000 && squareCheck()){
          console.log(a*b*c)
          console.log(a,b,c)
          break;
      }
    }
    }
  }
}
// This caused an endless loop, not sure why

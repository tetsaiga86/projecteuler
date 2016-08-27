var a,b,c;
function squareCheck(){
  if(Math.pow(a,2)+Math.pow(b,2)==Math.pow(c,2)){
    return true;
  }else{
    return false;
  }
}
a=0;
b=0;
c=0
for (var i = 1; i < 1000; i++) {
  a=i;
  for (var j = 1; j<1000-a; j++) {
    b=j;

      c=1000-a-b;
      if(a+b+c==1000 && squareCheck()){
        console.log(a*b*c)
        console.log(a,b,c)
  }
  }
}

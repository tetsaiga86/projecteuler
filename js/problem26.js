var n, count, d ,d0;

for(n=999;n>940;n-=2) {
  d = 1;
  d0 = d%n;
  d = (d%n)*10;

  for(count=0;count<=n;count++){
  	if(d>=n){
      d %= n;
    }
  	if(d==d0){
      break;
    }
  	d *= 10;
  }

  if(count+2==n){
  	console.log(n);
  	break;
  }
}
//h

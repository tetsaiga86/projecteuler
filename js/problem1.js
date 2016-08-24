var multiples;

var addAllMultiples=function(){
  var total=0;
  for(var i=0; i<multiples.length; i++){
    total+=multiples[i];
  }
  console.log(total);
}

var multiplesBelowTop = function(a,b,top){
  multiples=[];
  for(var i=0; i<top; i++){
    if(i%3==0||i%5==0){
      multiples.push(i);
    }
  }
  addAllMultiples();
}
multiplesBelowTop(3,5,1000);

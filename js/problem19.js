counter = 0;
var start;
for (var i = 0; i < 1200; i++) {
  start = new Date('January 01, 1901');
  start.setMonth(i);
  if (start.getDay()==0) {
    counter++;
  }
}
console.log(counter);

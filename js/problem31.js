function totalWays(total){
  var ways = 0;

  for (var a = total; a >= 0; a -= 200) {
    for (var b = a; b >= 0; b -= 100) {
      for (var c = b; c >= 0; c -= 50) {
        for (var d = c; d >= 0; d -= 20) {
          for (var e = d; e >= 0; e -= 10) {
            for (var f = e; f >= 0; f -= 5) {
              for (var g = f; g >= 0; g -= 2) {
                ways++;
              }
            }
          }
        }
      }
    }
  }

  console.log(ways);
}
totalWays(200);

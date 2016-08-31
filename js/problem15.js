function pathCounter(gridSize){
  var paths = 1;

  for (var i = 0; i < gridSize; i++) {
      paths *= (2 * gridSize) - i;
      paths /= i + 1;
  }
  return paths;
}
pathCounter(20);

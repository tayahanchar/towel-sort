
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix || !matrix.length) {
    return [];
  }

  return [].concat(...matrix.map((element, index) => index % 2 === 1 ? element.reverse() : element));
}

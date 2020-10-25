
// You should implement your task here.

module.exports = function towelSort (matrix) {
    return matrix && matrix.length && matrix.map(val => matrix.indexOf(val)%2 && val.reverse()) && matrix.flat() || [];
}

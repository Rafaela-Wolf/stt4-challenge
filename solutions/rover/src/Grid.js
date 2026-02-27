class Grid {
  constructor(matrix) {
    this.matrix = matrix;
    this.rows = matrix.length;
    this.cols = matrix[0].length;
  }

  isValidMove(x, y) {
    // Verifica se está dentro dos limites do grid
    const isWithinBounds = x >= 0 && x < this.cols && y >= 0 && y < this.rows;
    
    if (!isWithinBounds) return false;

    // Verifica se a célula é livre (0) ou um obstáculo (1)
    return this.matrix[y][x] === 0;
  }
}

module.exports = Grid;
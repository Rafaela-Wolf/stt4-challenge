class Rover {
  constructor(x, y, orientation) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
    this.directions = ['N', 'E', 'S', 'W'];
    this.dataCollected = [];
  }

  turnLeft() {
    const index = this.directions.indexOf(this.orientation);
    this.orientation = this.directions[(index + 3) % 4];
  }

  turnRight() {
    const index = this.directions.indexOf(this.orientation);
    this.orientation = this.directions[(index + 1) % 4];
  }

  // Retorna a posição pretendida pra que o sistema valide antes de mover
  getNextPosition(command) {
    let nextX = this.x;
    let nextY = this.y;

    const moveStep = command === 'F' ? 1 : -1;

    if (this.orientation === 'N') nextY -= moveStep;
    if (this.orientation === 'S') nextY += moveStep;
    if (this.orientation === 'E') nextX += moveStep;
    if (this.orientation === 'W') nextX -= moveStep;

    return { x: nextX, y: nextY };
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  collectData() {
    this.dataCollected.push({ x: this.x, y: this.y });
  }

  getStatus() {
    return {
      position: `(${this.x}, ${this.y})`,
      orientation: this.orientation,
      data: this.dataCollected
    };
  }
}

module.exports = Rover;
const Rover = require('./Rover');
const Grid = require('./Grid');

function runMission(gridData, initialPos, orientation, commands) {
  const grid = new Grid(gridData);
  const rover = new Rover(initialPos.x, initialPos.y, orientation);

  // Converte a string "F,R,S" em um array
  const commandArray = commands.split(',').map(c => c.trim());

  commandArray.forEach(cmd => {
    if (cmd === 'L') {
      rover.turnLeft();
    } else if (cmd === 'R') {
      rover.turnRight();
    } else if (cmd === 'S') {
      rover.collectData();
    } else if (cmd === 'F' || cmd === 'B') {
      const { x, y } = rover.getNextPosition(cmd);
      
      if (grid.isValidMove(x, y)) {
        rover.setPosition(x, y);
      }
    }
  });

  return rover.getStatus();
}

// Exemplo de uso (cenário 1 do desafio)
const result = runMission(
  [[0, 0, 0], [0, 0, 0], [0, 0, 0]], 
  { x: 0, y: 0 }, 
  'E', 
  'F, F, R, F, S'
);

console.log(result);
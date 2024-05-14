const board = ((num) => {
  // const positions = {};
  // for (let i = 0; i < num; i++){
  //   for (let j = 0; j < num; j++){
  //     positions[`pos_${i}${j}`] = null;
  //   }
  // }

  const positions = {};
  for (let i = 0; i < num*num; i++){
    positions[`${String(i)}`] = null;
  }
  return { positions }
})(3);


function Player() {
  let state = "X";

  function currentPlayer() {
    return state;
  }

  function switchPlayer() {
    state = (state === "X") ? "O" : "X";
  }

  return { currentPlayer, switchPlayer };
}


function gamePlay() {
  const playerPositions = [];

  const player = Player();
  
  function takePlayerInput() {
    let playerMarker = player.currentPlayer();
    const newPosition = prompt("Choose a position: ");

    if (newPosition in board.positions && !playerPositions.includes(newPosition)) {
      playerPositions.push(newPosition);
      if (playerMarker === "X") {
        board.positions[newPosition] = 'X'
      } else {
        board.positions[newPosition] = 'O'
      }
    }
    
    player.switchPlayer();
  }

  // function checkWinner() {

  // }

  while (playerPositions.length < 9) {
    console.log(`Round ${playerPositions.length + 1}`);
    takePlayerInput();
    console.log(board.positions);
  }
}

gamePlay();
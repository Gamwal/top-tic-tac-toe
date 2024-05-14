const board = ((num) => {
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
      player.switchPlayer();
    }
  }

  function checkWinner() {
    const winningCombos = [
      [0,4,8], [0,1,2], [0,3,6], [1,4,7],
      [2,4,6], [2,5,8], [3,4,5], [6,7,8]
    ];

    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (board.positions[a] === board.positions[b] && board.positions[b] === board.positions[c] && board.positions[c] !== null) {
        return [true, board.positions[a]];
      }
    }
    return false
  }

  while (playerPositions.length < 9) {
    console.log(`Round ${playerPositions.length + 1}`);
    takePlayerInput();

    console.log(playerPositions);
    // console.log(board.positions);

    let winner = checkWinner();

    if (winner[0] === true) {
      console.log(`${winner[1]} wins`);
      break;
    }
  }

  if (playerPositions.length === 9 && checkWinner() === false) {
    console.log("Draw")
  }
}

gamePlay();
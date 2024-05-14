const board = ((num) => {
  const positions = [];
  for (let i = 0; i < num*num; i++){
    positions.push(i);
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
  const playerXpositions = [];
  const playerOpositions = [];
  let expectedInputs = 9;
  let gameCounter = 0

  const player = Player();
  
  function takePlayerInput() {
    let playerMarker = player.currentPlayer();
    const newPosition = prompt("Choose a position: ");

    if (playerMarker === "X") {
      playerXpositions.push(newPosition);
    } else {
      playerOpositions.push(newPosition);
    }
    player.switchPlayer();
  }

  while (gameCounter <= expectedInputs) {
    console.log(`Round ${gameCounter}`);
    takePlayerInput();
    console.log(`Player X : ${playerXpositions}`);
    console.log(`Player O : ${playerOpositions}`);
    gameCounter++;
  }
}

gamePlay();
const board = ((num) => {
  const positions = {};

  for (let i = 0; i < num*num; i++){
    positions[`${String(i)}`] = null;
  }

  return { positions }
})(3);


function Player() {
  const promptResult = document.getElementById('prompts');
  const playerOne = document.getElementById('player-one');
  const playerTwo = document.getElementById('player-two');

  let state = "X";

  function currentPlayer() {
    return state;
  }

  function switchPlayer() {
    state = (state === "X") ? "O" : "X";
  }

  function displayPrompt(name) {
    if (name === 'DRAW') {
      promptResult.textContent = `IT'S A DRAW`;
    }
    else if (name === "X") {
      promptResult.textContent = `${(String(playerOne.value)).toUpperCase()} WINS`;
    } else if (name === "O") {
      promptResult.textContent = `${(String(playerTwo.value)).toUpperCase()} WINS`;
    } else {
      if (state === "X") {
        promptResult.textContent = `${(String(playerOne.value)).toUpperCase()}'s TURN`;
      } else {
        promptResult.textContent = `${(String(playerTwo.value)).toUpperCase()}'s TURN`;
      }
    }
  }

  function checkNames() {
    if (playerOne.value === "" || playerTwo.value === "") {
      promptResult.textContent = "PLEASE ENTER YOUR NAMES - PLAYER 1 TO START";
      return false;
    } else {
      return true;
    }
  }

  return { currentPlayer, switchPlayer, displayPrompt, checkNames };
}


(function gamePlay() {
  const playerPositions = [];
  const player = Player();
  const newPosition = document.getElementById('board');

  newPosition.addEventListener("click", clickHandler);

  function clickHandler(e) {
    const eventID = e.target.id;

    let playerMarker = player.currentPlayer();

    if (player.checkNames() === true) {
      if (eventID in board.positions && e.target.textContent === "") {
        playerPositions.push(eventID);
        if (playerMarker === "X") {
          board.positions[eventID] = 'X'
        } else {
          board.positions[eventID] = 'O'
        }
        player.switchPlayer();
        player.displayPrompt();
        updateBoard();
        
        let winner = checkWinner();
        console.log(playerPositions.length)
        if (winner[0] === true) {
          player.displayPrompt(winner[1])
          newPosition.removeEventListener("click", clickHandler);
        } else if (playerPositions.length === 9 && winner === false) {
          player.displayPrompt('DRAW');
        }
      }
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
      } else {
        return false
      }
    }
  }

  function updateBoard() {
    Object.keys(board.positions).forEach((key) => {
      const boardPosition = document.getElementById(key);
      boardPosition.textContent = (board.positions[key] !== null) ?  board.positions[key] : "";
    });
  }

  (function displayBoard() {
    const pageBoard = document.getElementById('board');
    Object.keys(board.positions).forEach((key) => {
      const boardPosition = document.createElement('div');
      boardPosition.id = key;
      pageBoard.appendChild(boardPosition);
    });
  })();
})();


// const newGameButton
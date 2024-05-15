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


(function gamePlay() {
  const playerPositions = [];

  const player = Player();

  const newPosition = document.getElementById('board');

  function clickHandler(e) {
    const eventID = e.target.id;

    let playerMarker = player.currentPlayer();

    if (eventID in board.positions && e.target.textContent === "") {
      playerPositions.push(eventID);
      if (playerMarker === "X") {
        board.positions[eventID] = 'X'
      } else {
        board.positions[eventID] = 'O'
      }
      player.switchPlayer();
      updateBoard();
      
      let winner = checkWinner();

      if (winner[0] === true) {
        console.log(`${winner[1]} wins`);
        newPosition.removeEventListener("click", clickHandler);
      }
    }
  }

    newPosition.addEventListener("click", clickHandler);

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
const board = ((num) => {
  const positions = {};
  for (let i = 0; i < num; i++){
    for (let j = 0; j < num; j++){
      positions[`pos_${i}${j}`] = null;
    }
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

const player = Player();
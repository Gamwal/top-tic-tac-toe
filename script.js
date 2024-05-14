const board = ((num) => {
  const positions = {};
  for (let i = 0; i < num; i++){
    for (let j = 0; j < num; j++){
      positions[`pos_${i}${j}`] = null;
    }
  }
  return { positions }
})(3);
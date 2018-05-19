const testAround = (array, row, col) => {
  let count = 0;
  for (let i = -1; i < 2; i ++) {
    for(let j = -1; j < 2; j++) {
      if (array[row + i] && array[row + i][col + j]){
        if(array[row + i][col + j].hasMine === true) {
          count = count + 1;
        }
      }
    }
  }
  return count;
}

export default testAround;
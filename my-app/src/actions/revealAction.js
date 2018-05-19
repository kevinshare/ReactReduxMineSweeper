const reveal = (e, index, y) =>{
  return {
    type: 'REVEAL_CELL',
    index,
    y,
    e,
  }
}

export default reveal;
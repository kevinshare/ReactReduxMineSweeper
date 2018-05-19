const setFlag = (index, y) => {
  return {
    type: 'SET_FLAG',
    index,
    y,
  }
}

export default setFlag;
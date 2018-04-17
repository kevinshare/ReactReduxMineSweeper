const rotate = (isRotated, currentDegrees) => {
  return {
    type: 'ROTATE_BOARD',
    isRotated,
    currentDegrees,
  }
}

export default rotate;
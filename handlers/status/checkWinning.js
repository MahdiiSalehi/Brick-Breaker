// In the name of ALLAH!
// Mahdi Salehi


function checkWinning(brickContainer) {
  let bricks = Array.from(brickContainer.children)
  let isWin = true

  for (let brick of bricks) {
    if (brick.style.visibility != "hidden") {
      isWin = false
      break
    }
  }

  return isWin
}


export default checkWinning
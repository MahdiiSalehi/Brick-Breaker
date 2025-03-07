// In the name of ALLAH!
// Mahdi Salehi

import { delay, intervals } from "../../settings.js"

import checkLosing from "./checkLosing.js"
import checkWinning from "./checkWinning.js"


let checkStatusInterval = null

function statusHandler(ball, paddle, brickContainer) {
  checkStatusInterval = setInterval(() => checkStatus(ball, paddle, brickContainer), delay)
}


function checkStatus(ball, paddle, brickContainer) {
  if (checkLosing(paddle, ball)) {
    stopGame()
    alert("you Lose!")
  } else if (checkWinning(brickContainer)) {
    stopGame()
    alert("you WIN!")
  }
}

function stopGame() {
  for (let interval of Object.values(intervals)) {
    if (interval !== null) {
      clearInterval(interval)
    }
  }

  if (checkStatusInterval !== null) {
    clearInterval(checkStatusInterval)
  }
}


export default statusHandler
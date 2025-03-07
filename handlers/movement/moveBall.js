// In the name of ALLAH!
// Mahdi Salehi

import checkCollision from "../collision/collision.js"

import { ballVector, delay, intervals } from "../../settings.js"


function moveBallHandler(brickContainer, ball, paddle) {
  setTimeout(() => {intervals.moveBallInterval = setInterval(() => moveBall(brickContainer, ball, paddle), delay)}, 1000)
}


function moveBall(brickContainer, ball, paddle) {
  let ballTop = ball.offsetTop
  let ballLeft = ball.offsetLeft

  checkCollision(brickContainer, paddle, ballTop, ballLeft)

  let newTop = ballTop + ballVector[1]
  let newLeft = ballLeft + ballVector[0]

  ball.style.top = newTop + "px"
  ball.style.left = newLeft + "px"
}

export default moveBallHandler
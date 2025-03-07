// In the name of ALLAH!
// Mahdi Salehi


import {
  brickWidth,
  brickHeight,
  ballRadius,
  ballVector,
  paddleWidth,
  paddleHeight,
  ballSpeed
} from "../../settings.js"

import collisionEffect from "./collisionEffect.js"


function checkCollision(brickContainer, paddle, top, left) {
  if (checkWalls(top, left)) {
    return
  }

  let center = [
    left + ballRadius,
    top + ballRadius
  ]

  if (checkPaddle(paddle, center)) {
    return
  }

  let color = checkBricks(brickContainer, center)

  if (color !== null) {
    collisionEffect(color)
  }
}


function checkWalls(top, left) {
  if ((top <= ballSpeed*3 && ballVector[1] < 0) || (top + ballRadius*2 + ballSpeed*3 >= window.innerHeight && ballVector[1] > 0)) {
    ballVector[1] *= -1
    return true
  }

  if ((left <= ballSpeed*3 && ballVector[0] < 0) || (left + ballRadius*2 + ballSpeed*3 >= window.innerWidth && ballVector[0] > 0)) {
    ballVector[0] *= -1
    return true
  }

  return false
}


function checkPaddle(paddle, center) {
  let x = paddle.offsetLeft
  let y = paddle.offsetTop

  if (center[0] >= x && center[0] <= x + paddleWidth && ballVector[1] > 0) {
    let deltaY = Math.abs(center[1] - y)

    if (center[1] < y && deltaY <= ballRadius) {
      ballVector[1] *= -1
    }
  } else if (center[1] >= y && center[1] <= y + paddleHeight) {
    let deltaX = Math.abs(center[0] - x)

    if (
      (center[0] < x && deltaX <= ballRadius && ballVector[0] > 0) ||
      (center[0] > x && deltaX <= ballRadius + paddleWidth && ballVector[0] < 0)
    ) {
      ballVector[0] *= -1
    }
  }
}


function checkBricks(brickContainer, center) {
  let bricks = brickContainer.children
  let color = null

  for (let brick of bricks) {
    if (brick.style.visibility == "hidden")
      continue

    let x = brick.offsetLeft
    let y = brick.offsetTop

    if (center[0] >= x && center[0] <= x + brickWidth) {
      let deltaY = Math.abs(center[1] - y)

      if (
        (center[1] > y && deltaY <= ballRadius + brickHeight && ballVector[1] < 0) || 
        (center[1] < y && deltaY <= ballRadius && ballVector[1] > 0)
      ) {
        ballVector[1] *= -1
        brick.style.visibility = "hidden"
        color = brick.children[0].style.backgroundColor
        break
      }
    } else if (center[1] >= y && center[1] <= y + brickHeight) {
      let deltaX = Math.abs(center[0] - x)

      if (
        (center[0] < x && deltaX <= ballRadius && ballVector[0] > 0) ||
        (center[0] > x && deltaX <= ballRadius + brickWidth && ballVector[0] < 0)
      ) {
        ballVector[0] *= -1
        brick.style.visibility = "hidden"
        color = brick.children[0].style.backgroundColor
        break
      }
    }
  }

  return color
}


export default checkCollision
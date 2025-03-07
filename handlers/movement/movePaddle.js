// In the name of ALLAH!
// Mahdi Salehi


import { paddleWidth, leftKeyCode, rightKeyCode, paddleSpeed, delay, intervals } from "../../settings.js"


let moveLeft = false
let moveRight = false


function movePaddleHandler(paddle) {
  window.addEventListener("keydown", keyDownHandler)
  window.addEventListener("keyup", keyUpHandler)

  window.addEventListener("touchmove", event => touchMoveHandler(event, paddle))
  window.addEventListener("touchend", touchEndHandler)

  intervals.movePaddleInterval = setInterval(movePaddle, delay, paddle)
}

function movePaddle(paddle) {
  let left = paddle.offsetLeft

  if (moveLeft && left > paddleSpeed) {
    paddle.style.left = (left - paddleSpeed) + "px"
  } else if (moveRight && left + paddleWidth < window.innerWidth - paddleSpeed) {
    paddle.style.left = (left + paddleSpeed) + "px"
  }
}


function keyDownHandler(event) {
  let code = event.code

  if (code == leftKeyCode) {
    moveLeft = true
  } else if (code == rightKeyCode) {
    moveRight = true
  }
}

function keyUpHandler(event) {
  let code = event.code

  if (code == leftKeyCode) {
    moveLeft = false
  } else if (code == rightKeyCode) {
    moveRight = false
  }
}


function touchMoveHandler(event, paddle) {
  let touchX = event.touches[0].clientX
  let paddleCenter = paddle.offsetLeft + paddleWidth/2

  if (touchX > paddleCenter + paddleWidth/4) {
    moveRight = true
    moveLeft = false
  } else if (touchX < paddleCenter - paddleWidth/4) {
    moveRight = false
    moveLeft = true
  } else {
    moveRight = false
    moveLeft = false
  }
}

function touchEndHandler() {
  moveRight = false
  moveLeft = false
} 



export default movePaddleHandler
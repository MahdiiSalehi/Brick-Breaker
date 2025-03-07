// In the name of ALLAH!
// Mahdi Salehi



// Movement
export let delay = 1
export const intervals ={
  moveBallInterval: null,
  movePaddleInterval: null,
}

// Ball
export let ballRadius = 10
export let ballSpeed = 2
export let ballVector = [ballSpeed, -ballSpeed]

// Bricks
export const colors = [
  "purple",
  "blue",
  "green",
  "yellow",
  "orange",
  "red",
  // "white",
]

export const rows = 10
export const columns = colors.length * 2

export let brickHeight = 0
export let brickWidth = 0


// Paddle
export let paddleWidth = 140
export let paddleHeight = 20

export const leftKeyCode = "ArrowLeft"
export const rightKeyCode = "ArrowRight"
export let paddleSpeed = 4




;
(function () {
  let width = window.innerWidth // 1536
  let height = window.innerHeight // 695

  brickWidth = width * 0.75 / columns
  brickHeight = (height- 100) / (rows * 2 )

  if (width < 800) {
    delay = 7
    ballSpeed = 1

    paddleWidth = width / 7
    paddleHeight = height / 70
  
    ballRadius = Math.max(width, height) / 140
  } else {
    paddleWidth = width / 12
    paddleHeight = height / 38
  
    ballRadius = Math.max(width, height) / 150
  }

})()
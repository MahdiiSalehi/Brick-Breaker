// In the name of ALLAH!
// Mahdi Salehi


import { ballRadius } from "./settings.js"

// Import Components
import BrickContainer from "./components/BrickContainer/BrickContainer.js"
import Ball from "./components/Ball/Ball.js"
import Paddle from "./components/Paddle/Paddle.js"

// Import Handlers
import moveBallHandler from "./handlers/movement/moveBall.js"
import movePaddleHandler from "./handlers/movement/movePaddle.js"
import statusHandler from "./handlers/status/statusHandling.js"


const brickContainer = BrickContainer()

const ball = Ball(
  window.innerWidth / 2 - ballRadius,
  window.innerHeight * 0.8 - 3*ballRadius,
  ballRadius
)

const paddle = Paddle(
  window.innerWidth / 2,
  window.innerHeight * 0.8
)

const root = document.getElementById("root")


root.insertAdjacentElement("beforeend", brickContainer)
root.insertAdjacentElement("beforeend", ball)
root.insertAdjacentElement("beforeend", paddle)


movePaddleHandler(paddle)
moveBallHandler(brickContainer, ball, paddle)
statusHandler(ball, paddle, brickContainer)
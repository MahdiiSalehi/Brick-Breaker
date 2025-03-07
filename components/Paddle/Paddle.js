// In the name of ALLAH!
// Mahdi Salehi

import { paddleWidth, paddleHeight } from "../../settings.js"


function Paddle(left, top) {
  let paddle = document.createElement('div')

  paddle.className = "paddle"

  paddle.style.width = paddleWidth + "px"
  paddle.style.height = paddleHeight + "px"

  paddle.style.top = top + "px"
  paddle.style.left = (left - paddleWidth/2) + "px"

  return paddle
}


export default Paddle
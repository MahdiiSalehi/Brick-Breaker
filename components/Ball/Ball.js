// In the name of ALLAH!
// Mahdi Salehi

import { ballRadius } from "../../settings.js"

function Ball(x, y) {
  let ball = document.createElement('div')

  ball.className = "ball"

  ball.style.top = y + "px"
  ball.style.left = x + "px"
  ball.style.width = ballRadius*2 + "px"
  ball.style.height = ballRadius*2 + "px"

  return ball
}



export default Ball
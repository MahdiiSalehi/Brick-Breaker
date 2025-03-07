// In the name of ALLAH!
// Mahdi Salehi

import { ballRadius, paddleHeight } from "../../settings.js"


function checkLosing(paddle, ball) {
  if (ball.offsetTop + 2*ballRadius >= paddle.offsetTop + paddleHeight)
    return true

  return false
}


export default checkLosing
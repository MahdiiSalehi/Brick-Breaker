// In the name of ALLAH!
// Mahdi Salehi


import { brickWidth, brickHeight } from "../../settings.js"


function Brick(color) {
  let container = document.createElement('div')
  let divElem = document.createElement('div')

  container.append(divElem)

  container.className = "brick"
  divElem.className = "brick-inner"

  divElem.style.backgroundColor = color

  container.style.width = brickWidth + "px"
  container.style.height = brickHeight + "px"

  return container
}

export default Brick
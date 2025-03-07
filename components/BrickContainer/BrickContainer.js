// In the name of ALLAH!
// Mahdi Salehi

import Brick from "../Brick/Brick.js";

import { colors, rows, columns } from "../../settings.js";


function BrickContainer() {
  let container = document.createElement('div')

  container.className = "brick-container"

  for (let i = 0; i < rows; i ++) {
    for (let j = 0; j < columns / colors.length; j ++) {
      colors.forEach((color) => container.insertAdjacentElement(
        "beforeend",
        Brick(color)
      ))
    }
  }

  return container
}


export default BrickContainer
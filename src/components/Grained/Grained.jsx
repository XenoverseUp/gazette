import ReactDOM from "react-dom"
import { useRef, useEffect } from "react"
import Grain from "../../utils/Grain"

import "./Grained.scss"

const Grained = () => {
  let canvas = useRef(null)

  useEffect(() => new Grain(canvas), [canvas])

  return ReactDOM.createPortal(
    <canvas id="grain-canvas" ref={(el) => (canvas = el)}></canvas>,
    document.getElementById("grain")
  )
}

export default Grained

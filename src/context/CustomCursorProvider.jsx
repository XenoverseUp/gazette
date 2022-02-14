import { useRef } from "react"
import { useEffect } from "react"
import { createContext, useState } from "react"
import { Cursor } from "../components"
import { enterMouse, leaveMouse, moveCursor } from "../animations"

export const CursorContext = createContext()

export const Cursors = Object.freeze({
  AUTO: "auto",
  POINTER: "pointer",
  TEXT: "text",
})

const CustomCursorProvider = ({ children }) => {
  const [cursor, setCursor] = useState(Cursors.AUTO)
  const [text, setText] = useState("CLICK")
  const [active, setActive] = useState(false)
  const cursorRef = useRef(null)
  const mobile = matchMedia("(hover: none) and (pointer: coarse)")

  useEffect(() => {
    addEventListener("mousemove", (e) => moveCursor(e, cursorRef.current))
    document.addEventListener("mouseleave", () => leaveMouse(cursorRef.current))
    document.addEventListener("mouseenter", () => enterMouse(cursorRef.current))
    addEventListener("mousedown", () => setActive(true))
    addEventListener("mouseup", () => setActive(false))

    return () => {
      removeEventListener("mousemove", (e) => moveCursor(e, cursorRef.current))
      document.removeEventListener("mouseleave", () =>
        leaveMouse(cursorRef.current)
      )
      document.removeEventListener("mouseenter", () =>
        enterMouse(cursorRef.current)
      )
      removeEventListener("mousedown", () => setActive(true))
      removeEventListener("mouseup", () => setActive(false))
    }
  }, [])

  return (
    <CursorContext.Provider value={[cursor, setCursor, setText]}>
      {!mobile.matches && (
        <Cursor type={cursor} {...{ text, cursorRef, active }} />
      )}
      {children}
    </CursorContext.Provider>
  )
}

export default CustomCursorProvider

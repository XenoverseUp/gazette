import { useContext } from "react"
import { CursorContext, Cursors } from "../context/CustomCursorProvider"

const pointer = (setCursor, Cursors) => ({
  onMouseEnter: () => setCursor(Cursors.POINTER),
  onMouseLeave: () => setCursor(Cursors.AUTO),
})

export const usePointer = () => {
  const context = useContext(CursorContext)
  const mobile = matchMedia("(hover: none) and (pointer: coarse)")

  return context?.[1] && !mobile.matches ? pointer(context[1], Cursors) : {}
}

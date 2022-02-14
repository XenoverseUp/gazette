import { forwardRef, Fragment } from "react"
import "./Drawer.scss"

const Drawer = forwardRef(({ open, setOpen, children, className }, ref) => {
  return (
    <Fragment>
      <div
        onClick={() => setOpen(false)}
        className={`overlay ${open ? "visible" : ""}`}
      />
      <aside className={`drawer-bg ${open ? "visible" : ""}`} />
      <aside className={`drawer ${open ? "visible" : ""}`}>
        <main {...{ className }}>{children}</main>
      </aside>
    </Fragment>
  )
})

export default Drawer

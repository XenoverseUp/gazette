import "./Cursor.scss"

const Cursor = ({ type, active, cursorRef }) => {
  return (
    <div
      id="cursor"
      ref={cursorRef}
      className={`${type} ${active ? "active" : ""}`}
    />
  )
}

export default Cursor

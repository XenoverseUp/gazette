import { createContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const MenuContext = createContext()

const MenuProvider = ({ children }) => {
  const [open, setOpen] = useState(false)
  const history = useHistory()

  useEffect(() => history.listen(() => setOpen(false)), [])

  return (
    <MenuContext.Provider value={[open, setOpen]}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuProvider

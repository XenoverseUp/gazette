import { useContext } from "react"
import { MenuContext } from "../context/MenuProvider"

const useMenu = () => {
  const context = useContext(MenuContext)

  return context?.[1] ? [...context] : []
}

export default useMenu

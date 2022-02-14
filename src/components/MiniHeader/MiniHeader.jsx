import useMenu from "../../hooks/useMenu"
import { Wrapper, Flex, Bond } from ".."
import { List } from "phosphor-react"
import "./MiniHeader.scss"

const MiniHeader = () => {
  const [, setMenu] = useMenu()
  const date = new Date()

  return (
    <nav className="mini-header">
      <Wrapper>
        <Flex grow justify="space-between" className="main-container">
          <p>
            {date.toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <h1>
            <Bond href="/">THE GAZETTE</Bond>
          </h1>
          <List weight="bold" size={30} onClick={() => setMenu(true)} />
        </Flex>
      </Wrapper>
    </nav>
  )
}

export default MiniHeader

import { BrowserRouter, Switch, Route } from "react-router-dom"
import { AuthModal, Grained, Menu } from "./components"
import { useState } from "react"
import Routes from "./routes"
import MenuProvider from "./context/MenuProvider"
import VolumeProvider from "./context/VolumeProvider"

function App() {
  const [modalState, setModalState] = useState({
    open: false,
    type: "",
  })

  return (
    <BrowserRouter>
      <VolumeProvider>
        <MenuProvider>
          <div className="App">
            <Grained />
            <Menu {...{ setModalState }} />
            <AuthModal {...{ modalState, setModalState }} />
            <Switch>
              {Routes.map((route, i) => (
                <Route {...route} key={`route-${i}`} />
              ))}
            </Switch>
          </div>
        </MenuProvider>
      </VolumeProvider>
    </BrowserRouter>
  )
}

export default App

import { useEffect, useRef, useState } from "react"
import { ArrowCircleRight, CaretLeft, CaretRight } from "phosphor-react"
import { Link } from "react-router-dom"
import { categories } from "../../data"
import gsap from "gsap"
import useMenu from "../../hooks/useMenu"
import useVolume from "../../hooks/useVolume"
import usePrevious from "../../hooks/usePrevious"
import Drawer from "../Drawer/Drawer"
import Flex from "../Flex"

import "./Menu.scss"

const Menu = ({ setModalState: setAuthModalState }) => {
  const [hoverClose, setHoverClose] = useState(false)
  const [open, setOpen] = useMenu()
  const volume = useVolume()
  const [activeView, setActiveView] = useState(0)
  const previousView = usePrevious(activeView)
  const viewRefs = useRef([])

  useEffect(() => {
    if (!open) {
      const timeout = setTimeout(() => setActiveView(0), 400)
      return () => clearTimeout(timeout)
    }
  }, [open])

  const handleHoverClose = () => ({
    onMouseEnter: setHoverClose(true),
    onMouseLeave: setHoverClose(false),
  })

  useEffect(() => {
    if (previousView === undefined) return

    gsap.to(viewRefs.current[activeView], {
      opacity: 1,
      duration: 0.15,
      delay: 0.15,
    })

    gsap.from(viewRefs.current[activeView], {
      y: 20,
      delay: 0.15,
      duration: 0.15,
    })

    gsap.to(viewRefs.current[previousView], {
      opacity: 0,
      duration: 0.4,
    })
  }, [activeView])

  return (
    <Drawer {...{ open, setOpen }} className="drawer-menu">
      <Flex direction="column" grow gap="1rem" className="main-content">
        <Flex
          grow
          type="header"
          justify="space-between"
          className="menu-header"
        >
          <h2>Menu</h2>
          <ArrowCircleRight
            size={40}
            weight={hoverClose ? "fill" : "light"}
            className="close"
            onMouseEnter={() => setHoverClose(true)}
            onMouseLeave={() => setHoverClose(false)}
            onClick={() => setOpen(false)}
          />
        </Flex>
        <Flex grow type="main" className="views">
          <MenuView
            className={`main-view ${activeView === 0 ? "active" : ""}`}
            viewRef={(el) => (viewRefs.current[0] = el)}
          >
            <ViewItem to="/">Home</ViewItem>
            <ViewItem to="/about">About</ViewItem>
            <ViewItem internal onClick={() => setActiveView(1)}>
              <span>Categories</span>
              <CaretRight weight="light" />
            </ViewItem>
            <ViewItem
              internal
              onClick={() => (
                setAuthModalState({
                  open: true,
                  type: "sign-up",
                }),
                setOpen(false)
              )}
            >
              Sign Up
            </ViewItem>
            <ViewItem
              internal
              onClick={() => (
                setAuthModalState({
                  open: true,
                  type: "login",
                }),
                setOpen(false)
              )}
            >
              Login
            </ViewItem>
            <ViewItem to="/contact">Contact</ViewItem>
          </MenuView>
          <MenuView
            className={`category-view ${activeView === 1 ? "active" : ""}`}
            viewRef={(el) => (viewRefs.current[1] = el)}
          >
            <ViewItem
              internal
              className="back-button"
              onClick={() => setActiveView(0)}
            >
              <CaretLeft />
              <span>Back</span>
            </ViewItem>
            {categories.map((category, i) => (
              <ViewItem
                key={`menu-category-item-${i}`}
                to={`/category/${category.path}`}
              >
                <Flex
                  type="span"
                  grow
                  justify="flex-start"
                  gap=".4rem"
                  className="category-item"
                >
                  <category.Icon />
                  {category.name}
                </Flex>
              </ViewItem>
            ))}
          </MenuView>
        </Flex>
      </Flex>
      <Flex grow type="footer" justify="space-between">
        <p>&copy; Xenoverse Inc. All Rights Reserved</p>
        <p>Volume: {volume}</p>
      </Flex>
    </Drawer>
  )
}

const MenuView = ({ className, viewRef, children }) => (
  <ul {...{ className, ref: viewRef }}>{children}</ul>
)

const ViewItem = ({ children, internal, onClick, to, className }) =>
  internal ? (
    <Flex
      type="li"
      justify="space-between"
      className={`view-item ${className}`}
      {...{ onClick }}
    >
      {children}
    </Flex>
  ) : (
    <Flex
      type={Link}
      justify="space-between"
      className={`view-item ${className}`}
      {...{ to }}
    >
      {children}
    </Flex>
  )

export default Menu

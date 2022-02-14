import Flex from "../Flex"
import Wrapper from "../Wrapper"
import Logo from "../../assets/img/logo.png"
import { usePointer } from "../../hooks/useCursor"
import { useRef, useEffect, Fragment } from "react"
import { CalendarBlank, List } from "phosphor-react"
import HorizontalScroll from "react-scroll-horizontal"
import { rotateHeaderLogo } from "../../animations"
import { categories } from "../../data"
import ScrollTrigger from "gsap/ScrollTrigger"
import gsap from "gsap"
import useMenu from "../../hooks/useMenu"
import useVolume from "../../hooks/useVolume"

import "./Header.scss"
import { Link } from "react-router-dom"

gsap.registerPlugin(ScrollTrigger)

const Header = ({ activeCategory }) => {
  const date = new Date()
  const pointer = usePointer()
  const logoRef = useRef(null)
  const [, setMenu] = useMenu()
  const volume = useVolume()

  const splitTextToSpans = (text) =>
    text.split("").map((letter, i) => (
      <span className="letter" key={`letter-${text}-${i}`}>
        {letter}
      </span>
    ))

  useEffect(() => rotateHeaderLogo(logoRef.current), [])

  useEffect(() => {
    ScrollTrigger.create({
      start: "top -250",
      end: 99999,
      toggleClass: {
        className: "scrolled-header--visible",
        targets: ".scrolled-header",
      },
    })
  }, [])

  return (
    <Fragment>
      <nav className="main-header">
        <Wrapper>
          <Flex
            grow
            className="category-header-container"
            direction="column"
            gap=".75rem"
          >
            <Flex
              grow
              className="header"
              type="header"
              gap="1.5rem"
              justify="space-between"
            >
              <div className="slogan wrap-border">
                <p>
                  The paper that stands for real values and gives you real value
                  for your money.
                </p>
              </div>
              <Flex
                type={Link}
                to="/"
                className="banner link-reset"
                gap=".75rem"
              >
                <img src={Logo} alt="logo" ref={logoRef} />
                <Flex type="h1" gap=".25rem">
                  THE
                  <Flex
                    direction="column"
                    {...pointer}
                    className="wrap-border border-2px"
                  >
                    <Flex grow justify="space-between" className="letter-group">
                      {splitTextToSpans("MALL")}
                    </Flex>
                    <Flex grow justify="space-between" className="letter-group">
                      {splitTextToSpans("ATIA")}
                    </Flex>
                  </Flex>
                  GAZETTE
                </Flex>
              </Flex>
              <Flex justify="flex-end" className="menu-toggle">
                <List
                  weight="bold"
                  size={30}
                  onClick={() => setMenu(true)}
                  className="toggle"
                />
              </Flex>
            </Flex>
            {/* Categories */}
            <Flex grow className="categories" justify="space-between">
              <div className="scroller">
                <HorizontalScroll reverseScroll pageLock>
                  {categories.map(({ name, path, Icon }, i) => (
                    <Flex
                      type={Link}
                      to={`/category/${path}`}
                      gap=".35rem"
                      className={`category-item link-reset ${
                        activeCategory === path ? "active" : ""
                      }`}
                      key={`category-item-${i}`}
                    >
                      <Icon size={24} />
                      <span>{name}</span>
                    </Flex>
                  ))}
                </HorizontalScroll>
              </div>

              <div className="date">
                <Flex type="span" gap=".5rem">
                  <CalendarBlank weight="fill" size={20} />
                  {date.toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </Flex>
              </div>
            </Flex>
            <p>Volume: {volume}</p>
          </Flex>
        </Wrapper>
      </nav>
      <ScrolledHeader {...{ setMenu, date }} />
    </Fragment>
  )
}

const ScrolledHeader = ({ setMenu, date }) => {
  return (
    <nav className="scrolled-header">
      <Wrapper>
        <Flex grow justify="space-between" className="main-container">
          <p>
            {date.toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <h1>THE GAZETTE</h1>
          <List weight="bold" size={30} onClick={() => setMenu(true)} />
        </Flex>
      </Wrapper>
    </nav>
  )
}

export default Header

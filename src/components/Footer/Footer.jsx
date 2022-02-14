import {
  Copyright,
  Envelope,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  PhoneCall,
  Quotes,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Flex, Button, Input } from ".."
import { flag } from "../../assets/img"
import "./Footer.scss"

const Footer = () => {
  const date = new Date()
  const [hover, setHover] = useState("")

  const hoverHandle = (icon) => ({
    onMouseEnter: () => setHover(icon),
    onMouseLeave: () => setHover(""),
  })

  return (
    <Flex
      type="footer"
      grow
      direction="column"
      justify="space-between"
      className="main-footer wrapper"
    >
      <Flex
        grow
        justify="space-between"
        align="flex-start"
        className="top"
        gap="3rem"
      >
        <Flex
          direction="column"
          className="brand"
          justify="flex-start"
          align="flex-start"
        >
          <h2>The Mallatia Gazette</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            dicta nam consectetur esse eos minima voluptate assumenda! Vel nobis
            ratione aliquam odit, expedita adipisci numquam. Sit beatae ea modi
            dolor quia ipsa consequatur iure optio.
          </p>
          <Flex gap=".25rem" className="social">
            <InstagramLogo
              {...hoverHandle("instagram")}
              weight={hover === "instagram" ? "fill" : "regular"}
            />
            <TwitterLogo
              {...hoverHandle("twitter")}
              weight={hover === "twitter" ? "fill" : "regular"}
            />
            <YoutubeLogo
              {...hoverHandle("youtube")}
              weight={hover === "youtube" ? "fill" : "regular"}
            />
            <FacebookLogo
              {...hoverHandle("facebook")}
              weight={hover === "facebook" ? "fill" : "regular"}
            />
            <LinkedinLogo
              {...hoverHandle("linked-in")}
              weight={hover === "linked-in" ? "fill" : "regular"}
            />
          </Flex>

          <Flex className="contact" direction="column" align="flex-start">
            <h3>Contact Us</h3>
            <Flex type="p" gap=".5rem">
              <PhoneCall size={20} />
              <span>+99 9999 999 999</span>
            </Flex>
            <Flex type="p" gap=".5rem">
              <Envelope size={20} />
              <span>canhammond00@gmail.com</span>
            </Flex>
          </Flex>
        </Flex>
        <Flex gap="2rem" align="flex-start" className="links-container">
          <Flex
            gap=".75rem"
            className="links"
            direction="column"
            align="flex-start"
          >
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Sign Up</li>
              <li>Login</li>
              <li>Contact Us</li>
            </ul>
          </Flex>
          <Flex
            gap=".75rem"
            className="links"
            direction="column"
            align="flex-start"
          >
            <h4>Helpful Links</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Cookie Settings</li>
              <li>Terms & Conditions</li>
              <li>Services</li>
              <li>Support</li>
            </ul>
          </Flex>
        </Flex>
        <Subscribe />
      </Flex>
      <Flex justify="space-between" grow className="bottom" gap=".5rem">
        <Flex type="span" gap=".35rem">
          <img src={flag} alt="flag" />
          <p>France</p>
        </Flex>
        <Flex type="span" gap=".25rem">
          <Copyright /> {date.getFullYear()} Xenoverse Inc. All Rights Reserved
        </Flex>
      </Flex>
    </Flex>
  )
}

const Subscribe = () => {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data) => {
    data.email && (alert(`The subscription e-mail : ${data.email}`), reset())
    // Handle form submitting to server.
  }

  return (
    <Flex
      className="subscribe"
      direction="column"
      justify="flex-start"
      align="flex-start"
      gap=".75rem"
    >
      <h4>Stay in touch</h4>
      <p>
        To get weekly free news, write down your e-mail and get subscribed to
        The Mallatia Gazette.
      </p>
      <Flex
        type="form"
        onSubmit={handleSubmit(onSubmit)}
        gap="2rem"
        grow
        justify="flex-start"
        className="subscribe-input"
      >
        <Input
          inverted
          growFlex
          autoComplete="off"
          label="E-Mail"
          {...register("email")}
        />
        <Button
          onClick={handleSubmit(onSubmit)}
          leftIcon={<Quotes weight="fill" />}
          inverted
        >
          Subscribe
        </Button>
      </Flex>
    </Flex>
  )
}

export default Footer

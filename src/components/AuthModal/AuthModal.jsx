import {
  ArrowCircleRight,
  GoogleLogo,
  At,
  User,
  FingerprintSimple,
  PaperPlaneTilt,
  SignIn,
} from "phosphor-react"
import { Fragment, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Flex } from ".."
import Button from "../Button/Button"
import Input from "../Input/Input"
import "./AuthModal.scss"

const AuthModal = ({ modalState, setModalState }) => {
  const {
    register: loginRegister,
    handleSubmit: handleLogin,
    reset: resetLogin,
  } = useForm()
  const {
    register: signupRegister,
    handleSubmit: handleSignup,
    reset: resetSignup,
  } = useForm()

  const [hover, setHover] = useState(false)

  const handleHover = () => ({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  })

  const onSignup = (data) => {
    // Handle Sign up

    console.log(data)
    resetSignup()
  }
  const onLogin = (data) => {
    // Handle Login

    console.log(data)
    resetLogin()
  }

  useEffect(() => (resetLogin(), resetSignup()), [modalState.open])

  return (
    <Fragment>
      <div
        className={`overlay white ${modalState.open ? "visible" : ""}`}
        onClick={() => setModalState({ open: false, type: "" })}
      />
      <div className={`auth-modal ${modalState.open ? "visible" : ""}`}>
        <ArrowCircleRight
          className="close"
          size={32}
          weight={hover ? "fill" : "light"}
          onClick={() => setModalState({ open: false, type: "" })}
          {...handleHover()}
        />

        {/* Sign Up Form */}
        <Flex
          type="form"
          onSubmit={handleSignup(onSignup)}
          className={modalState.type === "sign-up" ? "visible" : ""}
          justify="space-between"
          align="center"
          direction="column"
        >
          <Flex
            type="header"
            direction="column"
            className="auth-modal-header"
            gap=".5rem"
          >
            <h3>Sign Up</h3>
            <p>
              Create a free account and be the first to see the hottest news.
            </p>
          </Flex>

          <Flex grow className="inputs" direction="column">
            <Input
              className="input"
              grow
              {...signupRegister("userName")}
              label={
                <>
                  <User /> Your Name
                </>
              }
            />
            <Input
              className="input"
              grow
              {...signupRegister("eMail")}
              label={
                <>
                  <At /> E Mail
                </>
              }
            />
            <Input
              className="input"
              password
              grow
              {...signupRegister("password")}
              label={
                <>
                  <FingerprintSimple /> Password
                </>
              }
            />
            <Button
              onClick={handleSignup(onSignup)}
              className="submit-button"
              leftIcon={<PaperPlaneTilt weight="bold" />}
            >
              Sign Up
            </Button>
            <span>or</span>
            <Flex type="p" gap=".5em" className="google-sign-in">
              <GoogleLogo size={20} /> Sign in with Google
            </Flex>
          </Flex>

          <Flex grow type="p" className="already">
            Already have an account?{" "}
            <span
              onClick={() => (
                setModalState((state) => ({ ...state, type: "login" })),
                resetSignup()
              )}
            >
              Login
            </span>
            .
          </Flex>
        </Flex>
        {/* Login Form */}
        <Flex
          type="form"
          onSubmit={handleLogin(onLogin)}
          className={`login ${modalState.type === "login" ? "visible" : ""}`}
          justify="space-between"
          align="center"
          direction="column"
        >
          <Flex
            type="header"
            direction="column"
            className="auth-modal-header"
            gap=".5rem"
          >
            <h3>Login</h3>
            <p>
              Login your account and have a great and more customized
              experience.
            </p>
          </Flex>

          <Flex grow className="inputs" direction="column">
            <Input
              className="input"
              grow
              {...loginRegister("userName")}
              label={
                <>
                  <User /> Your Name
                </>
              }
            />
            <Input
              className="input"
              grow
              {...loginRegister("password")}
              password
              label={
                <>
                  <FingerprintSimple /> Password
                </>
              }
            />
            <Button
              className="submit-button"
              onClick={handleSignup(onSignup)}
              leftIcon={<SignIn weight="bold" />}
            >
              Login
            </Button>
            <span>or</span>
            <Flex type="p" gap=".5em" className="google-sign-in">
              <GoogleLogo size={20} /> Login with Google
            </Flex>
          </Flex>

          <Flex grow type="p" className="already">
            Don't have an account?
            <span
              onClick={() => (
                setModalState((state) => ({ ...state, type: "sign-up" })),
                resetLogin()
              )}
            >
              Sign Up
            </span>
            .
          </Flex>
        </Flex>
      </div>
    </Fragment>
  )
}

export default AuthModal

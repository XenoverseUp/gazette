import { SpinnerGap } from "phosphor-react"
import { Flex } from ".."
import "./Button.scss"

const Button = ({
  children,
  leftIcon: Left,
  rightIcon: Right,
  className = "",
  deepClass = "",
  loading,
  inverted,
  ...rest
}) => {
  return (
    <Flex
      className={`vintage-button ${className} ${inverted ? "inverted" : ""}`}
      {...rest}
    >
      <span />
      <Flex type="button" gap=".35rem" className={deepClass}>
        {loading ? (
          <>
            <SpinnerGap
              size={20}
              style={{ animation: "rotate var(--bezier) 1.5s infinite" }}
            />
            Loading
          </>
        ) : (
          <>
            {Left}
            {children}
            {Right}
          </>
        )}
      </Flex>
    </Flex>
  )
}

export default Button

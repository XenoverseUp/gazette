import { Eye, EyeClosed } from "phosphor-react"
import { forwardRef, Fragment, useState } from "react"
import Flex from "../Flex"
import "./Input.scss"

const Input = forwardRef(
  (
    {
      name = "",
      label,
      password,
      type = "text",
      inverted,
      className = "",
      grow,
      growFlex,
      required = true,
      ...rest
    },
    ref
  ) => {
    const [visible, setVisible] = useState(false)

    return (
      <div
        className={`input ${className} ${inverted ? "inverted" : ""}`}
        style={{
          flexGrow: growFlex ? "1" : "initial",
          width: grow ? "100%" : "auto",
        }}
      >
        {password && (
          <Fragment>
            {visible ? (
              <Eye className="eye" onClick={() => setVisible(false)} />
            ) : (
              <EyeClosed className="eye" onClick={() => setVisible(true)} />
            )}
          </Fragment>
        )}
        <input
          type={
            password && visible
              ? "text"
              : password && !visible
              ? "password"
              : type
          }
          {...{ name, required, ref }}
          {...rest}
        />
        <Flex type="label" gap=".5em" htmlFor={name}>
          {label}
        </Flex>
      </div>
    )
  }
)

export default Input

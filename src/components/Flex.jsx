import { createElement, forwardRef } from "react"

const Flex = forwardRef(
  (
    {
      direction: flexDirection = "row",
      gap = 0,
      justify: justifyContent = "center",
      align: alignItems = "center",
      wrap: flexWrap = "initial",
      basis: flexBasis = "initial",
      className = "",
      type = "div",
      grow = false,
      children,
      ...rest
    },
    ref
  ) =>
    createElement(
      type,
      {
        ...{
          ref,
          className,
          style: {
            display: "flex",
            width: grow ? "100%" : "auto",
            flexDirection,
            gap,
            justifyContent,
            alignItems,
            flexWrap,
            flexBasis,
          },
          ...rest,
        },
      },
      children
    )
)
export default Flex

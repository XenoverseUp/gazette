import capitalize from "../../utils/capitalize"
import { Children, cloneElement } from "react"
import { Flex } from ".."

const Grid = {
  Layout: ({ children, reverse }) => {
    let updatedChildren = Children.map(children, (child, i) =>
      cloneElement(child, {
        big: reverse ? i === 3 : i === 0,
        reverse,
      })
    )

    return <div className={`grid-layout`}>{updatedChildren}</div>
  },
  Element: ({ big, reverse, data }) =>
    big ? (
      <BigElement {...data} {...{ reverse }} />
    ) : (
      <SmallElement {...data} />
    ),
}

const BigElement = ({
  img: { src, alt },
  title,
  subtitle,
  author,
  reverse,
  date,
}) => {
  return (
    <Flex
      direction="column"
      justify="space-between"
      align="flex-start"
      className={`grid-element big ${reverse ? "reverse" : ""}`}
    >
      <img {...{ src, alt }} />

      <Flex
        align="flex-start"
        direction="column"
        className="content"
        gap=".25rem"
      >
        <span>
          {date.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </span>
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </Flex>
      <em>by {capitalize(author)}</em>
    </Flex>
  )
}

const SmallElement = ({
  img: { src, alt },
  categoryIcon: Icon,
  title,
  author,
  category,
}) => {
  return (
    <div className={`grid-element small`}>
      <img {...{ src, alt }} />
      <Flex
        justify="space-between"
        align="flex-start"
        direction="column"
        className="content"
      >
        <Flex type="span" justify="flex-start" gap=".25rem">
          <Icon /> {category}
        </Flex>

        <h4>{title}</h4>
        <em>by {capitalize(author)}</em>
      </Flex>
    </div>
  )
}

export default Grid

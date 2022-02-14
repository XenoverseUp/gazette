import { Fragment } from "react"
import { editorsChoices } from "../../data"
import capitalize from "../../utils/capitalize"
import Flex from "../Flex"
import "./Sidebar.scss"

const Sidebar = ({ title, data }) => {
  return (
    <Flex className="home-sidebar" type="aside" direction="column" gap="1.5rem">
      <h3>&#8226;&#8226;&#8226; {title} &#8226;&#8226;&#8226;</h3>
      <Flex grow className="sidebar-feed" direction="column" justify="start">
        {data.map((data, i, arr) => (
          <Fragment key={`home-sidebar-feed-item-${i}`}>
            <FeedItem {...data} />
            {i !== arr.length - 1 && <Separator />}
          </Fragment>
        ))}
      </Flex>
    </Flex>
  )
}

const FeedItem = ({
  category,
  categoryPath,
  categoryIcon: Icon,
  title,
  subtitle,
  author,
  date,
  img: { src, alt },
}) => (
  <Flex
    className="feed-item"
    direction="column"
    justify="start"
    align="start"
    grow
  >
    <Flex className="category" justify="space-between" grow>
      <Flex type="span" justify="flex-start" gap=".25rem">
        <Icon /> {category}
      </Flex>
      <span>
        {date.toLocaleDateString("en-US", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}
      </span>
    </Flex>
    <img {...{ src, alt }} />
    <h4>{title}</h4>
    <p>{subtitle}</p>
    <em>by {capitalize(author)} </em>
  </Flex>
)

const Separator = () => <span className="separator" />

export default Sidebar

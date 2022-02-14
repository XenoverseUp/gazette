import { useEffect, useState } from "react"
import { ArrowClockwise, NewspaperClipping } from "phosphor-react"
import {
  Flex,
  Header,
  Sidebar,
  Wrapper,
  Button,
  Footer,
  Grid,
} from "../components"
import { editorsChoices, mainFeed } from "../data"

const Home = () => {
  // The logic here is only for test purposes. While making requests to server,
  // create your logic down below deleting the content untill ```return```.

  const [feed, setFeed] = useState([])
  const [loading, setLoading] = useState(false)
  let timeout

  const fetchData = () => {
    setLoading(true)
    timeout = setTimeout(() => {
      setFeed(mainFeed.slice(0, 12))
      setLoading(false)
    }, 1000)
  }

  useEffect(() => setFeed(mainFeed.slice(0, 8)), [])
  useEffect(() => () => clearTimeout(timeout), [])

  return (
    <Flex type="main" direction="column" id="home" justify="space-between">
      <Header />
      <Wrapper>
        {/* Main Feed Content */}
        <Flex
          direction="column"
          className="main-feed-container"
          justify="flex-start"
          align="center"
        >
          <Flex type="h3" gap=".25rem" grow justify="flex-start">
            <NewspaperClipping size={32} /> <span>Main Feed</span>
          </Flex>

          {[...Array(Math.floor(feed.length / 4))].map((_, i) => (
            <Grid.Layout reverse={i % 2} key={`grid-layout-${i}`}>
              {feed.slice(i * 4, (i + 1) * 4).map((data, j) => (
                <Grid.Element {...{ data, key: `grid-element-${j}` }} />
              ))}
            </Grid.Layout>
          ))}

          {mainFeed.length !== feed.length && (
            <Button
              className="more"
              onClick={fetchData}
              {...{ loading }}
              leftIcon={<ArrowClockwise size={20} />}
            >
              See More
            </Button>
          )}
        </Flex>

        {/* Editor's Choice */}
        <Sidebar title="Editor's Choice" data={editorsChoices} />
      </Wrapper>
      <Footer />
    </Flex>
  )
}

// The Grid Component that shows up at the home page.

export default Home

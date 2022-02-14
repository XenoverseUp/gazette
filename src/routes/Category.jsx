import { useParams } from "react-router-dom"
import { Flex, Footer, Header, Wrapper } from "../components"
import { categories } from "../data"

const Category = () => {
  const { slug } = useParams()

  const { name: categoryName, Icon: CategoryIcon } = categories.filter(
    ({ path }) => path === slug
  )[0]

  return (
    <Flex type="main" direction="column" id="category" justify="space-between">
      <Header activeCategory={slug} />
      <Wrapper className="category-wrapper"></Wrapper>
      <Footer />
    </Flex>
  )
}

export default Category

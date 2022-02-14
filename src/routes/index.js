import Home from "./Home"
import Category from "./Category"
import SingleNews from "./SingleNews"

const Routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/category/:slug",
    component: Category,
  },
  {
    path: "/news/:id",
    component: SingleNews,
  },
]

export default Routes

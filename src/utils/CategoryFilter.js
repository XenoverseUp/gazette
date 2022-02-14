class CategoryFilter {
  constructor(categories) {
    this.categories = categories
  }

  path = (categoryName) =>
    this.categories.filter((category) => category.name === categoryName)?.[0]
      ?.path

  icon = (categoryName) =>
    this.categories.filter((category) => category.name === categoryName)?.[0]
      ?.Icon
}

export default CategoryFilter

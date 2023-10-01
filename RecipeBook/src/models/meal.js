class Meal {
  constructor(
    id,
    categoryIds,
    title,
    imageUrl,
    ingredients,
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
  }
}

export default Meal;

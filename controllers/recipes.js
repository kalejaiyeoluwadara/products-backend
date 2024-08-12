const recipes = require("../db.json");

const getRecipes = (req, res) => {
  res.status(200).send(recipes);
};

const getSingleRecipe = (req, res) => {
  const { id } = req.params;
  const recipe = recipes.recipes.find((r) => r.id === id);

  if (recipe) {
    res.status(200).send(recipe);
  } else {
    res.status(404).send({ message: "Recipe not found" });
  }
};

module.exports = { getRecipes, getSingleRecipe };

const recipes = require("../db.json");
const getRecipes = (req, res) => {
  res.status(200).send(recipes);
};
module.exports = { getRecipes };

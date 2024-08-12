const express = require("express");
const { getRecipes, getSingleRecipe } = require("../controllers/recipes");
const router = express.Router();
router.get("/", getRecipes);
router.get("/:id", getSingleRecipe);
module.exports = router;

var express = require('express');
var router = express.Router();

// var db = mongojs(`mongodb://<elise>:<${mlab}>@ds143201.mlab.com:43201/recipe_list_api`)


const Ingredient = require('../models/Ingredient');
const ingredientController = require ('../controllers/ingredientController');

/* GET home page. */
router.get('/', ingredientController.getIngredients);

router.post('/', ingredientController.postIngredients);

router.get('/ingredients/:id/edit',  ingredientController.editIngredients);

router.post('/ingredients/:id/edit',  ingredientController.updateIngredients);

router.post('/ingredients/:id/delete',  ingredientController.deleteIngredients);

module.exports = router;

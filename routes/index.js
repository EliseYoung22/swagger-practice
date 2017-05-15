var express = require('express');
var router = express.Router();

const Ingredient = require('../models/Ingredient');
const ingredientController = require ('../controllers/ingredientController');

/* GET home page. */
router.get('/', ingredientController.getIngredients);

router.post('/', ingredientController.postIngredients);

router.get('/ingredients/:id/edit',  ingredientController.editIngredients);

router.post('/ingredients/:id/edit',  ingredientController.updateIngredients);

router.post('/ingredients/:id/delete',  ingredientController.deleteIngredients);

module.exports = router;

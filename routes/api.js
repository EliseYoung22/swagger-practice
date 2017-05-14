var express = require('express');
var router = express.Router();

const Ingredient = require('../models/Ingredient');
const ingredientController = require ('../controllers/apiingredientController');

router.get('/', ingredientController.getIngredientsApi);

router.post('/', ingredientController.postIngredientsApi);

router.get('/:id', ingredientController.editSingleIngredientsApi);

router.post('/:id/edit', ingredientController.updateIngredientsApi);

router.delete('/:id/delete', ingredientController.deleteIngredientsApi);


module.exports = router;

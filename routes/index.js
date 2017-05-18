var express = require('express');
var router = express.Router();

const Ingredient = require('../models/Ingredient');
const ingredientController = require ('../controllers/ingredientController');

/* GET home page. */
router.get('/', ingredientController.getIngredients);

router.post('/', ingredientController.postIngredients);

router.get('/ingredients/:id/edit',  ingredientController.editIngredients);

router.post('/ingredients/:id/edit',  ingredientController.updateIngredients);

// router.post('/ingredients/:id/delete',  ingredientController.deleteIngredients);

router.get('/ingredient/:id/delete', function(req, res){
	Ingredient.findByIdAndRemove({_id: req.params.id},
	   function(err){
		if(err) res.json(err);
		else    res.redirect('/ingredients');
	});
});


module.exports = router;

//API routes
const mongoose = require('mongoose');
const Ingredient = require('../models/Ingredient');

exports.getIngredientsApi = (req, res) => {
  Ingredient.find()
    .then((ingredients) => {
        res.json(ingredients)
  })
};

exports.postIngredientsApi = (req, res) => {
  const name = req.query.ingredient_name;
  let ingredient = new Ingredient();
  ingredient.name = name;
  ingredient.save()
    .then(() => {
      res.redirect('/api')
    })
};

exports.editSingleIngredientsApi = (req, res) => {
  Ingredient.findOne({ _id: req.params.id })
  // shows params. req gets sent when the connection is goign to our server res is what we get sent back
  // res.send(req.params)
    .then(ingredient => { //render a template
      res.json(ingredient);
    })
};
exports.updateIngredientsApi = (req, res) => {
  Ingredient.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true // returns new ingredient
  })
    .then(ingredient => {
      res.redirect(`/api/${req.params.id}`)
    })
};

exports.deleteIngredientApi = function(req, res){
	Ingredient.findByIdAndRemove({_id: req.params.id},
	   function(err){
		if(err) res.json(err);
		else {
      Ingredient.find()
        .then(ingredients => {
          res.json(ingredients)
        })
    };
	});
};

var express = require('express');
var router = express.Router();
var Recipe = require('../models/recipe');


router.post('/add', function (req, res, next) {
    addToDB(req, res);
});

router.get('/get', function (req, res, next) {
    getOneFromDB(req, res);
});

router.get('/getrandom', function (req, res, next) {
    getRandomFromDB(req, res);
})

router.get('/search', function (req, res, next) {
    getFromDB(req, res);
});

async function addToDB(req, res) {
    var recipe = new Recipe({
        name: req.body.name,
        ingredients: req.body.ingredients,
        description: req.body.description
    });

    try {
        doc = await recipe.save();
        return res.status(201).json(doc);
    }
    catch (err) {
        console.log(err);
        return res.status(501).json(err);
    }
}

async function getOneFromDB(req, res) {
    var recipe;

    try {
        recipe = await Recipe.findById(req.query.id).exec();
        return res.status(201).json(recipe);
    } catch (err) {
        console.log(err);
        return res.status(501).json(err);
    }
}

async function getRandomFromDB(req, res) {
    var recipe;

    try {
        var recipe = Recipe.find();
        var count = await Recipe.count({});

        recipe.skip(count - 3);

        recipe = await recipe.exec();
        
        return res.status(201).json(recipe);
    } catch (err) {
        console.log(err);
        return res.status(501).json(err);
    }
}

async function getFromDB(req, res) {
    var recipe;

    try {
        recipe = await Recipe.find({ ingredients: { $all: req.query.ingredients.split(',')}}).exec();
        return res.status(201).json(recipe);
    } catch (err) {
        console.log(err);
        return res.status(501).json(err);
    }
}

module.exports = router;
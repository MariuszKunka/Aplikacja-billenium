var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var schema = new Schema({
    name: {type:String, require:true},
    ingredients: {type:[String], require:true},
    description: {type:String, require:true}
});

module.exports = mongoose.model('Recipe',schema);
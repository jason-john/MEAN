
const mongoose = require('mongoose');

//create a blueprint / schema
const postSchema = mongoose.Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  imagePath: {type: String, required: true}
});

//convert schema to model then export it
module.exports = mongoose.model('Post', postSchema);

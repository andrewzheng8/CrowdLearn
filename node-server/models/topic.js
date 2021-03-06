const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define our model
const topicSchema = new Schema({
  name: {type: String, unique: true},
  img_url: String
})

// Create the model class
const ModelClass = mongoose.model('topic', topicSchema)

// Export the model
module.exports = ModelClass

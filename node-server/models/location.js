const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define our model
const locationSchema = new Schema({
  address: String,
  time: String,
  course: {type: Schema.Types.ObjectId, ref: 'course'}
})

// Create the model class
const ModelClass = mongoose.model('location', locationSchema)

// Export the model
module.exports = ModelClass

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./user')

// Define our model
const courseSchema = new Schema({
  title: String,
  curriculum: String,
  teacher: {type: Schema.Types.ObjectId, ref: 'user'}
})

// userSchema.methods.comparePassword = function (candidatePassword, callback) {
//   bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
//     if (err) { return callback(err) }
//
//     callback(null, isMatch)
//   })
// }

// Create the model class
const ModelClass = mongoose.model('course', courseSchema)

// Export the model
module.exports = ModelClass

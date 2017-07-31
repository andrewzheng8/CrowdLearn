const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const User = require('./user')

const voteSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'user'},
  contribution: Number
})

const locationSchema = new Schema({
  address: String,
  time: String,
  votes: [voteSchema],
  funding: Number,
  teacherVoted: Boolean
})

locationSchema.pre('save', function (next) {
  const location = this
  location.funding = location.countContributions()
  next()
})

locationSchema.methods.countContributions = function () {
  const contributionReducer = (sum, vote) => sum + vote.contribution
  return this.votes.reduce(contributionReducer, 0)
}

const courseSchema = new Schema({
  title: String,
  curriculum: String,
  teacher: {type: Schema.Types.ObjectId, ref: 'user'},
  price: Number,
  maximumStudents: Number,
  locations: [locationSchema],
  topic: {type: Schema.Types.ObjectId, ref: 'topic'}
  // [{type: Schema.Types.ObjectId, ref: 'location'}]
})

// courseSchema.pre('save', function (next) {
//   const course = this
//   // check all locations, if any have funding greater than price, send a notice to teacher??, send course and locaiton information bundled
// })

const CourseModel = mongoose.model('course', courseSchema)
const LocationModel = mongoose.model('location', locationSchema)

module.exports = {
  Course: CourseModel,
  Location: LocationModel
}

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./user')

const voteSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'user'},
  contribution: Number
})

const locationSchema = new Schema({
  address: String,
  time: String,
  votes: [voteSchema],
  funding: Number
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
  locations: [locationSchema]
  // [{type: Schema.Types.ObjectId, ref: 'location'}]
})

const ModelClass = mongoose.model('course', courseSchema)

module.exports = ModelClass

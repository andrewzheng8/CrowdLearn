const User = require('../models/user')
const Course = require('../models/course').Course

exports.fetchUser = function (req, res, next) {
  // User has already had their email and password auth'd
  // We just need to give them a token

  const userId = req.params.userId
  if (!userId) {
    return res.status(422).send({ error: 'You must provide valid userId'})
  }

  User.findById(userId, 'email topics_following courses_following', (err, user) => {
    if (err) next(err)
    console.log(user, 'user found')
    user.populate('topics_following courses_following', (err, popUser) => {
      if (err) next(err)
      console.log(err, 'error')
      console.log(popUser, 'inside populate')
      res.json(popUser)
    })
  })
}

exports.followTopic = function (req, res, next) {
  const userId = req.params.userId,
    topicId = req.params.topicId

  if (!userId || !topicId) {
    return res.status(422).send({ error: 'You must provide valid userId and topicId'})
  }

  User.findById(userId, 'email topics_following courses_following', (err, user) => {
    if (err) next(err)
    user.topics_following.push(topicId)

    user.save((err, savedUser) => {
      if (err) next(err)
      savedUser.populate('topics_following courses_following', (err, popUser) => {
        if (err) next(err)
        console.log(err, 'error')
        console.log(popUser, 'inside populate')
        res.json(popUser)
      })
    })
  })
}

exports.unfollowTopic = function (req, res, next) {
  const userId = req.params.userId,
    topicId = req.params.topicId

  if (!userId || !topicId) {
    return res.status(422).send({ error: 'You must provide valid userId and topicId'})
  }

  User.findById(userId, 'email topics_following courses_following', (err, user) => {
    if (err) next(err)
    console.log(user.topics_following.filter(t => t.toString() !== topicId))
    user.topics_following = user.topics_following.filter(t => t.toString() !== topicId)
    console.log(user.topics_following, 'after filter')
    user.save((err, savedUser) => {
      if (err) next(err)
      savedUser.populate('topics_following courses_following', (err, popUser) => {
        if (err) next(err)
        res.json(popUser)
      })
    })
  })
}

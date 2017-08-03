const User = require('../models/user')
const Course = require('../models/course').Course

exports.fetchUser = function (req, res, next) {
  // User has already had their email and password auth'd
  // We just need to give them a token

  const userId = req.params.userId
  if (!userId) {
    return res.status(422).send({ error: 'You must provide valid userId'})
  }

  User.findById(userId, 'email topics_following courses_following img_url', (err, user) => {
    if (err) next(err)
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

  User.findById(userId, 'email topics_following courses_following img_url', (err, user) => {
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

  User.findById(userId, 'email topics_following courses_following img_url', (err, user) => {
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

exports.followCourse = function (req, res, next) {
  const userId = req.params.userId,
    courseId = req.params.courseId

  if (!userId || !courseId) {
    return res.status(422).send({ error: 'You must provide valid userId and courseId'})
  }

  User.findById(userId, 'email topics_following courses_following img_url', (err, user) => {
    if (err) next(err)
    user.courses_following.push(courseId)

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

exports.unfollowCourse = function (req, res, next) {
  const userId = req.params.userId,
    courseId = req.params.courseId

  if (!userId || !courseId) {
    return res.status(422).send({ error: 'You must provide valid userId and topicId'})
  }

  User.findById(userId, 'email topics_following courses_following img_url', (err, user) => {
    if (err) next(err)
    // console.log(user.courses_following.filter(t => t.toString() !== courseId))
    user.courses_following = user.courses_following.filter(c => c.toString() !== courseId)
    // console.log(user.topics_following, 'after filter')
    user.save((err, savedUser) => {
      if (err) next(err)
      savedUser.populate('topics_following courses_following', (err, popUser) => {
        if (err) next(err)
        res.json(popUser)
      })
    })
  })
}

exports.updateUser = function (req, res, next) {
  const userId = req.params.userId,
    img_url = req.body.img_url

    if (!userId || !img_url) {
      return res.status(422).send({ error: 'You must provide valid userId and image urlß'})
    }

    User.findById(userId, 'email topics_following courses_following img_url', (err, user) => {
      if (err) next(err)
      // console.log(user.courses_following.filter(t => t.toString() !== courseId))
      user.img_url = img_url
      // console.log(user.topics_following, 'after filter')
      user.save((err, savedUser) => {
        if (err) next(err)
        savedUser.populate('topics_following courses_following', (err, popUser) => {
          if (err) next(err)
          res.json(popUser)
        })
      })
    })


}

const Course = require('../models/course').Course

exports.voteForLocation = (req, res, next) => {
  const locationId = req.params.locationId,
    courseId = req.params.courseId,
    vote = req.body
  if (!locationId || !courseId || !vote || vote.contribution < 0) {
    return res.status(422).send({ error: 'You must provide location and course IDs'})
  }

  // find the current course by id and add ref to them in the new location as the course
  Course.findById(courseId, (err, course) => {
    if (err) next(err)
    let loc = course.locations.id(locationId)
    loc.votes.push(vote)
    course.save((err, savedCourse) => {
      if (err) next(err)
      // findCourseAndRespond('teacher', res, next, courseId)
      Course.findSingleAndPopTeach(courseId, res, next)
    })
  })
}

exports.updateVote = (req, res, next) => {
  const locationId = req.params.locationId,
    courseId = req.params.courseId,
    voteId = req.params.voteId,
    contribution = req.body.contribution
  if (!locationId || !courseId || !voteId || !voteId || contribution < 0) {
    return res.status(422).send({ error: 'You must provide location and course IDs'})
  }

  // find the current course by id and add ref to them in the new location as the course
  Course.findById(courseId, (err, course) => {
    if (err) next(err)

    course.locations.id(locationId).votes.id(voteId).contribution = contribution

    course.save((err, savedCourse) => {
      if (err) next(err)
      // findCourseAndRespond('teacher', res, next, courseId)
      Course.findSingleAndPopTeach(courseId, res, next)
    })
  })
}

exports.removeVote = (req, res, next) => {
  const locationId = req.params.locationId,
    courseId = req.params.courseId,
    voteId = req.params.voteId
  if (!locationId || !courseId || !voteId) {
    return res.status(422).send({ error: 'You must provide vote, location, and course IDs'})
  }

  // find the current course by id and add ref to them in the new location as the course
  Course.findById(courseId, (err, course) => {
    if (err) next(err)
    course.locations.id(locationId).votes.id(voteId).remove()
    console.log('after remove')
    course.save((err, savedCourse) => {
      if (err) next(err)
      // findCourseAndRespond('teacher', res, next, courseId)
      Course.findSingleAndPopTeach(courseId, res, next)
    })
  })
}

function findCourseAndRespond (populateField, responseCallback, nextCallBack, courseId) {
  Course.findById(courseId).populate(populateField)
    .exec((err, populatedCourse) => {
      if (err) next(err)
      responseCallback.json(populatedCourse)
    })// end exec
}

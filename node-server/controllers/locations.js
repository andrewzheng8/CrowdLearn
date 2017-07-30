const Course = require('../models/course').Course
const Location = require('../models/course').Location

exports.toggleApproveLocation = (req, res, next) => {
  const locationId = req.params.locationId,
    courseId = req.params.courseId
  if (!locationId || !courseId) {
    return res.status(422).send({ error: 'You must provide location and course IDs'})
  }

  // find the current course by id and add ref to them in the new location as the course
  Course.findById(courseId, (err, course) => {
    if (err) next(err)
    let loc = course.locations.id(locationId)
    loc.teacherVoted = !loc.teacherVoted

    course.save((err, savedCourse) => {
      if (err) next(err)
      Course.findById(courseId).populate('teacher').exec( (err, course) => {
        if (err) next(err)
        res.json(course)
      })
    })
  })
}

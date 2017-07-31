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
      Course.findById(courseId).populate('teacher').exec((err, course) => {
        if (err) next(err)
        res.json(course)
      })
    })
  })
}

exports.addLocation = (req, res, next) => {
  const address = req.body.address,
    time = req.body.time,
    courseId = req.body.course,
    funding = 0,
    teacherVoted = false

  if (!address || !time || !courseId) {
    return res.status(422).send({ error: 'You must provide title, curriculum, price, and max students and teacher'})
  }

  // find course by id, push new location onto it, then save and grab the saved course
  Course.findById(courseId).exec((err, course) => {
    if (err) next(err)

    const newLoc = new Location({address, time, funding, teacherVoted})
    course.locations.push(newLoc)
    console.log('before save')
    course.save((err, savedCourse) => {
      console.log('inside the course save')
      if (err) {
        console.log(err)
        next(err)
      }
      savedCourse.populate({path: 'teacher', select: 'email'}, (err, populatedCourse) => {
        if (err) next(err)
        res.json(populatedCourse)
      })
      // findCourseAndRespond('teacher', res, next, savedCourse._id)
    })
  })// end findById exec, possibly change to be immediate execution
} //* **** end addLocation

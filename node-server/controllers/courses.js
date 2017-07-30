const Course = require('../models/course').Course
const Location = require('../models/course').Location
const User = require('../models/user')

//* ********** Create course and return it populated with teacher field **************
exports.createCourse = (req, res, next) => {
  const title = req.body.title,
    curriculum = req.body.curriculum,
    price = req.body.price,
    maximumStudents = req.body.maximumStudents,
    teacherId = req.body.teacher

  if (!title || !curriculum || !teacherId || maximumStudents < 1 || price < 0) {
    return res.status(422).send({ error: 'You must provide title, curriculum, non negative price, and max students and teacher'})
  }

  // find the current user by id and add ref to them in the new course as the teacher
  User.findById(teacherId, function (err, teacher) {
    if (err) { return next(err) }
    var newCourse = new Course({
      title,
      curriculum,
      price,
      maximumStudents,
      teacher: teacher._id
    })

    // save the course and then use a query to grab it from the database and populate the teacher field
    newCourse.save((err, savedCourse) => {
      if (err) next(err)
      savedCourse.populate({path: 'teacher', select: 'email'}, (err, populatedCourse) => {
        if (err) next(err)
        res.json(populatedCourse)
      })
    })// end newCoursesave
  })// end User.findById
}//* **end createCourse

//* ***** fetchCourses for use in course master detail view ********
exports.fetchCourses = (req, res, next) => {
  findCourseAndRespond({path: 'teacher', select: 'email'}, res, next)
}

//* ************ Add location to the Course So it can be voted on *********
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

    course.save((err, savedCourse) => {
      if (err) next(err)

      savedCourse.populate({path: 'teacher', select: 'email'}, (err, populatedCourse) => {
        if (err) next(err)
        res.json(populatedCourse)
      })
      // findCourseAndRespond('teacher', res, next, savedCourse._id)
    })
  })// end findById exec, possibly change to be immediate execution
} //* **** end addLocation

function findCourseAndRespond (populateField, responseCallback, nextCallBack, courseId) {
  if (courseId) {
    Course.findById(courseId).populate(populateField)
    .exec((err, populatedCourse) => {
      if (err) next(err)
      responseCallback.json(populatedCourse)
    })// end exec
  } else {
    Course.find().populate(populateField)
    .exec((err, populatedCourse) => {
      if (err) next(err)
      responseCallback.json(populatedCourse)
    })// end exec
  }
} //* *end findCourseAndRespond

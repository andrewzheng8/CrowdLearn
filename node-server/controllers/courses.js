const Course = require('../models/course')
const User = require('../models/user')

function saveCourseCallback (err) {
  if (err) {
    console.log(err)
    return next(err)
  }
}

exports.createCourse = (req, res, next) => {
  const title = req.body.title
  const curriculum = req.body.curriculum
  const price = req.body.price
  const maximumStudents = req.body.maximumStudents
  const teacherId = req.body.teacher

  if (!title || !curriculum || !teacherId || maximumStudents < 1) {
    return res.status(422).send({ error: 'You must provide title, curriculum, price, and max students and teacher'})
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
    // console.log(teacher)

    newCourse.save(saveCourseCallback)

    // find course and return it with the teacher data filled out
    Course.findById(newCourse._id).populate('teacher')
    .exec((err, course) => {
      if (err) { return next(err) }
      res.json(course)
    })// end exec
  })// end User.findById
}

exports.fetchCourses = (req, res, next) => {
  Course.find().populate('teacher').exec((err, courses) => {
    if (err) { return next(err) }
    res.json(courses)
  })
}

exports.addLocation = (req, res, next) => {
  const address = req.body.address
  const time = req.body.time
  const courseId = req.body.course
  console.log(courseId, 'at the starting point')

  Course.findById(courseId)
  .exec((err, course) => {
    if (err) {
      console.log(err)
      return next(err)
    }
    course.locations.push({address, time})
    course.save(saveCourseCallback)
    res.json(course)// return course to populate the course you added to
    // still need to refetch for all courses so when you navigate back to the current course the locatins are populated
  })// end findById
}

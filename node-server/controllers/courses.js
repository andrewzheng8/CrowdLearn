const Course = require('../models/course')
const User = require('../models/user')

exports.createCourse = (req, res, next) => {
  const title = req.body.title
  const curriculum = req.body.curriculum
  const teacherId = req.body.teacher

  if (!title || !curriculum || !teacherId) {
    return res.status(422).send({ error: 'You must provide title, curriculum, and teacher'})
  }

  // find the current user by id and add ref to them in the new course as the teacher
  User.findById(teacherId, function (err, teacher) {
    if (err) { return next(err) }
    var newCourse = new Course({
      title: title,
      curriculum: curriculum,
      teacher: teacher._id
    })

    newCourse.save(function (err) {
      if (err) {
        return next(err)
      }

      // Repond to request indicating the course was created
      res.json(newCourse)
    })
  })
}

exports.fetchCourses = (req, res, next) => {
  Course.find().populate('teacher').exec((err, courses) => {
    if (err) { return next(err) }
    res.json(courses)
  })
}

const Course = require('../models/course')

exports.createCourse = (req, res, next) => {
  const title = req.body.title
  const curriculum = req.body.curriculum
  const teacherId = req.body.teacher

  if (!title || !curriculum) {
    return res.status(422).send({ error: 'You must provide title and curriculum'})
  }

  const course = new Course({
    title: title,
    curriculum: curriculum,
    teacher: teacherId
  })

  console.log('creating new course')

  course.save(function (err) {
    if (err) { return next(err) }

    // Repond to request indicating the user was created
    res.json(course)
  })
}

exports.fetchCourses = (req, res, next) => {
  console.log('FETCHING COURSES IN CONTROLLER')
  Course.find((err, courses) => {
    if (err) { return next(err) }
    console.log('GETTING COURSES FROM DATABASE !!! -0--- !!!', courses)
    res.json(courses)
  })
}

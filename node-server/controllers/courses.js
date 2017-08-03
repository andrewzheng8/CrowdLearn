const Course = require('../models/course').Course
const Location = require('../models/course').Location
const User = require('../models/user')

//* ********** Create course and return it populated with teacher field **************
exports.createCourse = (req, res, next) => {
  const title = req.body.title,
    curriculum = req.body.curriculum,
    price = req.body.price,
    maximumStudents = req.body.maximumStudents,
    teacherId = req.body.teacher,
    topicId = req.params.topicId,
    img_url = req.body.img_url || 'http://img02.deviantart.net/2df7/i/2012/319/5/9/magic_man_by_damiensaelak-d5l15r9.jpg'

  if (!title || !curriculum || !teacherId || maximumStudents < 1 || price < 0 || !topicId) {
    return res.status(422).send({ error: 'You must provide title, curriculum, non negative price, and max students and teacher'})
  }

  var newCourse = new Course({
    title,
    curriculum,
    price,
    maximumStudents,
    teacher: teacherId,
    topic: topicId
  })

  newCourse.saveAndPopTeach(res, next)
}//* **end createCourse

//* ***** fetchCourses for use in course master detail view ********
exports.fetchCourses = (req, res, next) => {
  const filter = req.body
  console.log(filter, 'filter thing')

  if (!filter) {
    return res.status(422).send({ error: 'You must a filter'})
  }
  Course.findAndPopTeach(filter, res, next)
}

exports.fetchCourse = (req, res, next) => {
  const courseId = req.params.courseId

  if (!courseId) {
    return res.status(422).send({ error: 'You must provide a courseId'})
  }
  Course.findSingleAndPopTeach(courseId, res, next)
}

exports.fetchTopicCourses = (req, res, next) => {
  const topicId = req.params.topicId
  Course.findAndPopTeach({topic: topicId}, res, next)
  // findCourseAndRespond({path: 'teacher', select: 'email'}, res, next)
}

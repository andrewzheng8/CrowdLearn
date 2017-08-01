const Topic = require('../models/topic')

//* ********** Create course and return it populated with teacher field **************
exports.createTopic = (req, res, next) => {
  const name = req.body.name

  if (!name) {
    return res.status(422).send({ error: 'You must provide a name'})
  }

  // find the current user by id and add ref to them in the new course as the teacher
  newTopic = new Topic({name})
    // save the course and then use a query to grab it from the database and populate the teacher field
  newTopic.save((err, savedTopic) => {
    if (err) next(err)
    res.json(savedTopic)
  })// end newTopicsave
}//* **end createTopic

//* ***** fetchCourses for use in course master detail view ********
exports.fetchTopics = (req, res, next) => {
  // findCourseAndRespond({path: 'teacher', select: 'email'}, res, next)
  Topic.find().exec((err, topics) => {
    if (err) next(err)

    res.json(topics)
  })
}

exports.fetchTopic = (req, res, next) => {
  const topicId = req.params.topicId

  if (!topicId) {
    return res.status(422).send({ error: 'You must provide a topicId'})
  }
  // findCourseAndRespond({path: 'teacher', select: 'email'}, res, next)
  Topic.findById(topicId).exec((err, topic) => {
    if (err) next(err)
    console.log(topic)
    res.json(topic)
  })
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

const Course = require('../models/course')
const Location = require('../models/location')

exports.createLocation = (req, res, next) => {
  const address = req.body.address
  const time = req.body.time
  const courseId = req.body.course

  if (!address || !time || !courseId) {
    return res.status(422).send({ error: 'You must provide title, curriculum, and teacher'})
  }

  // find the current user by id and add ref to them in the new course as the teacher
  Course.findById(courseId, function (err, course) {
    if (err) { return next(err) }
    const newLocation = new Location({
      address,
      time,
      course: course._id
    })

    newLocation.save(function (err) {
      if (err) {
        return next(err)
      }

      // Repond to request indicating the course was created
      res.json(newLocation)
    })
  })
}

exports.fetchLocations = (req, res, next) => {
  const courseId = req.course
  Course.findById(courseId, function (err, course) {
    if (err) { return next(err) }

    Location.find({course: course._id}).exec((err, locations) => {
      if (err) { return next(err) }
      res.json(locations)
    })
  })
}

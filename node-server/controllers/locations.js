const Course = require('../models/course').Course
const Location = require('../models/course').Location
const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyD-elxORKUUktuhgwrztT8pZPbyX2sS_4w'
})

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

    course.saveAndPopTeach(res, next)
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

  // use google maps to geocode address and then save the location to a course
  googleMapsClient.geocode({
    address
  }, function (err, response) {
    if (!err) {
      const long = response.json.results[0].geometry.location.lng
      const lat = response.json.results[0].geometry.location.lat
      const newLoc = new Location({address, time, funding, teacherVoted, loc: [long, lat]})

      Course.findById(courseId).exec((err, course) => {
        if (err) next(err)

        course.locations.push(newLoc)
        course.saveAndPopTeach(res, next)
      })
    }
  })
} //* **** end addLocation

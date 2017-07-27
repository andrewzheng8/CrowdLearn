const Course = require('../models/course')
const Location = require('../models/location')

exports.createLocation = (req, res, next) => {
  const address = req.body.address
  const time = req.body.time
  const courseId = req.body.course

  if (!address || !time || !courseId) {
    return res.status(422).send({ error: 'You must provide title, curriculum, and teacher'})
  }

  // find the current course by id and add ref to them in the new location as the course
  const findCourseCallback = (err, course) {
    if(err) {return next(err)}

    const newLocation = new Location({
      address,
      time,
      course: course._id
    })

    const saveLocationCallback = err => {
      if(err) {return next(err)}
      // Repond to request indicating the course was created
      res.json(newLocation)
    }

    //save the location
    newLocation.save(saveLocationCallback)

  }//end findCourseCallback

  //find Course by Id and save the location
  Course.findById(courseId, findCourseCallback)

}

exports.fetchLocations = (req, res, next) => {

  const courseId = req.course

  const findLocationCallback = (err, locations) => {
    if (err) { return next(err) }
    res.json(locations)
  }

  const findCourseCallback = (err, course) => {
    if (err) { return next(err) }
    Location.find({course: course._id}).exec(findLocationCallback)
  }

  Course.findById(courseId, findCourseCallback)


}

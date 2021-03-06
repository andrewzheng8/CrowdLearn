const jwt = require('jwt-simple')
const User = require('../models/user')
const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyD-elxORKUUktuhgwrztT8pZPbyX2sS_4w'
})

function tokenForUser (user) {
  const timestamp = new Date().getTime()
  return jwt.encode({ sub: user.id, iat: timestamp }, 'mysupersecret')
}

exports.signin = function (req, res, next) {
  // User has already had their email and password auth'd
  // We just need to give them a token
  const user = req.user
  res.send({ token: tokenForUser(req.user), user })
}

exports.signup = function (req, res, next) {
  const email = req.body.email
  const password = req.body.password
  // const residence = req.body.residence
  // const residence = req.body.residence add in nearby residence to where you reside
  // || !residence
  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email, password, and residence address'})
  }

  // See if a user with the given email exists
  User.findOne({ email: email }, function (err, existingUser) {
    if (err) { return next(err) }

    // If a user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' })
    }

    // If a user with email does NOT exist, create and save user record
    const user = new User({
      email: email,
      password: password,
      //residence: residence,
      img_url: 'https://www.atomix.com.au/media/2015/06/atomix_user31.png'
    })
    console.log('creating new user', user)
    user.save(function (err) {
      if (err) { return next(err) }

      // Repond to request indicating the user was created
      const userId = user.id
      res.json({ token: tokenForUser(user), user })
    })
  })
}

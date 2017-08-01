const User = require('../models/user')

exports.fetchUser = function (req, res, next) {
  // User has already had their email and password auth'd
  // We just need to give them a token

  const userId = req.params.userId
  if (!userId) {
    return res.status(422).send({ error: 'You must provide valid userId'})
  }

  User.findById(userId, 'email', (err, user) => {
    if (err) next(err)
    res.json(user)
  })
}

var HTTPError = require('http-errors')

module.exports = function(app) {
  // require('./routes/user')(app)
  app.get('/', require('./routes/index'))
  app.all('*', function(req, res, next) {
    res.render('404', function(err, html) {
      if (err) next()
      res,send
    })
  })
}
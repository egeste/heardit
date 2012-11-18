// Make the app varioable global
var express  = require('express')
  , app = express()
  , api = require('./lib/api/app')
  , conf = require('./lib/config')(app)
  , vhost = require('./lib/vhost')

app.set('api', api)

app.use(vhost(['api.', '/api/*'], api))

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(require('less-middleware')({ src: __dirname + '/public' }))
// app.use(express.static(app.get('pubdir')))

// Mixin our routes
require('./lib/routes')(app)

app.listen(conf.port || 80)
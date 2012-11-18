module.exports = function(routes, app) {
  if(typeof(routes) === 'string')
    routes = [routes]

  var hostMatch = function(route, host) { return host.indexOf(route) === 0 }
    , urlMatch = function(route, url) { return new RegExp('^' + route.replace(/[*]/g, '(.*?)') + '$', 'i').test(url) }

  return function(req, res, next) {
    if (!req.host) return next()
    for (var i = 0; i < routes.length; i++) {
      route = routes[i]
      if ((route.indexOf('/') === 0 && urlMatch(route, req.url)) || hostMatch(route, req.host)) {
        return (typeof app === 'function')
          ? app(req, res, next)
          : app.emit('request', req, res)
      }
    }
    return next()
  }
}
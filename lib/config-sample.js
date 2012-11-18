var config = {
  port: 80,
  env: 'dev' // dev, stage, prod
}

module.exports = function(app) {
  if (!app.get('config'))
    app.set('config', config)

  return config
}
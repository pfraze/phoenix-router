var qs = require('querystring')

var routeRegex = /^#\/([^\/^\?]+)\/?([^\?]+)?\??(.*)?$/
module.exports = function(hash, home) {
  if (!hash || hash == '#' || hash == '#/')
    hash = '#/' + home
  
  // set the route
  var match = routeRegex.exec(hash)
  if (match) {
    if (match[3]) {
      return [match[1], match[2] || null, qs.parse(match[3])]
    }
    if (match[2])
      return [match[1], match[2]]
    return [match[1]]
  }
  return ['notfound']
}
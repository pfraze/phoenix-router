var router = require('../')
var tape = require('tape')

tape('mathching', function (t) {
  t.deepEqual(router('#/', 'home'), ['home'])
  t.deepEqual(router('#/home', 'home'), ['home'])
  t.deepEqual(router('#/msgs', 'home'), ['msgs'])
  t.deepEqual(router('#/msgs/5', 'home'), ['msgs', '5'])
  t.deepEqual(router('#/msgs/5/author', 'home'), ['msgs', '5/author'])
  t.deepEqual(router('#/msgs/5/author?foo=bar&hello=world', 'home'), ['msgs', '5/author', { foo: 'bar', hello: 'world' }])
  t.deepEqual(router('#/other?foo=bar&hello=world', 'home'), ['other', null, { foo: 'bar', hello: 'world' }])
  t.deepEqual(router('badinput', 'home'), ['notfound'])

  t.end()
})

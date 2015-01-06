# Phoenix Router

A simple SPA router

```js
var router = require('phoenix-router')

// usage: router(hash, default-page)

router('#/', 'home')
// => ['home']

router('#/home', 'home')
// => ['home']

router('#/msgs', 'home')
// => ['msgs']

router('#/msgs/5', 'home')
// => ['msgs', '5']

router('#/msgs/5/author', 'home')
// => ['msgs', '5/author']

router('#/msgs/5/author?foo=bar&hello=world', 'home')
// => ['msgs', '5/author', { foo: 'bar', hello: 'world' }]

router('#/other?foo=bar&hello=world', 'home')
// => ['other', null, { foo: 'bar', hello: 'world' }]

router('badinput', 'home')
// => ['notfound']

// here's how you use it:
var pages = {
  home: console.log.bind(console, 'home page'),
  msgs: console.log.bind(console, 'message page'),
  notfound: console.log.bind(console, '404')
}
var route = router(window.location.hash, 'home')
var page = pages[route[0]] || pages.notfound
page(route)
```
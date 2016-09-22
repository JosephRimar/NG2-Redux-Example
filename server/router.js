'use strict';
let router = require('koa-router')();
let uuid = require('node-uuid');
let jwt = require('jsonwebtoken');
let config = require('./config');
let jwtMiddleware = require('koa-jwt')({ secret: config.jwt_secret });


const products = [
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
  {"id": 2, "title": "HP Spectre Special Edition ", "price": 1099.99, "inventory": 10},
  {"id": 3, "title": "Xbox One", "price": 259.99, "inventory": 6},
  {"id": 4, "title": "Samsung Galaxy S7 Edge", "price": 719.99, "inventory": 3},
  {"id": 5, "title": "Sony Playstation 4", "price": 299.99, "inventory": 6}
]


const cartItems = [
  {"id": 2, "title": "HP Spectre Special Edition ", "price": 1099.99, "quantity": 1},
  {"id": 4, "title": "Samsung Galaxy S7 Edge", "price": 719.99, "quantity": 3},
  {"id": 5, "title": "Sony Playstation 4", "price": 299.99, "quantity": 4}
]

router.get('/api/hydrate', function*() {
  this.body = products;
});

router.get('/api/myCart', function*() {
  this.body = cartItems;
});


module.exports = router;





// function vowelCount(str) {
//   var counter = 0;
//   var vowels = 'aeiou'

//   for (var i = 0; i < str.length; i++) {
//         if(str[i] ) counter ++;
//   }

//   return counter;
//}






/*

router.get('/post/:id', function*() {
  let foundPost = findPost(this.params.id);

  if (foundPost) {
    this.body = foundPost;
  }
  else {
    this.throw(404);
  }
});

router.post('/post/:id', function*() {
  let foundPost = findPost(this.params.id);

  if (foundPost) {
    Object.assign(foundPost, this.request.body);
    this.body = foundPost;
  }
  else {
    this.throw(404);
  }
});


router.post('/post', jwtMiddleware, function*() {
  posts.unshift(Object.assign(
    { },
    this.request.body,
    { _id: uuid.v4() }
  ));

  this.body = {success: true};
});

router.post('/login', function*() {
  let email = this.request.body.email;
  let password = this.request.body.password;

  let result = {success: false};

  if (email == 'admin@gmail.com' && password == 'angular2') {
    result.success = true;
    result.auth_token = jwt.sign({ email: email }, config.jwt_secret);
  }

  this.body = result;
});

*/

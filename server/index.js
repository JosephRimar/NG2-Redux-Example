'use strict';
let koa = require('koa');
let staticServe = require('koa-static');
let bodyParser = require('koa-bodyparser');
let config = require('./config');
let router = require('./router');
let mount = require('koa-mount');

let app = module.exports = koa();

let rootApp = koa();

app.use(staticServe(config.staticPath));

app.use(bodyParser());
app.use(router.routes());

rootApp.use(mount('/fees-angular', app))
rootApp.listen(config.port);
console.log(`Listening on port ${config.port}`);

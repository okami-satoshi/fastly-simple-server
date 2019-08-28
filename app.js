'use strict';

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = 'Hello get';
});

router.post('/', (ctx, next) => {
    ctx.body = 'Hello post';
});
  
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
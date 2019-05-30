const webpack = require('webpack');
const webpackDevMiddleware = require('koa-webpack-dev-middleware');
const webpackHotMiddleware = require('koa-webpack-hot-middleware');
const config = require('./webpack.config');
const koa =  require('koa');
const app = new koa();
const convert = require('koa-convert');
const router = require('./server/router/router');
const koaStatic = require('koa-static');
const views = require('co-views');
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    watchOptions: {
        ignored: /node_modules/,
    },
    reload: true,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
}))
app.use(webpackHotMiddleware(compiler))
app.use(async function(ctx,next) {
    ctx.render = views(__dirname + '/server', {
        ext: 'ejs',
    });
    await next();
})
    .use(koaStatic(__dirname + '/release'))
    .use(router.routes())
    .use(router.allowedMethods())
app.listen(1919)
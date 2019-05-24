const Koa = require('koa')
const webpack = require('webpack')
const webpackDevMiddleware = require('koa-webpack-dev-middleware')
const webpackHotMiddleware = require('koa-webpack-hot-middleware')
const config = require('./config/webpack.config')
const app = new Koa()
const compiler = webpack(config)

const wdm = webpackDevMiddleware(compiler, {
  noInfo: true,
  //publicPath: config.output.publicPath
})
app.use(wdm)
app.use(webpackHotMiddleware(compiler))
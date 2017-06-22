import Koa from 'koa'
import views from 'koa-views'
import path from 'path'
import convert from 'koa-convert'

// webpack react 热更新
import webpack from 'webpack'
import webpackConfig from '../webpack.config.js'
import { devMiddleware, hotMiddleware } from 'koa-webpack-middleware'

const app = new Koa()
const compile = webpack(webpackConfig)

const wdm = devMiddleware(compile, {
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },
  reload: true,
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true
  }
})

app.use(require('koa-static')(path.join(__dirname, '../build'))).use(
  views(path.join(__dirname, '../views'), {
    extension: 'html'
  })
)
if (process.env.NODE_ENV !== 'production') {
  app.use(wdm)
  app.use(hotMiddleware(compile))
}

app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use('/', ctx => ctx.render('index.html'))
app.use('/pages', ctx => ctx.render('cache.html'))

const server = app.listen(3000, () => console.log('系统启动， 端口 ·：3000'))

process.on('SIGTERM', () => {
  console.log('Stopping dev server')
  wdm.close()
  server.close(() => {
    process.exit(0)
  })
})

module.exports = app

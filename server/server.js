import Koa from 'koa'
import views from 'koa-views'
import path from 'path'

const app = new Koa()

app.use(require('koa-static')(path.join(__dirname, '../build')))
  .use(views(path.join(__dirname, '../views'), {
    extension: 'html'
  }))

app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use((ctx) => {
  return ctx.render('index.html')
})

app.listen(3000, () => console.log('系统启动， 端口 ·：3000'))

module.exports = app
import Router from 'koa-router'

const indexRouter = new Router()

indexRouter
  .get('/', ctx => ctx.render('index.html'))
  .get('/pages', async ctx => ctx.render('cache.html'))
  .post('/pages', async (ctx) => {
    const data = ctx.body
    return (ctx.body = data)
  })

export default indexRouter

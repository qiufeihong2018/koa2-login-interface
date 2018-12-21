const router = require('koa-router')()

router.prefix('/api/user')

router.post('/login', function (ctx, next) {
    const {username, password} = ctx.request.body
    if (username === 'admin' && password === 'admin') {
        ctx.response.body = {
            success: true,
            data: `hello,${username}`
        }
    } else {
        ctx.response.body = {
            success: false,
            data: `sorry`
        }
    }
})

module.exports = router

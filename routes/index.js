const Router = require('koa-router');
const ArtileController = require('../controllers/article');

const router = new Router({
  prefix: '/api'
});

/**
 * 文章接口
 * 注意:POST必须选中body请求体里面的x-www-from-urlencoded
 */
//创建文章 POST:http://localhost:3000/api/article?title=title1&author=author1&content=content1&category=category1
router.post('/article/post',ArtileController.create);

//获取文章详情 GET:http://localhost:3000/api/article/2
router.get('/article/:id',ArtileController.detail)
router.get('/article/update',ArtileController.update)

module.exports = router

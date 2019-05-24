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
//获取文章 GET:http://localhost:3000/api/article/2
router.get('/article/:id',ArtileController.detail)
// 更新文章 PUT:http://localhost:3000/api/article/update/1
router.put('/article/update/:id',ArtileController.update)
// 单个删除 DELETE:http://localhost:3000/api/article/delete/13
router.delete('/article/delete/:id',ArtileController.delete)


module.exports = router

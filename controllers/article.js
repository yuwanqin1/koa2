const ArticleModel = require("../modules/article");

class articleController {
    /**
     * 创建文章
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async create(ctx){
        //接收客服端
        let req = ctx.request.body;
        if(req.title && req.author && req.content && req.category){
            try{
                //创建文章模型
                const ret = await ArticleModel.postArticle(req);
                //使用刚刚创建的文章ID查询文章详情，且返回文章详情信息
                const data = await ArticleModel.getArticle(ret.id);

                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '创建文章成功',
                    data
                }
            }catch(err){
                ctx.response.status = 412;
                ctx.body = {
                    code: 412,
                    msg: '创建文章失败',
                    data: err
                }
            }
        }else {
            ctx.response.status = 416;
            ctx.body = {
                code: 200,
                msg: '参数不齐全',
                data: ctx
            }
        }
    }
    /**
     * 获取文章详情
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async detail(ctx){
        let id = ctx.params.id || ctx.request.body.id;
        if(id){
            try{
                // 查询文章详情模型
                let data = await ArticleModel.getArticle(id);
                if (data) {
                    ctx.response.status = 200;
                    ctx.body = {
                        code: 200,
                        msg: '查询成功',
                        data
                    }
                } else {
                    ctx.body = {
                        msg: '不存在的id'
                        }
                }
            }catch(err){
                ctx.response.status = 412;
                ctx.body = {
                    code: 412,
                    msg: '查询失败',
                    data,
                    err
                }
            }
        }else {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '文章ID必须传',
                ctx: ctx.request.body
            }
        }
    }
    static async update(ctx) {
        let req = ctx.request.body;
        let id = ctx.params.id
            try{
                const ret = await ArticleModel.updateArticle(Object.assign(ctx.params, ctx.request.body));
                if(ret) {
                    ctx.body = {
                        code: 200,
                        msg: '修改文章成功',
                        data: ctx.params,
                        response: ctx.response,
                        ctx: ctx
                    }
                } else {
                    ctx.body = {
                        msg: '不存在的id'
                    }
                }
            }catch(err){
                ctx.body = {
                    code: 400,
                    msg: '修改文章失败',
                    response: ctx.response
                }
            }
    }
    static async delete(ctx) {
        let id = ctx.params.id
        try{
            const ret = await ArticleModel.deleteArticle(id)
            ctx.body = {
                code: 200,
                msg: '删除文章成功'
            }
        }catch(err){
            ctx.body = {
                code: 400,
                msg: '删除文章失败'
            }
        }
    }
}

module.exports = articleController;
// 请求后返回数据格式 定义
// 引入mysql的配置文件
const db = require('../config/db');

// 引入sequelize对象
const Sequelize = db.sequelize;

// 引入数据表模型
const Article = Sequelize.import('../schema/article');
Article.sync({force: false}); //自动创建表

class ArticleModel {
    /*创建文章模型*/
    static async postArticle(data){
        return await Article.create({
            title: data.title, //标题
            author: data.author,  //作者
            content: data.content,  //文章内容
            category: data.category //文章分类
        });
    }
    /*查询文章的详情*/
    static async getArticle(id){
        return await Article.findOne({
            where:{
                id
            }
        });
    }
    /*更新文章*/
    static async updateArticle(data){
        return await Article.update({
            title: data.title, //标题
            author: data.author,  //作者
            content: data.content,  //文章内容
            category: data.category //文章分类
        },{
            where: { id: data.id }
        })
    }
    /* 单个删除 */
    static async deleteArticle(id){
        return await Article.destroy({
            where:{
                id
            }
        })
    }
}

module.exports = ArticleModel;
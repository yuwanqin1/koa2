// 创建表格
const moment = require("moment");
module.exports = function(sequelize,DataTypes){
    return sequelize.define('article',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true
        },
        //文章标题
        title:{
            type: DataTypes.STRING,
            allowNull: false,
            field: 'title'
        },
        //作者
        author:{
            type: DataTypes.STRING,
            allowNull: false,
            field: 'author'
        },
        //内容
        content:{
            type: DataTypes.STRING,
            allowNull: false,
            field:'content'
        },
        //文章分类
        category:{
            type: DataTypes.STRING,
            allowNull: false,
            field: 'category'
        },
        // 创建时间
        createdAt:{
            type: DataTypes.DATE
        },
        // 更新时间
        updatedAt:{
            type: DataTypes.DATE
            }
        },
        {
        freezeTableName: true
        }
    )}
// 创建users用户表
const moment = require("moment");
    module.exports = (sequelize,DataTypes) => {
        return sequelize.define('users',{
            id: {
                type:  DataTypes.INTEGER,//类型
                primaryKey: true,//主键
                allowNull: true,//允许为空
                autoIncrement: true//自动增长
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                field: 'name'
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                field: 'password'
            }
        },
        {
        freezeTableName: true
        })
    }
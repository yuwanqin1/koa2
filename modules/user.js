const db = require('../config/db')
const userLize = db.sequelize;
const Article = userLize.import('../schema/user');
Article.sync({force: false});

class UserModel {
    static async userLogin(data) {
        return await Article.findOne({
            where:{
                name: data.name,
                password: data.password
            }
        })
    }
}
module.exports = UserModel
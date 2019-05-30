const UserModel = require("../modules/user")

class userController {
    static async login(ctx) {
        let data = ctx.params;
        if (data.password && data.name) {
            try{
                let res = await UserModel.userLogin();
                if (res) {
                    ctx.body = {
                        code: 200,
                        msg: '查询成功',
                        res
                    }
                } else {
                    ctx.body = {
                        msg: '用户不存在',
                        res
                        }
                }
            }catch(err) {
                ctx.body = {
                    code: 412,
                    msg: '登陆失败',
                    data,
                    err
                }
            }
        } else {
            ctx.body = {
                msg: '参数不正确'
            }
        }
    }
}
module.exports = userController
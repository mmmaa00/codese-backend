const db = require('../utils/db')
const security = require('../utils/security')

const create = async (newAccount) => {
    const checkExistedSQL = `
        SELECT count(username) as c
        FROM account 
        WHERE username = ? ;
    `
    const exist = await db.queryOne(checkExistedSQL, [newAccount,username]);
    if(exist.c > 0) {
        return "Tài khoản đã tồn tại";
    } else {
        const encryptedPassword = await security.generatePassword(newAccount.password);
        console.log(encryptedPassword);
        const inserSQL = `
            INSERT INTO account(username, password) VALUES (?,?);
        `
        await db.query(inserSQL, [newAccount.username,encryptedPassword]);
        return "Tạo tài khoản thành công"
    }
}


module.exports = {
    create
}
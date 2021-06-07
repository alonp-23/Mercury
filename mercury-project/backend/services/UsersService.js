const pool = require('../db/config');

const getAll = async () => {
    return await pool.query('SELECT * FROM users').then(res => { return res.rows; });
}

const authenticateUser = async (name, pass) => {
    password = await pool.query(`SELECT users.password FROM users WHERE users.username = '${name}'`).then(res => { return res.rows; });

    if(password[0] != undefined){
        return pass == password[0].password;
    } else {
        return false;
    }
}

module.exports = {
    getAll,
    authenticateUser,
};
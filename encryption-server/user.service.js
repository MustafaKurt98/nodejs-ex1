require('dotenv').config();

const { AUTH_NAME } = process.env;
const { AUTH_PASS } = process.env;
const users = [{ id: 1, username: AUTH_NAME, password: AUTH_PASS }];

module.exports = { authenticate };

async function authenticate({ username, password }) {
    console.log(username, password);
    console.log(users);
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }

}
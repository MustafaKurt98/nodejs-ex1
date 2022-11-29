const AdminModel = require('../../models/admin/admin');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });

    } else {


    }
    return res.status(200).json({ msg: 'Successfully!' });
}

module.exports = { signup };


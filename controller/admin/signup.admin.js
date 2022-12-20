const AdminModel = require('../../models/admin/admin-model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { SECRET_KEY } = process.env;

const signup = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        console.log(email, password)
        return res.status(400).json({ msg: 'Tüm alanları giriniz' });
    } else {
        let resultAcc = await AdminModel.findOne({ email: email });
        if (resultAcc) {
            console.log(email, password)
            res.status(400).json({ msg: 'Böyle bir hesap mevcut' });
        } else {
            const payload = { email, date: new Date() };
            const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
            bcrypt.hash(password, 10).then((hash) => {
                const admin = new AdminModel({
                    email,
                    password: hash,
                    token,
                });

                admin.save((err, data) => {
                    if (err) {
                        res.status(500).json({ msg: 'Kayıt başarısız' });
                    } else {
                        res.status(200).json({ msg: 'Kayıt başarılı', msg2: admin.password, msg3: admin.email });
                    }
                });
            });
        }
    }
};

module.exports = { signup };


const AdminModel = require('../../models/admin/admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { SECRET_KEY } = process.env;

const signup = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });

    } else {
        let resultAcc = await AdminModel.findOne({ email: email });
        if (resultAcc) {
            res.status(400).json({ msg: 'Account already exists' });
        } else {
            const payload = { email, date: new Date() };
            const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
            bcrypt.hash(password, 10, async (err, hash) => {
                if (err) {
                    console.log(err);
                } else {
                    const newAdmin = new AdminModel({
                        email,
                        password: hash,
                        token
                    });
                    await newAdmin.save((err, user) => {
                        if (err) {
                            res.status(500).send({
                                message: "Bir takım işler yanlış gitti!",
                            });
                        } else {
                            res.status(200).send({
                                response: "Kayıt başarılı.",
                            });
                        }
                    });

                }
            });
        }
    }

}

module.exports = { signup };


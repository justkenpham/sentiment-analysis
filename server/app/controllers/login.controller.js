const jwt = require('jsonwebtoken');
const db = require('../models/database');

const cookieOptions = {
    expiresIn: new Date(
        Date.now() + 86400
    )
}


exports.login = async (req, res) => {

    const { username, password } = await req.body;
    try {
        if (!username || !password) {
            return res.status(400).send({
                errorMessage: 'Please provide both your username and password'
            });
        }

        db.query("SELECT * FROM user WHERE username = ? AND password = ?", [username, password], async (error, results) => {

            if (error) {
                return res.send({
                    message: "Can not retriece the database"
                })
            }

            else {
                console.log(results)
                if (results.length === 0) {
                    res.send({
                        errorMessage: 'Username or password is incorrect'

                    })

                } else {
                    const id = results[0].id;
                    const token = jwt.sign({ id: id }, 'SE2021Project', {
                        expiresIn: '1d'
                    });
                    console.log("The token is: " + token);
                    res.cookie('jwt', token, cookieOptions);
                    res.cookie('username', username, cookieOptions);
                    res.cookie('password', password, cookieOptions);
                    res.send({
                        message: "Login successfully",
                        token: token,
                        userInfo: results[0]
                    })

                }
            }

        });
    } catch (error) {
        console.log(error)
        res.send({

            errorMessage: 'Username or password is incorrect'
        });
    }
}
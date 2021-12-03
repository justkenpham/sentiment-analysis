const jwt = require('jsonwebtoken');
const db = require('../models/database');

const cookieOptions = {
    expiresIn: new Date(
        Date.now() + 86400
    )
}

exports.login  = async (req, res) => {
    const { username, password } = await req.body;
    try {
        if (!username || !password) {
            return res.status(400).send({
                errorMessage: 'Please provide both your username and password'
            });
        }

        db.query("SELECT * FROM user WHERE username = ? AND password = ?", [username, password], async (error, results) => {
            if(error){}
            console.log(results)
            if (!results) {
                res.status(401).send({
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
                    message: "Login successfully"
                })
                res.status(200).redirect('/');
            }
        });
    } catch (error) {
        console.log(error)
        res.status(401).send({
            errorMessage: 'Username or password is incorrect'});
    }
}
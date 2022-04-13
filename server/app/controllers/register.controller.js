const db = require('../models/database');

exports.register =  (req, res) => {
    console.log(req.body);
    const {username, password, password_confirm } = req.body;

    // Check for existing account in ACCOUNT table
    db.query("SELECT username FROM user WHERE username = ?", [username], (error, results) => {
        var resultArray = Object.values(JSON.parse(JSON.stringify(results)));
        if (error) {
            console.log(error);
        } else if (resultArray.length > 0) {
            return res.send({
                errorMessage: "That username is already registered!"
            });
        } else if (password != password_confirm) {
            return res.send({
                errorMessage: "Passwords do not match!"
            });
        }
    });

    // Save user
    let insert_data = [username, password];
    console.log(insert_data);

        //query
    let query = "INSERT INTO user (`username`, `password`) VALUES (?,?)"

//    db.query('INSERT INTO user SET ?', 
 //       {username: username, password: password }, (error) => {
    db.query(query, insert_data, (error, result) => {
        if(error){
            return res.status(500).send({
                message: "Unsuccessfully post user into database"
            });
        }
        else{
            return res.status(200).send({
                message: "Successfully post user into database"
            });
        }
    })
};            

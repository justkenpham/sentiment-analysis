const db = require('../models/database')
const sqlQuery = require('../models/mysqlQuery')
//GET
module.exports.getReview = async (req, res) => {
    console.log("request params  ", req.param)
    let productId = req.params.product_id
    let query = `SELECT * FROM review WHERE product_id = ${productId}`
    db.query(query, async (err, result) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        }
        else {
            return res.send(result)
        }
    })
}

exports.postReview = async (req, res) => {
    console.log("request body", req.body)
    //Parse data into string 
    // let review_text = JSON.stringify(req.body.review_text)
    // let review_time = JSON.stringify(req.body.review_time)
    // let overall = JSON.stringify(req.body.overall)
    // let user_id = JSON.stringify(req.body.user_id)
    // let product_id = JSON.stringify(req.body.product_id)

    const { review_text, review_time, overall, user_id, product_id } = req.body
    let insert_data = [review_text, review_time, overall, user_id, product_id]
    console.log(insert_data)
    //Query
    let query = "INSERT INTO review (`review_text`,`review_time`,`overall`, `user_id`,`product_id`) VALUES (?)"
    db.query(query, req.body, (error, result) => {
        if (error) {
            return res.status(500).json({
                message: "Unsuccesfully post review to database",
                error: error
            })
        }
        else {
            res.status(200).send({
                message: "Successfully post review to database"
            })
        }
    })
}
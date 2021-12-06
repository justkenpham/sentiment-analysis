const db = require('../models/database')
const sentiAna = require("./sentiAna.controller")
//GET
module.exports.getReview = async (req, res) => {
    console.log("request params  ", req.param)
    let productId = req.params.product_id
    let query = `select a.username, b.review_text, b.review_time, b.overall, b.product_id from user as a, review as b where b.user_id = a.user_id and b.product_id = ${productId}`
    db.query(query, async (err, result) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving reviews."
            });
        }
        else {
            return res.send(result)
        }
    })
}

exports.postReview = async (req, res) => {
    console.log("request body", req.body)
    const { review_text, review_time, user_id, product_id } = req.body
    let overall
    if(user_id == 1){
        overall = null;
    }
    else overall = sentiAna.calculateOverall(review_text);
    let insert_data = [review_text, review_time, overall, user_id, product_id]
    console.log(insert_data)
    //Query
    let query = "INSERT INTO review (`review_text`,`review_time`,`overall`, `user_id`,`product_id`) VALUES (?,?,?,?,?)"
    db.query(query, insert_data, (error, result) => {
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


    //Save updated rating to database
    sentiAna.takeRating(product_id)
        .then((num_reviews) => {
            return new Promise((resolve, reject) => {
                db.query(`SELECT rating AS rating_score FROM product WHERE product_id = ?`, [product_id], async (err, result) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        let rating_score = result[0].rating_score;
                        let difference = overall - rating_score;
                        rating_score = rating_score + difference / num_reviews;
                        console.log(rating_score);
                        resolve(rating_score);
                    }
                })
            })
        })
        .then((data) => {
            db.query(`UPDATE product SET rating = ? WHERE product_id = ?`, [data, product_id], (err, result) => {
                if (err) {
                    console.log("Can not update to the database");
                }
            })
        })
        .catch((err) => {
            console.log(err)
        })
}
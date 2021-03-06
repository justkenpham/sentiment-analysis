const db = require('../models/database')
//GET
module.exports.searchProduct = async (req, res) => {
    console.log("request queries  ", req.query)
    let productName = " '%" + req.query.product_name + "%' "
    let query = `SELECT distinct * FROM product WHERE product_name LIKE  ${productName} UNION SELECT DISTINCT * FROM product WHERE description LIKE  ${productName} `
    db.query(query, async (err, result) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving products."
            });
        }
        else {
            return res.send(result)
        }
    })
}

module.exports.getProductDetail = async (req, res) => {
    console.log("request params  ", req.param)
    let productId = req.params.product_id
    let query = `SELECT * FROM product WHERE product_id = ${productId}`
    db.query(query, async (err, result) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving product details."
            });
        }
        else {
            return res.send(result)
        }
    })
}

module.exports.getAllProduct = async (req, res) => {

    let query = `SELECT * FROM product`
    db.query(query, async (err, result) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving all products."
            });
        }
        else {
            return res.send(result)
        }
    })
}
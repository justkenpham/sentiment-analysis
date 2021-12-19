const db = require('../models/database')
//GET
module.exports.searchProduct = async (req, res) => {
    console.log("request queries  ", req.query)
    let productName = " '%" + req.query.product_name + "%' "
    let query = `SELECT distinct * FROM product WHERE product_name LIKE  ${productName} UNION SELECT DISTINCT * FROM product WHERE description LIKE  ${productName} union select distinct d.product_id, product_name, description, price, image, rating, d.category_id from product d, category c where c.category_id = d.category_id and c.category_name like ${productName} union select * from product where match(product_name,description) against( ${productName} IN NATURAL LANGUAGE MODE) `
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
    let query = `SELECT a.*, b.category_name, c.numReviews
    FROM product as a, category as b, (select count(*) as numReviews from review where product_id = ${productId}) as c
    WHERE a.product_id = ${productId} and a.category_id = b.category_id`
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
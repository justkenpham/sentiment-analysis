
module.exports = (sequelize, Datatypes) => {
    const product = sequelize.define("product", {
        product_id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        product_name: {
            type: Datatypes.STRING(100),
            allowNull: false
        },
        description: {
            type: Datatypes.STRING(320),
            allowNull: false,
            defaultValue: null
        },
        price: {
            type: Datatypes.INTEGER,
            defaultValue: null
        },
        image: {
            type: Datatypes.STRING(100),
            allowNull: false,
            defaultValue: null
        },
        rating: {
            type: Datatypes.INTEGER,
            defaultValue: null
        },
        category_id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            autoIncrement: false, // need checking 
            primaryKey: true
        }
    });

    return product;
}
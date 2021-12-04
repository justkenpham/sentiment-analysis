module.export = (sequelize, Datatype) =>{
    const Product = sequelize.define("product", {
        product_id: {
            type: Datatype.Integer,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        product_name: {
            type: Datatype.STRING(100),
            allowNull: false
        },
        description: {
            type: Datatype.STRING(320),
            allowNull: false,
            defaultValue: NULL
        },
        price: {
            type: Datatype.Integer,
            defaultValue: NULL
        },
        image: {
            type: Datatype.STRING(100),
            allowNull: false,
            defaultValue: NULL
        },
        rating: {
            type: Datatype.Integer,
            defaultValue: NULL
        },
        category_id: {
            type: Datatype.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        }
    });

    return Product;
}
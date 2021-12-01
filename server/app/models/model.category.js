module.exports = (sequelize, Datatype) => {
    const Category = sequelize.define("category", {
        category_id: {
            type: Datatype.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        category_name: {
            type: Datatype.STRING,
            allowNull: false
        }
    });

    return Category;
};
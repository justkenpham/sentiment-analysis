module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("categories", {
        category_id: {
            type: Sequelize.INTEGER
        },
        category_name: {
            type: Sequelize.STRING
        }
    });

    return Category;
};
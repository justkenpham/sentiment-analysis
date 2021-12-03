module.exports = (sequelize, Datatypes) => {
    const category = sequelize.define("categoryyyyy", {
        category_id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        category_name: {
            type: Datatypes.STRING,
            allowNull: false
        }
    });

    return category;
};
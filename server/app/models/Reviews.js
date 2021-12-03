module.exports = (sequelize, Datatypes) => {
    const review = sequelize.define("review", {
        review_id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            autoIncrement: true
        },
        review_text: {
            type: Datatypes.STRING(3200),
            allowNull: false,
        },
        review_time: {
            type: Datatypes.DATE,
            allowNull: false
        },
        overall: {
            type: Datatypes.FLOAT,
            allowNull: false
        },
        tempOvr: {
            type: Datatypes.FLOAT,
            allowNull: false
        },
        user_id: {
            type: Datatypes.INTEGER,
            allowNull: false,
        },
        product_id: {
            type: Datatypes.INTEGER,
            allowNull: false
        }
    });

    return review;
};
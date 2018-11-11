module.exports = function(Sequelize, sequelize) {
    return sequelize.define('userCollectionItem', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        amount: {
            type: Sequelize.INTEGER,
            default: 1,
        },
    }, {
        schema: 'exchange',
        classMethods: {},
        instanceMethods: {}
    });
};

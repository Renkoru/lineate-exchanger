module.exports = function(Sequelize, sequelize) {
    return sequelize.define('collectionItem', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        imageUrl: Sequelize.STRING,
    }, {
        schema: 'exchange',
        classMethods: {},
        instanceMethods: {}
    });
};

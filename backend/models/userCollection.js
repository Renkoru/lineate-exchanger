module.exports = function(Sequelize, sequelize) {
    return sequelize.define('userCollection', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
    }, {
        schema: 'exchange',
        classMethods: {},
        instanceMethods: {}
    });
}

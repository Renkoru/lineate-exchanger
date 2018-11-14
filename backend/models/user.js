export default function(Sequelize, sequelize) {
    return sequelize.define('user', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: Sequelize.STRING,
        email: {
            type: Sequelize.STRING,
        },
        hashedPassword: Sequelize.STRING,
        googleId: {
            type: Sequelize.STRING,
        },
        imageUrl: Sequelize.STRING,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
    }, {
        schema: 'exchange',
        classMethods: {},
        instanceMethods: {}
    });
};

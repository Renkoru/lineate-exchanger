const Sequelize = require('sequelize');

const User = require('../models/user');

// const databaseURL = process.env.DATABASE_URL
//     || 'postgres://czyyluow:DktaL7ow7p36cKK_muCkrRBQjnwC-njl@manny.db.elephantsql.com:5432/czyyluow';

const databaseURL = process.env.DATABASE_URL;


const sequelize = new Sequelize(databaseURL, {
    ssl: true,
    operatorsAliases: Sequelize.Op, // https://github.com/sequelize/sequelize/issues/8417
});

const models = {
    User: User(Sequelize, sequelize),
};



const initDB = async () => {
    await sequelize.authenticate();
    console.log('Database connection established');
    await sequelize.createSchema('exchange');

    // Object.keys(models).map(async (model) => await models[model].sync({ force: true }));
    Object.keys(models).map(async (model) => await models[model].sync());
    console.log('Database init Finish');
};


module.exports = {
    initDB,
    models,
};

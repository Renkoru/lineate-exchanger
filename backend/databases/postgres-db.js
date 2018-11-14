const Sequelize = require('sequelize');

const User = require('../models/user');
const Collection = require('../models/collection');
const UserCollection = require('../models/userCollection');
const CollectionItem = require('../models/collectionItem');
const UserCollectionItem = require('../models/userCollectionItem');

// const databaseURL = process.env.DATABASE_URL
//     || 'postgres://czyyluow:DktaL7ow7p36cKK_muCkrRBQjnwC-njl@manny.db.elephantsql.com:5432/czyyluow';

const databaseURL = process.env.DATABASE_URL;


const sequelize = new Sequelize(databaseURL, {
    operatorsAliases: Sequelize.Op, // https://github.com/sequelize/sequelize/issues/8417
    dialect: 'postgres',
    dialectOptions: {
        ssl: true
    }
});

const models = {
    User: User(Sequelize, sequelize),
    Collection: Collection(Sequelize, sequelize),
    UserCollection: UserCollection(Sequelize, sequelize),
    CollectionItem: CollectionItem(Sequelize, sequelize),
    UserCollectionItem: UserCollectionItem(Sequelize, sequelize),
};



const initDB = async () => {
    console.log('Initializing Database ...');
    await sequelize.authenticate();
    console.log('Database connection established');
    await sequelize.createSchema('exchange');

    // Object.keys(models).map(async (model) => await models[model].sync({ force: true }));
    // Object.keys(models).map(async (model) => await models[model].sync());

    // Relations
    const {
        User,
        Collection,
        UserCollection,
        CollectionItem,
        UserCollectionItem,
    } = models;

    User.belongsToMany(Collection, { through: UserCollection });
    Collection.belongsToMany(User, { through: UserCollection });

    CollectionItem.belongsTo(Collection);
    CollectionItem.belongsToMany(User, { through: UserCollectionItem });

    // Sync all models that aren't already in the database
    // sequelize.sync();
    // sequelize.sync({ force: true });

    console.log('Database init Finish');
};


module.exports = {
    initDB,
    models,
};

require('dotenv/config');


module.exports = {
    development: {
        url: 'postgres://lijcuyhyqcadta:0ee6da5a063960f4f5c26abf0ef4471d41e7e8fe85287c59cb4459a0863a4641@ec2-54-246-84-200.eu-west-1.compute.amazonaws.com:5432/da9nhf9g53u296',
        dialect: 'postgres',
        dialectOptions: {
            ssl: true
        },
        seederStorage: "json",
    },
    test: {
        username: process.env.CI_DB_USERNAME,
        password: process.env.CI_DB_PASSWORD,
        database: process.env.CI_DB_NAME,
        host: '127.0.0.1',
        dialect: 'mysql'
    },
    production: {
        username: process.env.PROD_DB_USERNAME,
        password: process.env.PROD_DB_PASSWORD,
        database: process.env.PROD_DB_NAME,
        host: process.env.PROD_DB_HOSTNAME,
        dialect: 'mysql'
    },
};


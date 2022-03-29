const { Sequelize } = require('@sequelize/core');

const FTFStringModel = require("../models/FTFString");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './test.db'
});

// sequelize.sync({ force: true })

const FTFString = FTFStringModel(sequelize, Sequelize);

module.exports = { FTFString };

const { FTFString } = require("../config/sequelize");

const createFTFString = async (payload) => {
    console.log()
    try {
        await FTFString.create({ftfstr: payload});
    } catch(e) {
        console.log(e);
    }
}

module.exports = createFTFString;
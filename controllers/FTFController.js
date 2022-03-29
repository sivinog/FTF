const createFTFString =  require("../services/createFTFString");
const rot13 = require("../utils/rot13");

const handleFTFString = (async (req, res) => {
    try {
        await createFTFString(req.body.ftfstr);
        res.status(200).send(rot13(req.body.ftfstr));
    } catch(e) {
        console.log(e);
    }
});

module.exports = handleFTFString;
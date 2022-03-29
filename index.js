const express = require("express");
const bodyParser = require('body-parser');
const FTFStringRoutes = require('./routes/FTFString');
const { validationRules, validate } = require('./middleware/validator')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
const port = process.env.PORT || "8000";

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});

app.use("/", validationRules(), validate, FTFStringRoutes);


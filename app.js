const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const _ = require('lodash');
var app = express();

var port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    var responseObject = {
        status: true,
        data: { text: "hello" }
    }
    res.json(responseObject);
});

app.listen(port, () => {
    console.log("application is listening on:", port);
});
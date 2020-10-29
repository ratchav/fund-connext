var express = require("express");
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

app.post('/api/passthrough/customers/v2', (req, res) => {
    res.json(Object.assign({
        referenceNo: 'MOCK FROM NODEJS'
    }, req.body));
})

app.post('/api/passthrough/uploadAttachment', (req, res) => {
    res.json(Object.assign({
        referenceNo: 'Upload Attachment'
    }, req.body));
})
var express = require("express");
var app = express();
app.use(express.json())
var port = process.env.PORT || 5000;

app.get("/", (req, res) => {

    var responseObject = {
        status: true,
        data: { text: "hello 9:45 auto deploy" }
    }
    res.json(responseObject);
});

app.listen(port, () => {
    console.log("application is listening on:", port);
});

app.post('/api/auth', (req, res) => {
    res.json(Object.assign({
        "username": "API_PHATRA01",
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAxMTUsInVzZXJuYW1lIjoiQVBJX1BIQVRSQTAxIiwic2VsbGluZ0FnZW50SWQiOjE1Niwic2VsbGluZ0FnZW50Q29kZSI6IktLUFMiLCJpc1Bhc3N0aHJvdWdoIjp0cnVlLCJyb2xlcyI6WzEsMiwzLDQsNSw2LDcsOCw5LDEwLDExLDEyLDEzLDE0LDE1LDE2LDE3LDE4LDE5LDIwLDIxLDIyLDIzLDI0LDI1LDI2LDI3LDI4LDI5LDMwLDMxXSwiaWF0IjoxNjA4NjIxNDI2LCJleHAiOjE2NDAxNTE5MTF9.hQ1s78hP1gth_Xz5gVIfaUctPXHfP9F6rGXrLT85b_I",
        "saCode": "KKPS",
        "isPassthrough": true
    }));
});

app.post('/api/passthrough/customers/v2', (req, res) => {
    var body = req.body;
    console.log(body);
    // console.log(++connection_count);

    if (body.status === 400 || Number(body.branchNo) % 2 === 0) {
        res.status(400).json({
            errMsg: {
                code: 'E400',
                message: 'Error From NodeJs'
            }
        });
        return;
    }


    if (body.branchNo.toString().includes("3")) {
        
    }
    if (body.branchNo.toString().includes("5")) {
        res.status(503).json({ error: { msg: 'error' } });

        // res.render('error', { error: 'err' })
    } else {
        res.json(Object.assign({
            referenceNo: 'MOCK FROM NODEJS'
        }, req.body));

    }

})

app.post('/api/passthrough/uploadAttachment', (req, res) => {
    res.json(Object.assign({
        referenceNo: 'Upload Attachment'
    }, req.body));
})

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const _ = require('lodash');
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use(fileUpload({
    createParentPath: true
}));

app.use(morgan('dev'));


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/books', (req, res) => {
    // books.push(req.body)
    console.log(req.body);
    res.status(201).json(req.body)
})

app.post('/api/passthrough/customers/v2', (req, res) => {
    // books.push(req.body)
    // res.status(200).json(req.body)
    res.json(Object.assign({
        referenceNo: 'MOCK FROM NODEJS'
    }, req.body));
})

app.post('/api/customer/joint', (req, res) => {
    // books.push(req.body)
    res.status(200).json(req.body)
})
app.post('/api/customer/joint/account', (req, res) => {
    // books.push(req.body)
    res.status(200).json(req.body)
})

app.post('/api/passthrough/uploadAttachment', (req, res) => {
    try {
        // console.log(req.files);
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "sampleFile") to retrieve the uploaded file

            let sampleFile = req.files['file'];

            sampleFile.mv('./uploads/' + sampleFile.name);
            console.log(req.body)
            //Use the mv() method to place the file in upload directory (i.e. "uploads")


            // //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: sampleFile.name,
                    mimetype: sampleFile.mimetype,
                    size: sampleFile.size
                }
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
})

app.listen(3000, () => {
    console.log('Start server at port 3000.')
})


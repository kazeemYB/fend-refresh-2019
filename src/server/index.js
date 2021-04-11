const dotenv = require('dotenv');
dotenv.config();

// end point
projectData = {};

const fetch = require('node-fetch');
const formData = require('form-data');

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

// Varialbes storing API call data
let baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const json = '&of=json&txt=';
const apiKey = process.env.API_KEY
const end = '&model=General&lang=en';

// Start instance of an app using express
const app = express();
app.use(express.static('dist'));

// require cors dependencies
const cors = require('cors');
app.use(cors());

// require body-parser dependencies
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

//POST request
app.post("/addData", async(req, res)=>{
    const getSentiment = await fetch(`${baseURL}${apiKey}&lang=auto&url=${req.body.formText}`,{
        method: 'POST'
    });
    try{
        const data = await getSentiment.json();
        console.log(getSentiment, data)
        res.send(data);
    }catch(error){
        console.log("error", error);
}

});

// API Key
console.log(`Your API Key is ${process.env.API_KEY}`);
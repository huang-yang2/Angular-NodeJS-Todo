

let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');


mongoose.connect('mongodb://localhost:27017/todo',{});
mongoose.Promise = global.Promise;

//adding body parser for handling request and response objects
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


//enabling CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});

const initApp = require('./app/app');
initApp(app);

app.listen(port);
console.log("Todo REATful API server started on: " + port);

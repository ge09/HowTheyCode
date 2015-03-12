var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var compress = require('compression');
var cors = require('cors');

var port = process.env.PORT || 3000;

var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(compress());
app.use(cors());


var router = express.Router();
app.get('/', function(req, res) {
            res.send("hello");
        });



app.listen(port, function() {
  console.log("HowTheyCode server running on http://localhost:3000");
});
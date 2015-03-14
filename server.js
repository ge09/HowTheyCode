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

mongoose.connect('mongodb://localhost/howtc', function(err, res) {
    if(err) throw err;
    console.log('Connected to HowTheyCode Database');
});

var events = require('./models/Company')(app, mongoose);

var CompanyCtrl = require('./controllers/CompanyCtrl');

var router = express.Router();
app.use(router);

// CORS header securiy
router.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-type, Accept, Authorization");
    next();
});

app.use(express.static(__dirname + '/client'));
app.get('/', function(req, res) {
    	res.sendFile('./client/index.html', {"root": __dirname});
    });

router.get('/api/companies', CompanyCtrl.findCompanies);
router.get('/api/companies/search/:searchText', CompanyCtrl.findCompaniesByName);
router.post('/api/companies', CompanyCtrl.addCompany);
router.put('/api/companies/:id', CompanyCtrl.updateCompany);
router.get('/api/companies/:id', CompanyCtrl.findCompanyById);
router.delete('/api/companies/:id', CompanyCtrl.deleteCompany);


app.listen(port, function() {
  console.log("HowTheyCode server running on http://localhost:" + port);
	});
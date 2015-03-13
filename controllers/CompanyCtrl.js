var mongoose = require('mongoose');
var Company  = mongoose.model('Company');


//GET - Return all evets in the DB
exports.findCompanies = function(req, res) {
    Company.find(function(err, companies) {
        if(err) res.send(500, err.message);

        console.log('GET /companies')
        res.status(200).jsonp(companies);
    });
};

exports.addCompany= function(req, res) {
    console.log('POST');
    

    var company = new Company({
        name: 	req.body.name
    });

    company.save(function(err, company) {
        if(err) return res.send(500, err.message);
        res.status(200).jsonp(company);
    });
};
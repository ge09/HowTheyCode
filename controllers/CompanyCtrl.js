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
        name: req.body.name,
        locationText: req.body.locationText,
        locationData: req.body.locationData,
    });

    company.save(function(err, company) {
        if(err) return res.send(500, err.message);
        res.status(200).jsonp(company);
    });
};

exports.findCompanyById = function(req, res) {
    Company.findById(req.params.id, function(err, company) {
        if(err) return res.send(500, err.message);

        console.log('GET /companies/' + req.params.id);
        res.status(200).jsonp(company);
    });
};

exports.updateCompany = function(req, res) {
	console.log('PUT');
	Company.findById(req.params.id, function(err, company) {
		company.name = req.body.name;

		company.save(function(err) {
			if(err) return res.send(500, err.message);
			res.status(200).jsonp(company);
		});
	});
};

exports.deleteCompany = function(req, res) {
	console.log('DELETE');

	Company.findById(req.params.id, function(err, company) {
		company.remove(function(err) {
			if(err) return res.send(500, err.message);
			res.status(200);
		});
	});
};
var mongoose = require('mongoose');
var Company  = mongoose.model('Company');


exports.findCompanies = function(req, res) {
    Company.find(function(err, companies) {
        if(err) res.send(500, err.message);

        companies = getMultipleCompaniesWithScores(companies);
        companies = sortCompanies(companies);
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
    console.log('GET');

    Company.findById(req.params.id, function(err, company) {
        if(err) return res.send(500, err.message);

        company.companyScore = getCompanyScore(company.surveys);

        console.log('GET /companies/' + req.params.id);
        res.status(200).jsonp(company);
    });
};

exports.findCompaniesByName = function(req, res) {
    console.log('GET');
    var text = req.params.searchText;
    Company.find({name: new RegExp(text,'i')}, function(err, companies) {
        if(err) return res.send(500, err.message);

        companies = getMultipleCompaniesWithScores(companies);
        companies = sortCompanies(companies);

        console.log('GET /companies/search/' + req.params.searchText);
        res.status(200).jsonp(companies);
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

exports.addSurveyToCompany = function(req, res) {
    console.log('PUT');

    Company.findById(req.params.id, function(err, company) {
        if (!req.body.date) req.body.date = new Date();
        var survey = {
            answers: req.body.answers,
            score: getSurveyScore(req.body.answers),
            date: req.body.date
        };
        company.surveys.push(survey);

        company.save(function(err) {
            if(err) return res.send(500, err.message);
            res.status(200).jsonp(company);
        });
    });
};


// PRIVATE

var getSurveyScore = function(answers) {
    var result = 0;
    for(var i = 0; i < answers.length; i++) {
        if (answers[i]) result++;
    }
    return result;
};

var getCompanyScore = function(surveys) {
var finalScore = 0.0;

var currentDate = new Date();
var baseDate = new Date("January 1, 2000 00:00:00");
var baseDateValue = 0.8;

    for(var i = 0; i < surveys.length; i++) {
        var timeSinceBaseDate = surveys[i].date - baseDate;
        var currentSurveyActualScore = surveys[i].score * (baseDateValue + (timeSinceBaseDate * ((1 - baseDateValue) / (currentDate - baseDate))));
        finalScore += currentSurveyActualScore;
    }
    return finalScore / surveys.length;
};

var getMultipleCompaniesWithScores = function(companies) {
    for (var i = 0; i < companies.length; i++) {
        console.log(getCompanyScore(companies[i].surveys));
        companies[i].companyScore = getCompanyScore(companies[i].surveys);
    }
    return companies;
};

var sortCompanies = function(companies) {
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < companies.length-1; i++) {
            if (companies[i].companyScore < companies[i+1].companyScore) {
                var temp = companies[i];
                companies[i] = companies[i+1];
                companies[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return companies;
};


var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var surveySchema = new Schema({
  	date: 		{ type: Date },
  	answers: 	[{ type: Boolean}]
});

module.exports = mongoose.model('Survey', surveySchema);
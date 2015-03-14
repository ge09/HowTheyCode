var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var companySchema = new Schema({
  	name:    		{ type: String },
  	locationText: 	{ type: String},
  	locationData: 	{ type:
  		{
	  		lat: Number,
	  		lon: Number
	  	}
  	},
  	surveys: 		[
  		{
		  	date: 		{ type: Date },
		  	answers: 	[{ type: Boolean}],
		  	value: 		{ type: Number}
		}
  	]
});

module.exports = mongoose.model('Company', companySchema);

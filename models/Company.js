var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var companySchema = new Schema({
  	name:    		{ type: String },
  	locationText: 	{ type: String},
  	locationData: 	{ type: {
  		k: Number,
  		d: Number
  	}},
  	surveys: 		[{ type: Schema.Types.ObjectId, ref: 'Survey' }]
});

module.exports = mongoose.model('Company', companySchema);